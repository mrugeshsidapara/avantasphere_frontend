'use client'
import { motion } from "motion/react";
import { GlassNavbar } from "../components/GlassNavbar";
import { Target, Award, Users, Globe, TrendingUp, Shield } from "lucide-react";
import { GlassFooter } from "../components/GlassFooter";

export function ExportAboutPage() {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We prioritize quality in every product and service we deliver",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building long-term relationships based on trust and consistency",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our priority, always putting customers first",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting businesses across continents with seamless service",
    },
  ];

  const milestones = [
    { year: "2008", event: "Company Founded", description: "Started with a vision to connect global markets" },
    { year: "2012", event: "International Expansion", description: "Expanded services to UAE and Middle East" },
    { year: "2016", event: "African Markets", description: "Established strong presence across African nations" },
    { year: "2020", event: "European Operations", description: "Launched operations in European markets" },
    { year: "2024", event: "Digital Transformation", description: "Implemented advanced logistics and tracking systems" },
  ];

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
              About AvantaSphere
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in international trade, connecting businesses worldwide with quality products and reliable export services from India.
            </p>
          </motion.div>

          {/* Hero Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden mb-20"
          >
            <img
              src="https://images.unsplash.com/photo-1611224111800-0eaf3e53aa45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
              alt="Export Business"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/80 via-[#0B1F3F]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">15+ Years of Excellence</h2>
              <p className="text-xl text-white/90 max-w-2xl">
                Leading the way in international export services, connecting quality Indian products to global markets.
              </p>
            </div>
          </motion.div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl p-10 shadow-2xl h-full">
                <h2 className="text-3xl font-bold text-[#0B1F3F] mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2008, AvantaSphere began with a simple mission: to bridge the gap between quality Indian manufacturers and international buyers seeking reliable export partners.
                  </p>
                  <p>
                    Over the years, we've grown from a small export house to a trusted name in global trade, serving clients across UAE, Africa, and Europe. Our success is built on unwavering commitment to quality, timely delivery, and exceptional customer service.
                  </p>
                  <p>
                    Today, we specialize in brass components, industrial hardware, and custom OEM manufacturing, always maintaining the highest standards of quality and professionalism that our clients expect.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="backdrop-blur-2xl bg-gradient-to-br from-[#3B82F6] to-[#0c1951] border border-white/50 rounded-3xl p-10 shadow-2xl text-white h-full">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <div className="space-y-4 leading-relaxed">
                  <p className="text-white/95">
                    To be the most trusted export partner for businesses worldwide, delivering excellence in quality, service, and value.
                  </p>
                  <p className="text-white/95">
                    We strive to make international trade seamless and accessible, helping businesses grow beyond borders with confidence and ease.
                  </p>
                  <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/30">
                    <TrendingUp className="w-8 h-8" />
                    <div>
                      <div className="font-bold text-2xl">10,000+</div>
                      <div className="text-white/90">Successful Shipments</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-[#0B1F3F] text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="backdrop-blur-2xl bg-white/60 border border-white/50 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#0c1951] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3F] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-[#0B1F3F] text-center mb-12">
              Our Journey
            </h2>
            <div className="backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl p-10 shadow-2xl">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex gap-6 relative"
                  >
                    {/* Timeline Line */}
                    {index < milestones.length - 1 && (
                      <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-[#3B82F6] to-[#0c1951]" />
                    )}
                    
                    {/* Year Badge */}
                    <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#0c1951] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {milestone.year.slice(2)}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="text-sm text-gray-500 mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#0B1F3F] mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-2xl bg-gradient-to-br from-[#0B1F3F] to-[#1E3A5F] border border-white/50 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl font-bold text-white text-center mb-10">
                AvantaSphere by the Numbers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { icon: Globe, number: "50+", label: "Countries" },
                  { icon: Users, number: "500+", label: "Happy Clients" },
                  { icon: Award, number: "15+", label: "Years Experience" },
                  { icon: TrendingUp, number: "10K+", label: "Shipments" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/80">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <GlassFooter />
    </div>
  );
}