import { NextRequest } from 'next/server';
import { inquiryRepository } from '@/lib/repositories';
import { inquiryCreateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError } from '@/lib/api/response';

// Protected: requires buyer auth
export async function GET(request: NextRequest) {
  const buyerId = request.headers.get('x-user-id');
  if (!buyerId) return apiError('Unauthorized', 401);
  const inquiries = await inquiryRepository.findByBuyerId(buyerId);
  return apiSuccess(inquiries);
}

export async function POST(request: NextRequest) {
  const buyerId = request.headers.get('x-user-id');
  if (!buyerId) return apiError('Unauthorized', 401);
  const body = await request.json();
  const parsed = inquiryCreateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const inquiry = await inquiryRepository.create({
    buyerId,
    productId: parsed.data.productId,
    message: parsed.data.message,
  });
  return apiSuccess(inquiry, 201);
}
