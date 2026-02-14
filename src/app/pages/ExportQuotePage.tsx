import { useState } from "react";
import { motion } from "motion/react";
import { GlassNavbar } from "../components/GlassNavbar";
import { Send, CheckCircle, Package, Globe } from "lucide-react";
import { GlassFooter } from "../components/GlassFooter";


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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E0F2FE] via-white to-[#F0F9FF]">
      <GlassNavbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#0B1F3F] mb-4">
              Request a Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get a customized quote for your export requirements. We'll respond within 24 hours.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B1F3F] mb-1">Competitive Pricing</h3>
                <p className="text-sm text-gray-600">Best rates for bulk orders</p>
              </div>
            </div>
            <div className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B1F3F] mb-1">Global Delivery</h3>
                <p className="text-sm text-gray-600">Shipping to 50+ countries</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl p-10 shadow-2xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1F3F] mb-2">
                    Quote Request Received!
                  </h3>
                  <p className="text-gray-600 text-center">
                    Thank you! Our team will review your requirements and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Company Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white/70 transition-all text-gray-800 placeholder-gray-500"
                        placeholder="ABC Trading Co."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white/70 transition-all text-gray-800 placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white/70 transition-all text-gray-800 placeholder-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white/70 transition-all text-gray-800 placeholder-gray-500"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Country & Product Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white/70 transition-all text-gray-800 placeholder-gray-500"
                        placeholder="United Arab Emirates"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                        Product Category *
                      </label>
                      <select
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white/70 transition-all text-gray-800"
                      >
                        <option value="">Select a category</option>
                        <option value="industrial">Industrial Components</option>
                        <option value="export-goods">Export Goods</option>
                        <option value="hardware">Hardware & Tools</option>
                        <option value="custom">Custom OEM Solutions</option>
                      </select>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                      Estimated Quantity *
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white/70 transition-all text-gray-800 placeholder-gray-500"
                      placeholder="e.g., 1000 units, 5 containers"
                    />
                  </div>

                  {/* Incoterms */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                      Incoterms *
                    </label>
                    <input
                      type="text"
                      name="incoterms"
                      value={formData.incoterms}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white/70 transition-all text-gray-800 placeholder-gray-500"
                      placeholder="e.g., FOB, CIF"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                      Additional Details *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white/70 transition-all text-gray-800 placeholder-gray-500 resize-none"
                      placeholder="Please provide details about your requirements, specifications, delivery timeline, and any other relevant information..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group w-full px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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