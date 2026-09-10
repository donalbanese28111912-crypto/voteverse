import type { Metadata } from 'next';
import Link from 'next/link';
import { publicApi } from '@/lib/api';
import { compact } from '@/lib/format';

interface SearchResults {
  query: string;
  rankings: { slug: string; title: string; totalVotes: number; category: { name: string } }[];
  entities: { slug: string; name: string; entityType: string | null }[];
  categories: { slug: string; name: string; icon: string | null }[];
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  return { title: q ? `Search: ${q}` : 'Search', robots: { index: false } };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = '' } = await searchParams;
  const results =
    q.trim().length >= 2
      ? await publicApi<SearchResults>(`/search?q=${encodeURIComponent(q)}&limit=20`, 10)
      : null;

  const empty =
    results &&
    results.rankings.length === 0 &&
    results.entities.length === 0 &&
    results.categories.length === 0;

  return (
    <div className="pt-8">
      <h1 className="text-2xl font-extrabold tracking-tight">
        {q ? <>Results for &ldquo;{q}&rdquo;</> : 'Search Rankly'}
      </h1>

      {!results && (
        <p className="mt-2 text-[var(--ink-2)]">
          Type at least two characters. Try &ldquo;best cities&rdquo;, &ldquo;AI&rdquo;,
          &ldquo;Bitcoin&rdquo;, &ldquo;movies&rdquo;.
        </p>
      )}
      {empty && <p className="mt-2 text-[var(--ink-2)]">No matches. Try another term.</p>}

      {results && results.categories.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-[var(--ink-3)]">
            Categories
          </h2>
          <div className="flex flex-wrap gap-2">
            {results.categories.map((c) => (
              <Link
                key={c.slug}
                href={`/c/${c.slug}`}
                className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm hover:bg-[var(--surface-2)]"
              >
                {c.icon} {c.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {results && results.rankings.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-[var(--ink-3)]">
            Rankings
          </h2>
          <ul className="space-y-2">
            {results.rankings.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/rankings/${r.slug}`}
                  className="card flex items-center justify-between p-3 hover:border-[var(--ink-3)]"
                >
                  <span>
                    <span className="font-semibold">{r.title}</span>
                    <span className="ml-2 text-xs text-[var(--ink-3)]">
                      {r.category.name}
                    </span>
                  </span>
                  <span className="text-xs text-[var(--ink-3)]">
                    {compact(r.totalVotes)} votes
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {results && results.entities.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-[var(--ink-3)]">
            People &amp; things
          </h2>
          <div className="flex flex-wrap gap-2">
            {results.entities.map((e) => (
              <Link
                key={e.slug}
                href={`/e/${e.slug}`}
                className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm hover:bg-[var(--surface-2)]"
              >
                {e.name}
                {e.entityType && (
                  <span className="ml-1.5 text-xs text-[var(--ink-3)]">{e.entityType}</span>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
