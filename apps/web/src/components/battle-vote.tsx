'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { BattleView } from '@rankly/shared';
import { compact } from '@/lib/format';
import { BoostControl } from './boost-control';

export function BattleVote({ battle, onNext }: { battle: BattleView; onNext?: () => void }) {
  const router = useRouter();
  const [state, setState] = useState(battle);
  const [pending, setPending] = useState<'A' | 'B' | null>(null);
  const [error, setError] = useState<string | null>(null);

  const revealed = state.a.myPick || state.b.myPick;

  async function pick(side: 'A' | 'B') {
    if (pending) return;
    const item = side === 'A' ? state.a : state.b;
    setPending(side);
    setError(null);
    const res = await fetch('/api/vote', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ rankingItemId: item.rankingItemId, value: 'UP' }),
    });
    if (res.status === 401) {
      router.push(`/login?next=${encodeURIComponent(location.pathname)}`);
      return;
    }
    if (!res.ok) {
      const b = await res.json().catch(() => ({}));
      setError(b.message ?? 'Something went wrong.');
      setPending(null);
      return;
    }
    // vote endpoint returns the picked item's fresh numbers; refetch the
    // whole battle so both sides + totals stay in sync
    const fresh = await fetch(
      `/api/battle/${battle.slug}?window=${battle.window}`,
    ).then((r) => (r.ok ? r.json() : null));
    if (fresh) setState(fresh);
    setPending(null);
    router.refresh();
  }

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-[var(--border)] px-5 py-3">
        <div className="text-xs text-[var(--ink-3)]">{state.category.name}</div>
        <h2 className="text-lg font-bold leading-snug">{state.title}</h2>
        {state.description && (
          <p className="mt-1 text-sm text-[var(--ink-2)]">{state.description}</p>
        )}
      </div>

      <div className="grid grid-cols-2">
        <Side
          label={state.a.label}
          percent={state.aPercent}
          picks={state.a.picks}
          revealed={revealed}
          mine={state.a.myPick}
          color="up"
          loading={pending === 'A'}
          onClick={() => pick('A')}
        />
        <Side
          label={state.b.label}
          percent={100 - state.aPercent}
          picks={state.b.picks}
          revealed={revealed}
          mine={state.b.myPick}
          color="down"
          loading={pending === 'B'}
          onClick={() => pick('B')}
        />
      </div>

      <div className="flex items-center justify-between border-t border-[var(--border)] px-5 py-2.5 text-xs text-[var(--ink-3)]">
        <span>{compact(state.totalPicks)} picks</span>
        {onNext && revealed && (
          <button onClick={onNext} className="font-semibold text-[var(--ink)] underline">
            Next →
          </button>
        )}
      </div>

      {error && <p className="px-5 pb-3 text-sm text-[var(--color-down)]">{error}</p>}

      <div className="flex divide-x divide-[var(--border)] border-t border-[var(--border)]">
        <div className="flex-1 px-3 py-2">
          <BoostControl rankingItemId={state.a.rankingItemId} initialSupport={state.a.support} />
        </div>
        <div className="flex-1 px-3 py-2">
          <BoostControl rankingItemId={state.b.rankingItemId} initialSupport={state.b.support} />
        </div>
      </div>
    </div>
  );
}

function Side({
  label,
  percent,
  picks,
  revealed,
  mine,
  color,
  loading,
  onClick,
}: {
  label: string;
  percent: number;
  picks: number;
  revealed: boolean;
  mine: boolean;
  color: 'up' | 'down';
  loading: boolean;
  onClick: () => void;
}) {
  const accent = color === 'up' ? 'var(--color-up)' : 'var(--color-down)';
  const soft = color === 'up' ? 'var(--color-up-soft)' : 'var(--color-down-soft)';
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="flex flex-col items-center gap-2 px-4 py-8 text-center transition disabled:opacity-70"
      style={mine ? { background: soft } : undefined}
    >
      <span className="text-lg font-bold" style={mine ? { color: accent } : undefined}>
        {label}
      </span>
      {revealed ? (
        <>
          <span className="text-3xl font-extrabold tabular-nums" style={{ color: accent }}>
            {percent}%
          </span>
          <span className="text-xs text-[var(--ink-3)]">{compact(picks)} picks</span>
        </>
      ) : (
        <span className="rounded-full border border-[var(--border)] px-4 py-1.5 text-sm font-semibold">
          Pick this
        </span>
      )}
    </button>
  );
}
