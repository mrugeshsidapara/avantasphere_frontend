"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GlassNavbar } from "../components/GlassNavbar";
import { GlassFooter } from "../components/GlassFooter";
import {
  ArrowRight,
  Ship,
  Globe,
  Package,
  TrendingUp,
  Shield,
  FileText,
  CheckCircle,
  Award,
} from "lucide-react";

import { useCategories } from "@/lib/hooks/use-api";

export function ExportHomePage() {
  const {
    data: categoriesData,
    loading: catLoading,
    error: catError,
  } = useCategories();

  const categories = Array.isArray(categoriesData) ? categoriesData : [];

  const features = [
    {
      icon: Ship,
      title: "Global Shipping",
      description: "Reliable sea & air freight with trusted logistics partners",
    },
    {
      icon: Globe,
      title: "International Trade",
      description: "Exports to UAE, Africa & Europe",
    },
    {
      icon: Package,
      title: "Export-Grade Quality",
      description: "Products manufactured as per international standards",
    },
    {
      icon: TrendingUp,
      title: "Scalable Supply",
      description: "Consistent volumes for long-term buyers",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
      <GlassNavbar />

      <main>
        {/* ================= HERO ================= */}
        <section className="bg-white">
          <div className="max-w-[1300px] mx-auto px-6 pt-32 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-[#0B1F3F] leading-tight mb-6">
                  Trusted Indian Exporter <br /> for Global Buyers
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8 leading-relaxed">
                  We supply certified, export-quality industrial and custom
                  manufactured products from India to UAE, Africa, and Europe
                  with complete documentation and shipment support.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/request-quote">
                    <button className="px-5 py-2 bg-gradient-to-r from-[#3B82F6] to-[#0c1951] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all">
                      Request a Quote
                    </button>
                  </Link>

                  <Link href="/products">
                    <button className="px-5 py-2 border border-[#0a1c4f] text-[#0a1c4f] rounded-xl font-semibold hover:bg-gradient-to-r hover:from-[#3B82F6] hover:to-[#0a1c4f] hover:text-white transition-all">
                      View Products
                    </button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/Home_Design1.png"
                  alt="Export Logistics"
                  width={700}
                  height={420}
                  className="rounded-2xl object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-white/60 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST STRIP ================= */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, text: "IEC Certified Exporter" },
                { icon: FileText, text: "GST Registered Company" },
                { icon: Award, text: "MSME Approved" },
                { icon: CheckCircle, text: "Made in India for Global Markets" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#0c1951] rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-[#0B1F3F]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0B1F3F] mb-6">
                Reliable Export Partner from India
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Professionally managed export company delivering consistent
                quality, timely shipments, and transparent trade communication.
              </p>
              <p className="text-lg text-gray-600">
                We handle supplier verification, inspection, logistics, and all
                mandatory export documentation.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl p-8 shadow-lg">
              <ul className="space-y-4 text-gray-700">
                <li>✔ IEC, GST & MSME Registered</li>
                <li>✔ FOB / CIF / DDP Shipping Options</li>
                <li>✔ Export Compliance & HS Code Support</li>
                <li>✔ Buyer-Oriented Communication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= DYNAMIC CATEGORIES ================= */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-4">
              Export Product Categories
            </h2>
            <p className="text-xl text-gray-600">
              Manufactured and supplied exclusively for international markets
            </p>
          </div>

          {catError && (
            <div className="text-center text-red-600 mb-8">{catError}</div>
          )}

          {catLoading && (
            <div className="text-center text-gray-600 py-12">
              Loading categories...
            </div>
          )}

          {!catLoading && categories.length > 0 && (
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat: any, index: number) => (
                <Link key={cat.id} href={`/categories/${cat.slug ?? cat.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <div className="relative h-40">
                      <Image
                        src={cat.image || "/products/placeholder.jpg"}
                        alt={cat.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <div className="p-6 text-left">
                      <h3 className="text-lg font-bold text-[#0B1F3F] mb-1">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {cat.description || "Export-grade products"}
                      </p>

                      <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm">
                        View Products
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* ================= WHY US ================= */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-8"
              >
                <f.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-[#0B1F3F] mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto text-center backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-[#0B1F3F] mb-6">
              Ready to Discuss Your Import Requirement?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Fast response • Clear quotation • Professional support
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/request-quote">
                <button className="px-8 py-2 bg-gradient-to-r from-[#3B82F6] to-[#0c1951] text-white rounded-xl font-semibold text-lg">
                  Request a Quote
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <GlassFooter />
    </div>
  );
}
