"use client";

import { useState } from "react";
import Link from "next/link";
import { STATIC_CREDENTIALS } from "@/lib/constants/auth";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-blue-500/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-green-500/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12 sm:py-0">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-3">
              Avantasphere
            </h1>
            <p className="text-xl text-blue-100 mb-2">
              Your Partner in Global Trade
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              Select your role to access the platform
            </p>
          </div>

          {/* Role Selection Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Admin Portal */}
            <Link href="/admin/login">
              <div className="group backdrop-blur-xl bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-400/30 hover:border-blue-400/60 rounded-2xl p-8 sm:p-12 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer h-full">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/40 transition-colors">
                  <span className="text-4xl sm:text-5xl">👤</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  Admin Portal
                </h2>

                {/* Description */}
                <p className="text-blue-100 mb-6 text-sm sm:text-base">
                  Manage products, orders, inquiries, and all platform
                  operations
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {[
                    "📊 Dashboard",
                    "📂 Category Management",
                    "📦 Product CRUD",
                    "👥 Buyer Management",
                    "🛍️ Order Management",
                    "💬 Inquiry Management",
                    "🎖️ Certificate Control",
                    "🏠 Homepage Sections",
                    "🚚 Tracking Updates",
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-blue-200 text-sm"
                    >
                      <span className="mr-3">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 group-hover:from-blue-700 group-hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg group-hover:shadow-blue-500/50 text-center">
                  Admin Sign In
                </div>

                {/* Credentials Info */}
                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-400/30 rounded-lg">
                  <p className="text-xs text-blue-200 font-mono">
                    Email: {STATIC_CREDENTIALS.admin.email}
                  </p>
                </div>
              </div>
            </Link>

            {/* Buyer Portal */}
            <Link href="/buyer/login">
              <div className="group backdrop-blur-xl bg-gradient-to-br from-green-600/20 to-emerald-900/20 border border-green-400/30 hover:border-green-400/60 rounded-2xl p-8 sm:p-12 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 cursor-pointer h-full">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/40 transition-colors">
                  <span className="text-4xl sm:text-5xl">🛒</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  Buyer Portal
                </h2>

                {/* Description */}
                <p className="text-green-100 mb-6 text-sm sm:text-base">
                  Browse products, submit inquiries, and manage your orders
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {[
                    "📊 Dashboard",
                    "💬 View Inquiries",
                    "🛍️ Track Orders",
                    "🚚 Shipping Status",
                    "📥 Download Documents",
                    "📋 View Invoices",
                    "👤 Profile Management",
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-green-200 text-sm"
                    >
                      <span className="mr-3">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="w-full bg-gradient-to-r from-green-600 to-emerald-600 group-hover:from-green-700 group-hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg group-hover:shadow-green-500/50 text-center">
                  Buyer Sign In
                </div>

                {/* Credentials Info */}
                <div className="mt-6 p-4 bg-green-500/10 border border-green-400/30 rounded-lg">
                  <p className="text-xs text-green-200 font-mono">
                    Email: {STATIC_CREDENTIALS.buyer.email}
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              New to Avantasphere?
            </p>
            <Link
              href="/register"
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-green-500/50"
            >
              Create Buyer Account
            </Link>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-12 sm:mt-16">
            {[
              {
                icon: "🔒",
                title: "Secure",
                desc: "Enterprise-grade security",
              },
              {
                icon: "⚡",
                title: "Fast",
                desc: "Instant access & processing",
              },
              { icon: "🌍", title: "Global", desc: "Worldwide operations" },
            ].map((card, idx) => (
              <div
                key={idx}
                className="backdrop-blur bg-white/5 border border-white/10 rounded-lg p-4 text-center"
              >
                <div className="text-3xl mb-2">{card.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-xs">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
