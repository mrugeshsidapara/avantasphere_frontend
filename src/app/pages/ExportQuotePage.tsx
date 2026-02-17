"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { GlassNavbar } from "../components/GlassNavbar";
import { GlassFooter } from "../components/GlassFooter";
import {
  Send,
  CheckCircle,
  Package,
  Globe,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export function ExportQuotePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    productCategory: "",
    quantity: "",
    incoterms: "",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        country: "",
        productCategory: "",
        quantity: "",
        incoterms: "",
        description: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
      <GlassNavbar />

      {/* HEADER */}
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-[#0B1F3F] mb-4"
          >
            Request a Quote
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Share your requirements and our export team will respond within 24
            business hours.
          </p>
        </div>
      </div>
      {/* Benefits */}
      <div className="px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Competitive Pricing */}
            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#0c1951] rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3F]">
                  Competitive Pricing
                </h3>
                <p className="text-sm text-gray-600">
                  Best rates for bulk orders
                </p>
              </div>
            </div>

            {/* Global Delivery */}
            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#0c1951] rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3F]">
                  Global Delivery
                </h3>
                <p className="text-sm text-gray-600">
                  Shipping to 50+ countries
                </p>
              </div>
            </div>

            {/* OEM & Documentation — NEW (BEST CARD) */}
            <div className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#0c1951] rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3F]">
                  OEM & Export Support
                </h3>
                <p className="text-sm text-gray-600">
                  Documentation, compliance & branding
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT — CONTACT & TRUST */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-[#0B1F3F] to-[#1E3A5F] rounded-3xl p-8 text-white sticky top-24">
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#3B82F6]" />
                  <span>sales@company.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#3B82F6]" />
                  <span>+91 XXXXX XXXXX</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#3B82F6]" />
                  <span>India</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#3B82F6]" />
                  <span>Mon–Fri, 9:00–18:00 IST</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <h3 className="font-semibold mb-4">Why Buyers Trust Us</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✔ 15+ years export experience</li>
                  <li>✔ Competitive factory pricing</li>
                  <li>✔ OEM & private labeling</li>
                  <li>✔ Complete export documentation</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1F3F] mb-2">
                    Request Submitted
                  </h3>
                  <p className="text-gray-600 text-center">
                    Our team will contact you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* INPUT STYLE */}
                  {/*
          px-4 py-2.5  -> compact height
          border-gray-300 -> light grey
          focus:border-[#152e51] -> your required color
        */}

                  {/* COMPANY & CONTACT */}
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold text-lg text-[#0B1F3F] mb-4">
                      <Globe className="w-5 h-5 text-[#3B82F6]" />
                      Company & Contact
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        ["companyName", "Company Name", "ABC Trading Co."],
                        ["contactName", "Contact Name", "John Doe"],
                        ["email", "Email", "john@company.com"],
                        ["phone", "Phone / WhatsApp", "+971 50 XXX XXXX"],
                      ].map(([name, label, placeholder]) => (
                        <div key={name}>
                          <label className="block text-sm font-semibold mb-2 text-[#0B1F3F]">
                            {label} *
                          </label>
                          <input
                            name={name}
                            value={(formData as any)[name]}
                            onChange={handleChange}
                            required
                            placeholder={placeholder}
                            className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg
                             focus:outline-none focus:border-[#152e51] focus:ring-0
                             transition text-gray-800 placeholder-gray-400"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ORDER DETAILS */}
                  <div className="mt-6">
                    <h3 className="flex items-center gap-2 font-semibold text-lg text-[#0B1F3F] mb-4">
                      <Package className="w-5 h-5 text-[#3B82F6]" />
                      Order Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        placeholder="Country"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg
                         focus:outline-none focus:border-[#152e51] focus:ring-0
                         transition"
                      />

                      <select
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg
                         focus:outline-none focus:border-[#152e51] focus:ring-0
                         transition"
                      >
                        <option value="">Product Category</option>
                        <option value="industrial">
                          Industrial Components
                        </option>
                        <option value="hardware">Hardware & Tools</option>
                        <option value="oem">Custom OEM</option>
                      </select>

                      <input
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        placeholder="Estimated Quantity"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg
                         focus:outline-none focus:border-[#152e51] focus:ring-0
                         transition"
                      />

                      <input
                        name="incoterms"
                        value={formData.incoterms}
                        onChange={handleChange}
                        required
                        placeholder="Incoterms (FOB, CIF, EXW)"
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg
                         focus:outline-none focus:border-[#152e51] focus:ring-0
                         transition"
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="mt-6">
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Specifications, drawings, packaging, delivery timeline..."
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg
                       focus:outline-none focus:border-[#152e51] focus:ring-0
                       transition resize-none"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-[#3B82F6] to-[#0c1951]
                     text-white rounded-xl font-semibold text-lg
                     flex items-center justify-center gap-2
                     hover:scale-[1.02] transition"
                  >
                    <Send className="w-5 h-5" />
                    Submit Quote Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <GlassFooter />
    </div>
  );
}
