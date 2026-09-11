/** Head-to-head "Battle" / "This or That" view — A vs B, one tap to pick a side. */
export interface BattleSide {
  rankingItemId: string;
  label: string;
  slug: string | null;
  imageUrl: string | null;
  picks: number; // organic UP count for this side (community only)
  support: number; // signed fraction, same shape as elsewhere — always separate
  myPick: boolean;
}

export interface BattleView {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  category: { slug: string; name: string };
  window: string;
  totalPicks: number;
  updatedAt: string;
  a: BattleSide;
  b: BattleSide;
  /** organic (community-only) percent for side A, 0..100 */
  aPercent: number;
}

export interface BattleCardView {
  slug: string;
  title: string;
  category: { slug: string; name: string };
  totalPicks: number;
  aLabel: string;
  bLabel: string;
  aPercent: number;
}
