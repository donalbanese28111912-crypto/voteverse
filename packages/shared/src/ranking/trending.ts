/**
 * Trending score — how "hot" a ranking or topic is right now.
 *
 * Combines recent vote velocity, engagement (views/shares), audience breadth,
 * and a recency decay so a burst of activity can push something to #1 and then
 * fade. Unusual-activity ratio is subtracted so coordinated spikes do not trend.
 */
export interface TrendingSignal {
  /** Counted votes in the trailing window (e.g. last 60 min). */
  recentVotes: number;
  /** Counted votes in the window before that (for acceleration). */
  priorWindowVotes: number;
  /** Distinct voters in the trailing window. */
  recentDistinctVoters: number;
  /** Page views in the trailing window. */
  recentViews: number;
  /** Shares in the trailing window. */
  recentShares: number;
  /** Fraction [0,1] of recent activity flagged suspicious. */
  suspicionRatio: number;
  /** Minutes since the most recent counted vote. */
  minutesSinceLastVote: number;
}

export interface TrendingConfig {
  /** Half-life of the recency decay, in minutes. */
  halfLifeMinutes: number;
  /** Weight of raw velocity. */
  velocityWeight: number;
  /** Weight of acceleration (this window vs last). */
  accelerationWeight: number;
  /** Weight of audience breadth (distinct voters). */
  breadthWeight: number;
  /** Weight of shares (virality). */
  shareWeight: number;
  /** Weight of views. */
  viewWeight: number;
}

export const DEFAULT_TRENDING_CONFIG: TrendingConfig = {
  halfLifeMinutes: 180,
  velocityWeight: 1,
  accelerationWeight: 0.8,
  breadthWeight: 1.2,
  shareWeight: 1.5,
  viewWeight: 0.15,
};

export function trendingScore(
  s: TrendingSignal,
  config: Partial<TrendingConfig> = {},
): number {
  const cfg = { ...DEFAULT_TRENDING_CONFIG, ...config };
  const trust = 1 - clamp01(s.suspicionRatio);

  const velocity = Math.log1p(Math.max(0, s.recentVotes)) * cfg.velocityWeight;
  const acceleration =
    Math.log1p(Math.max(0, s.recentVotes - s.priorWindowVotes)) *
    cfg.accelerationWeight;
  const breadth =
    Math.log1p(Math.max(0, s.recentDistinctVoters)) * cfg.breadthWeight;
  const shares = Math.log1p(Math.max(0, s.recentShares)) * cfg.shareWeight;
  const views = Math.log1p(Math.max(0, s.recentViews)) * cfg.viewWeight;

  const raw = (velocity + acceleration + breadth + shares + views) * trust;

  const decay = Math.pow(
    0.5,
    Math.max(0, s.minutesSinceLastVote) / cfg.halfLifeMinutes,
  );

  return round(raw * decay, 6);
}

function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0;
  return Math.min(1, Math.max(0, n));
}

function round(n: number, dp: number): number {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
}
