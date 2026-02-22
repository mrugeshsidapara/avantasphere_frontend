import { NextRequest } from 'next/server';
import { certificateRepository } from '@/lib/repositories';
import { apiSuccess } from '@/lib/api/response';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const visibleOnly = searchParams.get('visible') === 'true';
  const certificates = visibleOnly
    ? await certificateRepository.findVisible()
    : await certificateRepository.findAll();
  return apiSuccess(certificates);
}
