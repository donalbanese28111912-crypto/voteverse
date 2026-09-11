import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getViewer } from '@/lib/session';
import { PointsShop } from '@/components/points-shop';

export const metadata: Metadata = { title: 'Rankly Points', robots: { index: false } };

export default async function PointsPage() {
  const viewer = await getViewer();
  if (!viewer) redirect('/login?next=/points');
  return (
    <div className="mx-auto max-w-3xl pt-10">
      <h1 className="text-2xl font-extrabold tracking-tight">Rankly Points</h1>
      <p className="mt-1 text-[var(--ink-2)]">
        Points buy <strong>Rankly Support</strong> — a transparent boost you can
        spend on any entry in any ranking. Boosted entries are always labeled
        &ldquo;Sponsored&rdquo; and never change the Community Score, only where an
        item sits relative to others.
      </p>
      <p className="mt-2 rounded-lg bg-[var(--surface-2)] p-3 text-xs text-[var(--ink-3)]">
        Dev/test mode: purchases here top up your wallet directly — no real
        card or payment is processed yet.
      </p>
      <PointsShop />
    </div>
  );
}
