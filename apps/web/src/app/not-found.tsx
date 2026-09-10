import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md pt-24 text-center">
      <h1 className="text-3xl font-extrabold">Nothing here</h1>
      <p className="mt-2 text-[var(--ink-2)]">
        This page moved, or never existed. The community hasn&apos;t ranked it yet.
      </p>
      <Link
        href="/"
        className="mt-5 inline-block rounded-lg bg-[var(--ink)] px-5 py-2.5 font-semibold text-[var(--bg)]"
      >
        Back to Rankly
      </Link>
    </div>
  );
}
