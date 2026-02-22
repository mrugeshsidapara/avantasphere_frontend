import { NextRequest } from 'next/server';
import { orderRepository } from '@/lib/repositories';
import { apiSuccess, apiError } from '@/lib/api/response';

export async function GET(request: NextRequest) {
  const buyerId = request.headers.get('x-user-id');
  if (!buyerId) return apiError('Unauthorized', 401);
  const orders = await orderRepository.findByBuyerId(buyerId);
  return apiSuccess(orders);
}
