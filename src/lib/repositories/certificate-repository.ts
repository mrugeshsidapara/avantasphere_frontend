import type { SupabaseClient } from "@supabase/supabase-js";
import type { Certificate } from "@/lib/types";
import { getSupabaseBackendClient } from "@/lib/supabase/server";

type CertRow = {
  id: string;
  name: string;
  description: string | null;
  document_url: string | null;
  is_public: boolean;
  sort_order?: number;
};

function mapRow(c: CertRow): Certificate {
  return {
    id: c.id,
    name: c.name,
    description: c.description ?? "",
    image: c.document_url ?? "",
    visible: c.is_public ?? true,
    sortOrder: c.sort_order ?? 999,
  };
}

export interface ICertificateRepository {
  findAll(): Promise<Certificate[]>;
  findVisible(): Promise<Certificate[]>;
  findById(id: string): Promise<Certificate | null>;
  create(data: Omit<Certificate, "id">, client?: SupabaseClient): Promise<Certificate>;
  update(
    id: string,
    data: Partial<Certificate>,
    client?: SupabaseClient,
  ): Promise<Certificate | null>;
  delete(id: string, client?: SupabaseClient): Promise<boolean>;
}

export class CertificateRepository implements ICertificateRepository {
  private backend() {
    return getSupabaseBackendClient();
  }

  async findAll(): Promise<Certificate[]> {
    const supabase = this.backend();
    const { data, error } = await supabase
      .from("certificates")
      .select("id,name,description,document_url,is_public,sort_order")
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return (data ?? []).map((c) => mapRow(c as CertRow));
  }

  async findVisible(): Promise<Certificate[]> {
    const supabase = this.backend();
    const { data, error } = await supabase
      .from("certificates")
      .select("id,name,description,document_url,is_public,sort_order")
      .eq("is_public", true)
      .order("sort_order", { ascending: true });
    if (error) throw error;
    return (data ?? []).map((c) => mapRow(c as CertRow));
  }

  async findById(id: string): Promise<Certificate | null> {
    const supabase = this.backend();
    const { data, error } = await supabase
      .from("certificates")
      .select("id,name,description,document_url,is_public,sort_order")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return mapRow(data as CertRow);
  }

  async create(
    input: Omit<Certificate, "id">,
    client?: SupabaseClient,
  ): Promise<Certificate> {
    const supabase = client ?? this.backend();
    const { data, error } = await supabase
      .from("certificates")
      .insert({
        name: input.name,
        description: input.description ?? "",
        document_url: input.image ?? null,
        is_public: input.visible ?? true,
        sort_order: input.sortOrder ?? 999,
      })
      .select("id,name,description,document_url,is_public,sort_order")
      .single();
    if (error) throw error;
    return mapRow(data as CertRow);
  }

  async update(
    id: string,
    input: Partial<Certificate>,
    client?: SupabaseClient,
  ): Promise<Certificate | null> {
    const supabase = client ?? this.backend();
    const patch: Record<string, unknown> = {};
    if (input.name !== undefined) patch.name = input.name;
    if (input.description !== undefined) patch.description = input.description;
    if (input.image !== undefined) patch.document_url = input.image;
    if (input.visible !== undefined) patch.is_public = input.visible;
    if (input.sortOrder !== undefined) patch.sort_order = input.sortOrder;
    const { data, error } = await supabase
      .from("certificates")
      .update(patch)
      .eq("id", id)
      .select("id,name,description,document_url,is_public,sort_order")
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return mapRow(data as CertRow);
  }

  async delete(id: string, client?: SupabaseClient): Promise<boolean> {
    const supabase = client ?? this.backend();
    const { error } = await supabase.from("certificates").delete().eq("id", id);
    if (error) throw error;
    return true;
  }
}

export const certificateRepository = new CertificateRepository();
