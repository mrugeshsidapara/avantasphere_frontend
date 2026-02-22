"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { GlassNavbar } from "../components/GlassNavbar";
import { GlassFooter } from "../components/GlassFooter";
import { Button } from "../components/ui/button";
import { useCategory, useProducts } from "@/lib/hooks/use-api";
import { Package, Search } from "lucide-react";
import { useState } from "react";

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1611224111800-0eaf3e53aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

export function ProductCategoryPage() {
  const pathname = usePathname();
  const categoryId = pathname.split("/").pop() || null;

  const { data: categoryData } = useCategory(categoryId);
  const { data: productsData, loading, error } = useProducts(categoryId);

  const category = categoryData as {
    name?: string;
    description?: string;
  } | null;
  const products = Array.isArray(productsData) ? productsData : [];

  // ✅ NEW: search state
  const [search, setSearch] = useState("");

  // ✅ NEW: filtered list
  const filteredProducts =
    products.length > 10
      ? products.filter((p: any) =>
          (p.name ?? "").toLowerCase().includes(search.toLowerCase()),
        )
      : products;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
      <GlassNavbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* ✅ CENTERED HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#0B1F3F] mb-4">
              {category?.name || "Products"}
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {category?.description ||
                "Browse our export-ready product catalog"}
            </p>
          </motion.div>

          {/* ✅ SEARCH (only if products > 10) */}
          {products.length > 10 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="max-w-2xl mx-auto mb-16"
            >
              <div className="relative backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl shadow-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search products in this category..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-transparent focus:outline-none text-sm text-gray-800 placeholder-gray-500"
                />
              </div>
            </motion.div>
          )}

          {error && (
            <div className="mb-6 rounded-xl bg-red-100 p-4 text-red-700">
              {error}
            </div>
          )}

          {loading && (
            <div className="text-center py-16 text-gray-600">
              Loading products...
            </div>
          )}

          {/* PRODUCT GRID */}
          {!loading && filteredProducts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product: any, index: number) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="group h-full backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        product.images?.[0]?.startsWith("http")
                          ? product.images[0]
                          : PLACEHOLDER_IMG
                      }
                      alt={product.name ?? "Product"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = PLACEHOLDER_IMG;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#0c1951] rounded-xl flex items-center justify-center">
                        <Package className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#0B1F3F] mb-2">
                      {product.name ?? "Product"}
                    </h3>

                    <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                      {product.description ?? ""}
                    </p>

                    <div className="mt-auto">
                      <Link href={`/products/${product.id}`}>
                        <Button className="w-full bg-gradient-to-r from-[#3B82F6] to-[#0c1951] text-white rounded-xl py-3 hover:scale-[1.02] transition-all">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {!loading && filteredProducts.length === 0 && (
            <div className="text-center py-16 text-gray-600">
              No products found.
            </div>
          )}
        </div>
      </div>

      <GlassFooter />
    </div>
  );
}
