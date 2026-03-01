import { NextRequest } from 'next/server';
import { orderRepository } from '@/lib/repositories';
import { apiSuccess, apiError } from '@/lib/api/response';
import { requireRole } from '@/lib/auth/supabase-auth';

export async function GET(_request: NextRequest) {
  const auth = await requireRole('admin');
  if (!auth.ok) return apiError(auth.status === 401 ? 'Unauthorized' : 'Forbidden', auth.status);
  const orders = await orderRepository.findAll(auth.supabase);
  return apiSuccess(orders);
}
