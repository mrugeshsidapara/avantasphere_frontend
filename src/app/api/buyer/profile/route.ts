import { NextRequest } from 'next/server';
import { buyerRepository } from '@/lib/repositories';
import { buyerUpdateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError, apiNotFound } from '@/lib/api/response';
import { requireRole } from '@/lib/auth/supabase-auth';

export async function GET(_request: NextRequest) {
  const auth = await requireRole('buyer');
  if (!auth.ok) return apiError(auth.status === 401 ? 'Unauthorized' : 'Forbidden', auth.status);
  if (!auth.user) return apiError('Unauthorized', 401);
  const buyer = await buyerRepository.findById(auth.user.id, auth.supabase);
  if (!buyer) return apiNotFound('Buyer not found');
  return apiSuccess(buyer);
}

export async function PATCH(request: NextRequest) {
  const auth = await requireRole('buyer');
  if (!auth.ok) return apiError(auth.status === 401 ? 'Unauthorized' : 'Forbidden', auth.status);
  if (!auth.user) return apiError('Unauthorized', 401);
  const body = await request.json();
  const parsed = buyerUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const buyer = await buyerRepository.update(auth.user.id, parsed.data, auth.supabase);
  if (!buyer) return apiNotFound('Buyer not found');
  return apiSuccess(buyer);
}
