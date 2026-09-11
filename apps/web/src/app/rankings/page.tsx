import type { Metadata } from 'next';
import Link from 'next/link';
import type { Paginated, RankingCard } from '@voteverse/shared';
import { publicApi } from '@/lib/api';
import { RankingCard as Card } from '@/components/ranking-card';

export const metadata: Metadata = {
  title: 'All rankings',
  description: 'Browse every ranking on Voteverse. Sort by trending, newest or most voted.',
};

export const revalidate = 30;

const SORTS = [
  { key: 'trending', label: 'Trending' },
  { key: 'popular', label: 'Most voted' },
  { key: 'new', label: 'Newest' },
];

export default async function RankingsPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string; page?: string; category?: string }>;
}) {
  const sp = await searchParams;
  const sort = SORTS.some((s) => s.key === sp.sort) ? sp.sort! : 'trending';
  const page = Math.max(1, Number(sp.page) || 1);
  const qs = new URLSearchParams({ sort, page: String(page), pageSize: '24' });
  if (sp.category) qs.set('category', sp.category);

  const data = await publicApi<Paginated<RankingCard>>(`/rankings?${qs.toString()}`, 30);

  return (
    <div className="pt-8">
      <h1 className="text-2xl font-extrabold tracking-tight">Rankings</h1>
      <div className="mt-3 flex gap-1">
        {SORTS.map((s) => (
          <Link
            key={s.key}
            href={`/rankings?sort=${s.key}${sp.category ? `&category=${sp.category}` : ''}`}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
              sort === s.key
                ? 'bg-[var(--ink)] text-[var(--bg)]'
                : 'border border-[var(--border)] hover:bg-[var(--surface-2)]'
            }`}
          >
            {s.label}
          </Link>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.data.map((c) => (
          <Card key={c.id} card={c} />
        ))}
      </div>

      {data.data.length === 0 && (
        <div className="card mt-4 p-8 text-center text-[var(--ink-2)]">
          Nothing here yet. Be the first to rank it.
        </div>
      )}

      {data.totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3 text-sm">
          {page > 1 && (
            <Link
              href={`/rankings?sort=${sort}&page=${page - 1}`}
              className="rounded-lg border border-[var(--border)] px-3 py-1.5"
            >
              ← Previous
            </Link>
          )}
          <span className="text-[var(--ink-3)]">
            Page {page} of {data.totalPages}
          </span>
          {page < data.totalPages && (
            <Link
              href={`/rankings?sort=${sort}&page=${page + 1}`}
              className="rounded-lg border border-[var(--border)] px-3 py-1.5"
            >
              Next →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
