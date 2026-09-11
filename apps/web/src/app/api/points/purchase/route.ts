import { NextResponse, type NextRequest } from 'next/server';
import { purchaseSchema } from '@voteverse/shared';
import { forward } from '@/lib/bff';

export async function POST(req: NextRequest) {
  const json = await req.json().catch(() => null);
  const parsed = purchaseSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ message: 'Invalid package' }, { status: 400 });
  }
  return forward('/points/purchase', { method: 'POST', body: parsed.data });
}
