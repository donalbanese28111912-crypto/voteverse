/**
 * Wilson score confidence interval for a Bernoulli proportion.
 *
 * Given `positive` successes out of `total` trials, returns the lower and
 * upper bounds of the Wilson interval at the given z-score. Ranking by the
 * lower bound is the classic "not-a-simple-difference" fix: an item with
 * 100 up / 10 down does not automatically beat 100000 up / 15000 down,
 * because the larger sample has a much tighter (higher) lower bound.
 *
 * Reference: Wilson, E.B. (1927). "Probable inference, the law of succession,
 * and statistical inference."
 */
export interface WilsonInterval {
  lower: number;
  upper: number;
  center: number;
}

export function wilsonInterval(positive: number, total: number, z = 1.96): WilsonInterval {
  if (total <= 0 || positive < 0 || positive > total) {
    return { lower: 0, upper: 0, center: 0 };
  }

  const phat = positive / total;
  const z2 = z * z;
  const denom = 1 + z2 / total;
  const center = (phat + z2 / (2 * total)) / denom;
  const margin =
    (z * Math.sqrt((phat * (1 - phat) + z2 / (4 * total)) / total)) / denom;

  return {
    lower: clamp01(center - margin),
    upper: clamp01(center + margin),
    center: clamp01(center),
  };
}

/** Convenience: just the lower bound (the usual ranking key). */
export function wilsonLowerBound(positive: number, total: number, z = 1.96): number {
  return wilsonInterval(positive, total, z).lower;
}

function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0;
  return Math.min(1, Math.max(0, n));
}
