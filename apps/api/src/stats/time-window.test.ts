import { describe, expect, it } from 'vitest';
import { ALL_WINDOWS, isValidWindow, windowStart } from './time-window';

describe('windowStart', () => {
  const now = new Date('2026-09-10T12:00:00.000Z');

  it('ALL_TIME has no lower bound', () => {
    expect(windowStart('ALL_TIME', now)).toBeNull();
  });

  it('YEAR starts on Jan 1 UTC', () => {
    expect(windowStart('YEAR', now)?.toISOString()).toBe('2026-01-01T00:00:00.000Z');
  });

  it('MONTH starts on the 1st UTC', () => {
    expect(windowStart('MONTH', now)?.toISOString()).toBe('2026-09-01T00:00:00.000Z');
  });

  it('DAY is a rolling 24h', () => {
    expect(windowStart('DAY', now)?.toISOString()).toBe('2026-09-09T12:00:00.000Z');
  });

  it('LIVE is a rolling hour', () => {
    expect(windowStart('LIVE', now)?.toISOString()).toBe('2026-09-10T11:00:00.000Z');
  });

  it('covers every enum value', () => {
    for (const w of ALL_WINDOWS) {
      expect(() => windowStart(w, now)).not.toThrow();
    }
  });

  it('validates window strings', () => {
    expect(isValidWindow('WEEK')).toBe(true);
    expect(isValidWindow('nope')).toBe(false);
  });
});
