import { z } from 'zod';
import { TIME_WINDOWS } from '../ranking/types.js';

export const castVoteSchema = z.object({
  rankingItemId: z.string().uuid(),
  value: z.enum(['UP', 'DOWN']),
});
export type CastVoteInput = z.infer<typeof castVoteSchema>;

/** Response after a vote: the item's fresh public numbers. */
export interface VoteResult {
  rankingItemId: string;
  myVote: 'UP' | 'DOWN' | null;
  up: number;
  down: number;
  totalVotes: number;
  communityScore: number; // 0..1
  support: number; // signed fraction, e.g. +0.042
  upPercent: number; // rounded 0..100 for display
  window: (typeof TIME_WINDOWS)[number];
  updatedAt: string;
}
