'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { PUBLIC_API_V1 } from '@/lib/config';

function sessionId(): string {
  try {
    let id = localStorage.getItem('voteverse_sid');
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem('voteverse_sid', id);
    }
    return id;
  } catch {
    return 'anon';
  }
}

export function track(name: string, props?: Record<string, unknown>): void {
  try {
    void fetch(`${PUBLIC_API_V1}/analytics/events`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      credentials: 'include',
      keepalive: true,
      body: JSON.stringify({
        name,
        path: location.pathname,
        sessionId: sessionId(),
        props,
      }),
    });
  } catch {
    /* analytics must never break the page */
  }
}

export function Analytics() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    track('page_view');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, search]);

  return null;
}
