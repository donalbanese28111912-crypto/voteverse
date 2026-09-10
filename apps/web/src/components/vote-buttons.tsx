'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import type { VoteResult } from '@rankly/shared';
import { compact } from '@/lib/format';

type VoteValue = 'UP' | 'DOWN';

export interface VoteState {
  up: number;
  down: number;
  totalVotes: number;
  upPercent: number;
  support: number;
  myVote: VoteValue | null;
}

export function VoteButtons({
  rankingItemId,
  initial,
  window = 'ALL_TIME',
  variant = 'bar',
  onVoted,
}: {
  rankingItemId: string;
  initial: VoteState;
  window?: string;
  variant?: 'bar' | 'binary' | 'compact';
  onVoted?: (r: VoteResult) => void;
}) {
  const router = useRouter();
  const [state, setState] = useState<VoteState>(initial);
  const [pending, startTransition] = useTransition();
  const [pop, setPop] = useState<VoteValue | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function vote(value: VoteValue) {
    if (pending) return;
    setError(null);
    setPop(value);
    setTimeout(() => setPop(null), 300);

    const res = await fetch(`/api/vote?window=${window}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ rankingItemId, value }),
    });

    if (res.status === 401) {
      router.push(`/login?next=${encodeURIComponent(location.pathname)}`);
      return;
    }
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.message ?? 'Something went wrong. Try again.');
      return;
    }

    const result = (await res.json()) as VoteResult;
    setState({
      up: result.up,
      down: result.down,
      totalVotes: result.totalVotes,
      upPercent: result.upPercent,
      support: result.support,
      myVote: result.myVote,
    });
    onVoted?.(result);
    startTransition(() => router.refresh());
  }

  const downPercent = state.totalVotes === 0 ? 0 : 100 - state.upPercent;

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-1">
        <ArrowButton
          dir="UP"
          active={state.myVote === 'UP'}
          popping={pop === 'UP'}
          small
          onClick={() => vote('UP')}
          label={`Upvote, currently ${state.upPercent}% up`}
        />
        <span className="min-w-10 text-center text-xs tabular-nums text-[var(--ink-2)]">
          {state.totalVotes === 0 ? '—' : `${state.upPercent}%`}
        </span>
        <ArrowButton
          dir="DOWN"
          active={state.myVote === 'DOWN'}
          popping={pop === 'DOWN'}
          small
          onClick={() => vote('DOWN')}
          label="Downvote"
        />
      </div>
    );
  }

  if (variant === 'binary') {
    return (
      <div className="w-full">
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => vote('UP')}
            aria-pressed={state.myVote === 'UP'}
            className={`flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-4 text-lg font-semibold transition ${
              pop === 'UP' ? 'animate-pop' : ''
            } ${
              state.myVote === 'UP'
                ? 'border-[var(--color-up)] bg-[var(--color-up-soft)] text-[var(--color-up)]'
                : 'border-[var(--border)] hover:border-[var(--color-up)]'
            }`}
          >
            <ChevronUp /> UP
          </button>
          <button
            type="button"
            onClick={() => vote('DOWN')}
            aria-pressed={state.myVote === 'DOWN'}
            className={`flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-4 text-lg font-semibold transition ${
              pop === 'DOWN' ? 'animate-pop' : ''
            } ${
              state.myVote === 'DOWN'
                ? 'border-[var(--color-down)] bg-[var(--color-down-soft)] text-[var(--color-down)]'
                : 'border-[var(--border)] hover:border-[var(--color-down)]'
            }`}
          >
            <ChevronDown /> DOWN
          </button>
        </div>
        <ResultBar
          up={state.upPercent}
          down={downPercent}
          total={state.totalVotes}
          support={state.support}
          revealed={state.myVote !== null}
        />
        {error && <p className="mt-2 text-sm text-[var(--color-down)]">{error}</p>}
      </div>
    );
  }

  // variant === 'bar'
  return (
    <div className="flex items-center gap-3">
      <ArrowButton
        dir="UP"
        active={state.myVote === 'UP'}
        popping={pop === 'UP'}
        onClick={() => vote('UP')}
        label={`Upvote. Currently ${state.upPercent}% approval from ${state.totalVotes} votes`}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between text-xs text-[var(--ink-2)]">
          <span className="font-semibold text-[var(--color-up)]">
            {state.totalVotes === 0 ? '—' : `${state.upPercent}%`}
          </span>
          <span className="tabular-nums">{compact(state.totalVotes)} votes</span>
          <span className="font-semibold text-[var(--color-down)]">
            {state.totalVotes === 0 ? '—' : `${downPercent}%`}
          </span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-[var(--color-down-soft)]">
          <div
            className="h-full rounded-full bg-[var(--color-up)] transition-all duration-500"
            style={{ width: `${state.totalVotes === 0 ? 0 : state.upPercent}%` }}
          />
        </div>
        {Math.abs(state.support) >= 0.005 && (
          <p className="mt-1 text-[11px] text-[var(--ink-3)]">
            incl. Rankly Support {state.support > 0 ? '+' : ''}
            {(state.support * 100).toFixed(1)}%
          </p>
        )}
        {error && <p className="mt-1 text-xs text-[var(--color-down)]">{error}</p>}
      </div>
      <ArrowButton
        dir="DOWN"
        active={state.myVote === 'DOWN'}
        popping={pop === 'DOWN'}
        onClick={() => vote('DOWN')}
        label="Downvote"
      />
    </div>
  );
}

function ArrowButton({
  dir,
  active,
  popping,
  small,
  onClick,
  label,
}: {
  dir: VoteValue;
  active: boolean;
  popping: boolean;
  small?: boolean;
  onClick: () => void;
  label: string;
}) {
  const isUp = dir === 'UP';
  const color = isUp ? 'var(--color-up)' : 'var(--color-down)';
  const soft = isUp ? 'var(--color-up-soft)' : 'var(--color-down-soft)';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`grid shrink-0 place-items-center rounded-lg border transition ${
        small ? 'h-8 w-8' : 'h-11 w-11'
      } ${popping ? 'animate-pop' : ''}`}
      style={{
        borderColor: active ? color : 'var(--border)',
        background: active ? soft : 'transparent',
        color: active ? color : 'var(--ink-2)',
      }}
    >
      {isUp ? <ChevronUp /> : <ChevronDown />}
    </button>
  );
}

function ResultBar({
  up,
  down,
  total,
  support,
  revealed,
}: {
  up: number;
  down: number;
  total: number;
  support: number;
  revealed: boolean;
}) {
  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm font-semibold">
        <span className="text-[var(--color-up)]">{revealed ? `${up}%` : '· · ·'}</span>
        <span className="text-[var(--color-down)]">{revealed ? `${down}%` : '· · ·'}</span>
      </div>
      <div className="mt-1 flex h-3 w-full overflow-hidden rounded-full bg-[var(--color-down-soft)]">
        <div
          className="h-full bg-[var(--color-up)] transition-all duration-500"
          style={{ width: `${revealed ? up : 50}%` }}
        />
      </div>
      <div className="mt-1.5 flex justify-between text-xs text-[var(--ink-3)]">
        <span>{compact(total)} people voted</span>
        {Math.abs(support) >= 0.005 && (
          <span>
            Rankly Support {support > 0 ? '+' : ''}
            {(support * 100).toFixed(1)}%
          </span>
        )}
      </div>
    </div>
  );
}

function ChevronUp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
