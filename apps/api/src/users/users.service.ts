import { Injectable, NotFoundException } from '@nestjs/common';
import { z } from 'zod';
import { PrismaService } from '../prisma/prisma.service';

export const updateProfileSchema = z.object({
  displayName: z.string().min(1).max(40).optional(),
  bio: z.string().max(500).optional(),
  avatarUrl: z.string().url().max(500).optional().or(z.literal('')),
});

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async publicProfile(username: string) {
    const user = await this.prisma.user.findUnique({
      where: { username },
      select: {
        username: true,
        displayName: true,
        bio: true,
        avatarUrl: true,
        reputation: true,
        lifetimeVotes: true,
        createdAt: true,
        rankings: {
          where: { status: 'PUBLISHED' },
          orderBy: { createdAt: 'desc' },
          take: 12,
          select: {
            slug: true,
            title: true,
            totalVotes: true,
            category: { select: { slug: true, name: true } },
          },
        },
      },
    });
    if (!user) throw new NotFoundException('User not found');
    return { ...user, createdAt: user.createdAt.toISOString() };
  }

  async updateProfile(
    userId: string,
    input: z.infer<typeof updateProfileSchema>,
  ) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        displayName: input.displayName,
        bio: input.bio,
        avatarUrl: input.avatarUrl === '' ? null : input.avatarUrl,
      },
      select: {
        username: true,
        displayName: true,
        bio: true,
        avatarUrl: true,
      },
    });
    return user;
  }

  async myActivity(userId: string, limit = 30) {
    const votes = await this.prisma.vote.findMany({
      where: { userId, deletedAt: null },
      orderBy: { updatedAt: 'desc' },
      take: limit,
      select: {
        value: true,
        updatedAt: true,
        rankingItem: { select: { label: true } },
        ranking: { select: { slug: true, title: true } },
      },
    });
    return votes.map((v) => ({
      value: v.value,
      at: v.updatedAt.toISOString(),
      item: v.rankingItem.label,
      ranking: v.ranking,
    }));
  }
}
