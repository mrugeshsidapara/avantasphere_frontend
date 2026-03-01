import type { Buyer } from "@/lib/types";

export interface IBuyerRepository {
  findAll(): Promise<Buyer[]>;
  findById(id: string): Promise<Buyer | null>;
  findByEmail(email: string): Promise<Buyer | null>;
  create(
    data: Omit<Buyer, "id" | "role" | "createdAt" | "updatedAt">,
  ): Promise<Buyer>;
  update(id: string, data: Partial<Buyer>): Promise<Buyer | null>;
  delete(id: string): Promise<boolean>;
}

export class BuyerRepository implements IBuyerRepository {
  async findAll(): Promise<Buyer[]> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) throw error;
    return (data ?? []).map((p) => ({
      id: p.id,
      email: p.email ?? "",
      name: p.full_name ?? "",
      company: p.company_name ?? "",
      country: p.country ?? "",
      role: p.role ?? "buyer",
      createdAt: p.created_at ?? "",
      updatedAt: p.created_at ?? "",
    }));
  }

  async findById(id: string): Promise<Buyer | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      name: data.full_name ?? "",
      email: data.email ?? "",
      company: data.company_name ?? "",
      country: data.country ?? "",
      role: data.role ?? "buyer",
      createdAt: data.created_at ?? "",
      updatedAt: data.updated_at ?? "",
    };
  }

  async findByEmail(email: string): Promise<Buyer | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("email", email)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      name: data.full_name ?? "",
      email: data.email ?? "",
      company: data.company_name ?? "",
      country: data.country ?? "",
      role: data.role ?? "buyer",
      createdAt: data.created_at ?? "",
      updatedAt: data.created_at ?? "",
    };
  }

  async create(
    input: Omit<Buyer, "id" | "role" | "createdAt" | "updatedAt">,
  ): Promise<Buyer> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("profiles")
      .insert({
        full_name: input.name,
        email: input.email,
        company_name: input.company,
        country: input.country,
        role: "buyer",
      })
      .select("*")
      .single();
    if (error) throw error;
    return {
      id: data.id,
      name: data.full_name ?? "",
      email: data.email ?? "",
      company: data.company_name ?? "",
      country: data.country ?? "",
      role: data.role ?? "buyer",
      createdAt: data.created_at ?? "",
      updatedAt: data.updated_at ?? "",
    };
  }

  async update(id: string, input: Partial<Buyer>): Promise<Buyer | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const patch: Record<string, unknown> = {};
    if (input.name) patch.full_name = input.name;
    if (input.email) patch.email = input.email;
    if (input.company) patch.company_name = input.company;
    if (input.country) patch.country = input.country;
    const { data, error } = await supabase
      .from("profiles")
      .update(patch)
      .eq("id", id)
      .select("*")
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      name: data.full_name ?? "",
      email: data.email ?? "",
      company: data.company_name ?? "",
      country: data.country ?? "",
      role: data.role ?? "buyer",
      createdAt: data.created_at ?? "",
      updatedAt: data.updated_at ?? "",
    };
  }

  async delete(id: string): Promise<boolean> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("profiles").delete().eq("id", id);
    if (error) throw error;
    return true;
  }
}

export const buyerRepository = new BuyerRepository();
