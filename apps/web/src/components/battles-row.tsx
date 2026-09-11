import Link from 'next/link';
import type { BattleCardView } from '@rankly/shared';
import { compact } from '@/lib/format';

export function BattlesRow({ battles }: { battles: BattleCardView[] }) {
  if (battles.length === 0) return null;
  return (
    <section className="mt-10">
      <div className="mb-3 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-bold tracking-tight">⚔️ Battles</h2>
          <p className="text-sm text-[var(--ink-3)]">Pick a side</p>
        </div>
        <Link href="/this-or-that" className="text-sm text-[var(--ink-2)] hover:underline">
          This or That →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {battles.map((b) => (
          <Link
            key={b.slug}
            href={`/battles/${b.slug}`}
            className="card p-3 transition hover:border-[var(--ink-3)]"
          >
            <div className="flex items-center justify-between text-sm font-semibold">
              <span className="truncate text-[var(--color-up)]">{b.aLabel}</span>
              <span className="px-1 text-[10px] text-[var(--ink-3)]">vs</span>
              <span className="truncate text-[var(--color-down)]">{b.bLabel}</span>
            </div>
            <div className="mt-2 flex h-1.5 overflow-hidden rounded-full bg-[var(--color-down-soft)]">
              <div className="bg-[var(--color-up)]" style={{ width: `${b.aPercent}%` }} />
            </div>
            <div className="mt-1 text-center text-[11px] text-[var(--ink-3)]">
              {compact(b.totalPicks)} picks
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
