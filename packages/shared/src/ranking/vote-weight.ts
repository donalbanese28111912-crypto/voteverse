/**
 * Per-vote trust weight — "vote quality" from the PRODUCT spec.
 *
 * Every vote enters the aggregate with a weight in [0, 1] instead of a flat 1.
 * New / low-reputation / high-velocity / low-device-trust voters count for
 * less. This is a soft anti-fraud lever: it degrades gracefully instead of
 * hard-blocking, and it is applied at write time so aggregates stay cheap.
 */
export interface VoteWeightInput {
  /** Account age in days. */
  accountAgeDays: number;
  /** Lifetime votes cast by this account. */
  lifetimeVotes: number;
  /** Reputation score 0..1 (moderation history, report ratio). */
  reputation: number;
  /** Device/session trust 0..1 (fingerprint stability, not a fresh throwaway). */
  deviceTrust: number;
  /** Votes cast by this account in the last minute (velocity). */
  votesLastMinute: number;
  /** True if the account's email is verified. */
  emailVerified: boolean;
}

export function voteWeight(input: VoteWeightInput): number {
  const age = clamp01(input.accountAgeDays / 14); // full credit at 2 weeks
  const experience = clamp01(input.lifetimeVotes / 50); // full credit at 50 votes
  const reputation = clamp01(input.reputation);
  const device = clamp01(input.deviceTrust);
  const verified = input.emailVerified ? 1 : 0.5;

  // Velocity penalty: fine up to ~10/min, then falls off fast.
  const velocity = clamp01(1 - Math.max(0, input.votesLastMinute - 10) / 20);

  const trust =
    0.2 * age +
    0.2 * experience +
    0.25 * reputation +
    0.25 * device +
    0.1 * verified;

  return round(clamp01(trust) * velocity, 4);
}

function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0;
  return Math.min(1, Math.max(0, n));
}

function round(n: number, dp: number): number {
  const f = 10 ** dp;
  return Math.round(n * f) / f;
}
