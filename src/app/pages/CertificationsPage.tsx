import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Award, FileText, Briefcase, Shield, CheckCircle2, Download } from "lucide-react";

export function CertificationsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const certifications = [
    {
      icon: Award,
      title: "IEC Certificate",
      subtitle: "Importer Exporter Code",
      description: "Authorized by the Directorate General of Foreign Trade (DGFT), Government of India. This unique code enables us to conduct international trade operations legally.",
      status: "Active & Valid",
      color: "bg-[#3B82F6]",
    },
    {
      icon: FileText,
      title: "GST Registration",
      subtitle: "Goods & Services Tax",
      description: "Registered under the GST regime in India, ensuring complete tax compliance and transparency in all our business transactions.",
      status: "Active & Valid",
      color: "bg-[#10B981]",
    },
    {
      icon: Briefcase,
      title: "MSME Registration",
      subtitle: "Micro, Small & Medium Enterprises",
      description: "Certified by the Ministry of MSME, Government of India. This recognition validates our commitment to quality and business standards.",
      status: "Active & Valid",
      color: "bg-[#F59E0B]",
    },
    {
      icon: Shield,
      title: "Quality Policy Certificate",
      subtitle: "ISO Standards Compliant",
      description: "Our quality management system follows ISO standards, ensuring consistent product quality and customer satisfaction.",
      status: "Active & Valid",
      color: "bg-[#8B5CF6]",
    },
  ];

  const additionalCompliance = [
    {
      title: "Export Quality Standards",
      items: [
        "Product specifications meet international standards",
        "Regular third-party quality audits",
        "Complete traceability of materials",
        "Documented quality control procedures",
      ],
    },
    {
      title: "Documentation Compliance",
      items: [
        "Commercial Invoice as per international format",
        "Packing list with detailed product information",
        "Bill of Lading for sea/air freight",
        "Certificate of Origin when required",
        "Country-specific documentation support",
      ],
    },
    {
      title: "Ethical Business Practices",
      items: [
        "Transparent pricing and terms",
        "Fair labor practices",
        "Environmental responsibility",
        "Adherence to anti-corruption policies",
      ],
    },
  ];

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
            className="text-center"
          >
            <h1 className="text-5xl font-semibold text-[#0B1F3F] mb-6">
              Certifications & Compliance
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality, compliance, and international standards
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-full opacity-50" />
                
                <div className="relative">
                  <div className={`w-16 h-16 ${cert.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-[#0B1F3F] mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-[#3B82F6] font-medium">{cert.subtitle}</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium text-green-600">{cert.status}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-[#3B82F6] border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Request Copy
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Notice */}
      <section className="py-16 bg-[#E0F2FE]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-semibold text-[#0B1F3F] mb-4">
              Certificate Availability
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              All certificates are available on request. We provide verified copies of our
              certifications to serious buyers as part of the due diligence process. Please
              contact our export team to request specific certificates.
            </p>
            <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-6">
              Contact Export Team
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Additional Compliance */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#0B1F3F] mb-4">
              Additional Compliance Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond certifications, we maintain comprehensive compliance across all operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalCompliance.map((section, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#0B1F3F] mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F3F] to-[#1E3A5F] text-white">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">
              Why Compliance Matters
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our certifications and compliance standards protect your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Legal Protection",
                description: "Ensures all transactions are legally compliant and documented",
              },
              {
                title: "Quality Assurance",
                description: "Guarantees products meet international quality standards",
              },
              {
                title: "Smooth Customs",
                description: "Proper documentation enables faster customs clearance",
              },
              {
                title: "Business Trust",
                description: "Builds confidence with verified credentials and transparency",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-semibold text-[#0B1F3F] mb-6">
              Need Certificate Verification?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're happy to provide verified copies of any certificates and documentation.
              Contact us for complete transparency.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-6">
                Request Certificates
              </Button>
              <Button
                variant="outline"
                className="border-[#0B1F3F] text-[#0B1F3F] hover:bg-[#0B1F3F] hover:text-white px-8 py-6"
              >
                Contact Export Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
