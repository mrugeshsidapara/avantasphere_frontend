import { NextRequest } from 'next/server';
import { certificateRepository } from '@/lib/repositories';
import { certificateUpdateSchema } from '@/lib/validation/schemas';
import { apiSuccess, apiError, apiNotFound } from '@/lib/api/response';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const parsed = certificateUpdateSchema.pick({ visible: true }).safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(', '));
  }
  const cert = await certificateRepository.update(id, { visible: parsed.data.visible });
  if (!cert) return apiNotFound('Certificate not found');
  return apiSuccess(cert);
}
