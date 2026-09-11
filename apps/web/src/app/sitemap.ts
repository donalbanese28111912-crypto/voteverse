import type { MetadataRoute } from 'next';
import { publicApi } from '@/lib/api';
import { SITE_URL } from '@/lib/config';
import type { BattleCardView, Paginated, RankingCard } from '@voteverse/shared';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'hourly', priority: 1 },
    { url: `${SITE_URL}/rankings`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${SITE_URL}/battles`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${SITE_URL}/this-or-that`, changeFrequency: 'daily', priority: 0.7 },
    { url: `${SITE_URL}/trending`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${SITE_URL}/categories`, changeFrequency: 'weekly', priority: 0.6 },
  ];

  try {
    const [rankings, battles, categories] = await Promise.all([
      publicApi<Paginated<RankingCard>>('/rankings?pageSize=100&sort=popular', 3600),
      publicApi<Paginated<BattleCardView>>('/battles?pageSize=100', 3600),
      publicApi<{ slug: string }[]>('/categories', 3600),
    ]);
    for (const r of rankings.data) {
      base.push({
        url: `${SITE_URL}/rankings/${r.slug}`,
        lastModified: r.updatedAt,
        changeFrequency: 'daily',
        priority: 0.8,
      });
    }
    for (const b of battles.data) {
      base.push({
        url: `${SITE_URL}/battles/${b.slug}`,
        changeFrequency: 'daily',
        priority: 0.7,
      });
    }
    for (const c of categories) {
      base.push({
        url: `${SITE_URL}/c/${c.slug}`,
        changeFrequency: 'daily',
        priority: 0.5,
      });
    }
  } catch {
    /* API down at build — return the static routes */
  }

  return base;
}
