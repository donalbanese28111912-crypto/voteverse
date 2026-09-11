import type { Metadata } from 'next';
import { getViewer } from '@/lib/session';
import { ThisOrThatLoop } from '@/components/this-or-that-loop';

export const metadata: Metadata = {
  title: 'This or That',
  description: 'Beach or mountains? Coffee or tea? One tap, see where the world lands.',
};

export default async function ThisOrThatPage() {
  const viewer = await getViewer();
  return (
    <div className="mx-auto max-w-xl pt-10">
      <h1 className="text-center text-2xl font-extrabold tracking-tight">🎲 This or That</h1>
      <p className="mt-1 text-center text-[var(--ink-2)]">
        No thinking required. Pick one.
      </p>
      <div className="mt-6">
        <ThisOrThatLoop authed={!!viewer} />
      </div>
    </div>
  );
}
