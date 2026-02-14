import { useState } from "react";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function RequestQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    incoterms: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert("Thank you! Your quote request has been submitted. We'll contact you within 24 hours.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
              Request a Quote
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our export team will get back to you within 24 hours
              with a detailed quotation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-[#0B1F3F] to-[#1E3A5F] rounded-2xl p-8 text-white sticky top-24">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#3B82F6] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-1">Email</div>
                      <div className="font-medium">info@avantasphere.com</div>
                      <div className="text-sm text-gray-300">sales@avantasphere.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#3B82F6] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-1">Phone</div>
                      <div className="font-medium">+91 XXXX XXXXXX</div>
                      <div className="text-sm text-gray-300">WhatsApp Available</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#3B82F6] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-1">Address</div>
                      <div className="font-medium">Mumbai, Maharashtra</div>
                      <div className="text-sm text-gray-300">India</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#3B82F6] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-1">Business Hours</div>
                      <div className="font-medium">Mon - Fri: 9:00 AM - 6:00 PM</div>
                      <div className="text-sm text-gray-300">IST (Indian Standard Time)</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-600">
                  <h3 className="font-semibold mb-3">Why Choose AvantaSphere?</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">•</span>
                      <span>15+ years of export experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">•</span>
                      <span>Competitive pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">•</span>
                      <span>Quality guaranteed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">•</span>
                      <span>Complete export documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-semibold text-[#0B1F3F] mb-6">
                  Quote Request Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        placeholder="Your Company Ltd."
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone / WhatsApp *</Label>
                      <Input
                        id="phone"
                        placeholder="+971 XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Select onValueChange={(value) => handleChange("country", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uae">United Arab Emirates</SelectItem>
                        <SelectItem value="saudi">Saudi Arabia</SelectItem>
                        <SelectItem value="qatar">Qatar</SelectItem>
                        <SelectItem value="oman">Oman</SelectItem>
                        <SelectItem value="kuwait">Kuwait</SelectItem>
                        <SelectItem value="south-africa">South Africa</SelectItem>
                        <SelectItem value="nigeria">Nigeria</SelectItem>
                        <SelectItem value="kenya">Kenya</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
                        <SelectItem value="france">France</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="product">Product Category *</Label>
                      <Select onValueChange={(value) => handleChange("product", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select product category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brass">Brass Components</SelectItem>
                          <SelectItem value="hardware">Industrial Hardware</SelectItem>
                          <SelectItem value="oem">Custom OEM Manufacturing</SelectItem>
                          <SelectItem value="packaging">Export Packaging</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quantity">Estimated Quantity *</Label>
                      <Input
                        id="quantity"
                        placeholder="e.g., 1000 units"
                        value={formData.quantity}
                        onChange={(e) => handleChange("quantity", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="incoterms">Preferred Incoterms</Label>
                    <Select onValueChange={(value) => handleChange("incoterms", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select incoterms (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fob">FOB - Free On Board</SelectItem>
                        <SelectItem value="cif">CIF - Cost, Insurance & Freight</SelectItem>
                        <SelectItem value="cfr">CFR - Cost & Freight</SelectItem>
                        <SelectItem value="exw">EXW - Ex Works</SelectItem>
                        <SelectItem value="ddp">DDP - Delivered Duty Paid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide any additional information about your requirements, specifications, or questions..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="mt-2 min-h-[150px]"
                    />
                  </div>

                  <div className="bg-[#E0F2FE] rounded-lg p-4 text-sm text-gray-700">
                    <p className="mb-2">
                      <strong>Note:</strong> By submitting this form, your enquiry will be sent
                      via email to our export team. We typically respond within 24 hours during
                      business days.
                    </p>
                    <p>
                      All information provided will be kept confidential and used solely for
                      processing your quote request.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-6"
                  >
                    Submit Quote Request
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
