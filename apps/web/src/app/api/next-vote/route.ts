import { forward } from '@/lib/bff';

export async function GET() {
  return forward('/feed/next-vote', { method: 'GET' });
}
