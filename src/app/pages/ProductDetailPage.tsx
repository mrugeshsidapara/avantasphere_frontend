"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { GlassNavbar } from "@/app/components/GlassNavbar";
import { GlassFooter } from "@/app/components/GlassFooter";
import { ShoppingCart, Package, Truck, Settings } from "lucide-react";
import { useProduct } from "@/lib/hooks/use-api";
import { Product, ProductImage } from "@/lib/types";

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1611224111800-0eaf3e53aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

export function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = (params?.productId as string) ?? "";
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const { data, loading, error } = useProduct(productId || null);

  const product = data as Product;

  const tabs = [
    {
      id: "description",
      label: "Description",
      icon: Package,
      content: (
        <div className="space-y-10">
          <p className="text-gray-600 text-base">
            {product.description ||
              "Export-grade product designed for industrial, commercial, and OEM applications."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/70 border border-white/50 p-6">
              <h3 className="font-semibold text-[#0B1F3F] mb-4 flex items-center gap-2">
                🏭 Applications
              </h3>
              {/* <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                {(product.applications.length
                  ? product.applications
                  : [
                      "Water Systems",
                      "Gas Lines",
                      "Pipelines",
                      "Plumbing",
                      "OEM Use",
                      "Export Projects",
                    ]
                ).map((a, i) => (
                  <div key={i}>• {a}</div>
                ))}
              </div> */}
            </div>

            {/* KEY BENEFITS */}
            <div className="rounded-2xl bg-white/70 border border-white/50 p-6">
              <h3 className="font-semibold text-[#0B1F3F] mb-4 flex items-center gap-2">
                ⭐ Why This Product
              </h3>
              <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                <div>✔ Leak-proof performance</div>
                <div>✔ Export-quality finish</div>
                <div>✔ Long service life</div>
                <div>✔ OEM & branding ready</div>
              </div>
            </div>
          </div>

          {/* QUALITY + ORDERING (VERY COMPACT) */}
          <div className="rounded-2xl bg-gradient-to-br from-[#3B82F6]/10 to-[#0c1951]/10 border border-white/50 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold text-[#0B1F3F] mb-2 flex items-center gap-2">
                  🛡 Quality
                </h4>
                <div>✓ ISO 9001 Manufacturing</div>
                <div>✓ Pressure & leakage tested</div>
                <div>✓ Export inspection passed</div>
              </div>

              <div>
                <h4 className="font-semibold text-[#0B1F3F] mb-2 flex items-center gap-2">
                  📦 Ordering
                </h4>
                <div>• MOQ: {product.moq}</div>
                <div>• Lead time: 15–20 days</div>
                <div>• Samples available</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "packaging",
      label: "Packaging",
      icon: Package,
      content: (
        <div className="space-y-6 text-gray-600 leading-relaxed">
          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0B1F3F] flex items-center gap-2">
            <Package className="w-6 h-6 text-[#3B82F6]" />
            Packaging Details
          </h3>

          {/* INTRO */}
          <p>
            Our products are packaged with export-grade materials to ensure safe
            handling and delivery worldwide.
          </p>

          {/* PACKAGING TYPES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* INNER PACKAGING */}
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
              <h4 className="font-bold text-[#0B1F3F] mb-4 flex items-center gap-2">
                📦 Inner Packaging
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Individual poly bag per unit</li>
                <li>• Protective foam wrapping</li>
                <li>• Silica gel moisture protection</li>
              </ul>
            </div>

            {/* OUTER PACKAGING */}
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
              <h4 className="font-bold text-[#0B1F3F] mb-4 flex items-center gap-2">
                🧱 Outer Packaging
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• 5-ply corrugated carton</li>
                <li>• 50 pieces per carton</li>
                <li>• Strapping and edge protection</li>
              </ul>
            </div>
          </div>

          {/* CUSTOMIZATION NOTE */}
          <div className="rounded-xl bg-gradient-to-br from-[#3B82F6]/10 to-[#0c1951]/10 border border-white/50 p-4 text-sm">
            🎨 <strong>Customization available:</strong> Custom packaging,
            branding, and labeling options supported for bulk orders.
          </div>
        </div>
      ),
    },
    {
      id: "shipping",
      label: "Shipping",
      icon: Truck,
      content: (
        <div className="space-y-6 text-gray-600 leading-relaxed">
          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0B1F3F] flex items-center gap-2">
            <Truck className="w-6 h-6 text-[#3B82F6]" />
            Shipping Information
          </h3>

          {/* INCOTERMS */}
          <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
            <h4 className="font-bold text-[#0B1F3F] mb-4 flex items-center gap-2">
              📦 Available Incoterms
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg bg-white/70 border border-white/50 p-4">
                <div className="font-semibold text-[#3B82F6]">FOB</div>
                <p className="text-sm mt-1">Free on Board – Indian Port</p>
              </div>
              <div className="rounded-lg bg-white/70 border border-white/50 p-4">
                <div className="font-semibold text-[#3B82F6]">CIF</div>
                <p className="text-sm mt-1">Cost, Insurance & Freight</p>
              </div>
              <div className="rounded-lg bg-white/70 border border-white/50 p-4">
                <div className="font-semibold text-[#3B82F6]">EXW</div>
                <p className="text-sm mt-1">Ex Works – Factory</p>
              </div>
            </div>
          </div>

          {/* FREIGHT OPTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* SEA FREIGHT */}
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
              <h4 className="font-bold text-[#0B1F3F] mb-3 flex items-center gap-2">
                🚢 Sea Freight
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• 20ft Container: ~15,000 units</li>
                <li>• 40ft Container: ~30,000 units</li>
                <li>• Transit time: 15–35 days</li>
              </ul>
            </div>

            {/* AIR FREIGHT */}
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
              <h4 className="font-bold text-[#0B1F3F] mb-3 flex items-center gap-2">
                ✈️ Air Freight
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Available for urgent orders</li>
                <li>• Transit time: 5–7 days</li>
                <li>• Additional charges apply</li>
              </ul>
            </div>
          </div>

          {/* LEAD TIME */}
          <div className="rounded-xl bg-gradient-to-br from-[#3B82F6]/10 to-[#0c1951]/10 border border-white/50 p-4 text-sm">
            ⏱ <strong>Lead time:</strong> 15–20 days from order confirmation.
            Expedited production available on request.
          </div>
        </div>
      ),
    },
    {
      id: "customization",
      label: "Customization",
      icon: Settings,
      content: (
        <div className="space-y-6 text-gray-600 leading-relaxed">
          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0B1F3F] flex items-center gap-2">
            <Settings className="w-6 h-6 text-[#3B82F6]" />
            Custom OEM Solutions
          </h3>

          {/* INTRO */}
          <p>
            We offer comprehensive customization options to meet your specific
            requirements. Our experienced team works closely with you to develop
            tailor-made products for your market needs.
          </p>

          {/* CUSTOMIZATION + PROCESS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* AVAILABLE CUSTOMIZATIONS */}
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
              <h4 className="font-bold text-[#0B1F3F] mb-4 flex items-center gap-2">
                🎨 Available Customizations
              </h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Custom sizes and specifications</li>
                <li>✓ Different finish options</li>
                <li>✓ Private labeling and branding</li>
                <li>✓ Custom packaging design</li>
                <li>✓ Special certifications</li>
              </ul>
            </div>

            {/* OEM PROCESS */}
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
              <h4 className="font-bold text-[#0B1F3F] mb-4 flex items-center gap-2">
                ⚙️ OEM Process
              </h4>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>Requirement discussion</li>
                <li>Sample development</li>
                <li>Approval and testing</li>
                <li>Production and quality control</li>
                <li>Shipment and delivery</li>
              </ol>
            </div>
          </div>

          {/* MOQ + CTA */}
          <div className="backdrop-blur-xl bg-gradient-to-br from-[#3B82F6] to-[#0c1951] border border-white/50 rounded-xl p-6 text-white">
            <p className="mb-3 flex items-center gap-2">
              📦 <strong>MOQ for custom orders:</strong>
              <span>
                Typically 1000–2000 units depending on customization complexity
              </span>
            </p>
            <p>
              📞 Contact our team to discuss your custom requirements and
              receive a detailed quotation.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const handleRequestQuote = () => {
    router.push(`/request-quote?product=${encodeURIComponent(product.name)}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
        <GlassNavbar />
        <div className="pt-32 pb-20 px-6 text-center text-gray-600">
          Loading product...
        </div>
        <GlassFooter />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
        <GlassNavbar />
        <div className="pt-32 pb-20 px-6 text-center">
          <p className="text-red-600">{error || "Product not found"}</p>
          <button
            onClick={() => router.push("/products")}
            className="mt-4 text-blue-600 underline"
          >
            Back to products
          </button>
        </div>
        <GlassFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
      <GlassNavbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Product Layout: Left Image + Right Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left: Large Image + Thumbnails */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-6 mb-6 shadow-2xl">
                <img
                  src={
                    product.images?.[selectedImage]?.imageUrl || PLACEHOLDER_IMG
                  }
                  alt={product.name}
                  className="w-full h-[500px] object-cover rounded-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = PLACEHOLDER_IMG;
                  }}
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.images?.map((image, index) => (
                  <button
                    key={image.id ?? index}
                    onClick={() => setSelectedImage(index)}
                    className={`backdrop-blur-xl border rounded-2xl p-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "bg-white/80 border-[#3B82F6] scale-105 shadow-lg"
                        : "bg-white/60 border-white/50 hover:bg-white/80 hover:scale-105"
                    }`}
                  >
                    <img
                      src={image?.imageUrl || PLACEHOLDER_IMG}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover rounded-xl"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = PLACEHOLDER_IMG;
                      }}
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-10 shadow-2xl h-fit"
            >
              <h1 className="text-4xl font-bold text-[#0B1F3F] mb-8">
                {product.name}
              </h1>

              {/* Product Specifications */}
              <div className="space-y-5 mb-8">
                {[
                  { label: "Material", value: product.material },
                  { label: "Finish", value: product.finish },
                  // { label: "Size", value: product.size },
                  { label: "MOQ", value: product.moq },
                  { label: "HS Code", value: product.hsCode },
                  //{ label: "Packaging", value: product.packaging },
                  //{ label: "Shipping", value: product.shipping },
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start pb-5 border-b border-gray-200"
                  >
                    <span className="font-semibold text-gray-700">
                      {spec.label}:
                    </span>
                    <span className="text-gray-600 text-right max-w-xs">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Request Quote Button */}
              <button
                onClick={handleRequestQuote}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#0c1951] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Request Quote
              </button>
            </motion.div>
          </div>

          {/* Tabs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Tab Headers (Glass Theme - No Borders) */}
            <div className="flex border-b border-white/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-5 font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-br from-[#3B82F6]/10 to-[#0c1951]/10 text-[#3B82F6] border-b-4 border-[#3B82F6]"
                      : "text-gray-600 hover:bg-white/40"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-10">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
          </motion.div>
        </div>
      </div>

      <GlassFooter />
    </div>
  );
}
