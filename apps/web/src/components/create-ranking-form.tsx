'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function CreateRankingForm({
  categories,
}: {
  categories: { slug: string; name: string }[];
}) {
  const router = useRouter();
  const [items, setItems] = useState(['', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      title: String(fd.get('title') ?? ''),
      description: String(fd.get('description') ?? '') || undefined,
      categorySlug: String(fd.get('categorySlug') ?? ''),
      type: 'LEADERBOARD' as const,
      items: items
        .map((label) => label.trim())
        .filter(Boolean)
        .map((label) => ({ label })),
    };
    if (payload.items.length < 2) {
      setError('Add at least two items.');
      return;
    }
    setLoading(true);
    const res = await fetch('/api/rankings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.status === 401) return router.push('/login?next=/create');
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(body.message ?? 'Could not create ranking.');
      setLoading(false);
      return;
    }
    router.push(`/rankings/${body.slug}`);
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <label className="block">
        <span className="text-sm font-medium">Title</span>
        <input
          name="title"
          required
          maxLength={140}
          placeholder="The 10 best metal bands of all time"
          className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 outline-none focus:border-[var(--ink-3)]"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">Description (optional)</span>
        <textarea
          name="description"
          maxLength={2000}
          rows={2}
          className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 outline-none focus:border-[var(--ink-3)]"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium">Category</span>
        <select
          name="categorySlug"
          required
          defaultValue=""
          className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 outline-none focus:border-[var(--ink-3)]"
        >
          <option value="" disabled>
            Choose a category…
          </option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      <div>
        <span className="text-sm font-medium">Things to rank</span>
        <div className="mt-1 space-y-2">
          {items.map((val, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={val}
                onChange={(e) => {
                  const next = [...items];
                  next[i] = e.target.value;
                  setItems(next);
                }}
                placeholder={`Item ${i + 1}`}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 outline-none focus:border-[var(--ink-3)]"
              />
              {items.length > 2 && (
                <button
                  type="button"
                  onClick={() => setItems(items.filter((_, j) => j !== i))}
                  className="shrink-0 rounded-lg border border-[var(--border)] px-3 text-sm"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setItems([...items, ''])}
          className="mt-2 text-sm text-[var(--ink-2)] underline"
        >
          + Add another
        </button>
      </div>

      {error && <p className="text-sm text-[var(--color-down)]">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-[var(--ink)] px-5 py-2.5 font-semibold text-[var(--bg)] disabled:opacity-60"
      >
        {loading ? 'Creating…' : 'Publish ranking'}
      </button>
    </form>
  );
}
