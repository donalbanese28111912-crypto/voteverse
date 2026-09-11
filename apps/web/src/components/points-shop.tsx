'use client';

import { useEffect, useState } from 'react';
import type { PointsPackage, WalletView } from '@voteverse/shared';
import { PUBLIC_API_V1 } from '@/lib/config';
import { fullNumber, timeAgo } from '@/lib/format';

const TX_LABEL: Record<string, string> = {
  PURCHASE: 'Purchased',
  BOOST_SPEND: 'Boosted a ranking',
  REFUND: 'Refund',
  ADMIN_ADJUST: 'Adjustment',
  SIGNUP_BONUS: 'Welcome bonus',
};

export function PointsShop() {
  const [packages, setPackages] = useState<PointsPackage[]>([]);
  const [wallet, setWallet] = useState<WalletView | null>(null);
  const [buying, setBuying] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    const [pkgRes, walletRes] = await Promise.all([
      fetch(`${PUBLIC_API_V1}/points/packages`),
      fetch('/api/points/wallet'),
    ]);
    if (pkgRes.ok) setPackages(await pkgRes.json());
    if (walletRes.ok) setWallet(await walletRes.json());
  }

  useEffect(() => {
    void load();
  }, []);

  async function buy(pkgId: string) {
    setBuying(pkgId);
    setError(null);
    const res = await fetch('/api/points/purchase', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ packageId: pkgId }),
    });
    if (!res.ok) {
      const b = await res.json().catch(() => ({}));
      setError(b.message ?? 'Purchase failed.');
      setBuying(null);
      return;
    }
    setWallet(await res.json());
    setBuying(null);
  }

  return (
    <div className="mt-6">
      <div className="card flex items-center justify-between p-5">
        <div>
          <div className="text-xs text-[var(--ink-3)]">Your balance</div>
          <div className="text-3xl font-extrabold tabular-nums">
            {wallet ? fullNumber(wallet.balance) : '—'}{' '}
            <span className="text-base font-medium text-[var(--ink-3)]">Points</span>
          </div>
        </div>
        <span className="text-3xl">⚡</span>
      </div>

      {error && <p className="mt-3 text-sm text-[var(--color-down)]">{error}</p>}

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {packages.map((p) => (
          <div key={p.id} className="card flex flex-col items-center gap-1 p-4 text-center">
            <div className="text-lg font-bold tabular-nums">{fullNumber(p.points)}</div>
            <div className="text-xs text-[var(--ink-3)]">Points</div>
            {p.bonusPercent > 0 && (
              <div className="rounded bg-[var(--color-up-soft)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--color-up)]">
                +{p.bonusPercent}% bonus
              </div>
            )}
            <button
              onClick={() => buy(p.id)}
              disabled={buying === p.id}
              className="mt-2 w-full rounded-lg bg-[var(--ink)] py-2 text-sm font-semibold text-[var(--bg)] disabled:opacity-60"
            >
              {buying === p.id ? '…' : `€${(p.priceCents / 100).toFixed(2)}`}
            </button>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-[var(--ink-3)]">
        Recent activity
      </h2>
      <ul className="mt-2 space-y-1.5">
        {wallet?.recent.map((t) => (
          <li
            key={t.id}
            className="flex items-center justify-between rounded-lg bg-[var(--surface-2)] px-3 py-2 text-sm"
          >
            <span>{TX_LABEL[t.type] ?? t.type}</span>
            <span className="flex items-center gap-3 tabular-nums">
              <span className={t.amount > 0 ? 'text-[var(--color-up)]' : 'text-[var(--color-down)]'}>
                {t.amount > 0 ? '+' : ''}
                {t.amount}
              </span>
              <span className="text-xs text-[var(--ink-3)]">{timeAgo(t.createdAt)}</span>
            </span>
          </li>
        ))}
        {wallet && wallet.recent.length === 0 && (
          <li className="text-sm text-[var(--ink-3)]">No activity yet.</li>
        )}
      </ul>
    </div>
  );
}
