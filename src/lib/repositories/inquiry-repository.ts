import type { SupabaseClient } from "@supabase/supabase-js";
import type { Inquiry } from "@/lib/types";
import { getSupabaseBackendClient } from "@/lib/supabase/server";

export interface IInquiryRepository {
  findAll(client?: SupabaseClient): Promise<Inquiry[]>;
  findById(id: string, client?: SupabaseClient): Promise<Inquiry | null>;
  findByBuyerId(buyerId: string, client?: SupabaseClient): Promise<Inquiry[]>;
  create(
    data: Omit<Inquiry, "id" | "createdAt" | "updatedAt" | "status">,
    client?: SupabaseClient,
  ): Promise<Inquiry>;
  update(id: string, data: Partial<Inquiry>, client?: SupabaseClient): Promise<Inquiry | null>;
  delete(id: string, client?: SupabaseClient): Promise<boolean>;
}

export class InquiryRepository implements IInquiryRepository {
  async findAll(client?: SupabaseClient): Promise<Inquiry[]> {
    const supabase = client ?? getSupabaseBackendClient();
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

  async findById(id: string, client?: SupabaseClient): Promise<Inquiry | null> {
    const supabase = client ?? getSupabaseBackendClient();
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

  async findByBuyerId(buyerId: string, client?: SupabaseClient): Promise<Inquiry[]> {
    const supabase = client ?? getSupabaseBackendClient();
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
    client?: SupabaseClient,
  ): Promise<Inquiry> {
    const supabase = client ?? getSupabaseBackendClient();
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

  async update(id: string, input: Partial<Inquiry>, client?: SupabaseClient): Promise<Inquiry | null> {
    const supabase = client ?? getSupabaseBackendClient();
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

  async delete(id: string, client?: SupabaseClient): Promise<boolean> {
    const supabase = client ?? getSupabaseBackendClient();
    const { error } = await supabase.from("inquiries").delete().eq("id", id);
    if (error) throw error;
    return true;
  }
}

export const inquiryRepository = new InquiryRepository();
