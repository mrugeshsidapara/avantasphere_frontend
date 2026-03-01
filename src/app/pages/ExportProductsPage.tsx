import ExportProductsPageClient from "./ExportProductsPageClient";
import { productRepository } from "@/lib/repositories";
import type { Product } from "@/lib/types";

export default async function ExportProductsPage() {
  debugger;
  let products: Product[] = [];
  let error: string | null = null;

  try {
    debugger;
    products = await productRepository.findAll();
  } catch (err) {
    debugger;
    console.error("Failed to fetch products from repository:", err);
    error = err instanceof Error ? err.message : "Failed to load products";
  }

  return <ExportProductsPageClient products={products} initialError={error} />;
}
