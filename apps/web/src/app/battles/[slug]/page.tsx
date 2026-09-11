import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { BattleView } from '@rankly/shared';
import { api, ApiError } from '@/lib/api';
import { SITE_URL } from '@/lib/config';
import { BattleVote } from '@/components/battle-vote';
import { ShareButton } from '@/components/share-button';

async function getBattle(slug: string): Promise<BattleView | null> {
  try {
    return await api<BattleView>(`/battles/${encodeURIComponent(slug)}`, {
      auth: true,
      revalidate: 0,
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
  const battle = await getBattle(slug).catch(() => null);
  if (!battle) return { title: 'Battle not found' };
  return {
    title: `${battle.a.label} vs ${battle.b.label}`,
    description: battle.description ?? battle.title,
    alternates: { canonical: `/battles/${battle.slug}` },
    openGraph: { url: `${SITE_URL}/battles/${battle.slug}` },
  };
}

export default async function BattlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const battle = await getBattle(slug);
  if (!battle) notFound();

  return (
    <div className="mx-auto max-w-xl pt-8">
      <div className="mb-3 flex justify-end">
        <ShareButton title={battle.title} path={`/battles/${battle.slug}`} />
      </div>
      <BattleVote battle={battle} />
      <p className="mt-4 rounded-lg bg-[var(--surface-2)] p-3 text-xs text-[var(--ink-3)]">
        Percentages are Community Opinion only. Rankly Support (⚡) is always
        shown separately and never changes them.
      </p>
    </div>
  );
}
