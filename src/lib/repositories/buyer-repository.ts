import type { SupabaseClient } from "@supabase/supabase-js";
import type { Buyer } from "@/lib/types";
import { getSupabaseBackendClient } from "@/lib/supabase/server";

export interface ProfileUpsertPayload {
  id: string;
  username: string;
  full_name: string;
  company_name?: string | null;
  country?: string | null;
  role: string;
}

export interface IBuyerRepository {
  findAll(client?: SupabaseClient): Promise<Buyer[]>;
  findById(id: string, client?: SupabaseClient): Promise<Buyer | null>;
  findByEmail(email: string, client?: SupabaseClient): Promise<Buyer | null>;
  upsertProfile(data: ProfileUpsertPayload, client?: SupabaseClient): Promise<void>;
  create(
    data: Omit<Buyer, "id" | "role" | "createdAt" | "updatedAt">,
    client?: SupabaseClient,
  ): Promise<Buyer>;
  update(id: string, data: Partial<Buyer>, client?: SupabaseClient): Promise<Buyer | null>;
  delete(id: string, client?: SupabaseClient): Promise<boolean>;
}

export class BuyerRepository implements IBuyerRepository {
  async findAll(client?: SupabaseClient): Promise<Buyer[]> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) throw error;
    return (data ?? []).map((p) => ({
      id: p.id,
      email: (p as { email?: string }).email ?? "",
      name: p.full_name ?? "",
      company: p.company_name ?? "",
      country: p.country ?? "",
      role: (p.role ?? "buyer") as Buyer["role"],
      username: (p as { username?: string }).username,
      createdAt: p.created_at ?? "",
      updatedAt: p.created_at ?? "",
    }));
  }

  async findById(id: string, client?: SupabaseClient): Promise<Buyer | null> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    const row = data as typeof data & { username?: string; email?: string };
    return {
      id: data.id,
      name: data.full_name ?? "",
      email: row.email ?? "",
      company: data.company_name ?? "",
      country: data.country ?? "",
      role: (data.role ?? "buyer") as Buyer["role"],
      username: row.username,
      createdAt: data.created_at ?? "",
      updatedAt: data.updated_at ?? "",
    };
  }

  async upsertProfile(data: ProfileUpsertPayload, client?: SupabaseClient): Promise<void> {
    const supabase = client ?? getSupabaseBackendClient();
    const { error } = await supabase.from("profiles").upsert(
      {
        id: data.id,
        username: data.username,
        full_name: data.full_name,
        company_name: data.company_name ?? null,
        country: data.country ?? null,
        role: data.role,
      },
      { onConflict: "id" },
    );
    if (error) throw error;
  }

  async findByEmail(email: string, client?: SupabaseClient): Promise<Buyer | null> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("email", email)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    const row = data as typeof data & { email?: string };
    return {
      id: data.id,
      name: data.full_name ?? "",
      email: row.email ?? "",
      company: data.company_name ?? "",
      country: data.country ?? "",
      role: (data.role ?? "buyer") as Buyer["role"],
      createdAt: data.created_at ?? "",
      updatedAt: data.created_at ?? "",
    };
  }

  async create(
    input: Omit<Buyer, "id" | "role" | "createdAt" | "updatedAt">,
    client?: SupabaseClient,
  ): Promise<Buyer> {
    const supabase = client ?? getSupabaseBackendClient();
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
      email: (data as { email?: string }).email ?? "",
      company: data.company_name ?? "",
      country: data.country ?? "",
      role: (data.role ?? "buyer") as Buyer["role"],
      createdAt: data.created_at ?? "",
      updatedAt: data.updated_at ?? "",
    };
  }

  async update(id: string, input: Partial<Buyer>, client?: SupabaseClient): Promise<Buyer | null> {
    const supabase = client ?? getSupabaseBackendClient();
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
      email: (data as { email?: string }).email ?? "",
      company: data.company_name ?? "",
      country: data.country ?? "",
      role: (data.role ?? "buyer") as Buyer["role"],
      createdAt: data.created_at ?? "",
      updatedAt: data.updated_at ?? "",
    };
  }

  async delete(id: string, client?: SupabaseClient): Promise<boolean> {
    const supabase = client ?? getSupabaseBackendClient();
    const { error } = await supabase.from("profiles").delete().eq("id", id);
    if (error) throw error;
    return true;
  }
}

export const buyerRepository = new BuyerRepository();
