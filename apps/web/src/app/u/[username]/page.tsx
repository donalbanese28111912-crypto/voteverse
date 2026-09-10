import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { api, ApiError } from '@/lib/api';
import { compact, timeAgo } from '@/lib/format';

interface Profile {
  username: string;
  displayName: string | null;
  bio: string | null;
  avatarUrl: string | null;
  reputation: number;
  lifetimeVotes: number;
  createdAt: string;
  rankings: {
    slug: string;
    title: string;
    totalVotes: number;
    category: { name: string };
  }[];
}

async function getProfile(username: string): Promise<Profile | null> {
  try {
    return await api<Profile>(`/users/${encodeURIComponent(username)}`, {
      revalidate: 30,
    });
  } catch (e) {
    if (e instanceof ApiError && e.status === 404) return null;
    throw e;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params;
  return { title: `@${username}`, robots: { index: false } };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const profile = await getProfile(username);
  if (!profile) notFound();

  return (
    <div className="pt-8">
      <div className="flex items-center gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--ink)] text-2xl font-bold text-[var(--bg)]">
          {profile.username.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <h1 className="text-2xl font-extrabold">
            {profile.displayName ?? profile.username}
          </h1>
          <div className="text-sm text-[var(--ink-3)]">
            @{profile.username} · joined {timeAgo(profile.createdAt)}
          </div>
        </div>
      </div>
      {profile.bio && <p className="mt-3 max-w-2xl text-[var(--ink-2)]">{profile.bio}</p>}

      <div className="mt-4 flex gap-6 text-sm">
        <div>
          <div className="text-lg font-bold tabular-nums">
            {compact(profile.lifetimeVotes)}
          </div>
          <div className="text-xs text-[var(--ink-3)]">votes cast</div>
        </div>
        <div>
          <div className="text-lg font-bold tabular-nums">
            {Math.round(profile.reputation * 100)}
          </div>
          <div className="text-xs text-[var(--ink-3)]">reputation</div>
        </div>
        <div>
          <div className="text-lg font-bold tabular-nums">
            {profile.rankings.length}
          </div>
          <div className="text-xs text-[var(--ink-3)]">rankings created</div>
        </div>
      </div>

      <h2 className="mt-8 text-lg font-bold">Rankings by {profile.username}</h2>
      <ul className="mt-3 space-y-2">
        {profile.rankings.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/rankings/${r.slug}`}
              className="card flex items-center justify-between p-3 hover:border-[var(--ink-3)]"
            >
              <span className="font-medium">{r.title}</span>
              <span className="text-xs text-[var(--ink-3)]">
                {compact(r.totalVotes)} votes
              </span>
            </Link>
          </li>
        ))}
        {profile.rankings.length === 0 && (
          <li className="card p-6 text-center text-[var(--ink-2)]">
            No rankings yet.
          </li>
        )}
      </ul>
    </div>
  );
}
