import type { Metadata } from 'next';
import Link from 'next/link';
import { publicApi } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Every category on Rankly — AI, tech, travel, sports, movies, crypto and more.',
};

export const revalidate = 300;

interface CatNode {
  slug: string;
  name: string;
  icon: string | null;
  description: string | null;
  paidSupportEnabled: boolean;
  children: CatNode[];
}

export default async function CategoriesPage() {
  const tree = await publicApi<CatNode[]>('/categories/tree', 300);

  return (
    <div className="pt-8">
      <h1 className="text-2xl font-extrabold tracking-tight">Categories</h1>
      <p className="mt-1 text-[var(--ink-2)]">Rankly can rank practically anything.</p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tree.map((cat) => (
          <div key={cat.slug} className="card p-4">
            <Link
              href={`/c/${cat.slug}`}
              className="flex items-center gap-2 text-base font-bold hover:underline"
            >
              <span>{cat.icon}</span>
              {cat.name}
            </Link>
            {!cat.paidSupportEnabled && (
              <span className="mt-1 inline-block rounded bg-[var(--surface-2)] px-1.5 py-0.5 text-[10px] text-[var(--ink-3)]">
                No paid support
              </span>
            )}
            {cat.children.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {cat.children.map((sub) => (
                  <Link
                    key={sub.slug}
                    href={`/c/${sub.slug}`}
                    className="rounded-md border border-[var(--border)] px-2 py-1 text-xs hover:bg-[var(--surface-2)]"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
