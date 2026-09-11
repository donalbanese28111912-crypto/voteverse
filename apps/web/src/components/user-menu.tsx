'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Viewer } from '@/lib/session';

export function UserMenu({ viewer }: { viewer: Viewer | null }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    if (!viewer) return;
    fetch('/api/points/wallet')
      .then((r) => (r.ok ? r.json() : null))
      .then((w) => setBalance(w?.balance ?? null))
      .catch(() => undefined);
  }, [viewer]);

  if (!viewer) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className="rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-[var(--surface-2)]"
        >
          Log in
        </Link>
        <Link
          href="/register"
          className="rounded-lg bg-[var(--ink)] px-3 py-1.5 text-sm font-medium text-[var(--bg)]"
        >
          Sign up
        </Link>
      </div>
    );
  }

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    setOpen(false);
    router.refresh();
    router.push('/');
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/points"
        className="hidden items-center gap-1 rounded-full border border-[var(--border)] px-2.5 py-1 text-xs font-semibold sm:flex"
      >
        ⚡ {balance === null ? '···' : balance}
      </Link>
      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ink)] text-sm font-bold text-[var(--bg)]"
          aria-label="Account menu"
        >
          {viewer.username.slice(0, 1).toUpperCase()}
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-lg">
            <Link
              href={`/u/${viewer.username}`}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm hover:bg-[var(--surface-2)]"
            >
              @{viewer.username}
            </Link>
            <Link
              href="/points"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm hover:bg-[var(--surface-2)] sm:hidden"
            >
              ⚡ {balance ?? '···'} Points
            </Link>
            <Link
              href="/create"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm hover:bg-[var(--surface-2)]"
            >
              Create a ranking
            </Link>
            <button
              onClick={logout}
              className="block w-full px-3 py-2 text-left text-sm text-[var(--color-down)] hover:bg-[var(--surface-2)]"
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
