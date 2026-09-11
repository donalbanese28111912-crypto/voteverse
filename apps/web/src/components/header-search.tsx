'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { PUBLIC_API_V1 } from '@/lib/config';

interface Results {
  rankings: { slug: string; title: string; isBattle: boolean }[];
  entities: { slug: string; name: string }[];
  categories: { slug: string; name: string }[];
}

export function HeaderSearch() {
  const router = useRouter();
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<Results | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (q.trim().length < 2) {
      setResults(null);
      return;
    }
    const t = setTimeout(async () => {
      try {
        const res = await fetch(
          `${PUBLIC_API_V1}/search?q=${encodeURIComponent(q)}&limit=5`,
        );
        if (res.ok) setResults(await res.json());
      } catch {
        /* ignore */
      }
    }, 180);
    return () => clearTimeout(t);
  }, [q]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (q.trim()) {
      router.push(`/search?q=${encodeURIComponent(q.trim())}`);
      setOpen(false);
    }
  }

  return (
    <div ref={boxRef} className="relative">
      <form onSubmit={submit}>
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search rankings…"
          aria-label="Search"
          className="h-9 w-36 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 text-sm outline-none transition focus:w-56 focus:border-[var(--ink-3)] sm:w-44 sm:focus:w-64"
        />
      </form>
      {open && results && (
        <div className="absolute right-0 mt-2 w-72 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-lg">
          {results.rankings.length === 0 &&
            results.entities.length === 0 &&
            results.categories.length === 0 && (
              <p className="px-3 py-3 text-sm text-[var(--ink-3)]">No matches</p>
            )}
          {results.rankings.map((r) => (
            <button
              key={`r-${r.slug}`}
              onClick={() => {
                router.push(r.isBattle ? `/battles/${r.slug}` : `/rankings/${r.slug}`);
                setOpen(false);
              }}
              className="block w-full truncate px-3 py-2 text-left text-sm hover:bg-[var(--surface-2)]"
            >
              🏆 {r.title}
            </button>
          ))}
          {results.entities.map((e) => (
            <button
              key={`e-${e.slug}`}
              onClick={() => {
                router.push(`/e/${e.slug}`);
                setOpen(false);
              }}
              className="block w-full truncate px-3 py-2 text-left text-sm hover:bg-[var(--surface-2)]"
            >
              ● {e.name}
            </button>
          ))}
          {results.categories.map((c) => (
            <button
              key={`c-${c.slug}`}
              onClick={() => {
                router.push(`/c/${c.slug}`);
                setOpen(false);
              }}
              className="block w-full truncate px-3 py-2 text-left text-sm hover:bg-[var(--surface-2)]"
            >
              # {c.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
