/**
 * Bayesian average for an UP/DOWN proportion.
 *
 * Treats each UP as 1 and each DOWN as 0 and shrinks the observed mean toward
 * a global prior mean `m` with pseudo-count `C`:
 *
 *   score = (C * m + up) / (C + up + down)
 *
 * With few votes the score stays near the prior; as votes accumulate it
 * converges to the empirical UP fraction. Used to keep brand-new items from
 * shooting to the top (or bottom) on a single vote.
 */
export function bayesianAverage(
  up: number,
  down: number,
  priorMean: number,
  priorWeight: number,
): number {
  const n = up + down;
  if (n <= 0) return clamp01(priorMean);
  const score = (priorWeight * priorMean + up) / (priorWeight + n);
  return clamp01(score);
}

function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0;
  return Math.min(1, Math.max(0, n));
}
