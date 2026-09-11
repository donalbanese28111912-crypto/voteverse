import { Injectable, Logger } from '@nestjs/common';
import { trendingScore } from '@voteverse/shared';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TrendingService {
  private readonly logger = new Logger(TrendingService.name);

  constructor(private readonly prisma: PrismaService) {}

  async recomputeRanking(rankingId: string): Promise<number> {
    const now = Date.now();
    const h1 = new Date(now - 60 * 60 * 1000);
    const h2 = new Date(now - 120 * 60 * 1000);

    const [recent, prior, distinct, ranking] = await Promise.all([
      this.prisma.voteEvent.count({
        where: { rankingId, createdAt: { gte: h1 } },
      }),
      this.prisma.voteEvent.count({
        where: { rankingId, createdAt: { gte: h2, lt: h1 } },
      }),
      this.prisma.voteEvent.findMany({
        where: { rankingId, createdAt: { gte: h1 } },
        distinct: ['userId'],
        select: { userId: true },
      }),
      this.prisma.ranking.findUnique({
        where: { id: rankingId },
        select: { lastVoteAt: true },
      }),
    ]);

    const minutesSinceLastVote = ranking?.lastVoteAt
      ? (now - ranking.lastVoteAt.getTime()) / 60_000
      : 60 * 24 * 30;

    const score = trendingScore({
      recentVotes: recent,
      priorWindowVotes: prior,
      recentDistinctVoters: distinct.length,
      recentViews: 0, // view tracking arrives with analytics milestone
      recentShares: 0,
      suspicionRatio: 0,
      minutesSinceLastVote,
    });

    await this.prisma.ranking.update({
      where: { id: rankingId },
      data: { trendingScore: score, trendingComputedAt: new Date() },
    });
    return score;
  }

  async recomputeAll(): Promise<number> {
    const rankings = await this.prisma.ranking.findMany({
      where: { status: 'PUBLISHED' },
      select: { id: true },
    });
    for (const r of rankings) {
      await this.recomputeRanking(r.id);
    }
    this.logger.log(`Recomputed trending for ${rankings.length} rankings`);
    return rankings.length;
  }

  async top(limit = 20) {
    const rows = await this.prisma.ranking.findMany({
      where: { status: 'PUBLISHED', trendingScore: { gt: 0 }, type: { not: 'BATTLE' } },
      orderBy: { trendingScore: 'desc' },
      take: limit,
      include: {
        category: { select: { slug: true, name: true } },
        items: { include: { stats: { where: { window: 'ALL_TIME' } } } },
      },
    });
    return rows.map((r, idx) => ({
      rank: idx + 1,
      id: r.id,
      slug: r.slug,
      title: r.title,
      type: r.type,
      category: r.category,
      totalVotes: r.totalVotes,
      trendingScore: Number(r.trendingScore.toFixed(3)),
      topItems: [...r.items]
        .map((it) => ({
          label: it.label,
          upPercent: it.stats[0]
            ? Math.round(it.stats[0].communityScore * 100)
            : 0,
          rankScore: it.stats[0]?.rankScore ?? 0,
        }))
        .sort((a, b) => b.rankScore - a.rankScore)
        .slice(0, 3)
        .map(({ label, upPercent }) => ({ label, upPercent })),
      updatedAt: r.updatedAt.toISOString(),
    }));
  }
}
