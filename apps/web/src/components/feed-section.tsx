import Link from 'next/link';
import type { RankingCard as RankingCardData } from '@voteverse/shared';
import { RankingCard } from './ranking-card';

export function FeedSection({
  title,
  subtitle,
  href,
  cards,
}: {
  title: string;
  subtitle?: string;
  href?: string;
  cards: RankingCardData[];
}) {
  if (cards.length === 0) return null;
  return (
    <section className="mt-10">
      <div className="mb-3 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="text-sm text-[var(--ink-3)]">{subtitle}</p>}
        </div>
        {href && (
          <Link href={href} className="text-sm text-[var(--ink-2)] hover:underline">
            See all
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <RankingCard key={c.id} card={c} />
        ))}
      </div>
    </section>
  );
}
