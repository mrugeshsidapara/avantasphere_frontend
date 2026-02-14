'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0B1F3F] text-white mt-24">
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-semibold mb-4">
              Avanta<span className="text-[#3B82F6]">Sphere</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Exporting Excellence Worldwide. Your trusted partner for quality brass
              components, industrial hardware, and custom OEM manufacturing from India.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Globe className="w-4 h-4" />
              <span>Made in India for Global Markets</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#3B82F6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#3B82F6] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#3B82F6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-[#3B82F6] transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="hover:text-[#3B82F6] transition-colors">
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/categories/brass-components" className="hover:text-[#3B82F6] transition-colors">
                  Brass Components
                </Link>
              </li>
              <li>
                <Link href="/categories/industrial-hardware" className="hover:text-[#3B82F6] transition-colors">
                  Industrial Hardware
                </Link>
              </li>
              <li>
                <Link href="/categories/custom-oem" className="hover:text-[#3B82F6] transition-colors">
                  Custom OEM Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/categories/export-packaging" className="hover:text-[#3B82F6] transition-colors">
                  Export Packaging Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300 mb-6">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@avantasphere.com</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#3B82F6] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#3B82F6] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#3B82F6] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#3B82F6] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 AvantaSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}