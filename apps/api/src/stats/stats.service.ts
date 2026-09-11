import { Injectable, Logger } from '@nestjs/common';
import type { Prisma, TimeWindow } from '@prisma/client';
import {
  DEFAULT_MODEL_CONFIG,
  scoreItem,
  type RankingModelConfig,
  type VoteAggregate,
} from '@rankly/shared';
import { PrismaService } from '../prisma/prisma.service';
import { ALL_WINDOWS, windowStart } from './time-window';

@Injectable()
export class StatsService {
  private readonly logger = new Logger(StatsService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Recompute cached stats for every window of one ranking item, then roll the
   * ranking-level denormalised counters. Called synchronously after each vote
   * so reads are always consistent. For very hot items this would move to a
   * queue in a later milestone.
   */
  async recomputeItem(rankingItemId: string): Promise<void> {
    const item = await this.prisma.rankingItem.findUnique({
      where: { id: rankingItemId },
      select: { id: true, rankingId: true, ranking: { select: { category: true } } },
    });
    if (!item) return;

    const modelConfig = this.modelConfigFor(item.ranking.category);
    const now = new Date();

    for (const window of ALL_WINDOWS) {
      const agg = await this.aggregate(rankingItemId, window, now);
      const score = scoreItem(agg, modelConfig);

      await this.prisma.rankingItemStat.upsert({
        where: { rankingItemId_window: { rankingItemId, window } },
        create: {
          rankingItemId,
          window,
          up: agg.rawUp,
          down: agg.rawDown,
          weightedUp: agg.weightedUp,
          weightedDown: agg.weightedDown,
          distinctVoters: agg.distinctVoters,
          suspicionRatio: agg.suspicionRatio,
          paidSupportUnits: agg.paidSupportUnits,
          distinctSupporters: agg.distinctSupporters,
          communityScore: score.communityScore,
          support: score.support,
          rankScore: score.rankScore,
          certainty: score.certainty,
          lastVoteAt: agg.lastVoteAt ? new Date(agg.lastVoteAt) : null,
          computedAt: now,
        },
        update: {
          up: agg.rawUp,
          down: agg.rawDown,
          weightedUp: agg.weightedUp,
          weightedDown: agg.weightedDown,
          distinctVoters: agg.distinctVoters,
          suspicionRatio: agg.suspicionRatio,
          paidSupportUnits: agg.paidSupportUnits,
          distinctSupporters: agg.distinctSupporters,
          communityScore: score.communityScore,
          support: score.support,
          rankScore: score.rankScore,
          certainty: score.certainty,
          lastVoteAt: agg.lastVoteAt ? new Date(agg.lastVoteAt) : null,
          computedAt: now,
        },
      });
    }

    await this.rollRankingCounters(item.rankingId);
  }

  /** Recompute every item of a ranking (used by seed + admin recompute). */
  async recomputeRanking(rankingId: string): Promise<void> {
    const items = await this.prisma.rankingItem.findMany({
      where: { rankingId },
      select: { id: true },
    });
    for (const it of items) {
      await this.recomputeItem(it.id);
    }
  }

  private async aggregate(
    rankingItemId: string,
    window: TimeWindow,
    now: Date,
  ): Promise<VoteAggregate> {
    const start = windowStart(window, now);
    const where: Prisma.VoteWhereInput = {
      rankingItemId,
      deletedAt: null,
      ...(start ? { updatedAt: { gte: start } } : {}),
    };

    const [byValue, last] = await Promise.all([
      this.prisma.vote.groupBy({
        by: ['value'],
        where,
        _count: { _all: true },
        _sum: { weight: true },
        _avg: { suspicion: true },
      }),
      this.prisma.vote.findFirst({
        where,
        orderBy: { updatedAt: 'desc' },
        select: { updatedAt: true },
      }),
    ]);

    const firstRow = await this.prisma.vote.findFirst({
      where,
      orderBy: { updatedAt: 'asc' },
      select: { updatedAt: true },
    });

    const boostWhere: Prisma.BoostWhereInput = {
      rankingItemId,
      ...(start ? { createdAt: { gte: start } } : {}),
    };
    const [boostSum, boostSupporters] = await Promise.all([
      this.prisma.boost.aggregate({ where: boostWhere, _sum: { points: true } }),
      this.prisma.boost.findMany({
        where: boostWhere,
        distinct: ['boosterId'],
        select: { boosterId: true },
      }),
    ]);

    const up = byValue.find((r) => r.value === 'UP');
    const down = byValue.find((r) => r.value === 'DOWN');

    const rawUp = up?._count._all ?? 0;
    const rawDown = down?._count._all ?? 0;
    const total = rawUp + rawDown;
    const suspicionRatio =
      total === 0
        ? 0
        : ((up?._avg.suspicion ?? 0) * rawUp + (down?._avg.suspicion ?? 0) * rawDown) /
          total;

    return {
      rawUp,
      rawDown,
      weightedUp: up?._sum.weight ?? 0,
      weightedDown: down?._sum.weight ?? 0,
      distinctVoters: total, // one vote per user per item
      paidSupportUnits: boostSum._sum.points ?? 0,
      distinctSupporters: boostSupporters.length,
      suspicionRatio,
      lastVoteAt: last?.updatedAt.getTime() ?? null,
      firstVoteAt: firstRow?.updatedAt.getTime() ?? null,
    };
  }

  private async rollRankingCounters(rankingId: string): Promise<void> {
    const agg = await this.prisma.vote.aggregate({
      where: { rankingId, deletedAt: null },
      _count: { _all: true },
    });
    const distinct = await this.prisma.vote.findMany({
      where: { rankingId, deletedAt: null },
      distinct: ['userId'],
      select: { userId: true },
    });
    const last = await this.prisma.vote.findFirst({
      where: { rankingId, deletedAt: null },
      orderBy: { updatedAt: 'desc' },
      select: { updatedAt: true },
    });

    await this.prisma.ranking.update({
      where: { id: rankingId },
      data: {
        totalVotes: agg._count._all,
        distinctVoters: distinct.length,
        lastVoteAt: last?.updatedAt ?? null,
      },
    });
  }

  private modelConfigFor(category: {
    paidSupportEnabled: boolean;
  }): Partial<RankingModelConfig> {
    if (!category.paidSupportEnabled) {
      return { ...DEFAULT_MODEL_CONFIG, maxSupportInfluence: 0 };
    }
    return DEFAULT_MODEL_CONFIG;
  }
}
