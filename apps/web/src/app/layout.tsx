import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { SiteHeader } from '@/components/site-header';
import { Analytics } from '@/components/analytics';
import { AnimatedBackground } from '@/components/animated-background';
import { SITE_URL } from '@/lib/config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Voteverse — Discover. Vote. Rank.',
    template: '%s — Voteverse',
  },
  description:
    "Voteverse is where the world votes on everything. What does the community actually think is the best? Vote UP or DOWN and see where you stand.",
  applicationName: 'Voteverse',
  openGraph: {
    siteName: 'Voteverse',
    type: 'website',
    url: SITE_URL,
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0c' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <Suspense fallback={<div className="h-14 border-b border-[var(--border)]" />}>
          <SiteHeader />
        </Suspense>
        <main className="mx-auto min-h-[calc(100vh-3.5rem)] max-w-6xl px-4 pb-20">
          {children}
        </main>
        <footer className="border-t border-[var(--border)] py-8 text-center text-xs text-[var(--ink-3)]">
          <p>Voteverse — the world&apos;s opinion layer. Community opinion, not fact.</p>
          <nav className="mt-2 flex justify-center gap-4">
            <Link href="/impressum" className="hover:underline">
              Impressum
            </Link>
          </nav>
        </footer>
        <Suspense>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
