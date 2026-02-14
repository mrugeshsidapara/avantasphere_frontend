import Link from 'next/link'
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Clock } from "lucide-react";

export function GlassFooter() {
  return (
    <footer className="relative mt-20 py-16 px-6 bg-gradient-to-br from-[#0B1F3F] to-[#1E3A5F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <span className="font-bold text-xl text-white">AvantaSphere</span>
            </Link>
            <p className="text-white/80 leading-relaxed mb-6">
              Your trusted India-based export partner, delivering quality products to UAE, Africa, and Europe.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/avantasphere"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Categories", path: "/categories" },
                { name: "About Us", path: "/about" },
                { name: "Certifications", path: "/certifications" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@avantasphere.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  info@avantasphere.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +91 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/911234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  WhatsApp: +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  Mumbai, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Business Hours</h3>
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#0EA5E9]" />
                <span className="text-white font-semibold">IST (India)</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between text-white/80">
                  <span>Mon - Fri</span>
                  <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between text-white/80">
                  <span>Saturday</span>
                  <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-white/80">
                  <span>Sunday</span>
                  <span className="font-semibold text-white">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 AvantaSphere. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
