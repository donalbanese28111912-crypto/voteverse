'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { WINDOW_LABELS, WINDOW_ORDER } from '@/lib/format';

export function WindowTabs({ current }: { current: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  function select(w: string) {
    const next = new URLSearchParams(params);
    if (w === 'ALL_TIME') next.delete('window');
    else next.set('window', w);
    router.push(`${pathname}?${next.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-wrap gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-1">
      {WINDOW_ORDER.map((w) => (
        <button
          key={w}
          onClick={() => select(w)}
          aria-pressed={current === w}
          className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
            current === w
              ? 'bg-[var(--surface)] text-[var(--ink)] shadow-sm'
              : 'text-[var(--ink-3)] hover:text-[var(--ink)]'
          }`}
        >
          {WINDOW_LABELS[w]}
        </button>
      ))}
    </div>
  );
}
