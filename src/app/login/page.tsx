"use client";

import Link from "next/link";
import Image from "next/image";
import { STATIC_CREDENTIALS } from "@/lib/constants/auth";
import { ShieldCheck, ShoppingBag, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        {/* Logo Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <Image
              src="/AvantaSphere_Logo.png"
              alt="Avantasphere"
              width={360} // ↓ smaller
              height={90}
              priority
            />
          </div>
          <p className="text-sm text-gray-600">
            Secure access for global trade partners
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Admin Card */}
          <Link href="/admin/login">
            <div
              className="group cursor-pointer rounded-xl border border-gray-200 
              bg-gradient-to-b from-white to-gray-50/60 
              backdrop-blur-md p-5 shadow-sm 
              transition-all duration-300 
              hover:-translate-y-1 hover:shadow-xl hover:border-blue-300 hover:ring-1 hover:ring-blue-200"
            >
              {/* Icon */}
              <div
                className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 
                transition group-hover:bg-blue-600 group-hover:text-white"
              >
                <ShieldCheck size={20} />
              </div>

              <h2 className="text-base font-semibold text-gray-900 mb-1">
                Admin Portal
              </h2>

              <p className="text-sm text-gray-600 mb-3">
                Manage products, buyers, inquiries, and operations
              </p>

              <ul className="space-y-1 text-sm text-gray-600 mb-5">
                <li>• Dashboard & analytics</li>
                <li>• Product & category control</li>
                <li>• Buyer & inquiry management</li>
                <li>• Certificates & compliance</li>
              </ul>

              <div className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                Sign in as Admin <ArrowRight size={16} />
              </div>

              <div className="mt-3 text-xs text-gray-400">
                Demo: {STATIC_CREDENTIALS.admin.email}
              </div>
            </div>
          </Link>

          {/* Buyer Card */}
          <Link href="/buyer/login">
            <div
              className="group cursor-pointer rounded-xl border border-gray-200 
              bg-gradient-to-b from-white to-gray-50/60 
              backdrop-blur-md p-5 shadow-sm 
              transition-all duration-300 
              hover:-translate-y-1 hover:shadow-xl hover:border-emerald-300 hover:ring-1 hover:ring-emerald-200"
            >
              {/* Icon */}
              <div
                className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 
                transition group-hover:bg-emerald-600 group-hover:text-white"
              >
                <ShoppingBag size={20} />
              </div>

              <h2 className="text-base font-semibold text-gray-900 mb-1">
                Buyer Portal
              </h2>

              <p className="text-sm text-gray-600 mb-3">
                Browse products, send inquiries, and track orders
              </p>

              <ul className="space-y-1 text-sm text-gray-600 mb-5">
                <li>• View verified products</li>
                <li>• Submit RFQs & inquiries</li>
                <li>• Track orders & shipping</li>
                <li>• Download invoices & docs</li>
              </ul>

              <div className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 group-hover:gap-2 transition-all">
                Sign in as Buyer <ArrowRight size={16} />
              </div>

              <div className="mt-3 text-xs text-gray-400">
                Demo: {STATIC_CREDENTIALS.buyer.email}
              </div>
            </div>
          </Link>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 mb-3">
            New buyer sourcing from India?
          </p>
          <Link
            href="/register"
            className="inline-flex items-center rounded-md bg-emerald-600 px-6 py-2.5 
              text-sm font-medium text-white transition hover:bg-emerald-700 hover:shadow-md"
          >
            Create Buyer Account
          </Link>
        </div>
      </div>
    </main>
  );
}
