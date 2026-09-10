/**
 * Core types for the Rankly ranking engine.
 *
 * The engine is intentionally pure: it takes aggregated vote signals and
 * returns scores. It never touches the database, the clock, or the network,
 * which makes every model fully unit-testable and swappable.
 */

/** Time buckets a ranking can be sliced by. `LIVE` is a short rolling window. */
export type TimeWindow = 'ALL_TIME' | 'YEAR' | 'MONTH' | 'WEEK' | 'DAY' | 'LIVE';

export const TIME_WINDOWS: readonly TimeWindow[] = [
  'ALL_TIME',
  'YEAR',
  'MONTH',
  'WEEK',
  'DAY',
  'LIVE',
] as const;

/**
 * Aggregated, pre-summed vote signal for a single ranking item in a single
 * time window. Produced by the API from the raw `Vote` table.
 *
 * "weighted" counts apply per-vote trust weights (reputation, device trust,
 * anti-fraud dampening). "raw" counts are unweighted and used only for display
 * ("128,431 votes"). Paid support is tracked entirely separately.
 */
export interface VoteAggregate {
  /** Unweighted UP votes (free + counted), for display. */
  rawUp: number;
  /** Unweighted DOWN votes, for display. */
  rawDown: number;
  /** Sum of trust weights of UP votes. Range per vote: [0, 1]. */
  weightedUp: number;
  /** Sum of trust weights of DOWN votes. */
  weightedDown: number;
  /** Distinct authenticated accounts that voted. Guards against single-user spam. */
  distinctVoters: number;
  /**
   * Net paid support, expressed in "support units" already net of refunds.
   * Positive = points spent boosting UP, negative = boosting DOWN.
   * `0` when paid points are disabled for the category.
   */
  paidSupportUnits: number;
  /** Distinct accounts that spent points here (diversity guard for paid boosts). */
  distinctSupporters: number;
  /**
   * Fraction of vote weight in [0,1] flagged as suspicious by anti-fraud
   * (velocity, fingerprint clustering, coordinated timing). Higher = noisier.
   */
  suspicionRatio: number;
  /** Unix ms of the most recent counted vote, for recency/trending. */
  lastVoteAt: number | null;
  /** Unix ms of the first counted vote in this window. */
  firstVoteAt: number | null;
}

export interface RankingModelConfig {
  /** z-score for the Wilson interval. 1.96 ≈ 95% confidence. */
  z: number;
  /** Prior pseudo-count (C) for the Bayesian average. Higher = more skeptical of small n. */
  priorWeight: number;
  /** Global prior mean up-rate (m), typically the platform-wide UP fraction. */
  priorMean: number;
  /**
   * Max additive influence paid support may contribute to an item's rank
   * score, as a fraction (0.05 = at most +/-5 percentage points).
   * Set to 0 to fully disable pay-to-win for a category.
   */
  maxSupportInfluence: number;
  /** Minimum distinct supporters before paid support counts at all. */
  minSupportersForInfluence: number;
  /** Distinct-voter count at which the small-sample penalty fully lifts. */
  fullConfidenceVoters: number;
}

export const DEFAULT_MODEL_CONFIG: RankingModelConfig = {
  z: 1.96,
  priorWeight: 12,
  priorMean: 0.62,
  maxSupportInfluence: 0.05,
  minSupportersForInfluence: 5,
  fullConfidenceVoters: 40,
};

/** Result of scoring a single ranking item. */
export interface ItemScore {
  /**
   * Community opinion, 0..1, from FREE votes only. This is the number shown
   * to users as "Community Score 91%". Paid support never moves it.
   */
  communityScore: number;
  /**
   * Separate, transparent paid contribution as a signed fraction, e.g.
   * +0.042 => "Rankly Support +4.2%". Clamped to +/- maxSupportInfluence.
   */
  support: number;
  /**
   * The value used to ORDER items within a ranking. Combines communityScore,
   * a small-sample confidence penalty, and (if enabled) the capped support.
   * Not shown directly to users.
   */
  rankScore: number;
  /** Statistical certainty 0..1 (1 = tight confidence interval). */
  certainty: number;
  /** Wilson lower bound on the free-vote UP fraction. */
  wilsonLower: number;
  /** Wilson upper bound on the free-vote UP fraction. */
  wilsonUpper: number;
  /** Bayesian-smoothed UP fraction (used for low-n items). */
  bayesian: number;
  /** Total counted free votes (raw, for display). */
  totalVotes: number;
  /** Distinct voters (for display + transparency). */
  distinctVoters: number;
  /** True when paid support materially changed the ordering position. */
  supportApplied: boolean;
}
