import type { Inquiry } from "@/lib/types";

export interface IInquiryRepository {
  findAll(): Promise<Inquiry[]>;
  findById(id: string): Promise<Inquiry | null>;
  findByBuyerId(buyerId: string): Promise<Inquiry[]>;
  create(
    data: Omit<Inquiry, "id" | "createdAt" | "updatedAt" | "status">,
  ): Promise<Inquiry>;
  update(id: string, data: Partial<Inquiry>): Promise<Inquiry | null>;
  delete(id: string): Promise<boolean>;
}

export class InquiryRepository implements IInquiryRepository {
  async findAll(): Promise<Inquiry[]> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from("inquiries").select("*");
    if (error) throw error;
    return (data ?? []).map((i) => ({
      id: i.id,
      buyerId: i.buyer_id,
      productId: i.product_id ?? "",
      message: i.message ?? "",
      status: i.status ?? "pending",
      createdAt: i.created_at ?? "",
      updatedAt: i.updated_at ?? "",
    }));
  }

  async findById(id: string): Promise<Inquiry | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      buyerId: data.buyer_id,
      productId: data.product_id ?? "",
      message: data.message ?? "",
      status: data.status ?? "pending",
      createdAt: data.created_at ?? "",
      updatedAt: data.updated_at ?? "",
    };
  }

  async findByBuyerId(buyerId: string): Promise<Inquiry[]> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("inquiries")
      .select("*")
      .eq("buyer_id", buyerId);
    if (error) throw error;
    return (data ?? []).map((i) => ({
      id: i.id,
      buyerId: i.buyer_id,
      productId: i.product_id ?? "",
      message: i.message ?? "",
      status: i.status ?? "pending",
      createdAt: i.created_at ?? "",
      updatedAt: i.updated_at ?? "",
    }));
  }

  async create(
    input: Omit<Inquiry, "id" | "createdAt" | "updatedAt" | "status">,
  ): Promise<Inquiry> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("inquiries")
      .insert({
        buyer_id: input.buyerId,
        product_id: input.productId,
        message: input.message,
        status: "pending",
      })
      .select("*")
      .single();
    if (error) throw error;
    return {
      id: data.id,
      buyerId: data.buyer_id,
      productId: data.product_id ?? "",
      message: data.message ?? "",
      status: data.status ?? "pending",
      createdAt: data.created_at ?? "",
      updatedAt: data.updated_at ?? "",
    };
  }

  async update(id: string, input: Partial<Inquiry>): Promise<Inquiry | null> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const patch: Record<string, unknown> = {};

    if (input.message !== undefined) patch.message = input.message;
    if (input.status !== undefined) patch.status = input.status;
    const { data, error } = await supabase
      .from("inquiries")
      .update(patch)
      .eq("id", id)
      .select("*")
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return {
      id: data.id,
      buyerId: data.buyer_id,
      productId: data.product_id ?? "",
      message: data.message ?? "",
      status: data.status ?? "pending",
      createdAt: data.created_at ?? "",
      updatedAt: data.updated_at ?? "",
    };
  }

  async delete(id: string): Promise<boolean> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("inquiries").delete().eq("id", id);
    if (error) throw error;
    return true;
  }
}

export const inquiryRepository = new InquiryRepository();
