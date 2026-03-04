"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Boxes,
  Package,
  Users,
  ShoppingCart,
  FileText,
  Award,
  Home,
  Truck,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import { api } from "@/lib/api/client";

interface LoginResponse {
  success: boolean;
  data: {
    user: {
      id: string;
      email: string;
      role: "admin" | "buyer";
      username?: string;
    };
  };
}

const ADMIN_FEATURES = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Boxes, label: "Categories" },
  { icon: Package, label: "Products" },
  { icon: Users, label: "Buyers" },
  { icon: ShoppingCart, label: "Orders" },
  { icon: FileText, label: "Inquiries" },
  { icon: Award, label: "Certificates" },
  { icon: Home, label: "Homepage" },
  { icon: Truck, label: "Tracking" },
];

export default function AdminLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const response = await api.post("/api/auth/login", {
      identifier,
      password,
    });

    if (response.error) {
      setError(response.error);
      setLoading(false);
      return;
    }
    const user = response.data?.user;
    if (user?.role === "admin") {
      router.push("/admin");
    } else {
      setError("Unauthorized account type");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center px-4 pt-6">
      {/* TOP CENTER LOGO */}
      <div className="flex justify-center">
        <Image
          src="/AvantaSphere_Logo.png"
          alt="Avantasphere"
          width={320}
          height={80}
          priority
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10">
        {/* LEFT – CONTEXT (DESKTOP ONLY) */}
        <div className="hidden lg:flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Admin Control Panel
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Secure administrative access to manage platform operations and
            global trade workflows.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-md">
            {ADMIN_FEATURES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg border border-gray-200 
              bg-white/60 backdrop-blur px-3 py-2 text-sm text-gray-700"
              >
                <Icon className="h-4 w-4 text-blue-600" />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            Admin-only access · Secure & audited
          </div>
        </div>

        {/* RIGHT – LOGIN (PRIMARY) */}
        <div className="flex justify-center">
          <div
            className="w-full max-w-md rounded-2xl border border-gray-200 
          bg-white/80 backdrop-blur-xl shadow-xl p-8"
          >
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">
              Admin Sign In
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              Authenticate to continue to the admin dashboard
            </p>

            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-6">
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Email or Username
                </label>
                <input
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-mono"
                  placeholder="admin or admin@company.com"
                  autoComplete="username"
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-mono"
                  placeholder="Your password"
                  autoComplete="current-password"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold 
              text-white transition hover:bg-blue-700 disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t text-center">
              <Link
                href="/login"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                ← Back to role selection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
