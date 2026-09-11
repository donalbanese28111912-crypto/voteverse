import Link from 'next/link';
import { getViewer } from '@/lib/session';
import { Logo } from './logo';
import { HeaderSearch } from './header-search';
import { UserMenu } from './user-menu';

const NAV = [
  { href: '/rankings', label: 'Rankings' },
  { href: '/battles', label: 'Battles' },
  { href: '/trending', label: 'Trending' },
  { href: '/categories', label: 'Categories' },
  { href: '/vote', label: 'Vote' },
];

export async function SiteHeader() {
  const viewer = await getViewer();
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
        <Link href="/" aria-label="Rankly home">
          <Logo />
        </Link>
        <nav className="ml-4 hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-md px-2.5 py-1.5 text-sm text-[var(--ink-2)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <HeaderSearch />
          <UserMenu viewer={viewer} />
        </div>
      </div>
    </header>
  );
}
