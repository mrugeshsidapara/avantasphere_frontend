import type { SupabaseClient } from "@supabase/supabase-js";
import type {
  Product,
  ProductImage,
  ProductSpecification,
  ProductPricing,
} from "@/lib/types";
import { getSupabaseBackendClient } from "@/lib/supabase/server";

export interface IProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  findByCategoryId(categoryId: string): Promise<Product[]>;
  findBySlug(slug: string): Promise<Product | null>;
  create(data: Partial<Product>, client?: SupabaseClient): Promise<Product>;
  update(
    id: string,
    data: Partial<Product>,
    client?: SupabaseClient,
  ): Promise<Product | null>;
  delete(id: string, client?: SupabaseClient): Promise<boolean>;
}

export class ProductRepository {
  async findAll(): Promise<Product[]> {
    const supabase = getSupabaseBackendClient();

    const { data, error } = await supabase
      .from("products")
      .select(
        `
        *,
        product_images(id,image_url,sort_order),
        product_specifications(id,spec_name,spec_value),
        product_pricing(id,cost_price,logistics_cost,landing_cost,sale_price,currency)
      `,
      )
      .order("sort_order");

    if (error) throw error;

    return (data ?? []).map(this.mapProduct);
  }

  async findById(id: string): Promise<Product | null> {
    const supabase = getSupabaseBackendClient();

    const { data, error } = await supabase
      .from("products")
      .select(
        `
        *,
        product_images(id,image_url,sort_order),
        product_specifications(id,spec_name,spec_value),
        product_pricing(id,manufacturer_id,cost_price,logistics_cost,landing_cost,sale_price,currency)
      `,
      )
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;
    if (!data) return null;

    return this.mapProduct(data);
  }

  async create(product: Partial<Product>): Promise<Product> {
    const supabase = getSupabaseBackendClient();

    // 1️⃣ Insert product
    const { data, error } = await supabase
      .from("products")
      .insert({
        category_id: product.categoryId,
        manufacturer_id: product.manufacturerId,
        name: product.name,
        slug: product.slug,
        description: product.description,
        material: product.material,
        finish: product.finish,
        polish: product.polish,
        certification: product.certification,
        length: product.length,
        width: product.width,
        height: product.height,
        weight: product.weight,
        color: product.color,
        grade: product.grade,
        hs_code: product.hsCode,
        packaging_type: product.packagingType,
        moq: product.moq,
        container_capacity: product.containerCapacity,
        is_visible: product.isVisible ?? true,
        is_featured: product.isFeatured ?? false,
        sort_order: product.sortOrder ?? 999,
      })
      .select()
      .single();

    if (error) throw error;

    const productId = data.id;

    // 2️⃣ Insert images
    if (product.images?.length) {
      await supabase.from("product_images").insert(
        product.images.map((img, i) => ({
          product_id: productId,
          image_url: img.imageUrl,
          sort_order: img.sortOrder ?? i,
        })),
      );
    }

    // 3️⃣ Insert specifications
    if (product.specifications?.length) {
      await supabase.from("product_specifications").insert(
        product.specifications.map((s) => ({
          product_id: productId,
          spec_name: s.specName,
          spec_value: s.specValue,
        })),
      );
    }

    // 4️⃣ Insert pricing
    if (product.pricing?.length) {
      await supabase.from("product_pricing").insert(
        product.pricing.map((p) => ({
          product_id: productId,
          manufacturer_id: p.manufacturerId,
          cost_price: p.costPrice,
          logistics_cost: p.logisticsCost,
          landing_cost: p.landingCost,
          sale_price: p.salePrice,
          currency: p.currency ?? "USD",
        })),
      );
    }

    return this.findById(productId) as Promise<Product>;
  }

  private mapProduct(row: any): Product {
    return {
      id: row.id,
      categoryId: row.category_id,
      manufacturerId: row.manufacturer_id,
      name: row.name,
      slug: row.slug,
      description: row.description,

      material: row.material,
      finish: row.finish,
      polish: row.polish,
      certification: row.certification,

      length: row.length,
      width: row.width,
      height: row.height,
      weight: row.weight,

      color: row.color,
      grade: row.grade,

      hsCode: row.hs_code,
      packagingType: row.packaging_type,
      moq: row.moq,
      containerCapacity: row.container_capacity,

      isVisible: row.is_visible,
      isFeatured: row.is_featured,
      sortOrder: row.sort_order,

      images: row.product_images?.map((i: any) => ({
        id: i.id,
        imageUrl: i.image_url,
        sortOrder: i.sort_order,
      })),

      specifications: row.product_specifications?.map((s: any) => ({
        id: s.id,
        specName: s.spec_name,
        specValue: s.spec_value,
      })),

      pricing: row.product_pricing?.map((p: any) => ({
        id: p.id,
        costPrice: p.cost_price,
        logisticsCost: p.logistics_cost,
        landingCost: p.landing_cost,
        salePrice: p.sale_price,
        currency: p.currency,
      })),
    };
  }
  async update(
    id: string,
    data: any,
    client?: SupabaseClient,
  ): Promise<Product | null> {
    const supabase = client ?? getSupabaseBackendClient();

    // ✅ get actual product object
    const product = data.product ?? data;
    const patch: Record<string, any> = {};

    if (product.category_id !== undefined)
      patch.category_id = product.category_id;

    if (product.manufacturer_id !== undefined)
      patch.manufacturer_id = product.manufacturer_id;

    if (product.name !== undefined) patch.name = product.name;

    if (product.slug !== undefined) patch.slug = product.slug;

    if (product.description !== undefined)
      patch.description = product.description;

    if (product.material !== undefined) patch.material = product.material;

    if (product.finish !== undefined) patch.finish = product.finish;

    if (product.polish !== undefined) patch.polish = product.polish;

    if (product.certification !== undefined)
      patch.certification = product.certification;

    if (product.length !== undefined) patch.length = product.length;

    if (product.width !== undefined) patch.width = product.width;

    if (product.height !== undefined) patch.height = product.height;

    if (product.weight !== undefined) patch.weight = product.weight;

    if (product.color !== undefined) patch.color = product.color;

    if (product.grade !== undefined) patch.grade = product.grade;

    if (product.hs_code !== undefined) patch.hs_code = product.hs_code;

    if (product.packaging_type !== undefined)
      patch.packaging_type = product.packaging_type;

    if (product.moq !== undefined) patch.moq = product.moq;

    if (product.container_capacity !== undefined)
      patch.container_capacity = product.container_capacity;

    if (product.is_visible !== undefined) patch.is_visible = product.is_visible;

    if (product.is_featured !== undefined)
      patch.is_featured = product.is_featured;

    const { error } = await supabase
      .from("products")
      .update(patch)
      .eq("id", id);

    if (error) throw error;

    // 2️⃣ Replace images
    if (data.images !== undefined) {
      await supabase.from("product_images").delete().eq("product_id", id);

      if (data.images.length) {
        await supabase.from("product_images").insert(
          data.images.map((img: string, i: number) => ({
            product_id: id,
            image_url: img,
            sort_order: i,
          })),
        );
      }
    }

    // 3️⃣ Replace specifications
    if (data.specifications !== undefined) {
      await supabase
        .from("product_specifications")
        .delete()
        .eq("product_id", id);

      if (data.specifications.length) {
        await supabase.from("product_specifications").insert(
          data.specifications.map((s: ProductSpecification) => ({
            product_id: id,
            spec_name: s.specName,
            spec_value: s.specValue,
          })),
        );
      }
    }

    // 4️⃣ Replace pricing
    await supabase.from("product_pricing").delete().eq("product_id", id);

    await supabase.from("product_pricing").insert({
      product_id: id,
      manufacturer_id: product.manufacturerId,
      cost_price: product.costPrice,
      logistics_cost: product.logisticsCost,
      landing_cost: product.landingCost,
      sale_price: product.salePrice,
      currency: product.currency ?? "USD",
    });

    return this.findById(id);
  }
  async delete(id: string, client?: SupabaseClient): Promise<boolean> {
    const supabase = client ?? getSupabaseBackendClient();

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) throw error;

    return true;
  }

  async findByCategoryId(categoryId: string): Promise<Product[]> {
    const supabase = getSupabaseBackendClient();

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
      images: (p.images as ProductImage[]) ?? [],
      specifications: (p.specifications as ProductSpecification[]) ?? [],
      applications: (p.applications as unknown as string[]) ?? [],
      certificateIds: ((p.certificate_ids ?? []) as unknown as string[]) ?? [],
      sortOrder: p.sort_order ?? 999,
    }));
  }
}

export const productRepository = new ProductRepository();
