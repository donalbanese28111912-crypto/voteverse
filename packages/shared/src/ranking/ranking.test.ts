import { describe, expect, it } from 'vitest';
import { bayesianAverage } from './bayesian.js';
import { scoreItem } from './score.js';
import { trendingScore } from './trending.js';
import type { VoteAggregate } from './types.js';
import { voteWeight } from './vote-weight.js';
import { wilsonInterval, wilsonLowerBound } from './wilson.js';

function agg(partial: Partial<VoteAggregate>): VoteAggregate {
  return {
    rawUp: 0,
    rawDown: 0,
    weightedUp: 0,
    weightedDown: 0,
    distinctVoters: 0,
    paidSupportUnits: 0,
    distinctSupporters: 0,
    suspicionRatio: 0,
    lastVoteAt: null,
    firstVoteAt: null,
    ...partial,
  };
}

describe('wilson', () => {
  it('returns zero interval with no data', () => {
    expect(wilsonInterval(0, 0)).toEqual({ lower: 0, upper: 0, center: 0 });
  });

  it('lower bound rewards larger samples at the same ratio', () => {
    const small = wilsonLowerBound(100, 110);
    const large = wilsonLowerBound(100_000, 110_000);
    expect(large).toBeGreaterThan(small);
  });

  it('the headline spec case: 100k/15k outranks 100/10', () => {
    // 100 up / 10 down  -> 0.909 raw ratio, small sample
    const a = wilsonLowerBound(100, 110);
    // 100000 up / 15000 down -> 0.869 raw ratio, huge sample
    const b = wilsonLowerBound(100_000, 115_000);
    expect(b).toBeGreaterThan(a);
  });

  it('bounds stay within [0,1]', () => {
    const { lower, upper } = wilsonInterval(7, 7);
    expect(lower).toBeGreaterThanOrEqual(0);
    expect(upper).toBeLessThanOrEqual(1);
  });
});

describe('bayesianAverage', () => {
  it('returns the prior with no votes', () => {
    expect(bayesianAverage(0, 0, 0.6, 10)).toBeCloseTo(0.6);
  });

  it('pulls a single upvote toward the prior, not to 1.0', () => {
    const s = bayesianAverage(1, 0, 0.6, 10);
    expect(s).toBeGreaterThan(0.6);
    expect(s).toBeLessThan(0.7);
  });

  it('converges to the empirical rate with many votes', () => {
    const s = bayesianAverage(900, 100, 0.5, 10);
    expect(s).toBeCloseTo(0.9, 1);
  });
});

describe('scoreItem', () => {
  it('keeps community score independent of paid support', () => {
    const noPaid = scoreItem(
      agg({ rawUp: 800, rawDown: 200, weightedUp: 800, weightedDown: 200, distinctVoters: 500 }),
    );
    const withPaid = scoreItem(
      agg({
        rawUp: 800,
        rawDown: 200,
        weightedUp: 800,
        weightedDown: 200,
        distinctVoters: 500,
        paidSupportUnits: 5000,
        distinctSupporters: 40,
      }),
    );
    expect(withPaid.communityScore).toBeCloseTo(noPaid.communityScore, 5);
    expect(withPaid.support).toBeGreaterThan(0);
    expect(withPaid.rankScore).toBeGreaterThan(noPaid.rankScore);
  });

  it('caps paid support at maxSupportInfluence', () => {
    const s = scoreItem(
      agg({
        rawUp: 10,
        rawDown: 10,
        weightedUp: 10,
        weightedDown: 10,
        distinctVoters: 20,
        paidSupportUnits: 10_000_000,
        distinctSupporters: 100,
      }),
      { maxSupportInfluence: 0.05 },
    );
    expect(s.support).toBeLessThanOrEqual(0.05 + 1e-9);
  });

  it('ignores paid support without enough distinct supporters', () => {
    const s = scoreItem(
      agg({
        rawUp: 100,
        rawDown: 20,
        weightedUp: 100,
        weightedDown: 20,
        distinctVoters: 90,
        paidSupportUnits: 5000,
        distinctSupporters: 2,
      }),
      { minSupportersForInfluence: 5 },
    );
    expect(s.support).toBe(0);
  });

  it('disables paid support entirely when maxSupportInfluence is 0', () => {
    const s = scoreItem(
      agg({
        rawUp: 100,
        rawDown: 20,
        weightedUp: 100,
        weightedDown: 20,
        distinctVoters: 90,
        paidSupportUnits: 99999,
        distinctSupporters: 50,
      }),
      { maxSupportInfluence: 0 },
    );
    expect(s.support).toBe(0);
    expect(s.supportApplied).toBe(false);
  });

  it('discounts suspicious vote weight', () => {
    const clean = scoreItem(
      agg({ rawUp: 100, rawDown: 10, weightedUp: 100, weightedDown: 10, distinctVoters: 80 }),
    );
    const dirty = scoreItem(
      agg({
        rawUp: 100,
        rawDown: 10,
        weightedUp: 100,
        weightedDown: 10,
        distinctVoters: 80,
        suspicionRatio: 0.9,
      }),
    );
    expect(dirty.certainty).toBeLessThan(clean.certainty);
  });

  it('ranks a large established item above a lucky tiny one', () => {
    const tiny = scoreItem(
      agg({ rawUp: 5, rawDown: 0, weightedUp: 5, weightedDown: 0, distinctVoters: 5 }),
    );
    const big = scoreItem(
      agg({
        rawUp: 50_000,
        rawDown: 8_000,
        weightedUp: 50_000,
        weightedDown: 8_000,
        distinctVoters: 30_000,
      }),
    );
    expect(big.rankScore).toBeGreaterThan(tiny.rankScore);
  });
});

describe('voteWeight', () => {
  it('a fresh throwaway account counts for little', () => {
    const w = voteWeight({
      accountAgeDays: 0,
      lifetimeVotes: 0,
      reputation: 0.2,
      deviceTrust: 0.1,
      votesLastMinute: 1,
      emailVerified: false,
    });
    expect(w).toBeLessThan(0.35);
  });

  it('an established trusted account counts near full', () => {
    const w = voteWeight({
      accountAgeDays: 400,
      lifetimeVotes: 5000,
      reputation: 0.95,
      deviceTrust: 0.95,
      votesLastMinute: 1,
      emailVerified: true,
    });
    expect(w).toBeGreaterThan(0.9);
  });

  it('velocity spike crushes the weight', () => {
    const w = voteWeight({
      accountAgeDays: 400,
      lifetimeVotes: 5000,
      reputation: 0.95,
      deviceTrust: 0.95,
      votesLastMinute: 40,
      emailVerified: true,
    });
    expect(w).toBe(0);
  });
});

describe('trendingScore', () => {
  it('is higher for accelerating, broad, fresh activity', () => {
    const hot = trendingScore({
      recentVotes: 800,
      priorWindowVotes: 100,
      recentDistinctVoters: 600,
      recentViews: 5000,
      recentShares: 120,
      suspicionRatio: 0,
      minutesSinceLastVote: 1,
    });
    const cold = trendingScore({
      recentVotes: 30,
      priorWindowVotes: 40,
      recentDistinctVoters: 12,
      recentViews: 100,
      recentShares: 1,
      suspicionRatio: 0,
      minutesSinceLastVote: 240,
    });
    expect(hot).toBeGreaterThan(cold);
  });

  it('decays toward zero as activity ages', () => {
    const base = {
      recentVotes: 500,
      priorWindowVotes: 100,
      recentDistinctVoters: 400,
      recentViews: 3000,
      recentShares: 50,
      suspicionRatio: 0,
    };
    const fresh = trendingScore({ ...base, minutesSinceLastVote: 0 });
    const stale = trendingScore({ ...base, minutesSinceLastVote: 720 });
    expect(stale).toBeLessThan(fresh / 3);
  });

  it('suspicious spikes do not trend', () => {
    const base = {
      recentVotes: 5000,
      priorWindowVotes: 10,
      recentDistinctVoters: 20,
      recentViews: 100,
      recentShares: 0,
      minutesSinceLastVote: 1,
    };
    const clean = trendingScore({ ...base, suspicionRatio: 0 });
    const bots = trendingScore({ ...base, suspicionRatio: 0.95 });
    expect(bots).toBeLessThan(clean * 0.1);
  });
});
