import type { TimeWindow } from '@prisma/client';

export const ALL_WINDOWS: TimeWindow[] = [
  'ALL_TIME',
  'YEAR',
  'MONTH',
  'WEEK',
  'DAY',
  'LIVE',
];

/**
 * Start instant for a window, or null for ALL_TIME.
 * YEAR/MONTH are calendar-aligned (UTC); WEEK/DAY/LIVE are rolling.
 */
export function windowStart(window: TimeWindow, now = new Date()): Date | null {
  switch (window) {
    case 'ALL_TIME':
      return null;
    case 'YEAR':
      return new Date(Date.UTC(now.getUTCFullYear(), 0, 1));
    case 'MONTH':
      return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
    case 'WEEK':
      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    case 'DAY':
      return new Date(now.getTime() - 24 * 60 * 60 * 1000);
    case 'LIVE':
      return new Date(now.getTime() - 60 * 60 * 1000);
    default:
      return null;
  }
}

export function isValidWindow(value: string): value is TimeWindow {
  return (ALL_WINDOWS as string[]).includes(value);
}
