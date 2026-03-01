import type { Certificate } from "@/lib/types";

export interface ICertificateRepository {
  findAll(): Promise<Certificate[]>;
  findVisible(): Promise<Certificate[]>;
  findById(id: string): Promise<Certificate | null>;
  update(id: string, data: Partial<Certificate>): Promise<Certificate | null>;
}

export class CertificateRepository implements ICertificateRepository {
  async findAll(): Promise<Certificate[]> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("certificates")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return (data ?? []).map((c) => ({
      id: c.id,
      name: c.name,
      description: c.description ?? "",
      image: c.image ?? "",
      visible: c.visible ?? true,
      sortOrder: c.sort_order ?? 999,
    }));
  }

  async findVisible(): Promise<Certificate[]> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("certificates")
      .select("*")
      .eq("visible", true)
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return (data ?? []).map((c) => ({
      id: c.id,
      name: c.name,
      description: c.description ?? "",
      image: c.image ?? "",
      visible: c.visible ?? true,
      sortOrder: c.sort_order ?? 999,
    }));
  }

  async findById(id: string): Promise<Certificate | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("certificates")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      name: data.name,
      description: data.description ?? "",
      image: data.image ?? "",
      visible: data.visible ?? true,
      sortOrder: data.sort_order ?? 999,
    };
  }

  async update(
    id: string,
    input: Partial<Certificate>,
  ): Promise<Certificate | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const patch: Record<string, unknown> = {};
    if (input.name !== undefined) patch.name = input.name;
    if (input.description !== undefined) patch.description = input.description;
    if (input.image !== undefined) patch.image = input.image;
    if (input.visible !== undefined) patch.visible = input.visible;
    if (input.sortOrder !== undefined) patch.sort_order = input.sortOrder;
    const { data, error } = await supabase
      .from("certificates")
      .update(patch)
      .eq("id", id)
      .select("*")
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      name: data.name,
      description: data.description ?? "",
      image: data.image ?? "",
      visible: data.visible ?? true,
      sortOrder: data.sort_order ?? 999,
    };
  }
}

export const certificateRepository = new CertificateRepository();
