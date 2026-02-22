"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

export function GlassFooter() {
  return (
    <footer className="relative mt-16 w-full">
      {/* FULL WIDTH GLASS FOOTER */}
      <div className="w-full bg-white/70 backdrop-blur-xl border-t border-white/40">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* COMPANY */}
            <div className="flex flex-col items-start">
              {/* LOGO (whitespace reduced) */}
              <Image
                src="/AvantaSphere_Logo.png"
                alt="AvantaSphere"
                width={200}
                height={52}
                className="object-contain -ml-1 scale-[0.95] origin-left"
              />

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-3 mt-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="
        p-2 rounded-full border border-slate-200 bg-white/80
        text-slate-600
        hover:text-[#0A66C2] hover:border-[#0A66C2]/40
        hover:scale-105 transition
      "
                >
                  <Linkedin size={16} />
                </a>

                {/* Email */}
                <a
                  href="mailto:sales@avantasphere.com"
                  className="
        p-2 rounded-full border border-slate-200 bg-white/80
        text-slate-600
        hover:text-slate-900 hover:border-slate-400
        hover:scale-105 transition
      "
                >
                  <Mail size={16} />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  className="
        p-2 rounded-full border border-slate-200 bg-white/80
        text-slate-600
        hover:text-[#25D366] hover:border-[#25D366]/40
        hover:scale-105 transition
      "
                >
                  <MessageCircle size={16} />
                </a>
              </div>

              {/* IEC */}
              <p className="mt-3 text-xs text-slate-500">
                IEC Registered · ISO Certified
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                Quick Links
              </h4>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/certifications">Certifications</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                Legal
              </h4>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/compliance">Export Compliance</Link>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 mb-2">
                Contact
              </h4>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li>Email: sales@avantasphere.com</li>
                <li>Phone: +91 XXXXX XXXXX</li>
                <li>Location: India 🇮🇳</li>
              </ul>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-6 h-px bg-slate-200/70" />

          {/* BOTTOM */}
          <p className="text-xs text-slate-500 text-center">
            © {new Date().getFullYear()} AvantaSphere. All rights reserved.
          </p>
        </div>
      </div>

      {/* WHATSAPP FLOATING CTA */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full px-5 py-3 shadow-lg hover:scale-105 transition"
      >
        WhatsApp
      </a>
    </footer>
  );
}
