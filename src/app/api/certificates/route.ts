import { NextRequest } from "next/server";
import { certificateRepository } from "@/lib/repositories";
import { apiSuccess, apiError } from "@/lib/api/response";
import { certificateCreateSchema } from "@/lib/validation/schemas";
import { requireRole } from "@/lib/auth/supabase-auth";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const visibleOnly = searchParams.get("visible") === "true";
  const certificates = visibleOnly
    ? await certificateRepository.findVisible()
    : await certificateRepository.findAll();
  return apiSuccess(certificates);
}

export async function POST(request: NextRequest) {
  const auth = await requireRole("admin");
  if (!auth.ok)
    return apiError(
      auth.status === 401 ? "Unauthorized" : "Forbidden",
      auth.status,
    );

  const body = await request.json();
  const parsed = certificateCreateSchema.safeParse(body);
  if (!parsed.success) {
    return apiError(parsed.error.errors.map((e) => e.message).join(", "));
  }

  const created = await certificateRepository.create(
    {
      name: parsed.data.name,
      description: parsed.data.description ?? "",
      image: parsed.data.image ?? "",
      visible: parsed.data.visible ?? true,
      sortOrder: parsed.data.sortOrder ?? 999,
    },
    auth.supabase,
  );

  return apiSuccess(created, 201);
}
