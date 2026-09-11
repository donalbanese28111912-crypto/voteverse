import { Injectable, NotFoundException } from '@nestjs/common';
import type { TimeWindow } from '@prisma/client';
import type { BattleCardView, BattleSide, BattleView, Paginated } from '@voteverse/shared';
import { paginate, skipTake } from '../common/pagination';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BattlesService {
  constructor(private readonly prisma: PrismaService) {}

  async list(page: number, pageSize: number): Promise<Paginated<BattleCardView>> {
    const where = { status: 'PUBLISHED' as const, type: 'BATTLE' as const };
    const { skip, take } = skipTake(page, pageSize);
    const [rows, total] = await Promise.all([
      this.prisma.ranking.findMany({
        where,
        orderBy: { trendingScore: 'desc' },
        skip,
        take,
        include: {
          category: { select: { slug: true, name: true } },
          items: {
            orderBy: { position: 'asc' },
            include: { stats: { where: { window: 'ALL_TIME' } } },
          },
        },
      }),
      this.prisma.ranking.count({ where }),
    ]);

    const cards = rows
      .filter((r) => r.items.length === 2)
      .map((r) => {
        const [a, b] = r.items;
        const upA = a!.stats[0]?.up ?? 0;
        const upB = b!.stats[0]?.up ?? 0;
        const total2 = upA + upB;
        return {
          slug: r.slug,
          title: r.title,
          category: r.category,
          totalPicks: total2,
          aLabel: a!.label,
          bLabel: b!.label,
          aPercent: total2 === 0 ? 50 : Math.round((upA / total2) * 100),
        };
      });

    return paginate(cards, total, page, pageSize);
  }

  async detail(
    slug: string,
    window: TimeWindow,
    userId: string | null,
  ): Promise<BattleView> {
    const ranking = await this.prisma.ranking.findUnique({
      where: { slug },
      include: {
        category: { select: { slug: true, name: true } },
        items: {
          orderBy: { position: 'asc' },
          include: {
            entity: { select: { slug: true } },
            stats: { where: { window } },
          },
        },
      },
    });
    if (!ranking || ranking.type !== 'BATTLE' || ranking.items.length !== 2) {
      throw new NotFoundException('Battle not found');
    }

    const myVotes = userId
      ? await this.prisma.vote.findMany({
          where: { userId, rankingId: ranking.id, deletedAt: null },
          select: { rankingItemId: true },
        })
      : [];
    const mine = new Set(myVotes.map((v) => v.rankingItemId));

    const [rawA, rawB] = ranking.items;
    const toSide = (it: (typeof ranking.items)[number]): BattleSide => {
      const s = it.stats[0];
      return {
        rankingItemId: it.id,
        label: it.label,
        slug: it.entity?.slug ?? null,
        imageUrl: it.imageUrl,
        picks: s?.up ?? 0,
        support: s?.support ?? 0,
        myPick: mine.has(it.id),
      };
    };

    const a = toSide(rawA!);
    const b = toSide(rawB!);
    const total = a.picks + b.picks;

    return {
      id: ranking.id,
      slug: ranking.slug,
      title: ranking.title,
      description: ranking.description,
      category: ranking.category,
      window,
      totalPicks: total,
      updatedAt: ranking.updatedAt.toISOString(),
      a,
      b,
      aPercent: total === 0 ? 50 : Math.round((a.picks / total) * 100),
    };
  }

  /** "This or That" loop: a battle the user hasn't picked a side on yet. */
  async next(userId: string) {
    const votedRankingIds = (
      await this.prisma.vote.findMany({
        where: { userId, deletedAt: null, ranking: { type: 'BATTLE' } },
        select: { rankingId: true },
        distinct: ['rankingId'],
      })
    ).map((v) => v.rankingId);

    const candidates = await this.prisma.ranking.findMany({
      where: {
        status: 'PUBLISHED',
        type: 'BATTLE',
        id: { notIn: votedRankingIds.length ? votedRankingIds : ['x'] },
      },
      take: 25,
      orderBy: { trendingScore: 'desc' },
      select: { slug: true },
    });
    if (candidates.length === 0) return null;

    const pick = candidates[Math.floor(Math.random() * Math.min(10, candidates.length))]!;
    return this.detail(pick.slug, 'ALL_TIME', userId);
  }
}
