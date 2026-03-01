import ExportProductsPageClient from "./ExportProductsPageClient";
import { getApiBaseUrl } from "@/lib/api/client";
import type { Product } from "@/lib/types";

export default async function ExportProductsPage() {
  let products: Product[] = [];
  let error: string | null = null;

  try {
    const base = getApiBaseUrl();
    const res = await fetch(`${base}/api/products`, { cache: "no-store" });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      error = json.error ?? res.statusText ?? "Failed to load products";
    } else {
      products = Array.isArray(json.data) ? json.data : [];
    }
  } catch (err) {
    console.error("Failed to fetch products:", err);
    error = err instanceof Error ? err.message : "Failed to load products";
  }

  return <ExportProductsPageClient products={products} initialError={error} />;
}
