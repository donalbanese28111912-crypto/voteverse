export function compact(n: number): string {
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(n);
}

export function fullNumber(n: number): string {
  return new Intl.NumberFormat('en').format(n);
}

export function timeAgo(iso: string): string {
  const then = new Date(iso).getTime();
  const secs = Math.max(1, Math.round((Date.now() - then) / 1000));
  if (secs < 60) return `${secs}s ago`;
  const mins = Math.round(secs / 60);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.round(hrs / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.round(months / 12)}y ago`;
}

export const WINDOW_LABELS: Record<string, string> = {
  ALL_TIME: 'All time',
  YEAR: 'This year',
  MONTH: 'This month',
  WEEK: 'This week',
  DAY: 'Today',
  LIVE: 'Live',
};

export const WINDOW_ORDER = ['ALL_TIME', 'YEAR', 'MONTH', 'WEEK', 'DAY', 'LIVE'];
