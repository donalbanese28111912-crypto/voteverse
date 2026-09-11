'use client';

import Link from 'next/link';
import type { RankingItemView } from '@rankly/shared';
import { BoostControl } from './boost-control';
import { VoteButtons } from './vote-buttons';

const TREND_BADGE: Record<string, { label: string; cls: string }> = {
  UP: { label: '▲ rising', cls: 'text-[var(--color-up)]' },
  DOWN: { label: '▼ falling', cls: 'text-[var(--color-down)]' },
  NEW: { label: 'new', cls: 'text-[var(--ink-3)]' },
  FLAT: { label: '', cls: '' },
};

export function RankingItemRow({
  item,
  window,
  binary,
}: {
  item: RankingItemView;
  window: string;
  binary: boolean;
}) {
  const trend = TREND_BADGE[item.trend] ?? TREND_BADGE.FLAT!;

  return (
    <div className="card flex items-center gap-4 p-4">
      {!binary && (
        <div className="w-6 shrink-0 text-center text-lg font-bold tabular-nums text-[var(--ink-3)]">
          {item.position}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          {item.slug ? (
            <Link href={`/e/${item.slug}`} className="font-semibold hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold">{item.label}</span>
          )}
          {trend.label && (
            <span className={`text-[11px] font-medium ${trend.cls}`}>{trend.label}</span>
          )}
        </div>
        {item.description && (
          <p className="mt-0.5 truncate text-xs text-[var(--ink-3)]">{item.description}</p>
        )}
        <div className="mt-2">
          <VoteButtons
            rankingItemId={item.id}
            window={window}
            variant={binary ? 'binary' : 'bar'}
            initial={{
              up: item.up,
              down: item.down,
              totalVotes: item.totalVotes,
              upPercent: item.upPercent,
              support: item.support,
              myVote: item.myVote,
            }}
          />
          <BoostControl rankingItemId={item.id} initialSupport={item.support} />
        </div>
      </div>
    </div>
  );
}
