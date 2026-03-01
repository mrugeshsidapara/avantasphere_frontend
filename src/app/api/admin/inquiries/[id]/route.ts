import { NextRequest } from 'next/server';
import { inquiryRepository } from '@/lib/repositories';
import { inquiryUpdateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError, apiNotFound } from '@/lib/api/response';
import { requireRole } from '@/lib/auth/supabase-auth';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = await requireRole('admin');
  if (!auth.ok) return apiError(auth.status === 401 ? 'Unauthorized' : 'Forbidden', auth.status);
  const { id } = await params;
  const body = await request.json();
  const parsed = inquiryUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const inquiry = await inquiryRepository.update(id, parsed.data, auth.supabase);
  if (!inquiry) return apiNotFound('Inquiry not found');
  return apiSuccess(inquiry);
}
