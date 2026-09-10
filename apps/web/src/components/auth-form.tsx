'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get('next') || '/';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = new FormData(e.currentTarget);
    const payload =
      mode === 'login'
        ? { email: form.get('email'), password: form.get('password') }
        : {
            email: form.get('email'),
            username: form.get('username'),
            password: form.get('password'),
          };

    const res = await fetch(`/api/auth/${mode}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.message ?? 'Something went wrong.');
      setLoading(false);
      return;
    }
    router.push(next);
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-sm pt-16">
      <h1 className="text-2xl font-extrabold tracking-tight">
        {mode === 'login' ? 'Log in to Rankly' : 'Create your Rankly account'}
      </h1>
      <p className="mt-1 text-sm text-[var(--ink-2)]">
        An account is required to vote — it keeps rankings honest.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        {mode === 'register' && (
          <Field name="username" label="Username" autoComplete="username" />
        )}
        <Field name="email" label="Email" type="email" autoComplete="email" />
        <Field
          name="password"
          label="Password"
          type="password"
          autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          hint={mode === 'register' ? 'At least 10 characters' : undefined}
        />

        {error && (
          <p className="rounded-lg bg-[var(--color-down-soft)] px-3 py-2 text-sm text-[var(--color-down)]">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[var(--ink)] py-2.5 font-semibold text-[var(--bg)] disabled:opacity-60"
        >
          {loading ? 'Please wait…' : mode === 'login' ? 'Log in' : 'Sign up'}
        </button>
      </form>

      <p className="mt-4 text-sm text-[var(--ink-3)]">
        {mode === 'login' ? (
          <>
            New here?{' '}
            <Link href={`/register?next=${encodeURIComponent(next)}`} className="underline">
              Create an account
            </Link>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link href={`/login?next=${encodeURIComponent(next)}`} className="underline">
              Log in
            </Link>
          </>
        )}
      </p>

      {mode === 'login' && (
        <p className="mt-6 rounded-lg bg-[var(--surface-2)] p-3 text-xs text-[var(--ink-3)]">
          Demo account: <code>demo@seed.rankly.dev</code> / <code>password123</code>
        </p>
      )}
    </div>
  );
}

function Field({
  name,
  label,
  type = 'text',
  autoComplete,
  hint,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 outline-none focus:border-[var(--ink-3)]"
      />
      {hint && <span className="mt-0.5 block text-xs text-[var(--ink-3)]">{hint}</span>}
    </label>
  );
}
