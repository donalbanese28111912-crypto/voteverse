import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { api, ApiError } from '@/lib/api';
import { compact } from '@/lib/format';

interface EntityView {
  slug: string;
  name: string;
  type: string | null;
  description: string | null;
  imageUrl: string | null;
  overall: { up: number; down: number; totalVotes: number; upPercent: number };
  appearances: {
    ranking: { slug: string; title: string; category: { name: string } };
    up: number;
    down: number;
    upPercent: number;
  }[];
}

async function getEntity(slug: string): Promise<EntityView | null> {
  try {
    return await api<EntityView>(`/entities/${encodeURIComponent(slug)}`, {
      revalidate: 60,
    });
  } catch (e) {
    if (e instanceof ApiError && e.status === 404) return null;
    throw e;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entity = await getEntity(slug).catch(() => null);
  if (!entity) return { title: 'Not found' };
  return {
    title: entity.name,
    description:
      entity.description ??
      `What the Rankly community thinks of ${entity.name}: ${entity.overall.upPercent}% approval across ${compact(entity.overall.totalVotes)} votes.`,
    alternates: { canonical: `/e/${entity.slug}` },
  };
}

export default async function EntityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entity = await getEntity(slug);
  if (!entity) notFound();

  return (
    <div className="pt-8">
      <div className="text-xs uppercase tracking-wide text-[var(--ink-3)]">
        {entity.type}
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight">{entity.name}</h1>
      {entity.description && (
        <p className="mt-1.5 max-w-2xl text-[var(--ink-2)]">{entity.description}</p>
      )}

      {entity.overall.totalVotes > 0 && (
        <div className="card mt-4 p-4">
          <div className="text-sm font-semibold">Overall community verdict</div>
          <div className="mt-2 flex h-3 overflow-hidden rounded-full bg-[var(--color-down-soft)]">
            <div
              className="bg-[var(--color-up)]"
              style={{ width: `${entity.overall.upPercent}%` }}
            />
          </div>
          <div className="mt-1.5 flex justify-between text-xs text-[var(--ink-3)]">
            <span className="text-[var(--color-up)]">{entity.overall.upPercent}% up</span>
            <span>{compact(entity.overall.totalVotes)} votes across Rankly</span>
            <span className="text-[var(--color-down)]">
              {100 - entity.overall.upPercent}% down
            </span>
          </div>
        </div>
      )}

      <h2 className="mt-8 text-lg font-bold">Where {entity.name} appears</h2>
      <ul className="mt-3 space-y-2">
        {entity.appearances.map((a) => (
          <li key={a.ranking.slug}>
            <Link
              href={`/rankings/${a.ranking.slug}`}
              className="card flex items-center justify-between p-3 hover:border-[var(--ink-3)]"
            >
              <span>
                <span className="font-medium">{a.ranking.title}</span>
                <span className="ml-2 text-xs text-[var(--ink-3)]">
                  {a.ranking.category.name}
                </span>
              </span>
              <span className="text-sm font-semibold text-[var(--color-up)]">
                {a.upPercent}%
              </span>
            </Link>
          </li>
        ))}
        {entity.appearances.length === 0 && (
          <li className="card p-6 text-center text-[var(--ink-2)]">
            Not in any ranking yet.
          </li>
        )}
      </ul>
    </div>
  );
}
