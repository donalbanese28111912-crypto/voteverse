import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}

  async search(rawQuery: string, limit = 8) {
    const q = rawQuery.trim().slice(0, 80);
    if (q.length < 2) {
      return { query: q, rankings: [], entities: [], categories: [] };
    }

    const [rankings, entities, categories] = await Promise.all([
      this.prisma.ranking.findMany({
        where: {
          status: 'PUBLISHED',
          OR: [
            { title: { contains: q, mode: 'insensitive' } },
            { description: { contains: q, mode: 'insensitive' } },
          ],
        },
        orderBy: [{ totalVotes: 'desc' }, { trendingScore: 'desc' }],
        take: limit,
        select: {
          slug: true,
          title: true,
          totalVotes: true,
          type: true,
          category: { select: { slug: true, name: true } },
        },
      }),
      this.prisma.entity.findMany({
        where: { name: { contains: q, mode: 'insensitive' } },
        take: limit,
        select: { slug: true, name: true, type: true, imageUrl: true },
      }),
      this.prisma.category.findMany({
        where: { name: { contains: q, mode: 'insensitive' } },
        take: 5,
        select: { slug: true, name: true, icon: true },
      }),
    ]);

    return {
      query: q,
      rankings: rankings.map((r) => ({
        type: 'ranking' as const,
        slug: r.slug,
        title: r.title,
        totalVotes: r.totalVotes,
        category: r.category,
        isBattle: r.type === 'BATTLE',
      })),
      entities: entities.map((e) => ({
        type: 'entity' as const,
        slug: e.slug,
        name: e.name,
        entityType: e.type,
        imageUrl: e.imageUrl,
      })),
      categories: categories.map((c) => ({
        type: 'category' as const,
        slug: c.slug,
        name: c.name,
        icon: c.icon,
      })),
    };
  }
}
