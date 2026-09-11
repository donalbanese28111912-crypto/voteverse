'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { VoteResult } from '@voteverse/shared';
import { compact } from '@/lib/format';

export function HeroVote(props: {
  rankingItemId: string;
  rankingSlug: string;
  question: string;
  description: string | null;
  category: string;
  up: number;
  down: number;
  totalVotes: number;
  upPercent: number;
  authed: boolean;
}) {
  const router = useRouter();
  const [result, setResult] = useState<VoteResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pop, setPop] = useState(false);

  const upPercent = result ? result.upPercent : props.upPercent;
  const total = result ? result.totalVotes : props.totalVotes;
  const revealed = result !== null;

  async function vote(value: 'UP' | 'DOWN') {
    if (!props.authed) {
      router.push('/login?next=/');
      return;
    }
    if (result) return;
    setPop(true);
    setTimeout(() => setPop(false), 300);
    const res = await fetch('/api/vote', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ rankingItemId: props.rankingItemId, value }),
    });
    if (res.status === 401) return router.push('/login?next=/');
    if (!res.ok) {
      const b = await res.json().catch(() => ({}));
      setError(b.message ?? 'Something went wrong.');
      return;
    }
    setResult((await res.json()) as VoteResult);
    router.refresh();
  }

  return (
    <div className={`card p-6 ${pop ? 'animate-pop' : ''}`}>
      <div className="text-xs text-[var(--ink-3)]">{props.category}</div>
      <Link href={`/rankings/${props.rankingSlug}`}>
        <h2 className="mt-1 text-xl font-bold leading-tight hover:underline">
          {props.question}
        </h2>
      </Link>
      {props.description && (
        <p className="mt-1.5 text-sm text-[var(--ink-2)]">{props.description}</p>
      )}

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          onClick={() => vote('UP')}
          disabled={revealed}
          className="rounded-xl border-2 border-[var(--border)] py-4 text-lg font-bold transition enabled:hover:border-[var(--color-up)] enabled:hover:bg-[var(--color-up-soft)] enabled:hover:text-[var(--color-up)] disabled:opacity-70"
        >
          ▲ UP
        </button>
        <button
          onClick={() => vote('DOWN')}
          disabled={revealed}
          className="rounded-xl border-2 border-[var(--border)] py-4 text-lg font-bold transition enabled:hover:border-[var(--color-down)] enabled:hover:bg-[var(--color-down-soft)] enabled:hover:text-[var(--color-down)] disabled:opacity-70"
        >
          ▼ DOWN
        </button>
      </div>

      {error && <p className="mt-2 text-sm text-[var(--color-down)]">{error}</p>}

      <div className="mt-4">
        <div className="flex justify-between text-sm font-semibold">
          <span className="text-[var(--color-up)]">{revealed ? `${upPercent}%` : '· · ·'}</span>
          <span className="text-[var(--color-down)]">
            {revealed ? `${100 - upPercent}%` : '· · ·'}
          </span>
        </div>
        <div className="mt-1 flex h-3 overflow-hidden rounded-full bg-[var(--color-down-soft)]">
          <div
            className="bg-[var(--color-up)] transition-all duration-500"
            style={{ width: `${revealed ? upPercent : 50}%` }}
          />
        </div>
        <p className="mt-1.5 text-xs text-[var(--ink-3)]">
          {compact(total)} people voted
          {revealed && result ? ` · you voted ${result.myVote}` : ''}
        </p>
      </div>

      {revealed && (
        <Link
          href="/vote"
          className="mt-4 block rounded-lg bg-[var(--ink)] py-2.5 text-center font-semibold text-[var(--bg)]"
        >
          Next vote →
        </Link>
      )}
    </div>
  );
}
