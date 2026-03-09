import { NextRequest } from "next/server";
import { productRepository } from "@/lib/repositories";
import { productCreateSchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError } from "@/lib/api/response";
import { requireRole } from "@/lib/auth/supabase-auth";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get("categoryId");
  try {
    const products = categoryId
      ? await productRepository.findByCategoryId(categoryId)
      : await productRepository.findAll();
    return apiSuccess(products);
  } catch (e) {
    console.error("GET /api/products error", e);
    const msg = e instanceof Error ? e.message : "Failed to fetch products";
    return apiError(msg, 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log("POST /api/products called");
    console.log("Request body:", await request.text()); // Log raw body for debugging
    const auth = await requireRole("admin");
    if (!auth.ok)
      return apiError(
        auth.status === 401 ? "Unauthorized" : "Forbidden",
        auth.status,
      );

    const body = await request.json();
    const product = await productRepository.update(body, auth.supabase);
    return apiSuccess(product, 201);
  } catch (e) {
    return apiError("Failed to create product", 500);
  }
}
