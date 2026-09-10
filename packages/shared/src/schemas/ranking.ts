import { z } from 'zod';
import { RANKING_TYPES } from '../constants.js';
import { slugSchema } from './common.js';

export const createRankingSchema = z.object({
  title: z.string().min(4).max(140),
  description: z.string().max(2000).optional(),
  categorySlug: slugSchema,
  type: z.enum(RANKING_TYPES as unknown as [string, ...string[]]).default('LEADERBOARD'),
  items: z
    .array(
      z.object({
        label: z.string().min(1).max(140),
        entitySlug: slugSchema.optional(),
        description: z.string().max(500).optional(),
      }),
    )
    .min(2)
    .max(200),
});
export type CreateRankingInput = z.infer<typeof createRankingSchema>;

export interface RankingItemView {
  id: string;
  label: string;
  slug: string | null;
  description: string | null;
  imageUrl: string | null;
  position: number;
  up: number;
  down: number;
  totalVotes: number;
  communityScore: number;
  support: number;
  upPercent: number;
  certainty: number;
  trend: 'UP' | 'DOWN' | 'FLAT' | 'NEW';
  myVote: 'UP' | 'DOWN' | null;
}

export interface RankingView {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  type: string;
  category: { slug: string; name: string };
  window: string;
  totalVotes: number;
  distinctVoters: number;
  supportShare: number; // fraction of total influence that is paid, for transparency
  paidSupportEnabled: boolean;
  updatedAt: string;
  createdAt: string;
  items: RankingItemView[];
}

export interface RankingCard {
  id: string;
  slug: string;
  title: string;
  type: string;
  category: { slug: string; name: string };
  totalVotes: number;
  topItems: { label: string; upPercent: number }[];
  trendingScore: number;
  updatedAt: string;
}
