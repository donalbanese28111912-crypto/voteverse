'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { BoostResult } from '@rankly/shared';

const PRESETS = [10, 50, 200];

export function BoostControl({
  rankingItemId,
  initialSupport,
}: {
  rankingItemId: string;
  initialSupport: number;
}) {
  const router = useRouter();
  const [support, setSupport] = useState(initialSupport);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(50);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [justBoosted, setJustBoosted] = useState(false);

  async function submit() {
    setLoading(true);
    setError(null);
    const res = await fetch('/api/points/boost', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ rankingItemId, points: amount }),
    });
    if (res.status === 401) {
      router.push(`/login?next=${encodeURIComponent(location.pathname)}`);
      return;
    }
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(body.message ?? 'Boost failed.');
      setLoading(false);
      return;
    }
    const result = body as BoostResult;
    setSupport(result.support);
    setJustBoosted(true);
    setLoading(false);
    setOpen(false);
    setTimeout(() => setJustBoosted(false), 2000);
    router.refresh();
  }

  return (
    <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[11px]">
      {Math.abs(support) >= 0.005 && (
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold ${
            justBoosted ? 'animate-pop' : ''
          } bg-[var(--surface-2)] text-[var(--ink-2)]`}
          title="Paid Rankly Support — always separate from the Community Score"
        >
          ⚡ Sponsored {support > 0 ? '+' : ''}
          {(support * 100).toFixed(1)}%
        </span>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="rounded-full border border-[var(--border)] px-2 py-0.5 font-medium text-[var(--ink-2)] hover:bg-[var(--surface-2)]"
      >
        ⚡ Boost this
      </button>

      {open && (
        <div className="mt-1 flex w-full flex-wrap items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-2">
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setAmount(p)}
              className={`rounded-md px-2 py-1 text-xs font-semibold ${
                amount === p
                  ? 'bg-[var(--ink)] text-[var(--bg)]'
                  : 'border border-[var(--border)] text-[var(--ink-2)]'
              }`}
            >
              {p}
            </button>
          ))}
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(Math.max(1, Number(e.target.value) || 1))}
            className="w-20 rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-xs"
          />
          <button
            type="button"
            onClick={submit}
            disabled={loading}
            className="rounded-md bg-[var(--ink)] px-3 py-1 text-xs font-semibold text-[var(--bg)] disabled:opacity-60"
          >
            {loading ? '…' : `Spend ${amount} Points`}
          </button>
          {error && <span className="text-[var(--color-down)]">{error}</span>}
        </div>
      )}
    </div>
  );
}
