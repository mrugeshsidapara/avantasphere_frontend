import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function GlassFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Logo + About */}
          <div>
            <Image
              src="/AvantaSphere_Logo.png"
              alt="AvantaSphere"
              width={180}
              height={40}
              className="mb-3"
            />           
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-blue-600">Products</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-gray-500 mt-0.5" />
                info@avantasphere.com
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gray-500 mt-0.5" />
                +91 123 456 7890
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                Mumbai, India
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase">
              Follow Us
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              sales@avantasphere.com
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border text-gray-500 hover:text-blue-600 hover:border-blue-600 transition">
                in
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border text-gray-500 hover:text-blue-600 hover:border-blue-600 transition">
                f
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border text-gray-500 hover:text-blue-600 hover:border-blue-600 transition">
                x
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2024 AvantaSphere. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
