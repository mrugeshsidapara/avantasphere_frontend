import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

export function ProductCategoryPage() {
  const pathname = usePathname();
  const category = pathname.split("/").pop();

  const categoryTitles: Record<string, string> = {
    "brass-components": "Brass Components",
    "industrial-hardware": "Industrial Hardware",
    "custom-oem": "Custom OEM Manufacturing",
    "export-packaging": "Export Packaging Solutions",
  };

  const categoryDescriptions: Record<string, string> = {
    "brass-components": "Premium quality brass fittings, valves, and precision components for industrial and commercial applications",
    "industrial-hardware": "Durable hardware solutions including fasteners, connectors, and industrial fittings",
    "custom-oem": "Tailored manufacturing solutions designed to meet your specific requirements and standards",
    "export-packaging": "Professional packaging solutions designed for secure international shipping and compliance",
  };

  // Mock product data
  const products = [
    {
      id: "1",
      name: "Brass Ball Valve",
      image: "https://images.unsplash.com/photo-1727292485821-f2feb8baa7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      description: "High-quality brass ball valve for industrial use",
    },
    {
      id: "2",
      name: "Brass Check Valve",
      image: "https://images.unsplash.com/photo-1727292485821-f2feb8baa7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      description: "Precision-engineered check valve",
    },
    {
      id: "3",
      name: "Brass Connector",
      image: "https://images.unsplash.com/photo-1727292485821-f2feb8baa7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      description: "Durable brass connector for various applications",
    },
    {
      id: "4",
      name: "Brass Elbow Fitting",
      image: "https://images.unsplash.com/photo-1727292485821-f2feb8baa7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      description: "90-degree brass elbow fitting",
    },
    {
      id: "5",
      name: "Brass Tee Junction",
      image: "https://images.unsplash.com/photo-1727292485821-f2feb8baa7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      description: "T-junction brass fitting",
    },
    {
      id: "6",
      name: "Brass Adapter",
      image: "https://images.unsplash.com/photo-1727292485821-f2feb8baa7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      description: "Multi-purpose brass adapter",
    },
    {
      id: "7",
      name: "Brass Coupling",
      image: "https://images.unsplash.com/photo-1727292485821-f2feb8baa7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      description: "Heavy-duty brass coupling",
    },
    {
      id: "8",
      name: "Brass Nipple",
      image: "https://images.unsplash.com/photo-1727292485821-f2feb8baa7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      description: "Threaded brass nipple fitting",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E0F2FE] to-white py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:text-[#3B82F6]">Home</Link>
              <span className="mx-2">/</span>
              <span>Products</span>
              <span className="mx-2">/</span>
              <span className="text-[#0B1F3F] font-medium">
                {categoryTitles[category || ""] || "Products"}
              </span>
            </div>
            <h1 className="text-5xl font-semibold text-[#0B1F3F] mb-6">
              {categoryTitles[category || ""] || "Products"}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              {categoryDescriptions[category || ""] || "Browse our product catalog"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/products/${category}/${product.id}`}>
                  <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Product Image</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#0B1F3F] mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <Button
                        className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = "/request-quote";
                        }}
                      >
                        Request Quote
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-semibold text-[#0B1F3F] mb-4">
              Need Custom Products?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We offer custom manufacturing solutions tailored to your specific requirements.
            </p>
            <Link href="/request-quote">
              <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-6">
                Get a Custom Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
