import { useState } from "react";
import { motion } from "motion/react";
import { GlassNavbar } from "../components/GlassNavbar";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Clock } from "lucide-react";
import { GlassFooter } from "../components/GlassFooter";

export function ExportContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our export services? We're here to help you succeed in global trade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl p-8 md:p-10 shadow-2xl">
                <h2 className="text-3xl font-bold text-[#0B1F3F] mb-6">
                  Send us a Message
                </h2>

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
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 text-center">
                      Thank you for contacting us. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white/70 transition-all text-gray-800 placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
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

                    {/* Phone */}
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

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-[#0B1F3F] mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-5 py-4 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white/70 transition-all text-gray-800 placeholder-gray-500 resize-none"
                        placeholder="Tell us about your export requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group w-full px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#0EA5E9] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Company Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact Info Card */}
              <div className="backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#0B1F3F] mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0B1F3F] mb-1">Email</div>
                      <a 
                        href="mailto:info@exportpro.com" 
                        className="text-gray-600 hover:text-[#3B82F6] transition-colors"
                      >
                        info@exportpro.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0B1F3F] mb-1">Phone</div>
                      <a 
                        href="tel:+1234567890" 
                        className="text-gray-600 hover:text-[#3B82F6] transition-colors"
                      >
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0B1F3F] mb-1">Address</div>
                      <p className="text-gray-600">
                        123 Export Street<br />
                        Business District<br />
                        Mumbai, India 400001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="backdrop-blur-2xl bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] border border-white/50 rounded-3xl p-8 shadow-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-white/90">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="backdrop-blur-2xl bg-white/60 border border-white/50 rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3F] mb-3">
                    WhatsApp Us
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    Scan to chat directly with our export team
                  </p>
                  
                  {/* QR Code Placeholder */}
                  <div className="w-48 h-48 mx-auto mb-6 backdrop-blur-xl bg-white/60 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <span className="text-sm text-gray-500">WhatsApp QR</span>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <GlassFooter />
    </div>
  );
}