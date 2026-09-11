import { forward } from '@/lib/bff';

export async function GET() {
  return forward('/battles/next', { method: 'GET' });
}
