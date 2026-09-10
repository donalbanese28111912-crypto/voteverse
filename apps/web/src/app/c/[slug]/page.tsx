import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Paginated, RankingCard } from '@rankly/shared';
import { api, ApiError, publicApi } from '@/lib/api';
import { RankingCard as Card } from '@/components/ranking-card';

interface CategoryDetail {
  slug: string;
  name: string;
  icon: string | null;
  description: string | null;
  paidSupportEnabled: boolean;
  parent: { slug: string; name: string } | null;
  children: { slug: string; name: string; icon: string | null }[];
}

async function getCategory(slug: string): Promise<CategoryDetail | null> {
  try {
    return await api<CategoryDetail>(`/categories/${encodeURIComponent(slug)}`, {
      revalidate: 300,
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
  const cat = await getCategory(slug).catch(() => null);
  if (!cat) return { title: 'Category not found' };
  return {
    title: `${cat.name} rankings`,
    description:
      cat.description ?? `Community rankings and opinion votes in ${cat.name} on Rankly.`,
    alternates: { canonical: `/c/${cat.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = await getCategory(slug);
  if (!cat) notFound();

  const rankings = await publicApi<Paginated<RankingCard>>(
    `/rankings?category=${encodeURIComponent(slug)}&pageSize=30&sort=trending`,
    30,
  );

  return (
    <div className="pt-8">
      {cat.parent && (
        <Link href={`/c/${cat.parent.slug}`} className="text-xs text-[var(--ink-3)] hover:underline">
          ← {cat.parent.name}
        </Link>
      )}
      <h1 className="mt-1 flex items-center gap-2 text-2xl font-extrabold tracking-tight">
        <span>{cat.icon}</span> {cat.name}
      </h1>
      {cat.description && <p className="mt-1 text-[var(--ink-2)]">{cat.description}</p>}
      {!cat.paidSupportEnabled && (
        <p className="mt-2 text-xs text-[var(--ink-3)]">
          Paid Rankly Support is disabled in this category to protect its
          credibility.
        </p>
      )}

      {cat.children.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {cat.children.map((sub) => (
            <Link
              key={sub.slug}
              href={`/c/${sub.slug}`}
              className="rounded-md border border-[var(--border)] px-2.5 py-1 text-sm hover:bg-[var(--surface-2)]"
            >
              {sub.icon} {sub.name}
            </Link>
          ))}
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rankings.data.map((c) => (
          <Card key={c.id} card={c} />
        ))}
      </div>
      {rankings.data.length === 0 && (
        <div className="card mt-4 p-8 text-center text-[var(--ink-2)]">
          No rankings here yet. Be the first to create one.
        </div>
      )}
    </div>
  );
}
