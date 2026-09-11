import Link from 'next/link';
import { publicApi } from '@/lib/api';
import { getViewer } from '@/lib/session';
import { FeedSection } from '@/components/feed-section';
import { HeroVote } from '@/components/hero-vote';
import { BattlesRow } from '@/components/battles-row';
import type { BattleCardView, RankingCard } from '@voteverse/shared';

interface HomeFeed {
  hero: {
    rankingSlug: string;
    rankingItemId: string | null;
    question: string;
    description: string | null;
    category: { slug: string; name: string };
    up: number;
    down: number;
    totalVotes: number;
    upPercent: number;
  } | null;
  trending: (RankingCard & { rank: number; trendingScore: number })[];
  forYou: RankingCard[];
  popular: RankingCard[];
  fresh: RankingCard[];
  battles: BattleCardView[];
  sections: { slug: string; rankings: RankingCard[] }[];
}

const SECTION_META: Record<string, { title: string; subtitle: string }> = {
  ai: { title: 'AI Today', subtitle: 'What the community makes of the latest in AI' },
  sports: { title: 'Sports', subtitle: 'Live takes from this week' },
  crypto: { title: 'Crypto', subtitle: 'Sentiment only — not investment advice' },
  entertainment: { title: 'Entertainment', subtitle: 'Films, shows, music and games' },
};

export const revalidate = 20;

export default async function HomePage() {
  const [feed, viewer] = await Promise.all([
    publicApi<HomeFeed>('/feed/home', 15),
    getViewer(),
  ]);

  return (
    <div className="pt-8">
      <section className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          What do you think?
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-[var(--ink-2)]">
          Voteverse is where the world votes on everything. Vote{' '}
          <span className="font-semibold text-[var(--color-up)]">UP</span> or{' '}
          <span className="font-semibold text-[var(--color-down)]">DOWN</span> and see
          where you stand.
        </p>
      </section>

      {feed.hero && feed.hero.rankingItemId && (
        <div className="mx-auto mt-6 max-w-xl">
          <HeroVote
            rankingItemId={feed.hero.rankingItemId}
            rankingSlug={feed.hero.rankingSlug}
            question={feed.hero.question}
            description={feed.hero.description}
            category={feed.hero.category.name}
            up={feed.hero.up}
            down={feed.hero.down}
            totalVotes={feed.hero.totalVotes}
            upPercent={feed.hero.upPercent}
            authed={!!viewer}
          />
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <Link
          href="/vote"
          className="rounded-full bg-[var(--ink)] px-6 py-3 font-semibold text-[var(--bg)]"
        >
          🎲 Start the vote loop
        </Link>
      </div>

      <BattlesRow battles={feed.battles} />

      <FeedSection
        title="🔥 Trending now"
        subtitle="Where votes are flying in right now"
        href="/trending"
        cards={feed.trending}
      />
      <FeedSection
        title={viewer ? 'For you' : 'Popular rankings'}
        subtitle={viewer ? 'Based on what you vote on' : 'The most-voted rankings on Voteverse'}
        href="/rankings"
        cards={viewer ? feed.forYou : feed.popular}
      />
      {feed.sections.map((s) => (
        <FeedSection
          key={s.slug}
          title={SECTION_META[s.slug]?.title ?? s.slug}
          subtitle={SECTION_META[s.slug]?.subtitle}
          href={`/c/${s.slug}`}
          cards={s.rankings}
        />
      ))}
      <FeedSection
        title="Fresh"
        subtitle="Just added"
        href="/rankings?sort=new"
        cards={feed.fresh}
      />
    </div>
  );
}
