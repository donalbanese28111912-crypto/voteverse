import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { TimeWindow, VoteValue } from '@prisma/client';
import { voteWeight, type CastVoteInput, type VoteResult } from '@voteverse/shared';
import type { AppConfig } from '../config/configuration';
import { PrismaService } from '../prisma/prisma.service';
import { StatsService } from '../stats/stats.service';

@Injectable()
export class VotesService {
  private readonly cfg: AppConfig;

  constructor(
    private readonly prisma: PrismaService,
    private readonly stats: StatsService,
    config: ConfigService<{ app: AppConfig }, true>,
  ) {
    this.cfg = config.get('app', { infer: true });
  }

  async cast(
    userId: string,
    input: CastVoteInput,
    ctx: { ip?: string; userAgent?: string },
    window: TimeWindow = 'ALL_TIME',
  ): Promise<VoteResult> {
    const item = await this.prisma.rankingItem.findUnique({
      where: { id: input.rankingItemId },
      select: {
        id: true,
        rankingId: true,
        ranking: { select: { status: true, type: true } },
      },
    });
    if (!item) throw new NotFoundException('Ranking item not found');
    if (item.ranking.status !== 'PUBLISHED') {
      throw new ForbiddenException('This ranking is not open for voting');
    }

    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: {
        id: true,
        createdAt: true,
        lifetimeVotes: true,
        reputation: true,
        deviceTrust: true,
        emailVerified: true,
        bannedAt: true,
      },
    });
    if (user.bannedAt) throw new ForbiddenException('Account suspended');

    const since = new Date(Date.now() - 60_000);
    const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const [votesLastMinute, castToday] = await Promise.all([
      this.prisma.voteEvent.count({
        where: { userId, createdAt: { gte: since } },
      }),
      this.prisma.voteEvent.count({
        where: { userId, action: 'cast', createdAt: { gte: dayAgo } },
      }),
    ]);

    const existing = await this.prisma.vote.findUnique({
      where: { userId_rankingItemId: { userId, rankingItemId: item.id } },
    });
    const isNewCast = !existing || existing.deletedAt !== null;

    if (isNewCast && castToday >= this.cfg.voting.freeVotesPerDay) {
      throw new ForbiddenException(
        `Daily free vote limit reached (${this.cfg.voting.freeVotesPerDay}). Try again tomorrow.`,
      );
    }

    const accountAgeDays =
      (Date.now() - user.createdAt.getTime()) / (24 * 60 * 60 * 1000);
    const weight = voteWeight({
      accountAgeDays,
      lifetimeVotes: user.lifetimeVotes,
      reputation: user.reputation,
      deviceTrust: user.deviceTrust,
      votesLastMinute,
      emailVerified: user.emailVerified,
    });
    const suspicion = Math.max(0, Math.min(1, (votesLastMinute - 15) / 30));

    let action: 'cast' | 'change' | 'retract';
    let resultingValue: VoteValue | null;

    if (existing && existing.deletedAt === null && existing.value === input.value) {
      // clicking the same arrow again retracts the vote
      await this.prisma.vote.update({
        where: { id: existing.id },
        data: { deletedAt: new Date() },
      });
      action = 'retract';
      resultingValue = null;
    } else if (existing) {
      await this.prisma.vote.update({
        where: { id: existing.id },
        data: {
          value: input.value,
          weight,
          suspicion,
          deletedAt: null,
          ip: ctx.ip,
          userAgent: ctx.userAgent,
        },
      });
      action = existing.deletedAt ? 'cast' : 'change';
      resultingValue = input.value;
    } else {
      await this.prisma.vote.create({
        data: {
          userId,
          rankingItemId: item.id,
          rankingId: item.rankingId,
          value: input.value,
          weight,
          suspicion,
          ip: ctx.ip,
          userAgent: ctx.userAgent,
        },
      });
      action = 'cast';
      resultingValue = input.value;
    }

    await this.prisma.voteEvent.create({
      data: {
        userId,
        rankingItemId: item.id,
        rankingId: item.rankingId,
        action,
        value: resultingValue,
        weight,
        ip: ctx.ip,
        userAgent: ctx.userAgent,
      },
    });

    if (action === 'cast') {
      await this.prisma.user.update({
        where: { id: userId },
        data: { lifetimeVotes: { increment: 1 }, lastActiveAt: new Date() },
      });
    }

    // Battles/This-or-That are exclusive: picking a side retracts any
    // standing pick on the other side of the same ranking.
    if (item.ranking.type === 'BATTLE' && resultingValue === 'UP') {
      const siblings = await this.prisma.vote.findMany({
        where: {
          userId,
          rankingId: item.rankingId,
          rankingItemId: { not: item.id },
          deletedAt: null,
        },
        select: { id: true, rankingItemId: true },
      });
      for (const sibling of siblings) {
        await this.prisma.vote.update({
          where: { id: sibling.id },
          data: { deletedAt: new Date() },
        });
        await this.prisma.voteEvent.create({
          data: {
            userId,
            rankingItemId: sibling.rankingItemId,
            rankingId: item.rankingId,
            action: 'retract',
            value: null,
            weight,
          },
        });
        await this.stats.recomputeItem(sibling.rankingItemId);
      }
    }

    await this.stats.recomputeItem(item.id);

    return this.currentResult(item.id, userId, window);
  }

  async currentResult(
    rankingItemId: string,
    userId: string | null,
    window: TimeWindow,
  ): Promise<VoteResult> {
    const stat = await this.prisma.rankingItemStat.findUnique({
      where: { rankingItemId_window: { rankingItemId, window } },
    });
    const my = userId
      ? await this.prisma.vote.findFirst({
          where: { userId, rankingItemId, deletedAt: null },
          select: { value: true },
        })
      : null;

    const up = stat?.up ?? 0;
    const down = stat?.down ?? 0;
    const total = up + down;
    const community = stat?.communityScore ?? 0;

    return {
      rankingItemId,
      myVote: my?.value ?? null,
      up,
      down,
      totalVotes: total,
      communityScore: community,
      support: stat?.support ?? 0,
      upPercent: total === 0 ? 0 : Math.round(community * 100),
      window,
      updatedAt: (stat?.computedAt ?? new Date()).toISOString(),
    };
  }

  async myVotesForRanking(
    userId: string,
    rankingId: string,
  ): Promise<Record<string, VoteValue>> {
    const votes = await this.prisma.vote.findMany({
      where: { userId, rankingId, deletedAt: null },
      select: { rankingItemId: true, value: true },
    });
    return Object.fromEntries(votes.map((v) => [v.rankingItemId, v.value]));
  }
}
