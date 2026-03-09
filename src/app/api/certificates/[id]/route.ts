import { NextRequest } from "next/server";
import { certificateRepository } from "@/lib/repositories";
import {
  apiSuccess,
  apiError,
  apiNotFound,
} from "@/lib/api/response";
import { certificateUpdateSchema } from "@/lib/validation/schemas";
import { requireRole } from "@/lib/auth/supabase-auth";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const auth = await requireRole("admin");
  if (!auth.ok)
    return apiError(
      auth.status === 401 ? "Unauthorized" : "Forbidden",
      auth.status,
    );

  const { id } = await params;
  const body = await request.json();
  const parsed = certificateUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(", "));
  }

  const updated = await certificateRepository.update(
    id,
    parsed.data,
    auth.supabase,
  );
  if (!updated) return apiNotFound("Certificate not found");
  return apiSuccess(updated);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const auth = await requireRole("admin");
  if (!auth.ok)
    return apiError(
      auth.status === 401 ? "Unauthorized" : "Forbidden",
      auth.status,
    );

  const { id } = await params;
  const deleted = await certificateRepository.delete(id, auth.supabase);
  if (!deleted) return apiNotFound("Certificate not found");
  return apiSuccess({ deleted: true });
}

