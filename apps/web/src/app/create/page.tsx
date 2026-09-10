import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { publicApi } from '@/lib/api';
import { getViewer } from '@/lib/session';
import { CreateRankingForm } from '@/components/create-ranking-form';

export const metadata: Metadata = { title: 'Create a ranking', robots: { index: false } };

export default async function CreatePage() {
  const viewer = await getViewer();
  if (!viewer) redirect('/login?next=/create');

  const categories = await publicApi<{ slug: string; name: string; parentId: string | null }[]>(
    '/categories',
    300,
  );

  return (
    <div className="mx-auto max-w-2xl pt-10">
      <h1 className="text-2xl font-extrabold tracking-tight">Create a ranking</h1>
      <p className="mt-1 text-[var(--ink-2)]">
        Add a title and at least two things to rank. The community votes each one
        UP or DOWN.
      </p>
      <CreateRankingForm categories={categories} />
    </div>
  );
}
