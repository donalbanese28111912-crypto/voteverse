import { bayesianAverage } from './bayesian.js';
import { wilsonInterval } from './wilson.js';
import {
  DEFAULT_MODEL_CONFIG,
  type ItemScore,
  type RankingModelConfig,
  type VoteAggregate,
} from './types.js';

/**
 * Score a single ranking item from its aggregated vote signal.
 *
 * Design principles (see PRODUCT spec §3–§5):
 *  - Community score uses FREE votes only, trust-weighted, never paid points.
 *  - Paid "support" is computed separately, clamped, and surfaced on its own.
 *  - Small samples are penalised via the Wilson lower bound + a distinct-voter
 *    confidence factor, so 100/10 does not beat 100000/15000.
 *  - Suspicious vote weight is discounted before scoring.
 */
export function scoreItem(
  agg: VoteAggregate,
  config: Partial<RankingModelConfig> = {},
): ItemScore {
  const cfg = { ...DEFAULT_MODEL_CONFIG, ...config };

  // 1. Discount suspicious weight (anti-fraud). suspicionRatio in [0,1].
  const trust = 1 - clamp01(agg.suspicionRatio);
  const wUp = Math.max(0, agg.weightedUp * trust);
  const wDown = Math.max(0, agg.weightedDown * trust);
  const wTotal = wUp + wDown;

  // 2. Wilson interval on the trusted free-vote UP fraction.
  const wilson = wilsonInterval(wUp, wTotal, cfg.z);

  // 3. Bayesian smoothing for low-n items.
  const bayes = bayesianAverage(wUp, wDown, cfg.priorMean, cfg.priorWeight);

  // 4. Community score: blend Wilson-center and Bayesian, weighting Bayesian
  //    more when the sample is tiny. This is the user-facing "Community Score".
  const blend = sampleBlend(wTotal);
  const communityScore = clamp01(blend * wilson.center + (1 - blend) * bayes);

  // 5. Confidence from CI width + distinct-voter coverage.
  const ciCertainty = 1 - (wilson.upper - wilson.lower);
  const voterCertainty = clamp01(agg.distinctVoters / cfg.fullConfidenceVoters);
  const certainty = clamp01(0.6 * ciCertainty + 0.4 * voterCertainty);

  // 6. Paid support — fully separate, clamped, and gated on supporter diversity.
  const support = computeSupport(agg, wTotal, cfg);

  // 7. Rank score: order items by the Wilson LOWER bound (skeptical), nudged
  //    by certainty so well-established items outrank lucky small ones, then
  //    add the capped support delta if any.
  const base = 0.85 * wilson.lower + 0.15 * communityScore * certainty;
  const rankScore = clamp01(base) + support;

  return {
    communityScore: round(communityScore, 4),
    support: round(support, 4),
    rankScore: round(rankScore, 6),
    certainty: round(certainty, 4),
    wilsonLower: round(wilson.lower, 4),
    wilsonUpper: round(wilson.upper, 4),
    bayesian: round(bayes, 4),
    totalVotes: agg.rawUp + agg.rawDown,
    distinctVoters: agg.distinctVoters,
    supportApplied: Math.abs(support) >= 0.0005,
  };
}

/**
 * Weight given to the Wilson estimate vs the Bayesian prior, as a function of
 * trusted sample size. 0 votes -> 0 (all prior); ~50 votes -> ~0.85.
 */
function sampleBlend(n: number): number {
  return clamp01(1 - Math.exp(-n / 18));
}

function computeSupport(
  agg: VoteAggregate,
  freeVoteWeight: number,
  cfg: RankingModelConfig,
): number {
  if (cfg.maxSupportInfluence <= 0) return 0;
  if (agg.distinctSupporters < cfg.minSupportersForInfluence) return 0;
  if (agg.paidSupportUnits === 0) return 0;

  // Support influence scales with paid units but saturates, and is relative to
  // the size of the free-vote base so a whale cannot dominate a busy ranking.
  const direction = Math.sign(agg.paidSupportUnits);
  const magnitude = Math.abs(agg.paidSupportUnits);
  const base = Math.max(freeVoteWeight, 20);
  const raw = magnitude / (magnitude + base);
  return direction * clamp01(raw) * cfg.maxSupportInfluence;
}

function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0;
  return Math.min(1, Math.max(0, n));
}

function round(n: number, dp: number): number {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
}
