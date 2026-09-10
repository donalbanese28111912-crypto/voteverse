import type { Metadata } from 'next';
import { getViewer } from '@/lib/session';
import { NextVoteLoop } from '@/components/next-vote-loop';

export const metadata: Metadata = {
  title: 'Vote',
  description: 'One more vote. See where you stand vs the community, then keep going.',
};

export default async function VotePage() {
  const viewer = await getViewer();
  return (
    <div className="mx-auto max-w-xl pt-10">
      <h1 className="text-center text-2xl font-extrabold tracking-tight">
        Just one more vote
      </h1>
      <p className="mt-1 text-center text-[var(--ink-2)]">
        Vote, see the result, go again.
      </p>
      <div className="mt-6">
        <NextVoteLoop authed={!!viewer} />
      </div>
    </div>
  );
}
