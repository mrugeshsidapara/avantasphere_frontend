import { motion } from "motion/react";
import { GlassNavbar } from "../components/GlassNavbar";
import { Shield, FileText, Award, Download } from "lucide-react";
import { GlassFooter } from "../components/GlassFooter";

export function CertificationsPageNew() {
  const certifications = [
    {
      icon: Shield,
      title: "IEC",
      fullName: "Import Export Code",
      description: "Authorized by the Directorate General of Foreign Trade (DGFT), our IEC certification enables us to engage in export-import business across all Indian ports.",
      details: [
        "Valid for lifetime",
        "Mandatory for export/import",
        "Issued by DGFT, Ministry of Commerce",
        "Enables customs clearance",
      ],
    },
    {
      icon: FileText,
      title: "GST",
      fullName: "Goods & Services Tax Registration",
      description: "Registered under India's GST regime, ensuring full tax compliance for domestic and international trade operations.",
      details: [
        "Tax compliance certified",
        "Enables input tax credit",
        "Required for B2B transactions",
        "Regular return filing",
      ],
    },
    {
      icon: Award,
      title: "MSME",
      fullName: "Micro, Small & Medium Enterprises",
      description: "Recognized by the Ministry of MSME, Government of India, providing us with various benefits and ensuring quality standards.",
      details: [
        "Government recognized",
        "Access to credit facilities",
        "Priority in procurement",
        "Subsidy benefits",
      ],
    },
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
              Our Certifications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AvantaSphere is fully certified and compliant with all regulatory requirements for international export business from India.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="space-y-8 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-10 shadow-2xl hover:bg-white/80 hover:shadow-3xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: Icon & Title */}
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-2xl flex items-center justify-center mb-6">
                      <cert.icon className="w-12 h-12 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-[#0B1F3F] mb-2">
                      {cert.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-4">
                      {cert.fullName}
                    </p>
                    <span className="inline-block px-4 py-2 backdrop-blur-xl bg-white/60 border border-white/60 rounded-lg text-sm text-gray-700">
                      Available on request
                    </span>
                  </div>

                  {/* Middle: Description */}
                  <div className="lg:col-span-2">
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Details List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cert.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 backdrop-blur-xl bg-white/40 border border-white/50 rounded-xl p-4"
                        >
                          <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="backdrop-blur-2xl bg-gradient-to-br from-white/60 to-white/40 border border-white/50 rounded-3xl p-12 text-center shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-[#0B1F3F] mb-4">
              Need Certification Documents?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              All certification documents are available on request for verified business enquiries.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/request-quote">
                <button className="px-8 py-3 bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Request Documents
                </button>
              </a>
              <a href="/contact">
                <button className="px-8 py-3 backdrop-blur-xl bg-white/60 border border-white/50 text-[#3B82F6] rounded-xl font-semibold hover:bg-white/80 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Contact Us
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <GlassFooter />
    </div>
  );
}