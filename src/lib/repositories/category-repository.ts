import type { SupabaseClient } from "@supabase/supabase-js";
import type { Category, CategoryRpcRow } from "@/lib/types";
import { getSupabaseBackendClient } from "@/lib/supabase/server";

export interface ICategoryRepository {
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | null>;
  findBySlug(slug: string): Promise<Category | null>;
  create(
    data: Omit<Category, "id">,
    client?: SupabaseClient,
  ): Promise<Category>;
  update(
    id: string,
    data: Partial<Category>,
    client?: SupabaseClient,
  ): Promise<Category | null>;
  delete(id: string, client?: SupabaseClient): Promise<boolean>;
}

export class CategoryRepository implements ICategoryRepository {
  async findAll(): Promise<Category[]> {
    const supabase = getSupabaseBackendClient();
    const { data, error } = await supabase.rpc(
      "get_categories_with_product_count",
    );
    if (error) throw error;
    return (data ?? []).map((c: CategoryRpcRow) => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      description: c.description ?? "",
      image: c.image ?? "",
      productCount: c.product_count ?? 0,
      subcategories: (c.subcategories as unknown as string[]) ?? [],
      sortOrder: c.sort_order ?? 999,
    }));
  }

  async findById(id: string): Promise<Category | null> {
    const supabase = getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("categories")
      .select(
        "id,name,slug,description,image,product_count,subcategories,sort_order",
      )
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
      description: data.description ?? "",
      image: data.image ?? "",
      productCount: data.product_count ?? 0,
      subcategories: (data.subcategories as unknown as string[]) ?? [],
      sortOrder: data.sort_order ?? 999,
    };
  }

  async findBySlug(slug: string): Promise<Category | null> {
    const supabase = getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("categories")
      .select(
        "id,name,slug,description,image,product_count,subcategories,sort_order",
      )
      .eq("slug", slug)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
      description: data.description ?? "",
      image: data.image ?? "",
      productCount: data.product_count ?? 0,
      subcategories: (data.subcategories as unknown as string[]) ?? [],
      sortOrder: data.sort_order ?? 999,
    };
  }

  async create(
    input: Omit<Category, "id">,
    client?: SupabaseClient,
  ): Promise<Category> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("categories")
      .insert({
        name: input.name,
        slug: input.slug,
        description: input.description ?? "",
        image: input.image ?? null,
        product_count: input.productCount ?? 0,
        subcategories: input.subcategories ?? [],
        sort_order: input.sortOrder ?? 999,
        is_active: true,
      })
      .select(
        "id,name,slug,description,image,product_count,subcategories,sort_order",
      )
      .single();
    if (error) throw error;
    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
      description: data.description ?? "",
      image: data.image ?? "",
      productCount: data.product_count ?? 0,
      subcategories: (data.subcategories as unknown as string[]) ?? [],
      sortOrder: data.sort_order ?? 999,
    };
  }

  async update(
    id: string,
    input: Partial<Category>,
    client?: SupabaseClient,
  ): Promise<Category | null> {
    const supabase = client ?? getSupabaseBackendClient();
    const patch: Record<string, unknown> = {};
    if (input.name !== undefined) patch.name = input.name;
    if (input.slug !== undefined) patch.slug = input.slug;
    if (input.description !== undefined) patch.description = input.description;
    if (input.image !== undefined) patch.image = input.image;
    if (input.productCount !== undefined)
      patch.product_count = input.productCount;
    if (input.subcategories !== undefined)
      patch.subcategories = input.subcategories;
    if (input.sortOrder !== undefined) patch.sort_order = input.sortOrder;

    const { data, error } = await supabase
      .from("categories")
      .update(patch)
      .eq("id", id)
      .select(
        "id,name,slug,description,image,product_count,subcategories,sort_order",
      )
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
      description: data.description ?? "",
      image: data.image ?? "",
      productCount: data.product_count ?? 0,
      subcategories: (data.subcategories as unknown as string[]) ?? [],
      sortOrder: data.sort_order ?? 999,
    };
  }

  async delete(id: string, client?: SupabaseClient): Promise<boolean> {
    const supabase = client ?? getSupabaseBackendClient();
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) throw error;
    return true;
  }
}

export const categoryRepository = new CategoryRepository();
