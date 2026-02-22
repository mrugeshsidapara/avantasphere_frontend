import { NextRequest } from 'next/server';
import { inquiryRepository } from '@/lib/repositories';
import { inquiryUpdateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError, apiNotFound } from '@/lib/api/response';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const role = request.headers.get('x-user-role');
  if (role !== 'admin') return apiError('Forbidden', 403);
  const { id } = await params;
  const body = await request.json();
  const parsed = inquiryUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const inquiry = await inquiryRepository.update(id, parsed.data);
  if (!inquiry) return apiNotFound('Inquiry not found');
  return apiSuccess(inquiry);
}
