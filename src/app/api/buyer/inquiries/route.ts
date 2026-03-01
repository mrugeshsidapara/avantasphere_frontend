import { NextRequest } from 'next/server';
import { inquiryRepository } from '@/lib/repositories';
import { inquiryCreateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError } from '@/lib/api/response';
import { requireRole } from '@/lib/auth/supabase-auth';

export async function GET(_request: NextRequest) {
  const auth = await requireRole('buyer');
  if (!auth.ok) return apiError(auth.status === 401 ? 'Unauthorized' : 'Forbidden', auth.status);
  if (!auth.user) return apiError('Unauthorized', 401);
  const inquiries = await inquiryRepository.findByBuyerId(auth.user.id, auth.supabase);
  return apiSuccess(inquiries);
}

export async function POST(request: NextRequest) {
  const auth = await requireRole('buyer');
  if (!auth.ok) return apiError(auth.status === 401 ? 'Unauthorized' : 'Forbidden', auth.status);
  if (!auth.user) return apiError('Unauthorized', 401);
  const body = await request.json();
  const parsed = inquiryCreateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const inquiry = await inquiryRepository.create(
    {
      buyerId: auth.user.id,
      productId: parsed.data.productId,
      message: parsed.data.message,
    },
    auth.supabase,
  );
  return apiSuccess(inquiry, 201);
}
