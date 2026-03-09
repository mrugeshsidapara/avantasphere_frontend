"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { api } from "@/lib/api/client";
import { LoginApiResponse } from "@/lib/types";

const BUYER_FEATURES = [
  { icon: "📊", label: "Dashboard", desc: "View activities & stats" },
  { icon: "💬", label: "Inquiries", desc: "Request quotations" },
  { icon: "🛍️", label: "Track Orders", desc: "Monitor purchases" },
  { icon: "🚚", label: "Shipping Status", desc: "Real-time tracking" },
  { icon: "📥", label: "Documents", desc: "Download PDFs" },
  { icon: "📋", label: "Invoices", desc: "Payment records" },
  { icon: "👤", label: "Profile", desc: "Account settings" },
];

export default function BuyerLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post<LoginApiResponse>("/api/auth/login", {
        identifier,
        password,
      });

      if (response.error) {
        setError(response.error);
        setLoading(false);
        return;
      }

      const user = response.data?.user;

      if (!user) {
        setError("Login failed");
        setLoading(false);
        return;
      }

      if (user.role === "buyer") {
        setTimeout(() => {
          router.push("/buyer/dashboard");
        }, 300);
      } else {
        setError("Account type mismatch. Please use the admin portal.");
        setLoading(false);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="lg:grid lg:grid-cols-2 lg:gap-0 h-screen">
        {/* Left Side - Features (Desktop Only) */}
        <div className="hidden lg:flex flex-col justify-center px-12 py-12 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Buyer Portal</h2>
            <p className="text-green-100 text-lg">
              Access all your orders, inquiries, and documents in one place.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {BUYER_FEATURES.map((feature) => (
              <div
                key={feature.label}
                className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-white mb-1">
                  {feature.label}
                </h3>
                <p className="text-sm text-green-100">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Registration Note */}
          <div className="mt-12 p-4 bg-green-500/20 rounded-lg border border-green-300/50">
            <p className="text-sm text-green-50">
              <span className="font-semibold">📝 Note:</span> Registration
              required before submitting inquiries
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center px-4 py-8 lg:py-0">
          <div className="w-full max-w-md">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-8">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <span className="text-5xl">🛒</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Buyer Portal
              </h1>
              <p className="text-gray-600 text-sm mt-2">
                Access your inquiries, orders & more
              </p>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600">Sign in to your account</p>
            </div>

            {/* Login Card */}
            <div className="backdrop-blur-sm bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-green-300 bg-white text-gray-900 font-mono text-sm"
                    placeholder="you@example.com or user123"
                    autoComplete="username"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-green-300 bg-white text-gray-900 font-mono text-sm"
                    placeholder="Your password"
                    autoComplete="current-password"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>

              {/* Register & Back Links */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-center text-sm">
                <div>
                  <p className="text-gray-600">
                    New to Avantasphere?{" "}
                    <Link
                      href="/register"
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      Register here
                    </Link>
                  </p>
                </div>
                <div>
                  <Link
                    href="/login"
                    className="text-gray-500 hover:text-gray-700 font-medium"
                  >
                    ← Back to role selection
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Features */}
            <div className="lg:hidden mt-8 grid grid-cols-2 gap-3">
              {BUYER_FEATURES.map((feature) => (
                <div
                  key={feature.label}
                  className="text-center p-3 bg-white rounded-lg border border-gray-200"
                >
                  <div className="text-2xl mb-1">{feature.icon}</div>
                  <p className="text-xs font-medium text-gray-900">
                    {feature.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
