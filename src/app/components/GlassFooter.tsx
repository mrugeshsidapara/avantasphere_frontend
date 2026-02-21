import Link from "next/link";
import Image from "next/image";

export function GlassFooter() {
  return (
    <footer className="relative bg-white">
      {/* Subtle navy glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 to-white backdrop-blur-md" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* LEFT — Big Logo + Company Info (NO address) */}
          <div className="md:col-span-2">
            <Image
              src="/AvantaSphere_Logo.png"
              alt="AvantaSphere"
              width={230}
              height={60}
              className="mb-4"
            />
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-blue-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-blue-700">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-700">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Buyer Info */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase">
              Buyer Info
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/request-quote" className="hover:text-blue-700">
                  Request Quote
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-blue-700">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-700">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/terms" className="hover:text-blue-700">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-blue-700">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AvantaSphere. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex gap-5 text-slate-500">
            <a href="#" className="hover:text-blue-700 transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
