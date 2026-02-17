"use client";

import { motion } from "framer-motion";
import { GlassNavbar } from "../components/GlassNavbar";
import { Shield, FileText, Award, Download } from "lucide-react";
import { GlassFooter } from "../components/GlassFooter";

export function CertificationsPageNew() {
  const certifications = [
    {
      icon: Shield,
      title: "IEC",
      fullName: "Import Export Code",
      description:
        "Authorized by the Directorate General of Foreign Trade (DGFT), our IEC certification enables us to engage in export-import business across all Indian ports.",
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
      description:
        "Registered under India's GST regime, ensuring full tax compliance for domestic and international trade operations.",
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
      description:
        "Recognized by the Ministry of MSME, Government of India, providing us with various benefits and ensuring quality standards.",
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

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#0a1c4f] mb-4">
              Our Certifications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AvantaSphere is fully certified and compliant with all regulatory
              requirements for international export business from India.
            </p>
          </motion.div>

          {/* CERTIFICATION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col h-full"
              >
                {/* Badge */}
                <span className="absolute top-4 right-4 px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700">
                  Available on request
                </span>

                {/* Card Header */}
                <div className="flex gap-4 mb-4 min-h-[72px]">
                
                  <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#0c1951] rounded-xl flex items-center justify-center">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0a1c4f]">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {cert.fullName}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 min-h-[96px]">
                  {cert.description}
                </p>

                {/* Bullet Points */}
                <div className="mt-auto space-y-3">
                  {cert.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#0a1c4f] rounded-full mt-1.5" />
                      <span className="text-sm text-gray-700">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-12 text-center shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-[#0a1c4f] mb-4">
              Need Certification Documents?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              All certification documents are available on request for verified
              business enquiries.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {/* Primary */}
              <a href="/request-quote">
                <button className="px-8 py-3 bg-gradient-to-r from-[#3B82F6] to-[#0a1c4f] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Request Documents
                </button>
              </a>

              {/* Secondary */}
<a href="/contact">
  <button className="
    px-8 py-3
    border border-[#0a1c4f]
    text-[#0a1c4f]
    rounded-xl
    font-semibold
    transition-all
    hover:bg-gradient-to-r
    hover:from-[#3B82F6]
    hover:to-[#0a1c4f]
    hover:text-white
    hover:border-transparent
    hover:shadow-lg
  ">
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
