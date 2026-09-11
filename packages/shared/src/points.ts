import { z } from 'zod';

/**
 * Voteverse Points packages (spec §3). Prices are placeholders; bigger packs
 * carry a bonus. `priceCents` + `currency` are kept even though purchase is
 * currently a dev/test-mode stub (no real payment processor wired yet) so a
 * real provider (Stripe) can be dropped in later without changing the shape.
 */
export interface PointsPackage {
  id: string;
  points: number;
  priceCents: number;
  currency: 'EUR';
  bonusPercent: number;
  label: string;
}

export const POINTS_PACKAGES: PointsPackage[] = [
  { id: 'p10', points: 10, priceCents: 100, currency: 'EUR', bonusPercent: 0, label: '10 Points' },
  { id: 'p100', points: 100, priceCents: 1500, currency: 'EUR', bonusPercent: 33, label: '100 Points' },
  { id: 'p250', points: 250, priceCents: 2500, currency: 'EUR', bonusPercent: 60, label: '250 Points' },
  { id: 'p1000', points: 1000, priceCents: 4000, currency: 'EUR', bonusPercent: 150, label: '1,000 Points' },
  { id: 'p2500', points: 2500, priceCents: 8000, currency: 'EUR', bonusPercent: 213, label: '2,500 Points' },
  { id: 'p10000', points: 10000, priceCents: 25000, currency: 'EUR', bonusPercent: 300, label: '10,000 Points' },
];

export const purchaseSchema = z.object({
  packageId: z.enum(POINTS_PACKAGES.map((p) => p.id) as [string, ...string[]]),
});
export type PurchaseInput = z.infer<typeof purchaseSchema>;

export const boostSchema = z.object({
  rankingItemId: z.string().uuid(),
  points: z.coerce.number().int().min(1).max(1_000_000),
});
export type BoostInput = z.infer<typeof boostSchema>;

export interface WalletView {
  balance: number;
  recent: {
    id: string;
    type: string;
    amount: number;
    balanceAfter: number;
    createdAt: string;
    packageId?: string | null;
  }[];
}

export interface BoostResult {
  rankingItemId: string;
  spent: number;
  newBalance: number;
  support: number; // signed fraction, same shape as VoteResult.support
}
