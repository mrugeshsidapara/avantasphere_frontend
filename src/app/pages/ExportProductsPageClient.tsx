"use client";

import { motion } from "motion/react";
import { GlassNavbar } from "../components/GlassNavbar";
import { GlassFooter } from "../components/GlassFooter";
import { Package } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1611224111800-0eaf3e53aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

export default function ExportProductsPageClient({
  products,
  initialError,
}: {
  products: any[];
  initialError?: string | null;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [error] = useState<string | null>(initialError ?? null);

  const list = Array.isArray(products) ? products : [];

  const filteredProducts = list.filter((p: any) =>
    (p.name ?? "").toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
      <GlassNavbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#0B1F3F] mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of export-quality products
              designed to meet international standards.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="relative backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl shadow-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-transparent focus:outline-none text-sm text-gray-800 placeholder-gray-500"
              />
            </div>
          </motion.div>

          {/* Error State */}
          {error && (
            <div className="mb-6 rounded-lg bg-red-100 p-4 text-red-700">
              {error}
            </div>
          )}

          {/* Product Grid */}
          {filteredProducts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product: any, index: number) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group h-full backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        product.images?.[0]?.startsWith?.("http")
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

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#0B1F3F] mb-2">
                      {product.name ?? "Product"}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {product.description ?? ""}
                    </p>

                    {/* Categories */}
                    {Array.isArray(product.categories) &&
                      product.categories.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                          {product.categories
                            .slice(0, 3)
                            .map((cat: string, i: number) => (
                              <span
                                key={i}
                                className="px-2.5 py-1 text-xs backdrop-blur-xl bg-white/60 border border-white/60 rounded-md text-gray-700"
                              >
                                {cat}
                              </span>
                            ))}
                          {product.categories.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{product.categories.length - 3} more
                            </span>
                          )}
                        </div>
                      )}

                    {/* CTA */}
                    <div className="mt-auto">
                      <Link href={`/products/${product.id}`}>
                        <button className="w-full px-5 py-3 bg-gradient-to-r from-[#3B82F6] to-[#0c1951] text-white rounded-xl font-semibold text-sm hover:scale-[1.02] transition-all duration-300">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 text-gray-600">
              No products found.
            </div>
          )}

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl font-bold text-[#0B1F3F] mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We offer custom export solutions tailored to your needs
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-[#3B82F6] to-[#0c1951] text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <GlassFooter />
    </div>
  );
}
