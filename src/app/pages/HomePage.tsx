import Link from "next/link";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  CheckCircle2,
  Shield,
  FileText,
  Package,
  Ship,
  TrendingUp,
  Users,
  Globe,
  Award,
  Briefcase,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const productCategories = [
    {
      title: "Brass Components",
      description: "High-quality brass fittings, valves, and precision components",
      image: "https://images.unsplash.com/photo-1727292485821-f2feb8baa7ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFzcyUyMG1ldGFsJTIwY29tcG9uZW50cyUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzcwNzQ5ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/products/brass-components",
    },
    {
      title: "Industrial Hardware",
      description: "Durable hardware solutions for industrial applications",
      image: "https://images.unsplash.com/photo-1736155814290-c6f0e87c1544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwaGFyZHdhcmUlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3MDc0OTg5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/products/industrial-hardware",
    },
    {
      title: "Custom OEM Manufacturing",
      description: "Tailored manufacturing solutions for your specific requirements",
      image: "https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtYW51ZmFjdHVyaW5nJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc3MDc0OTg5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/products/custom-oem",
    },
    {
      title: "Export Packaging Solutions",
      description: "Professional packaging designed for secure international shipping",
      image: "https://images.unsplash.com/photo-1620306677888-10e367e6293d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBvcnQlMjBzaGlwcGluZyUyMGNvbnRhaW5lcnN8ZW58MXx8fHwxNzcwNzQzODYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/products/export-packaging",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "25+", label: "Countries Served" },
    { value: "1000+", label: "Products Exported" },
  ];

  const processSteps = [
    {
      icon: CheckCircle2,
      title: "Supplier Verification",
      description: "Rigorous vetting process for quality assurance",
    },
    {
      icon: Shield,
      title: "Quality Inspection",
      description: "Multi-stage inspection at every production phase",
    },
    {
      icon: Package,
      title: "Secure Packaging",
      description: "Export-grade packaging for safe transit",
    },
    {
      icon: FileText,
      title: "Export Documentation",
      description: "Complete paperwork and compliance support",
    },
    {
      icon: Ship,
      title: "Global Logistics",
      description: "Reliable shipping to your destination",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E0F2FE] via-white to-white" />
        <div className="max-w-[1440px] mx-auto px-8 py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-semibold text-[#0B1F3F] mb-6 leading-tight">
                Exporting Excellence Worldwide
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Your trusted partner for premium brass components, industrial hardware, and custom OEM manufacturing. Delivering quality products from India to international markets across UAE, Africa, and Europe.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/request-quote">
                  <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-6 text-base">
                    Request Quote
                  </Button>
                </Link>
                <Link href="/products/brass-components">
                  <Button variant="outline" className="border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white px-8 py-6 text-base">
                    Explore Products
                  </Button>
                </Link>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-8">
                <span className="text-sm text-gray-600">Connect with us:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all hover:scale-110"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all hover:scale-110"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all hover:scale-110"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:info@avantasphere.com"
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all hover:scale-110"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Glass Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/40 border border-white/50 shadow-xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1679934408563-0f630ae0ef13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGluZGlhfGVufDF8fHx8MTc3MDc0OTg5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Manufacturing Excellence"
                  className="rounded-lg w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-gray-200 bg-gray-50 py-8">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Award className="w-8 h-8 text-[#3B82F6]" />
              <span className="text-sm font-medium text-gray-700">IEC Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FileText className="w-8 h-8 text-[#3B82F6]" />
              <span className="text-sm font-medium text-gray-700">GST Registered</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Briefcase className="w-8 h-8 text-[#3B82F6]" />
              <span className="text-sm font-medium text-gray-700">MSME Registered</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Globe className="w-8 h-8 text-[#3B82F6]" />
              <span className="text-sm font-medium text-gray-700">Made in India for Global Markets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#0B1F3F] mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of export-quality products designed for international markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={category.link}>
                  <div className="group relative rounded-xl overflow-hidden backdrop-blur-sm bg-white/60 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#0B1F3F] mb-2">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <span className="text-[#3B82F6] text-sm font-medium inline-flex items-center gap-1">
                        Learn More
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-semibold text-[#0B1F3F] mb-6">
                About AvantaSphere
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AvantaSphere is a leading export company based in India, specializing in high-quality brass components, industrial hardware, and custom OEM manufacturing solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 15 years of experience, we serve international buyers across UAE, Africa, Europe, and beyond. Our commitment to quality, reliability, and customer satisfaction has made us a trusted partner in global trade.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-[#0B1F3F] text-[#0B1F3F] hover:bg-[#0B1F3F] hover:text-white">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/80 border border-white/50 rounded-xl p-6 text-center shadow-xl"
                >
                  <div className="text-3xl font-semibold text-[#3B82F6] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#0B1F3F] mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Committed to international standards and regulatory compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "IEC Certified", desc: "International standards" },
              { icon: FileText, title: "GST Registered", desc: "Tax compliant" },
              { icon: Briefcase, title: "MSME Registered", desc: "Government recognized" },
              { icon: Shield, title: "Quality Policy", desc: "ISO standards" },
            ].map((cert, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <cert.icon className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#0B1F3F] mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F3F] to-[#1E3A5F] text-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">
              Why Choose AvantaSphere?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our proven process ensures quality, reliability, and timely delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#0B1F3F] mb-4">
              Our Global Presence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Serving customers worldwide with dedication and excellence
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1758876202877-30b2c505ad9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGJ1c2luZXNzJTIwZ2xvYmFsfGVufDF8fHx8MTc3MDc0OTkwMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Global Map"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/80 to-transparent flex items-end">
              <div className="p-12 text-white">
                <h3 className="text-2xl font-semibold mb-4">
                  Exporting to 25+ Countries
                </h3>
                <p className="text-lg text-gray-200 max-w-2xl">
                  UAE • Africa • Europe • Middle East • Southeast Asia
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#E0F2FE]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-semibold text-[#0B1F3F] mb-6">
              Looking for a Reliable Export Partner?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can support your business with our quality products and professional export services.
            </p>
            <Link href="/request-quote">
              <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-12 py-6 text-base">
                Request a Quote Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}