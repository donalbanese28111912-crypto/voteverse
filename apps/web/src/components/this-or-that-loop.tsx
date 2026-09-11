'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import type { BattleView } from '@voteverse/shared';
import { BattleVote } from './battle-vote';

export function ThisOrThatLoop({ authed }: { authed: boolean }) {
  const router = useRouter();
  const [battle, setBattle] = useState<BattleView | null>(null);
  const [loading, setLoading] = useState(true);
  const [streak, setStreak] = useState(0);
  const [key, setKey] = useState(0);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch('/api/next-battle');
    if (res.status === 401) {
      router.push('/login?next=/this-or-that');
      return;
    }
    if (res.ok) {
      const data = (await res.json()) as BattleView | null;
      setBattle(data);
    }
    setLoading(false);
  }, [router]);

  useEffect(() => {
    if (authed) void load();
    else setLoading(false);
  }, [authed, load]);

  function next() {
    setStreak((s) => s + 1);
    setKey((k) => k + 1);
    void load();
  }

  if (!authed) {
    return (
      <div className="card p-8 text-center">
        <h2 className="text-xl font-bold">This or That</h2>
        <p className="mt-2 text-[var(--ink-2)]">
          Log in to start picking — one tap, see the split, go again.
        </p>
        <Link
          href="/login?next=/this-or-that"
          className="mt-4 inline-block rounded-lg bg-[var(--ink)] px-5 py-2.5 font-medium text-[var(--bg)]"
        >
          Log in
        </Link>
      </div>
    );
  }

  if (loading) return <div className="card h-72 animate-pulse" />;

  if (!battle) {
    return (
      <div className="card p-8 text-center">
        <h2 className="text-xl font-bold">You&apos;ve picked every battle 🎉</h2>
        <p className="mt-2 text-[var(--ink-2)]">New ones land all the time — check back soon.</p>
        <Link href="/battles" className="mt-4 inline-block underline">
          Browse battles
        </Link>
      </div>
    );
  }

  return (
    <div>
      {streak > 0 && (
        <p className="mb-2 text-center text-sm font-semibold text-[var(--ink-2)]">
          🔥 {streak} in a row
        </p>
      )}
      <BattleVote key={key} battle={battle} onNext={next} />
    </div>
  );
}
