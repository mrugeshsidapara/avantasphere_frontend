'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'motion/react'
import { GlassNavbar } from '@/app/components/GlassNavbar'
import { GlassFooter } from '@/app/components/GlassFooter'
import { ShoppingCart, Package, Truck, Settings } from 'lucide-react'

export function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params?.productId as string
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('description')

  // Sample product data
  const product = {
    id: productId || 'brass-valve-001',
    name: 'Brass Ball Valve - Quarter Turn',
    images: [
      'https://images.unsplash.com/photo-1611224111800-0eaf3e53aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1569062980724-23e1063d8790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1761307234387-d9291985eaf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1611224111800-0eaf3e53aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    ],
    material: 'Brass CZ132',
    finish: 'Chrome Plated / Nickel Plated',
    size: '1/2", 3/4", 1", 1.5", 2"',
    moq: '500 Units',
    hsCode: '84811099',
    packaging: 'Individual poly bag, 50 pcs per carton',
    shipping: 'Sea Freight / Air Freight available',
  }

  const tabs = [
    {
      id: 'description',
      label: 'Description',
      icon: Package,
      content: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Premium quality brass ball valves manufactured with high-grade brass alloy, designed for industrial and commercial plumbing applications. Features quarter-turn operation for easy on/off control.
          </p>
          <p>
            Our brass ball valves are manufactured using precision casting and machining processes, ensuring consistent quality and reliable performance. Each valve undergoes rigorous quality testing before shipment.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Premium brass construction (CZ132 alloy)</li>
            <li>Chrome or nickel-plated finish options</li>
            <li>Quarter-turn lever operation</li>
            <li>Suitable for water, gas, and oil applications</li>
            <li>Temperature range: -20°C to 150°C</li>
            <li>Pressure rating: PN16 (16 bar)</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'packaging',
      label: 'Packaging',
      icon: Package,
      content: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <h3 className="text-xl font-bold text-[#0B1F3F]">Packaging Details</h3>
          <p>Our products are packaged with export-grade materials to ensure safe delivery worldwide.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
              <h4 className="font-bold text-[#0B1F3F] mb-3">Inner Packaging</h4>
              <ul className="space-y-2">
                <li>• Individual poly bag per unit</li>
                <li>• Protective foam wrapping</li>
                <li>• Silica gel moisture protection</li>
              </ul>
            </div>
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
              <h4 className="font-bold text-[#0B1F3F] mb-3">Outer Packaging</h4>
              <ul className="space-y-2">
                <li>• 5-ply corrugated carton</li>
                <li>• 50 pieces per carton</li>
                <li>• Strapping and edge protection</li>
              </ul>
            </div>
          </div>
          <p className="text-sm">
            Custom packaging and branding available for bulk orders. Please contact us for customization options.
          </p>
        </div>
      ),
    },
    {
      id: 'shipping',
      label: 'Shipping',
      icon: Truck,
      content: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <h3 className="text-xl font-bold text-[#0B1F3F]">Shipping Information</h3>
          <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
            <h4 className="font-bold text-[#0B1F3F] mb-4">Available Incoterms</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <div className="font-semibold text-[#3B82F6] mb-2">FOB</div>
                <p className="text-sm">Free on Board - Indian Port</p>
              </div>
              <div>
                <div className="font-semibold text-[#3B82F6] mb-2">CIF</div>
                <p className="text-sm">Cost, Insurance & Freight</p>
              </div>
              <div>
                <div className="font-semibold text-[#3B82F6] mb-2">EXW</div>
                <p className="text-sm">Ex Works - Factory</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
              <h4 className="font-bold text-[#0B1F3F] mb-3">Sea Freight</h4>
              <ul className="space-y-2 text-sm">
                <li>• 20ft Container: ~15,000 units</li>
                <li>• 40ft Container: ~30,000 units</li>
                <li>• Transit time: 15-35 days</li>
              </ul>
            </div>
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
              <h4 className="font-bold text-[#0B1F3F] mb-3">Air Freight</h4>
              <ul className="space-y-2 text-sm">
                <li>• Available for urgent orders</li>
                <li>• Transit time: 5-7 days</li>
                <li>• Additional charges apply</li>
              </ul>
            </div>
          </div>
          <p className="text-sm">
            Lead time: 15-20 days from order confirmation. Expedited production available on request.
          </p>
        </div>
      ),
    },
    {
      id: 'customization',
      label: 'Customization',
      icon: Settings,
      content: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <h3 className="text-xl font-bold text-[#0B1F3F]">Custom OEM Solutions</h3>
          <p>
            We offer comprehensive customization options to meet your specific requirements. Our experienced team can work with you to develop custom products tailored to your market needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
              <h4 className="font-bold text-[#0B1F3F] mb-3">Available Customizations</h4>
              <ul className="space-y-2">
                <li>✓ Custom sizes and specifications</li>
                <li>✓ Different finish options</li>
                <li>✓ Private labeling and branding</li>
                <li>✓ Custom packaging design</li>
                <li>✓ Special certifications</li>
              </ul>
            </div>
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-xl p-6">
              <h4 className="font-bold text-[#0B1F3F] mb-3">OEM Process</h4>
              <ul className="space-y-2">
                <li>1. Requirement discussion</li>
                <li>2. Sample development</li>
                <li>3. Approval and testing</li>
                <li>4. Production and quality control</li>
                <li>5. Shipment and delivery</li>
              </ul>
            </div>
          </div>
          <div className="backdrop-blur-xl bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] border border-white/50 rounded-xl p-6 text-white">
            <p className="mb-4">
              <strong>MOQ for custom orders:</strong> Typically 1000-2000 units depending on customization complexity
            </p>
            <p>
              Contact our team to discuss your custom requirements and receive a detailed quotation.
            </p>
          </div>
        </div>
      ),
    },
  ]

  const handleRequestQuote = () => {
    router.push(`/request-quote?product=${encodeURIComponent(product.name)}`)
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
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`backdrop-blur-xl border rounded-2xl p-2 transition-all duration-300 ${
                      selectedImage === index
                        ? 'bg-white/80 border-[#3B82F6] scale-105 shadow-lg'
                        : 'bg-white/60 border-white/50 hover:bg-white/80 hover:scale-105'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover rounded-xl"
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
                  { label: 'Material', value: product.material },
                  { label: 'Finish', value: product.finish },
                  { label: 'Size', value: product.size },
                  { label: 'MOQ', value: product.moq },
                  { label: 'HS Code', value: product.hsCode },
                  { label: 'Packaging', value: product.packaging },
                  { label: 'Shipping', value: product.shipping },
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start pb-5 border-b border-gray-200"
                  >
                    <span className="font-semibold text-gray-700">{spec.label}:</span>
                    <span className="text-gray-600 text-right max-w-xs">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Request Quote Button */}
              <button
                onClick={handleRequestQuote}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
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
                      ? 'bg-gradient-to-br from-[#3B82F6]/10 to-[#0EA5E9]/10 text-[#3B82F6] border-b-4 border-[#3B82F6]'
                      : 'text-gray-600 hover:bg-white/40'
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
  )
}
