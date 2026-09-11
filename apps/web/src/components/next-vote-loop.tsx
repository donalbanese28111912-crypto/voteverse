'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import type { VoteResult } from '@voteverse/shared';
import { compact } from '@/lib/format';

interface NextVote {
  rankingItemId: string;
  label: string;
  ranking: {
    slug: string;
    title: string;
    type: string;
    description: string | null;
    category: { slug: string; name: string };
  };
  up: number;
  down: number;
  totalVotes: number;
  upPercent: number;
}

export function NextVoteLoop({ authed }: { authed: boolean }) {
  const router = useRouter();
  const [item, setItem] = useState<NextVote | null>(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<VoteResult | null>(null);
  const [streak, setStreak] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setResult(null);
    setError(null);
    const res = await fetch('/api/next-vote');
    if (res.status === 401) {
      router.push('/login?next=/vote');
      return;
    }
    if (res.ok) {
      const data = (await res.json()) as NextVote | null;
      setItem(data);
    }
    setLoading(false);
  }, [router]);

  useEffect(() => {
    if (authed) void load();
    else setLoading(false);
  }, [authed, load]);

  async function vote(value: 'UP' | 'DOWN') {
    if (!item || result) return;
    const res = await fetch('/api/vote', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ rankingItemId: item.rankingItemId, value }),
    });
    if (res.status === 401) {
      router.push('/login?next=/vote');
      return;
    }
    if (!res.ok) {
      const b = await res.json().catch(() => ({}));
      setError(b.message ?? 'Something went wrong.');
      return;
    }
    setResult((await res.json()) as VoteResult);
    setStreak((s) => s + 1);
  }

  if (!authed) {
    return (
      <div className="card p-8 text-center">
        <h2 className="text-xl font-bold">One account. Every opinion.</h2>
        <p className="mt-2 text-[var(--ink-2)]">
          Log in to start the vote loop and see where you stand vs the community.
        </p>
        <Link
          href="/login?next=/vote"
          className="mt-4 inline-block rounded-lg bg-[var(--ink)] px-5 py-2.5 font-medium text-[var(--bg)]"
        >
          Log in to vote
        </Link>
      </div>
    );
  }

  if (loading) {
    return <div className="card h-64 animate-pulse" />;
  }

  if (!item) {
    return (
      <div className="card p-8 text-center">
        <h2 className="text-xl font-bold">You&apos;ve voted on everything 🎉</h2>
        <p className="mt-2 text-[var(--ink-2)]">
          That&apos;s every open topic. Check back as new ones land.
        </p>
        <Link href="/trending" className="mt-4 inline-block underline">
          Browse trending
        </Link>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-[var(--border)] px-5 py-2.5 text-xs text-[var(--ink-3)]">
        {streak > 0 && <span className="font-semibold text-[var(--ink)]">🔥 {streak} in a row · </span>}
        {item.ranking.category.name}
      </div>

      <div className="p-6">
        <Link
          href={`/rankings/${item.ranking.slug}`}
          className="text-xs text-[var(--ink-3)] hover:underline"
        >
          {item.ranking.title}
        </Link>
        <h2 className="mt-1 text-2xl font-bold leading-tight">
          {item.ranking.type === 'BINARY' ? item.ranking.title : item.label}
        </h2>
        {item.ranking.type === 'BINARY' && item.ranking.description && (
          <p className="mt-2 text-[var(--ink-2)]">{item.ranking.description}</p>
        )}

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => vote('UP')}
            disabled={!!result}
            className="rounded-xl border-2 border-[var(--border)] py-5 text-lg font-bold transition enabled:hover:border-[var(--color-up)] enabled:hover:bg-[var(--color-up-soft)] enabled:hover:text-[var(--color-up)] disabled:opacity-60"
          >
            ▲ UP
          </button>
          <button
            onClick={() => vote('DOWN')}
            disabled={!!result}
            className="rounded-xl border-2 border-[var(--border)] py-5 text-lg font-bold transition enabled:hover:border-[var(--color-down)] enabled:hover:bg-[var(--color-down-soft)] enabled:hover:text-[var(--color-down)] disabled:opacity-60"
          >
            ▼ DOWN
          </button>
        </div>

        {error && <p className="mt-3 text-sm text-[var(--color-down)]">{error}</p>}

        {result && (
          <div className="mt-5 animate-pop">
            <div className="flex justify-between text-sm font-semibold">
              <span className="text-[var(--color-up)]">{result.upPercent}% UP</span>
              <span className="text-[var(--color-down)]">
                {100 - result.upPercent}% DOWN
              </span>
            </div>
            <div className="mt-1 flex h-3 overflow-hidden rounded-full bg-[var(--color-down-soft)]">
              <div
                className="bg-[var(--color-up)] transition-all duration-500"
                style={{ width: `${result.upPercent}%` }}
              />
            </div>
            <p className="mt-1.5 text-xs text-[var(--ink-3)]">
              You voted {result.myVote}. {compact(result.totalVotes)} people voted.
            </p>
            <button
              onClick={load}
              className="mt-4 w-full rounded-lg bg-[var(--ink)] py-3 font-semibold text-[var(--bg)]"
            >
              Next vote →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
