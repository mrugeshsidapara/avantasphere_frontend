import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { GlassNavbar } from "../components/GlassNavbar";
import { ArrowRight, Ship, Globe, Package, TrendingUp, Shield, FileText, CheckCircle, Users, Award, MessageCircle } from "lucide-react";
import { GlassFooter } from "../components/GlassFooter";

export function ExportHomePage() {
  const features = [
    {
      icon: Ship,
      title: "Global Shipping",
      description: "Worldwide logistics and freight forwarding",
    },
    {
      icon: Globe,
      title: "International Trade",
      description: "Export to 50+ countries",
    },
    {
      icon: Package,
      title: "Quality Products",
      description: "Premium export-grade goods",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Scalable export solutions",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
      <GlassNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Home_Design1.png"
            alt="Export Business - Shipping Containers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3F]/60 via-[#3B82F6]/40 to-transparent" />
        </div>

        {/* Glass Overlay Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6 mt-20"
        >
          <div className="backdrop-blur-2xl bg-white/20 border border-white/30 rounded-3xl p-12 md:p-16 shadow-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Exporting Excellence Worldwide
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed"
            >
              Your trusted India-based export partner, delivering quality products to UAE, Africa, and Europe with transparency and reliability.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/request-quote">
                <button className="group px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Request Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/products">
                <button className="px-8 py-4 backdrop-blur-xl bg-white/30 border border-white/50 text-white rounded-xl font-semibold text-lg hover:bg-white/40 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Explore Products
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Trust Strip (Glass) */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-8 shadow-xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, text: "IEC Certified" },
                { icon: FileText, text: "GST Registered" },
                { icon: Award, text: "MSME Registered" },
                { icon: CheckCircle, text: "Made in India for Global Markets" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-[#0B1F3F]">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories (Glass Cards) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium export-quality products for global markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Brass Components", desc: "High-precision brass fittings and components" },
              { title: "Industrial Hardware", desc: "Durable hardware for industrial applications" },
              { title: "Custom OEM Manufacturing", desc: "Tailored solutions for your requirements" },
              { title: "Export Packaging Solutions", desc: "Secure packaging for global shipping" },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link href="/products">
                  <div className="group backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-8 hover:bg-white/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-xl flex items-center justify-center mb-6">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3F] mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {product.desc}
                    </p>
                    <span className="text-[#3B82F6] font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About AvantaSphere (Mini Section) */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#E0F2FE] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-6">
                About AvantaSphere
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AvantaSphere is your trusted India-based export partner, connecting quality products with international buyers across UAE, Africa, and Europe. We specialize in brass components, industrial hardware, and custom OEM manufacturing.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With a commitment to transparency, quality, and timely delivery, we help businesses reduce procurement risks and build long-term partnerships.
              </p>
              <Link href="/about">
                <button className="px-8 py-3 bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Learn More About Us
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "15+", label: "Years of Experience" },
                { number: "50+", label: "Countries Served" },
                { number: "500+", label: "Product Range" },
                { number: "1000+", label: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-[#3B82F6] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Certified and compliant with international export standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { title: "IEC", subtitle: "Import Export Code", icon: Shield },
              { title: "GST", subtitle: "Goods & Services Tax", icon: FileText },
              { title: "MSME", subtitle: "Micro, Small & Medium Enterprises", icon: Award },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-8 text-center hover:bg-white/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3F] mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {cert.subtitle}
                </p>
                <span className="inline-block px-4 py-2 backdrop-blur-xl bg-white/60 border border-white/60 rounded-lg text-sm text-gray-700">
                  Available on request
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center"
          >
            <Link href="/certifications">
              <button className="px-8 py-3 backdrop-blur-xl bg-white/60 border border-white/50 text-[#3B82F6] rounded-xl font-semibold hover:bg-white/80 hover:shadow-xl hover:scale-105 transition-all duration-300">
                View All Certifications
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quality & Process */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#E0F2FE] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-4">
              Our Quality Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ensuring excellence at every step of the export journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Supplier Verification", desc: "Rigorous vetting of manufacturing partners" },
              { icon: CheckCircle, title: "Quality Inspection", desc: "Multi-stage quality control checks" },
              { icon: Package, title: "Secure Packaging", desc: "Export-grade protective packaging" },
              { icon: FileText, title: "Export Documentation", desc: "Complete compliance and paperwork" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-8 hover:bg-white/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-[#3B82F6] mb-2">STEP {index + 1}</div>
                <h3 className="text-xl font-bold text-[#0B1F3F] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Serving businesses across three continents
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  region: "UAE & Middle East",
                  icon: Globe,
                  countries: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Oman"],
                },
                {
                  region: "Africa",
                  icon: Globe,
                  countries: ["Nigeria", "Kenya", "South Africa", "Ghana"],
                },
                {
                  region: "Europe",
                  icon: Globe,
                  countries: ["United Kingdom", "Germany", "France", "Italy"],
                },
              ].map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <region.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3F] mb-4">
                    {region.region}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {region.countries.map((country, i) => (
                      <li key={i} className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#3B82F6]" />
                        {country}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-4">
              Why Choose ExportPro?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your complete solution for international trade and export services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-8 hover:bg-white/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3F] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0B1F3F] to-[#1E3A5F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "50+", label: "Countries Served" },
              { number: "10K+", label: "Shipments Delivered" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                  {stat.number}
                </div>
                <div className="text-xl text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-2xl bg-gradient-to-br from-white/60 to-white/40 border border-white/50 rounded-3xl p-12 md:p-16 text-center shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3F] mb-6">
              Ready to Start Exporting?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a custom quote for your export needs today
            </p>
            <Link href="/request-quote">
              <button className="px-10 py-4 bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Get Started Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <GlassFooter />
    </div>
  );
}