import { Injectable } from '@nestjs/common';
import type { Prisma } from '@prisma/client';
import type { RankingCard } from '@voteverse/shared';
import { BattlesService } from '../battles/battles.service';
import { PrismaService } from '../prisma/prisma.service';
import { TrendingService } from '../trending/trending.service';

const CARD_INCLUDE = {
  category: { select: { slug: true, name: true } },
  items: { include: { stats: { where: { window: 'ALL_TIME' as const } } } },
};

@Injectable()
export class FeedService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly trending: TrendingService,
    private readonly battles: BattlesService,
  ) {}

  async home(userId: string | null) {
    const [trending, popular, fresh, hero, battleCards] = await Promise.all([
      this.trending.top(8),
      this.cards({ orderBy: { totalVotes: 'desc' }, take: 8 }),
      this.cards({ orderBy: { createdAt: 'desc' }, take: 8 }),
      this.pickHero(userId),
      this.battles.list(1, 4).then((p) => p.data),
    ]);

    const forYou = userId
      ? await this.forYou(userId)
      : await this.cards({ orderBy: { trendingScore: 'desc' }, take: 8 });

    const sections = await Promise.all(
      ['ai', 'sports', 'crypto', 'entertainment'].map(async (slug) => ({
        slug,
        rankings: await this.cards({
          where: {
            status: 'PUBLISHED',
            OR: [
              { category: { slug } },
              { category: { parent: { slug } } },
            ],
          },
          orderBy: { trendingScore: 'desc' },
          take: 6,
        }),
      })),
    );

    return {
      hero,
      trending,
      forYou,
      popular,
      fresh,
      battles: battleCards,
      sections: sections.filter((s) => s.rankings.length > 0),
    };
  }

  private async pickHero(userId: string | null) {
    const votedItemIds = userId
      ? (
          await this.prisma.vote.findMany({
            where: { userId, deletedAt: null },
            select: { rankingItemId: true },
          })
        ).map((v) => v.rankingItemId)
      : [];

    const ranking = await this.prisma.ranking.findFirst({
      where: {
        status: 'PUBLISHED',
        type: 'BINARY',
        items: { some: { id: { notIn: votedItemIds.length ? votedItemIds : ['00000000-0000-0000-0000-000000000000'] } } },
      },
      orderBy: { trendingScore: 'desc' },
      include: {
        category: { select: { slug: true, name: true } },
        items: { include: { stats: { where: { window: 'ALL_TIME' } } } },
      },
    });
    if (!ranking) return null;

    const item = ranking.items[0];
    const stat = item?.stats[0];
    return {
      rankingSlug: ranking.slug,
      rankingItemId: item?.id ?? null,
      question: ranking.title,
      description: ranking.description,
      category: ranking.category,
      up: stat?.up ?? 0,
      down: stat?.down ?? 0,
      totalVotes: (stat?.up ?? 0) + (stat?.down ?? 0),
      upPercent: stat ? Math.round(stat.communityScore * 100) : 0,
    };
  }

  private async forYou(userId: string): Promise<RankingCard[]> {
    const recent = await this.prisma.vote.findMany({
      where: { userId, deletedAt: null },
      orderBy: { updatedAt: 'desc' },
      take: 50,
      select: { ranking: { select: { categoryId: true } } },
    });
    const catCounts = new Map<string, number>();
    for (const v of recent) {
      catCounts.set(
        v.ranking.categoryId,
        (catCounts.get(v.ranking.categoryId) ?? 0) + 1,
      );
    }
    const topCats = [...catCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([id]) => id);

    if (topCats.length === 0) {
      return this.cards({ orderBy: { trendingScore: 'desc' }, take: 8 });
    }

    const votedRankingIds = (
      await this.prisma.vote.findMany({
        where: { userId, deletedAt: null },
        select: { rankingId: true },
        distinct: ['rankingId'],
      })
    ).map((v) => v.rankingId);

    return this.cards({
      where: {
        status: 'PUBLISHED',
        categoryId: { in: topCats },
        id: { notIn: votedRankingIds.length ? votedRankingIds : ['x'] },
      },
      orderBy: { trendingScore: 'desc' },
      take: 8,
    });
  }

  /** One More Vote loop: hand back the next thing to vote on. */
  async nextVote(userId: string) {
    const voted = (
      await this.prisma.vote.findMany({
        where: { userId },
        select: { rankingItemId: true },
      })
    ).map((v) => v.rankingItemId);

    const candidates = await this.prisma.rankingItem.findMany({
      where: {
        id: { notIn: voted.length ? voted : ['00000000-0000-0000-0000-000000000000'] },
        ranking: { status: 'PUBLISHED', type: { not: 'BATTLE' } },
      },
      orderBy: { ranking: { trendingScore: 'desc' } },
      take: 40,
      include: {
        ranking: {
          select: {
            slug: true,
            title: true,
            type: true,
            description: true,
            category: { select: { slug: true, name: true } },
          },
        },
        stats: { where: { window: 'ALL_TIME' } },
      },
    });
    if (candidates.length === 0) return null;

    const pick = candidates[Math.floor(Math.random() * Math.min(10, candidates.length))]!;
    const stat = pick.stats[0];
    return {
      rankingItemId: pick.id,
      label: pick.label,
      ranking: pick.ranking,
      up: stat?.up ?? 0,
      down: stat?.down ?? 0,
      totalVotes: (stat?.up ?? 0) + (stat?.down ?? 0),
      upPercent: stat ? Math.round(stat.communityScore * 100) : 0,
    };
  }

  private async cards(args: {
    where?: Prisma.RankingWhereInput;
    orderBy: object;
    take: number;
  }): Promise<RankingCard[]> {
    // Battles have their own section (/battles, BattlesRow) — never surface
    // them through the generic leaderboard/opinion card feed.
    const where: Prisma.RankingWhereInput = {
      ...(args.where ?? { status: 'PUBLISHED' }),
      type: { not: 'BATTLE' },
    };
    const rows = await this.prisma.ranking.findMany({
      where,
      orderBy: args.orderBy as never,
      take: args.take,
      include: CARD_INCLUDE,
    });
    return rows.map((r) => ({
      id: r.id,
      slug: r.slug,
      title: r.title,
      type: r.type,
      category: r.category,
      totalVotes: r.totalVotes,
      topItems: [...r.items]
        .map((it) => ({
          label: it.label,
          upPercent: it.stats[0]
            ? Math.round(it.stats[0].communityScore * 100)
            : 0,
          rankScore: it.stats[0]?.rankScore ?? 0,
        }))
        .sort((a, b) => b.rankScore - a.rankScore)
        .slice(0, 5)
        .map(({ label, upPercent }) => ({ label, upPercent })),
      trendingScore: r.trendingScore,
      updatedAt: r.updatedAt.toISOString(),
    }));
  }
}
