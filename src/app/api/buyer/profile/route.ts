import { NextRequest } from 'next/server';
import { buyerRepository } from '@/lib/repositories';
import { buyerUpdateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError, apiNotFound } from '@/lib/api/response';

export async function GET(request: NextRequest) {
  const buyerId = request.headers.get('x-user-id');
  if (!buyerId) return apiError('Unauthorized', 401);
  const buyer = await buyerRepository.findById(buyerId);
  if (!buyer) return apiNotFound('Buyer not found');
  return apiSuccess(buyer);
}

export async function PATCH(request: NextRequest) {
  const buyerId = request.headers.get('x-user-id');
  if (!buyerId) return apiError('Unauthorized', 401);
  const body = await request.json();
  const parsed = buyerUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const buyer = await buyerRepository.update(buyerId, parsed.data);
  if (!buyer) return apiNotFound('Buyer not found');
  return apiSuccess(buyer);
}
