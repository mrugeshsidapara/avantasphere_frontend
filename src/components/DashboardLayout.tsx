"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "admin" | "buyer";
  currentPage: string;
}

const adminNavItems = [
  { label: "Dashboard", href: "/admin", icon: "📊" },
  { label: "Categories", href: "/admin/categories", icon: "📂" },
  { label: "Products", href: "/admin/products", icon: "📦" },
  { label: "Buyers", href: "/admin/buyers", icon: "👥" },
  { label: "Orders", href: "/admin/orders", icon: "🛍️" },
  { label: "Inquiries", href: "/admin/inquiries", icon: "📋" },
  { label: "Certificates", href: "/admin/certificates", icon: "🎖️" },
  { label: "Homepage", href: "/admin/homepage", icon: "🏠" },
  { label: "Tracking", href: "/admin/tracking", icon: "🚚" },
];

const buyerNavItems = [
  { label: "Dashboard", href: "/buyer/dashboard", icon: "📊" },
  { label: "Inquiries", href: "/buyer/inquiries", icon: "💬" },
  { label: "Orders", href: "/buyer/orders", icon: "🛍️" },
  { label: "Documents", href: "/buyer/documents", icon: "📥" },
  { label: "Invoices", href: "/buyer/invoices", icon: "📋" },
  { label: "Profile", href: "/buyer/profile", icon: "👤" },
];

export function DashboardLayout({
  children,
  role,
  currentPage,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const navItems = role === "admin" ? adminNavItems : buyerNavItems;
  const bgColor = role === "admin" ? "bg-blue-50" : "bg-green-50";
  const accentColor = role === "admin" ? "bg-blue-600" : "bg-green-600";
  const accentLight = role === "admin" ? "text-blue-600" : "text-green-600";
  const hoverBg = role === "admin" ? "hover:bg-blue-100" : "hover:bg-green-100";
  const borderColor = role === "admin" ? "border-blue-200" : "border-green-200";

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className={`flex min-h-screen ${bgColor}`}>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex md:w-64 ${accentColor} text-white flex-col border-r-4 ${borderColor} shadow-lg`}
      >
        <div className="p-6 border-b-2 border-opacity-30">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <span className="text-3xl">🌍</span>
            <span>Avantasphere</span>
          </Link>
          <p className="text-sm text-opacity-80 mt-2">
            {role === "admin" ? "👨‍💼 Admin Panel" : "👤 Buyer Portal"}
          </p>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                currentPage === item.label
                  ? "bg-white text-blue-900 font-semibold shadow-md"
                  : "text-white hover:bg-white hover:bg-opacity-20"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t-2 border-opacity-30">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header & Sidebar */}
      <div className="flex-1 flex flex-col md:hidden">
        <header className={`${accentColor} text-white p-4 shadow-lg`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg"
              >
                {sidebarOpen ? "✕" : "☰"}
              </button>
              <h1 className="text-xl font-bold">Avantasphere</h1>
            </div>
            <span className="text-2xl">{role === "admin" ? "👨‍💼" : "👤"}</span>
          </div>

          {/* Mobile Navigation Dropdown */}
          {sidebarOpen && (
            <nav className="mt-4 space-y-2 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                    currentPage === item.label
                      ? "bg-white text-blue-900 font-semibold"
                      : "text-white hover:bg-white hover:bg-opacity-20"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
              <button
                onClick={() => {
                  setSidebarOpen(false);
                  handleLogout();
                }}
                className="w-full flex items-center gap-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
              >
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </nav>
          )}
        </header>

        {/* Mobile Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>

      {/* Desktop Content */}
      <main className="hidden md:flex-1 md:block md:overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
