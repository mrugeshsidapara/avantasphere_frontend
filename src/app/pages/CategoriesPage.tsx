import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { GlassNavbar } from "../components/GlassNavbar";
import { GlassFooter } from "../components/GlassFooter";
import { Search, Package, ArrowRight } from "lucide-react";
import { useCategories } from "@/lib/hooks/use-api";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1611224111800-0eaf3e53aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

export function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: categories = [], error, loading } = useCategories();

  const filteredCategories = (
    Array.isArray(categories) ? categories : []
  ).filter(
    (c: { name?: string; description?: string; subcategories?: string[] }) =>
      (c.name ?? "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.description ?? "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.subcategories ?? []).some((sub: string) =>
        sub.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
      <GlassNavbar />

      <div className="pt-32 pb-20 px-6">
        {error && (
          <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700">
            Failed to load categories: {error}
          </div>
        )}
        {loading && (
          <div className="mb-8 text-center text-gray-600">
            Loading categories...
          </div>
        )}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#0B1F3F] mb-4">
              Product Categories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive range of export products organized by
              category
            </p>
          </motion.div>

          {/* Search Bar (Centered) */}
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
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-transparent focus:outline-none text-sm text-gray-800 placeholder-gray-500"
              />
            </div>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map(
              (
                category: {
                  id: string;
                  name: string;
                  description: string;
                  image?: string;
                  productCount?: number;
                  subcategories?: string[];
                },
                index: number,
              ) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Link href={`/categories/${category.id}`}>
                    <div className="group h-full backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={
                            category.image?.startsWith("http")
                              ? category.image
                              : category.image || PLACEHOLDER_IMAGE
                          }
                          alt={category.name}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              PLACEHOLDER_IMAGE;
                          }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/80 via-[#0B1F3F]/40 to-transparent" />

                        {/* Product Count Badge */}
                        <div className="absolute top-6 right-6 backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl px-4 py-2 text-white">
                          <span className="font-bold">
                            {category.productCount ?? 0}
                          </span>{" "}
                          Products
                        </div>

                        {/* Icon */}
                        <div className="absolute bottom-6 left-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#0c1951] rounded-xl flex items-center justify-center">
                            <Package className="w-7 h-7 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      {/* Content */}
                      {/* Content */}
                      <div className="p-8 flex flex-col flex-1">
                        <h3 className="text-2xl font-bold text-[#0B1F3F] mb-4">
                          {category.name}
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-8">
                          {category.description}
                        </p>

                        {/* Spacer pushes button to bottom */}
                        <div className="mt-auto">
                          <div className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#0c1951] hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                            Browse Category
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ),
            )}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-12 shadow-xl">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0B1F3F] mb-2">
                  No categories found
                </h3>
                <p className="text-gray-600">Try adjusting your search terms</p>
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16"
          >
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-12 text-center shadow-2xl">
              <h2 className="text-3xl font-bold text-[#0B1F3F] mb-4">
                Need Custom Products?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We offer OEM manufacturing and custom solutions for your
                specific requirements
              </p>
              <Link href="/request-quote">
                <button className="px-10 py-4 bg-gradient-to-r from-[#3B82F6] to-[#0c1951] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Request Custom Quote
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <GlassFooter />
    </div>
  );
}
