import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import type { Prisma, TimeWindow } from '@prisma/client';
import {
  PAID_SUPPORT_BLOCKED_CATEGORY_SLUGS,
  slugSchema,
  type CreateRankingInput,
  type Paginated,
  type RankingCard,
  type RankingItemView,
  type RankingView,
} from '@rankly/shared';
import { paginate, skipTake } from '../common/pagination';
import { PrismaService } from '../prisma/prisma.service';
import { StatsService } from '../stats/stats.service';

type ListSort = 'trending' | 'new' | 'popular';

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .slice(0, 110);
}

@Injectable()
export class RankingsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly stats: StatsService,
  ) {}

  async list(params: {
    page: number;
    pageSize: number;
    sort: ListSort;
    categorySlug?: string;
    type?: string;
  }): Promise<Paginated<RankingCard>> {
    const where: Prisma.RankingWhereInput = {
      status: 'PUBLISHED',
      ...(params.categorySlug
        ? {
            OR: [
              { category: { slug: params.categorySlug } },
              { category: { parent: { slug: params.categorySlug } } },
            ],
          }
        : {}),
      // Battles have their own dedicated section (/battles) — keep them out
      // of the general browse list unless explicitly requested.
      ...(params.type
        ? { type: params.type as Prisma.EnumRankingTypeFilter['equals'] }
        : { type: { not: 'BATTLE' } }),
    };

    const orderBy: Prisma.RankingOrderByWithRelationInput =
      params.sort === 'new'
        ? { createdAt: 'desc' }
        : params.sort === 'popular'
          ? { totalVotes: 'desc' }
          : { trendingScore: 'desc' };

    const { skip, take } = skipTake(params.page, params.pageSize);
    const [rows, total] = await Promise.all([
      this.prisma.ranking.findMany({
        where,
        orderBy,
        skip,
        take,
        include: {
          category: { select: { slug: true, name: true } },
          items: {
            include: {
              stats: { where: { window: 'ALL_TIME' } },
            },
          },
        },
      }),
      this.prisma.ranking.count({ where }),
    ]);

    const cards: RankingCard[] = rows.map((r) => {
      const items = [...r.items]
        .map((it) => {
          const s = it.stats[0];
          return {
            label: it.label,
            upPercent: s ? Math.round(s.communityScore * 100) : 0,
            rankScore: s?.rankScore ?? 0,
          };
        })
        .sort((a, b) => b.rankScore - a.rankScore)
        .slice(0, 5);
      return {
        id: r.id,
        slug: r.slug,
        title: r.title,
        type: r.type,
        category: r.category,
        totalVotes: r.totalVotes,
        topItems: items.map(({ label, upPercent }) => ({ label, upPercent })),
        trendingScore: r.trendingScore,
        updatedAt: r.updatedAt.toISOString(),
      };
    });

    return paginate(cards, total, params.page, params.pageSize);
  }

  async detail(
    slug: string,
    window: TimeWindow,
    userId: string | null,
  ): Promise<RankingView> {
    const ranking = await this.prisma.ranking.findUnique({
      where: { slug },
      include: {
        category: {
          select: { slug: true, name: true, paidSupportEnabled: true },
        },
        items: {
          include: {
            entity: { select: { slug: true } },
            stats: { where: { window: { in: [window, 'LIVE'] } } },
          },
        },
      },
    });
    if (!ranking || ranking.status === 'DRAFT') {
      throw new NotFoundException('Ranking not found');
    }

    const myVotes = userId
      ? await this.prisma.vote.findMany({
          where: { userId, rankingId: ranking.id, deletedAt: null },
          select: { rankingItemId: true, value: true },
        })
      : [];
    const myVoteMap = new Map(myVotes.map((v) => [v.rankingItemId, v.value]));

    const paidSupportEnabled =
      ranking.paidSupportEnabledOverride ?? ranking.category.paidSupportEnabled;

    const items: RankingItemView[] = ranking.items
      .map((it) => {
        const windowStat = it.stats.find((s) => s.window === window);
        const liveStat = it.stats.find((s) => s.window === 'LIVE');
        const up = windowStat?.up ?? 0;
        const down = windowStat?.down ?? 0;
        const total = up + down;
        const community = windowStat?.communityScore ?? 0;

        let trend: RankingItemView['trend'] = 'FLAT';
        if (total < 10) trend = 'NEW';
        else if (liveStat && liveStat.up + liveStat.down >= 3) {
          const delta = liveStat.communityScore - community;
          trend = delta > 0.03 ? 'UP' : delta < -0.03 ? 'DOWN' : 'FLAT';
        }

        return {
          id: it.id,
          label: it.label,
          slug: it.entity?.slug ?? null,
          description: it.description,
          imageUrl: it.imageUrl,
          position: it.position,
          up,
          down,
          totalVotes: total,
          communityScore: community,
          support: paidSupportEnabled ? (windowStat?.support ?? 0) : 0,
          upPercent: total === 0 ? 0 : Math.round(community * 100),
          certainty: windowStat?.certainty ?? 0,
          trend,
          myVote: myVoteMap.get(it.id) ?? null,
          rankScore: windowStat?.rankScore ?? 0,
        };
      })
      .sort((a, b) => b.rankScore - a.rankScore)
      .map(({ rankScore: _rankScore, ...view }, idx) => ({
        ...view,
        position: idx + 1,
      }));

    const totalAbsSupport = items.reduce((acc, i) => acc + Math.abs(i.support), 0);
    const totalCommunity = items.reduce((acc, i) => acc + i.communityScore, 0);
    const supportShare =
      totalCommunity + totalAbsSupport === 0
        ? 0
        : totalAbsSupport / (totalCommunity + totalAbsSupport);

    return {
      id: ranking.id,
      slug: ranking.slug,
      title: ranking.title,
      description: ranking.description,
      type: ranking.type,
      category: {
        slug: ranking.category.slug,
        name: ranking.category.name,
      },
      window,
      totalVotes: ranking.totalVotes,
      distinctVoters: ranking.distinctVoters,
      supportShare: Number(supportShare.toFixed(4)),
      paidSupportEnabled,
      updatedAt: ranking.updatedAt.toISOString(),
      createdAt: ranking.createdAt.toISOString(),
      items,
    };
  }

  async create(userId: string, input: CreateRankingInput): Promise<{ slug: string }> {
    const category = await this.prisma.category.findUnique({
      where: { slug: input.categorySlug },
      select: { id: true, slug: true },
    });
    if (!category) throw new NotFoundException('Category not found');

    if (
      (PAID_SUPPORT_BLOCKED_CATEGORY_SLUGS as readonly string[]).includes(
        category.slug,
      )
    ) {
      // allowed to create, but paid support is force-disabled by policy
    }

    const baseSlug = slugify(input.title) || 'ranking';
    let slug = baseSlug;
    for (let i = 2; await this.prisma.ranking.findUnique({ where: { slug } }); i++) {
      slug = `${baseSlug}-${i}`;
    }

    const entitySlugs = input.items
      .map((i) => i.entitySlug)
      .filter((s): s is string => Boolean(s));
    const entities = entitySlugs.length
      ? await this.prisma.entity.findMany({
          where: { slug: { in: entitySlugs } },
          select: { id: true, slug: true },
        })
      : [];
    const entityBySlug = new Map(entities.map((e) => [e.slug, e.id]));

    const ranking = await this.prisma.ranking.create({
      data: {
        slug,
        title: input.title,
        description: input.description,
        type: input.type as Prisma.RankingCreateInput['type'],
        categoryId: category.id,
        creatorId: userId,
        seoTitle: input.title,
        seoDescription: input.description?.slice(0, 300),
        items: {
          create: input.items.map((item, idx) => ({
            label: item.label,
            description: item.description,
            position: idx + 1,
            entityId: item.entitySlug ? entityBySlug.get(item.entitySlug) : undefined,
          })),
        },
      },
    });

    await this.stats.recomputeRanking(ranking.id);
    return { slug: ranking.slug };
  }

  async related(slug: string, limit = 6): Promise<RankingCard[]> {
    const ranking = await this.prisma.ranking.findUnique({
      where: { slug },
      select: { id: true, categoryId: true },
    });
    if (!ranking) return [];
    const rows = await this.prisma.ranking.findMany({
      where: {
        status: 'PUBLISHED',
        categoryId: ranking.categoryId,
        id: { not: ranking.id },
      },
      orderBy: { trendingScore: 'desc' },
      take: limit,
      include: { category: { select: { slug: true, name: true } } },
    });
    return rows.map((r) => ({
      id: r.id,
      slug: r.slug,
      title: r.title,
      type: r.type,
      category: r.category,
      totalVotes: r.totalVotes,
      topItems: [],
      trendingScore: r.trendingScore,
      updatedAt: r.updatedAt.toISOString(),
    }));
  }

  assertSlug(slug: string): void {
    const parsed = slugSchema.safeParse(slug);
    if (!parsed.success) throw new ForbiddenException('Invalid slug');
  }
}
