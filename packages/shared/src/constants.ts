/** Shared enums / constants used by both API and web. */

export const VOTE_VALUES = ['UP', 'DOWN'] as const;
export type VoteValue = (typeof VOTE_VALUES)[number];

export const VOTE_DIRECTION: Record<VoteValue, 1 | -1> = { UP: 1, DOWN: -1 };

export const RANKING_TYPES = [
  'LEADERBOARD', // ordered list of items, community votes each
  'BINARY', // single UP/DOWN opinion topic
  'BATTLE', // A vs B (milestone 2)
] as const;
export type RankingType = (typeof RANKING_TYPES)[number];

export const MODERATION_LEVELS = ['STANDARD', 'ELEVATED', 'STRICT'] as const;
export type ModerationLevel = (typeof MODERATION_LEVELS)[number];

/**
 * Categories where paid Rankly Points support is blocked by platform policy.
 * Currently empty — the product decision is that Boost is available
 * everywhere, always transparently labeled and capped (see
 * @rankly/shared scoreItem()). Kept as a lever: set per-category via
 * Category.paidSupportEnabled in the DB without a code change.
 */
export const PAID_SUPPORT_BLOCKED_CATEGORY_SLUGS: readonly string[] = [];

export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;
