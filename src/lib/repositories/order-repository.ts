import type { SupabaseClient } from "@supabase/supabase-js";
import type { Order } from "@/lib/types";
import { getSupabaseBackendClient } from "@/lib/supabase/server";

export interface IOrderRepository {
  findAll(client?: SupabaseClient): Promise<Order[]>;
  findById(id: string, client?: SupabaseClient): Promise<Order | null>;
  findByBuyerId(buyerId: string, client?: SupabaseClient): Promise<Order[]>;
  create(data: Omit<Order, "id" | "createdAt" | "updatedAt">, client?: SupabaseClient): Promise<Order>;
  update(id: string, data: Partial<Order>, client?: SupabaseClient): Promise<Order | null>;
  delete(id: string, client?: SupabaseClient): Promise<boolean>;
}

function mapOrderFromDb(o: any): Order {
  return {
    id: o.id,
    buyerId: o.buyer_id,
    items: Array.isArray(o.product_ids)
      ? o.product_ids.map((productId: string, index: number) => ({
          productId,
          quantity: Array.isArray(o.quantities) ? o.quantities[index] : 1,
          unitPrice: 0,
        }))
      : [],
    status: o.status ?? "pending",
    totalAmount: o.total_amount ?? 0,
    shippingStatus: o.shipping_status ?? "pending",
    trackingNumber: o.tracking_number ?? null,
    createdAt: o.created_at ?? "",
    updatedAt: o.updated_at ?? "",
  };
}

export class OrderRepository implements IOrderRepository {
  async findAll(client?: SupabaseClient): Promise<Order[]> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase.from("orders").select("*");
    if (error) throw error;
    return (data ?? []).map(mapOrderFromDb);
  }

  async findById(id: string, client?: SupabaseClient): Promise<Order | null> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return mapOrderFromDb(data);
  }

  async findByBuyerId(buyerId: string, client?: SupabaseClient): Promise<Order[]> {
    const supabase = client ?? getSupabaseBackendClient();
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("buyer_id", buyerId);
    if (error) throw error;
    return (data ?? []).map(mapOrderFromDb);
  }

  async create(
    input: Omit<Order, "id" | "createdAt" | "updatedAt">,
    client?: SupabaseClient,
  ): Promise<Order> {
    const supabase = client ?? getSupabaseBackendClient();
    const productIds = input.items.map((item) => item.productId);
    const quantities = input.items.map((item) => item.quantity);
    const { data, error } = await supabase
      .from("orders")
      .insert({
        buyer_id: input.buyerId,
        product_ids: productIds,
        quantities,
        status: input.status,
        total_amount: input.totalAmount,
        shipping_status: input.shippingStatus,
        tracking_number: input.trackingNumber,
      })
      .select("*")
      .single();
    if (error) throw error;
    return mapOrderFromDb(data);
  }

  async update(id: string, input: Partial<Order>, client?: SupabaseClient): Promise<Order | null> {
    const supabase = client ?? getSupabaseBackendClient();
    const patch: Record<string, unknown> = {};
    if (input.status !== undefined) patch.status = input.status;
    if (input.totalAmount !== undefined) patch.total_amount = input.totalAmount;
    if (input.shippingStatus !== undefined)
      patch.shipping_status = input.shippingStatus;
    if (input.trackingNumber !== undefined)
      patch.tracking_number = input.trackingNumber;
    if (input.items !== undefined) {
      patch.product_ids = input.items.map((item) => item.productId);
      patch.quantities = input.items.map((item) => item.quantity);
    }
    const { data, error } = await supabase
      .from("orders")
      .update(patch)
      .eq("id", id)
      .select("*")
      .maybeSingle();
    if (error) throw error;
    if (!data) return null;
    return mapOrderFromDb(data);
  }

  async delete(id: string, client?: SupabaseClient): Promise<boolean> {
    const supabase = client ?? getSupabaseBackendClient();
    const { error } = await supabase.from("orders").delete().eq("id", id);
    if (error) throw error;
    return true;
  }
}

export const orderRepository = new OrderRepository();
