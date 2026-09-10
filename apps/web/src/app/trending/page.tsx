import type { Metadata } from 'next';
import Link from 'next/link';
import { publicApi } from '@/lib/api';
import { compact } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Trending',
  description: 'The rankings and opinion topics getting the most votes right now.',
};

export const revalidate = 15;

interface TrendingRow {
  rank: number;
  slug: string;
  title: string;
  type: string;
  category: { slug: string; name: string };
  totalVotes: number;
  trendingScore: number;
  topItems: { label: string; upPercent: number }[];
}

export default async function TrendingPage() {
  const rows = await publicApi<TrendingRow[]>('/trending?limit=30', 15);

  return (
    <div className="pt-8">
      <h1 className="text-2xl font-extrabold tracking-tight">🔥 Trending now</h1>
      <p className="mt-1 text-[var(--ink-2)]">
        Ranked by vote velocity, acceleration and how many different people are
        voting.
      </p>

      <ol className="mt-6 space-y-2">
        {rows.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/rankings/${r.slug}`}
              className="card flex items-center gap-4 p-4 transition hover:border-[var(--ink-3)]"
            >
              <span className="w-8 text-center text-xl font-extrabold tabular-nums text-[var(--ink-3)]">
                {r.rank}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-xs text-[var(--ink-3)]">{r.category.name}</div>
                <div className="font-semibold">{r.title}</div>
                {r.topItems.length > 0 && (
                  <div className="mt-0.5 truncate text-xs text-[var(--ink-3)]">
                    {r.topItems.map((t) => `${t.label} ${t.upPercent}%`).join('  ·  ')}
                  </div>
                )}
              </div>
              <div className="shrink-0 text-right text-xs text-[var(--ink-3)]">
                <div className="tabular-nums">{compact(r.totalVotes)} votes</div>
                <div className="tabular-nums">score {r.trendingScore.toFixed(1)}</div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
      {rows.length === 0 && (
        <div className="card mt-4 p-8 text-center text-[var(--ink-2)]">
          Nothing is trending yet. Cast some votes.
        </div>
      )}
    </div>
  );
}
