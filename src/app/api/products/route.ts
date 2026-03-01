import { NextRequest } from "next/server";
import { productRepository } from "@/lib/repositories";
import { productCreateSchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError } from "@/lib/api/response";
import { requireRole } from "@/lib/auth/supabase-auth";

export async function GET(request: NextRequest) {
  debugger;
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
    const auth = await requireRole("admin");
    if (!auth.ok)
      return apiError(
        auth.status === 401 ? "Unauthorized" : "Forbidden",
        auth.status,
      );

    const body = await request.json();
    const parsed = productCreateSchema.safeParse(body);
    if (!parsed.success) {
      return apiError(parsed.error.errors.map((e) => e.message).join(", "));
    }
    const slug =
      parsed.data.slug ??
      parsed.data.name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
    const product = await productRepository.create({
      ...parsed.data,
      slug,
      description: parsed.data.description ?? "",
      images: parsed.data.images ?? [],
      specifications: parsed.data.specifications ?? {},
      applications: parsed.data.applications ?? [],
      certificateIds: parsed.data.certificateIds ?? [],
      sortOrder: parsed.data.sortOrder ?? 999,
    });
    return apiSuccess(product, 201);
  } catch (e) {
    return apiError("Failed to create product", 500);
  }
}
