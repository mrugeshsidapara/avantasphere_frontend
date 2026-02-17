"use client";
import { motion } from "motion/react";
import { GlassNavbar } from "../components/GlassNavbar";
import { Package, Boxes, Wrench, Globe } from "lucide-react";
import { GlassFooter } from "../components/GlassFooter";
import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

export function ExportProductsPage() {
  const products = [
    {
      icon: Package,
      title: "Industrial Components",
      description:
        "High-quality brass fittings, valves, and precision components for industrial applications",
      image:
        "https://images.unsplash.com/photo-1611224111800-0eaf3e53aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      categories: [
        "Brass Valves",
        "Pipe Fittings",
        "Industrial Fasteners",
        "Precision Parts",
      ],
    },
    {
      icon: Boxes,
      title: "Export Goods",
      description:
        "Premium export-grade products including textiles, handicrafts, and consumer goods",
      image:
        "https://images.unsplash.com/photo-1761307234387-d9291985eaf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      categories: [
        "Textiles",
        "Handicrafts",
        "Home Decor",
        "Consumer Products",
      ],
    },
    {
      icon: Wrench,
      title: "Hardware & Tools",
      description:
        "Durable hardware solutions and tools for construction and manufacturing sectors",
      image:
        "https://images.unsplash.com/photo-1569062980724-23e1063d8790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      categories: [
        "Hand Tools",
        "Power Tools",
        "Construction Hardware",
        "Safety Equipment",
      ],
    },
    {
      icon: Globe,
      title: "Custom OEM Solutions",
      description:
        "Tailored manufacturing and export solutions based on your specific requirements",
      image:
        "https://images.unsplash.com/photo-1611224111800-0eaf3e53aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      categories: [
        "Custom Manufacturing",
        "Private Labeling",
        "Bulk Orders",
        "Special Projects",
      ],
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
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
              designed to meet international standards and exceed customer
              expectations.
            </p>
          </motion.div>

          {/* Search Bar (Centered) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="relative backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl shadow-xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group h-full backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#0c1951] rounded-xl flex items-center justify-center">
                      <product.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#0B1F3F] mb-2">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Categories (Compact) */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.categories.slice(0, 3).map((category, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs backdrop-blur-xl bg-white/60 border border-white/60 rounded-md text-gray-700"
                        >
                          {category}
                        </span>
                      ))}
                      {product.categories.length > 3 && (
                        <span className="text-xs text-gray-500">
                          +{product.categories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA pinned to bottom */}
                  <div className="mt-auto">
                    <Link
                      href={`/products/${product.title.toLowerCase().replace(/ /g, "-")}`}
                    >
                      <button className="w-full px-5 py-3 bg-gradient-to-r from-[#3B82F6] to-[#0c1951] text-white rounded-xl font-semibold text-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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
                We offer custom solutions tailored to your specific export
                requirements
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-[#3B82F6] to-[#0c1951] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Contact Us for Custom Solutions
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <GlassFooter />
    </div>
  );
}
