import Link from 'next/link';
import type { RankingCard as RankingCardData } from '@voteverse/shared';
import { compact } from '@/lib/format';

export function RankingCard({ card }: { card: RankingCardData }) {
  const isBinary = card.type === 'BINARY';
  return (
    <Link
      href={`/rankings/${card.slug}`}
      className="card group flex h-full flex-col p-4 transition hover:border-[var(--ink-3)]"
    >
      <div className="flex items-center gap-2 text-xs text-[var(--ink-3)]">
        <span>{card.category.name}</span>
        {isBinary && (
          <span className="rounded bg-[var(--surface-2)] px-1.5 py-0.5 font-medium">
            Opinion
          </span>
        )}
      </div>
      <h3 className="mt-1.5 text-[15px] font-semibold leading-snug">{card.title}</h3>

      {card.topItems.length > 0 && !isBinary && (
        <ol className="mt-3 flex-1 space-y-1.5">
          {card.topItems.slice(0, 4).map((it, i) => (
            <li key={it.label} className="flex items-center gap-2 text-sm">
              <span className="w-4 text-right text-xs tabular-nums text-[var(--ink-3)]">
                {i + 1}
              </span>
              <span className="min-w-0 flex-1 truncate">{it.label}</span>
              <span className="tabular-nums text-xs font-medium text-[var(--color-up)]">
                {it.upPercent}%
              </span>
            </li>
          ))}
        </ol>
      )}

      {isBinary && card.topItems[0] && (
        <div className="mt-3 flex-1">
          <div className="flex h-2 overflow-hidden rounded-full bg-[var(--color-down-soft)]">
            <div
              className="bg-[var(--color-up)]"
              style={{ width: `${card.topItems[0].upPercent}%` }}
            />
          </div>
          <div className="mt-1 flex justify-between text-xs text-[var(--ink-2)]">
            <span className="text-[var(--color-up)]">{card.topItems[0].upPercent}% up</span>
            <span className="text-[var(--color-down)]">
              {100 - card.topItems[0].upPercent}% down
            </span>
          </div>
        </div>
      )}

      <div className="mt-3 flex items-center justify-between border-t border-[var(--border)] pt-2.5 text-xs text-[var(--ink-3)]">
        <span>{compact(card.totalVotes)} votes</span>
        <span className="font-medium text-[var(--ink)] group-hover:underline">
          View ranking →
        </span>
      </div>
    </Link>
  );
}
