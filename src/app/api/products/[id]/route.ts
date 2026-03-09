import { NextRequest } from "next/server";
import { productRepository } from "@/lib/repositories";
import { productUpdateSchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError, apiNotFound } from "@/lib/api/response";
import { requireRole } from "@/lib/auth/supabase-auth";
import type { Product } from "@/lib/types";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const product = await productRepository.findById(id);
  if (!product) return apiNotFound("Product not found");
  return apiSuccess(product);
}

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

  const product = await productRepository.update(id, body, auth.supabase);
  if (!product) return apiNotFound("Product not found");
  return apiSuccess(product);
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
  const deleted = await productRepository.delete(id, auth.supabase);
  if (!deleted) return apiNotFound("Product not found");
  return apiSuccess({ deleted: true });
}
