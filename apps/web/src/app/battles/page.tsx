import type { Metadata } from 'next';
import Link from 'next/link';
import type { BattleCardView, Paginated } from '@voteverse/shared';
import { publicApi } from '@/lib/api';
import { compact } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Battles',
  description: 'Head-to-head votes — pick a side, see the split.',
};

export const revalidate = 20;

export default async function BattlesPage() {
  const data = await publicApi<Paginated<BattleCardView>>('/battles?pageSize=40', 20);

  return (
    <div className="pt-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">⚔️ Battles</h1>
          <p className="mt-1 text-[var(--ink-2)]">A vs B. Pick a side, see who wins.</p>
        </div>
        <Link
          href="/this-or-that"
          className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)]"
        >
          🎲 This or That →
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {data.data.map((b) => (
          <Link
            key={b.slug}
            href={`/battles/${b.slug}`}
            className="card flex flex-col p-4 transition hover:border-[var(--ink-3)]"
          >
            <div className="text-xs text-[var(--ink-3)]">{b.category.name}</div>
            <div className="mt-1 flex items-center justify-between gap-2">
              <span className="font-semibold text-[var(--color-up)]">{b.aLabel}</span>
              <span className="text-xs text-[var(--ink-3)]">vs</span>
              <span className="font-semibold text-[var(--color-down)]">{b.bLabel}</span>
            </div>
            <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-[var(--color-down-soft)]">
              <div className="bg-[var(--color-up)]" style={{ width: `${b.aPercent}%` }} />
            </div>
            <div className="mt-1.5 flex justify-between text-xs text-[var(--ink-3)]">
              <span>{b.aPercent}%</span>
              <span>{compact(b.totalPicks)} picks</span>
              <span>{100 - b.aPercent}%</span>
            </div>
          </Link>
        ))}
      </div>
      {data.data.length === 0 && (
        <div className="card mt-4 p-8 text-center text-[var(--ink-2)]">
          No battles yet.
        </div>
      )}
    </div>
  );
}
