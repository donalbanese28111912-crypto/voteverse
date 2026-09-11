import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { RankingCard, RankingView } from '@voteverse/shared';
import { api, ApiError, publicApi } from '@/lib/api';
import { SITE_URL } from '@/lib/config';
import { compact, timeAgo, WINDOW_LABELS } from '@/lib/format';
import { RankingItemRow } from '@/components/ranking-item-row';
import { WindowTabs } from '@/components/window-tabs';
import { ShareButton } from '@/components/share-button';
import { RankingCard as Card } from '@/components/ranking-card';

const WINDOWS = ['ALL_TIME', 'YEAR', 'MONTH', 'WEEK', 'DAY', 'LIVE'];

async function getRanking(slug: string, window: string): Promise<RankingView | null> {
  try {
    return await api<RankingView>(
      `/rankings/${encodeURIComponent(slug)}?window=${window}`,
      { auth: true, revalidate: 0 },
    );
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
  const ranking = await getRanking(slug, 'ALL_TIME').catch(() => null);
  if (!ranking) return { title: 'Ranking not found' };
  const top = ranking.items.slice(0, 3).map((i) => i.label).join(', ');
  const description =
    ranking.description ??
    `${ranking.title}: ${compact(ranking.totalVotes)} community votes. Top: ${top}.`;
  return {
    title: ranking.title,
    description,
    alternates: { canonical: `/rankings/${ranking.slug}` },
    openGraph: {
      title: ranking.title,
      description,
      url: `${SITE_URL}/rankings/${ranking.slug}`,
    },
  };
}

export default async function RankingPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ window?: string }>;
}) {
  const { slug } = await params;
  const { window: rawWindow } = await searchParams;
  const window = rawWindow && WINDOWS.includes(rawWindow) ? rawWindow : 'ALL_TIME';

  const ranking = await getRanking(slug, window);
  if (!ranking) notFound();

  const related = await publicApi<RankingCard[]>(
    `/rankings/${encodeURIComponent(slug)}/related`,
    60,
  ).catch(() => []);

  const isBinary = ranking.type === 'BINARY';

  const jsonLd =
    !isBinary && ranking.items.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: ranking.title,
          description: ranking.description ?? undefined,
          numberOfItems: ranking.items.length,
          itemListElement: ranking.items.map((it) => ({
            '@type': 'ListItem',
            position: it.position,
            name: it.label,
          })),
        }
      : null;

  return (
    <article className="pt-8">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <nav className="text-xs text-[var(--ink-3)]">
        <Link href="/rankings" className="hover:underline">
          Rankings
        </Link>{' '}
        /{' '}
        <Link href={`/c/${ranking.category.slug}`} className="hover:underline">
          {ranking.category.name}
        </Link>
      </nav>

      <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {ranking.title}
          </h1>
          {ranking.description && (
            <p className="mt-1.5 max-w-2xl text-[var(--ink-2)]">{ranking.description}</p>
          )}
        </div>
        <ShareButton title={ranking.title} path={`/rankings/${ranking.slug}`} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--ink-3)]">
        <span>Based on {compact(ranking.totalVotes)} votes</span>
        <span>{compact(ranking.distinctVoters)} voters</span>
        <span>Updated {timeAgo(ranking.updatedAt)}</span>
        {ranking.paidSupportEnabled ? (
          ranking.supportShare > 0.001 && (
            <span>Includes {(ranking.supportShare * 100).toFixed(1)}% supported votes</span>
          )
        ) : (
          <span className="text-[var(--ink-2)]">Paid support disabled for this topic</span>
        )}
      </div>

      <div className="mt-4">
        <WindowTabs current={window} />
        <p className="mt-1.5 text-xs text-[var(--ink-3)]">
          Showing {WINDOW_LABELS[window]?.toLowerCase()} results
        </p>
      </div>

      <div className="mt-5 space-y-2">
        {ranking.items.length === 0 && (
          <div className="card p-8 text-center text-[var(--ink-2)]">
            Be the first person to vote on this one.
          </div>
        )}
        {ranking.items.map((item) => (
          <RankingItemRow
            key={item.id}
            item={item}
            window={window}
            binary={isBinary}
          />
        ))}
      </div>

      <p className="mt-6 rounded-lg bg-[var(--surface-2)] p-3 text-xs text-[var(--ink-3)]">
        This is Voteverse Community Opinion, not objective fact. Scores use a
        statistical model (Wilson + Bayesian) so large, consistent votes outweigh
        small lucky ones.
      </p>

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-3 text-lg font-bold">Related rankings</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <Card key={c.id} card={c} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
