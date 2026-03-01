import type { Product } from "@/lib/types";

export interface IProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  findByCategoryId(categoryId: string): Promise<Product[]>;
  findBySlug(slug: string): Promise<Product | null>;
  create(data: Omit<Product, "id">): Promise<Product>;
  update(id: string, data: Partial<Product>): Promise<Product | null>;
  delete(id: string): Promise<boolean>;
}

export class ProductRepository implements IProductRepository {
  async findAll(): Promise<Product[]> {
    debugger;
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    debugger;
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("products_with_specs")
      .select(
        "id,category_id,name,slug,description,images,applications,certificate_ids,sort_order,specifications",
      )
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return (data ?? []).map((p) => ({
      id: p.id,
      categoryId: p.category_id ?? "",
      name: p.name,
      slug: p.slug,
      description: p.description ?? "",
      images: (p.images as unknown as string[]) ?? [],
      specifications:
        (p.specifications as unknown as Record<string, string>) ?? {},
      applications: (p.applications as unknown as string[]) ?? [],
      certificateIds: ((p.certificate_ids ?? []) as unknown as string[]) ?? [],
      sortOrder: p.sort_order ?? 999,
    }));
  }

  async findById(id: string): Promise<Product | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("products_with_specs")
      .select(
        "id,category_id,name,slug,description,images,applications,certificate_ids,sort_order,specifications",
      )
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      categoryId: data.category_id ?? "",
      name: data.name,
      slug: data.slug,
      description: data.description ?? "",
      images: (data.images as unknown as string[]) ?? [],
      specifications:
        (data.specifications as unknown as Record<string, string>) ?? {},
      applications: (data.applications as unknown as string[]) ?? [],
      certificateIds:
        ((data.certificate_ids ?? []) as unknown as string[]) ?? [],
      sortOrder: data.sort_order ?? 999,
    };
  }

  async findByCategoryId(categoryId: string): Promise<Product[]> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("products_with_specs")
      .select(
        "id,category_id,name,slug,description,images,applications,certificate_ids,sort_order,specifications",
      )
      .eq("category_id", categoryId)
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return (data ?? []).map((p) => ({
      id: p.id,
      categoryId: p.category_id ?? "",
      name: p.name,
      slug: p.slug,
      description: p.description ?? "",
      images: (p.images as unknown as string[]) ?? [],
      specifications:
        (p.specifications as unknown as Record<string, string>) ?? {},
      applications: (p.applications as unknown as string[]) ?? [],
      certificateIds: ((p.certificate_ids ?? []) as unknown as string[]) ?? [],
      sortOrder: p.sort_order ?? 999,
    }));
  }

  async findBySlug(slug: string): Promise<Product | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("products_with_specs")
      .select(
        "id,category_id,name,slug,description,images,applications,certificate_ids,sort_order,specifications",
      )
      .eq("slug", slug)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      categoryId: data.category_id ?? "",
      name: data.name,
      slug: data.slug,
      description: data.description ?? "",
      images: (data.images as unknown as string[]) ?? [],
      specifications:
        (data.specifications as unknown as Record<string, string>) ?? {},
      applications: (data.applications as unknown as string[]) ?? [],
      certificateIds:
        ((data.certificate_ids ?? []) as unknown as string[]) ?? [],
      sortOrder: data.sort_order ?? 999,
    };
  }

  async create(input: Omit<Product, "id">): Promise<Product> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();

    const { data: product, error } = await supabase
      .from("products")
      .insert({
        category_id: input.categoryId,
        name: input.name,
        slug: input.slug,
        description: input.description ?? "",
        images: input.images ?? [],
        applications: input.applications ?? [],
        certificate_ids: (input.certificateIds ?? []) as unknown as string[],
        sort_order: input.sortOrder ?? 999,
        is_active: true,
      })
      .select("id")
      .single();
    if (error) throw error;

    // Replace specs: insert rows into product_specifications
    const specs = input.specifications ?? {};
    const rows = Object.entries(specs).map(([label, value]) => ({
      product_id: product.id,
      label,
      value,
    }));
    if (rows.length) {
      const { error: specError } = await supabase
        .from("product_specifications")
        .insert(rows);
      if (specError) throw specError;
    }

    const created = await this.findById(product.id);
    if (!created) throw new Error("Failed to load created product");
    return created;
  }

  async update(id: string, input: Partial<Product>): Promise<Product | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();

    const patch: Record<string, unknown> = {};
    if (input.categoryId !== undefined) patch.category_id = input.categoryId;
    if (input.name !== undefined) patch.name = input.name;
    if (input.slug !== undefined) patch.slug = input.slug;
    if (input.description !== undefined) patch.description = input.description;
    if (input.images !== undefined) patch.images = input.images;
    if (input.applications !== undefined)
      patch.applications = input.applications;
    if (input.certificateIds !== undefined)
      patch.certificate_ids = input.certificateIds as unknown as string[];
    if (input.sortOrder !== undefined) patch.sort_order = input.sortOrder;

    const { error } = await supabase
      .from("products")
      .update(patch)
      .eq("id", id);
    if (error) throw error;

    if (input.specifications !== undefined) {
      // Replace all specs for product
      const { error: delError } = await supabase
        .from("product_specifications")
        .delete()
        .eq("product_id", id);
      if (delError) throw delError;
      const rows = Object.entries(input.specifications ?? {}).map(
        ([label, value]) => ({
          product_id: id,
          label,
          value,
        }),
      );
      if (rows.length) {
        const { error: specError } = await supabase
          .from("product_specifications")
          .insert(rows);
        if (specError) throw specError;
      }
    }

    return await this.findById(id);
  }

  async delete(id: string): Promise<boolean> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) throw error;
    return true;
  }
}

export const productRepository = new ProductRepository();
