import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EntitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async bySlug(slug: string) {
    const entity = await this.prisma.entity.findUnique({
      where: { slug },
      include: {
        rankingItems: {
          include: {
            ranking: {
              select: {
                slug: true,
                title: true,
                status: true,
                category: { select: { slug: true, name: true } },
              },
            },
            stats: { where: { window: 'ALL_TIME' } },
          },
        },
      },
    });
    if (!entity) throw new NotFoundException('Entity not found');

    const appearances = entity.rankingItems
      .filter((ri) => ri.ranking.status === 'PUBLISHED')
      .map((ri) => {
        const s = ri.stats[0];
        return {
          ranking: {
            slug: ri.ranking.slug,
            title: ri.ranking.title,
            category: ri.ranking.category,
          },
          up: s?.up ?? 0,
          down: s?.down ?? 0,
          communityScore: s?.communityScore ?? 0,
          upPercent: s ? Math.round(s.communityScore * 100) : 0,
        };
      });

    const totalUp = appearances.reduce((a, x) => a + x.up, 0);
    const totalDown = appearances.reduce((a, x) => a + x.down, 0);

    return {
      id: entity.id,
      slug: entity.slug,
      name: entity.name,
      type: entity.type,
      description: entity.description,
      imageUrl: entity.imageUrl,
      overall: {
        up: totalUp,
        down: totalDown,
        totalVotes: totalUp + totalDown,
        upPercent:
          totalUp + totalDown === 0
            ? 0
            : Math.round((totalUp / (totalUp + totalDown)) * 100),
      },
      appearances,
    };
  }
}
