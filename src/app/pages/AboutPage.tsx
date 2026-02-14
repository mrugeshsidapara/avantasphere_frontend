import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Target, Eye, Award, Users, Globe, TrendingUp } from "lucide-react";

export function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in product quality and service delivery, ensuring every shipment meets international specifications.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers' success is our priority. We work closely with buyers to understand and fulfill their specific requirements.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With experience serving 25+ countries, we understand diverse market needs and regulatory requirements.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "We constantly evolve our processes and product offerings to meet changing market demands and industry trends.",
    },
  ];

  const milestones = [
    { year: "2010", title: "Company Founded", description: "Started operations in Mumbai" },
    { year: "2012", title: "First International Export", description: "Expanded to UAE market" },
    { year: "2015", title: "ISO Certification", description: "Achieved quality standards" },
    { year: "2018", title: "Africa Expansion", description: "Entered African markets" },
    { year: "2020", title: "European Markets", description: "Started exporting to Europe" },
    { year: "2026", title: "25+ Countries", description: "Serving global markets" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-[#0B1F3F] to-[#1E3A5F] text-white">
        <div className="max-w-[1440px] mx-auto px-8 py-20 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-semibold mb-6">About AvantaSphere</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Your trusted partner in international trade, delivering excellence from India to the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-semibold text-[#0B1F3F] mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, AvantaSphere began with a simple vision: to bridge the gap
                  between India's manufacturing excellence and international markets seeking
                  quality products at competitive prices.
                </p>
                <p>
                  Starting as a small export house in Mumbai, we quickly established ourselves
                  as a reliable partner for brass components and industrial hardware. Our
                  commitment to quality, transparency, and customer service helped us grow
                  exponentially over the years.
                </p>
                <p>
                  Today, we serve customers across 25+ countries, including UAE, Africa, and
                  Europe. Our product range has expanded to include custom OEM manufacturing
                  and specialized export packaging solutions, making us a one-stop destination
                  for international buyers.
                </p>
                <p>
                  With over 15 years of experience, we continue to innovate and adapt, ensuring
                  our customers receive not just products, but complete export solutions backed
                  by expertise and dedication.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1679934408563-0f630ae0ef13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGluZGlhfGVufDF8fHx8MTc3MDc0OTg5OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Facility"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              {...fadeInUp}
              className="bg-white rounded-2xl p-12 border border-gray-200"
            >
              <div className="w-16 h-16 bg-[#E0F2FE] rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <h2 className="text-3xl font-semibold text-[#0B1F3F] mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be recognized as the most trusted and innovative export partner, connecting
                India's manufacturing excellence with global markets while maintaining the
                highest standards of quality, ethics, and sustainability.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-12 border border-gray-200"
            >
              <div className="w-16 h-16 bg-[#E0F2FE] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#3B82F6]" />
              </div>
              <h2 className="text-3xl font-semibold text-[#0B1F3F] mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver superior quality products and comprehensive export solutions that
                empower our customers to succeed in their markets. We achieve this through
                continuous innovation, rigorous quality control, and unwavering commitment to
                customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#0B1F3F] mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#E0F2FE] rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[#3B82F6]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B1F3F] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Focus */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F3F] to-[#1E3A5F] text-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">Export-Focused Excellence</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our entire operation is designed around the unique requirements of international trade
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-semibold mb-4">Compliance & Documentation</h3>
              <p className="text-gray-200 leading-relaxed">
                We handle all export documentation, from IEC certificates to country-specific
                compliance requirements, ensuring smooth customs clearance.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-200 leading-relaxed">
                Multi-stage inspection processes ensure products meet international standards.
                We provide complete testing reports and certifications with every shipment.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-semibold mb-4">Logistics Support</h3>
              <p className="text-gray-200 leading-relaxed">
                From factory to your warehouse, we manage the entire logistics chain, working
                with trusted freight forwarders and shipping lines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#0B1F3F] mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#E0F2FE] hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white rounded-xl p-6 border border-gray-200 inline-block">
                      <div className="text-[#3B82F6] font-semibold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-[#0B1F3F] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-[#3B82F6] rounded-full border-4 border-white shadow-lg z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
