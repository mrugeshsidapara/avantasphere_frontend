import { NextRequest } from "next/server";
import { categoryRepository } from "@/lib/repositories";
import { categoryCreateSchema } from "@/lib/validation/schemas";
import { apiSuccess, apiError, apiNotFound } from "@/lib/api/response";
import { requireRole } from "@/lib/auth/supabase-auth";

export async function GET() {
  try {
    const categories = await categoryRepository.findAll();
    return apiSuccess(categories);
  } catch (e) {
    return apiError("Failed to fetch categories", 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = await requireRole("admin");
    if (!auth.ok) return apiError(auth.status === 401 ? "Unauthorized" : "Forbidden", auth.status);

    const body = await request.json();
    const parsed = categoryCreateSchema.safeParse(body);
    if (!parsed.success) {
      return apiError(parsed.error.errors.map((e) => e.message).join(", "));
    }
    const slug =
      parsed.data.slug ?? parsed.data.name.toLowerCase().replace(/\s+/g, "-");
    const category = await categoryRepository.create(
      {
        ...parsed.data,
        slug,
        description: parsed.data.description ?? "",
        image: parsed.data.image ?? `/uploads/categories/${slug}.jpg`,
        productCount: 0,
        subcategories: parsed.data.subcategories ?? [],
        sortOrder: parsed.data.sortOrder ?? 999,
      },
      auth.supabase,
    );
    return apiSuccess(category, 201);
  } catch (e) {
    return apiError("Failed to create category", 500);
  }
}
