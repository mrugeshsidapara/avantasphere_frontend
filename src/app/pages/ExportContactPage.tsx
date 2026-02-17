"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageCircle,
} from "lucide-react";
import { GlassNavbar } from "../components/GlassNavbar";
import { GlassFooter } from "../components/GlassFooter";

export function ExportContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
      <GlassNavbar />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#0a1c4f] mb-3">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reach out to our export team for quotations, partnerships, and
              international trade enquiries.
            </p>
          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-2xl font-bold text-[#0a1c4f] mb-6">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-600">
                    Thank you. Our export team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  <input
                    name="name"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="px-5 py-4 rounded-xl bg-white/70 border border-gray-200"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="px-5 py-4 rounded-xl bg-white/70 border border-gray-200"
                  />
                  <input
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-5 py-4 rounded-xl bg-white/70 border border-gray-200"
                  />
                  <input
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="px-5 py-4 rounded-xl bg-white/70 border border-gray-200"
                  />
                  <input
                    name="country"
                    placeholder="Destination Country / Market"
                    value={formData.country}
                    onChange={handleChange}
                    className="px-5 py-4 rounded-xl bg-white/70 border border-gray-200 md:col-span-2"
                  />
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your product requirement, quantity, and destination..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="px-5 py-4 rounded-xl bg-white/70 border border-gray-200 md:col-span-2 resize-none"
                  />
                  <button
                    type="submit"
                    className="md:col-span-2 bg-gradient-to-r from-[#3B82F6] to-[#0a1c4f] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

            {/* CONTACT INFO */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl p-8 shadow-2xl h-full flex flex-col"
            >
              <div>
                <h3 className="text-xl font-bold text-[#0a1c4f] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    info@exportpro.com
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    +1 (234) 567-8900
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Mumbai, India
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-auto pt-6">
                Response within 24 business hours.
              </p>
            </motion.div>

            {/* BUSINESS HOURS */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.25)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="backdrop-blur-2xl bg-gradient-to-br from-[#3B82F6] to-[#0a1c4f] border border-white/50 rounded-3xl p-8 shadow-2xl text-white h-full flex flex-col"
            >
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-white/90">
                  <div className="flex justify-between">
                    <span>Mon – Fri</span>
                    <span>9:00 – 6:00 IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 – 4:00 IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/70 mt-auto pt-6">
                All timings are based on Indian Standard Time (IST).
              </p>
            </motion.div>

            {/* WHATSAPP */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl p-6 shadow-2xl h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0a1c4f]">
                  WhatsApp Us
                </h3>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Scan to chat with our export team
              </p>

              <div className="mx-auto w-36 h-36 border border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-white">
                <img
                  src="/whatsapp-qr.png"
                  alt="WhatsApp QR Code"
                  className="w-28 h-28 object-contain"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <GlassFooter />
    </div>
  );
}
