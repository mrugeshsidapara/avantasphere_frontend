"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Folder,
  Package,
  Users,
  ShoppingCart,
  MessageSquare,
  Award,
  Home,
  Truck,
  FileText,
  LogOut,
  Menu,
  X,
  User,
  Globe,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "admin" | "buyer";
  currentPage: string;
}

const adminNavItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Categories", href: "/admin/categories", icon: Folder },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Buyers", href: "/admin/buyers", icon: Users },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
  { label: "Certificates", href: "/admin/certificates", icon: Award },
  { label: "Homepage", href: "/admin/homepage", icon: Home },
  { label: "Tracking", href: "/admin/tracking", icon: Truck },
];

const buyerNavItems = [
  { label: "Dashboard", href: "/buyer/dashboard", icon: LayoutDashboard },
  { label: "Inquiries", href: "/buyer/inquiries", icon: MessageSquare },
  { label: "Orders", href: "/buyer/orders", icon: ShoppingCart },
  { label: "Documents", href: "/buyer/documents", icon: FileText },
  { label: "Invoices", href: "/buyer/invoices", icon: FileText },
  { label: "Profile", href: "/buyer/profile", icon: User },
];

export function DashboardLayout({
  children,
  role,
  currentPage,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const navItems = role === "admin" ? adminNavItems : buyerNavItems;

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white/70 backdrop-blur-xl border-r border-gray-200">
        <div className="p-6 border-b">
          <Link href="/" className="block">
            <div className="relative w-full h-[80px]">
              <Image
                src="/AvantaSphere_Logo_Admin.png"
                alt="Avantasphere"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          <p className="text-xs text-gray-500 mt-3">
            {role === "admin" ? "Admin Panel" : "Buyer Portal"}
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = currentPage === item.label;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
                  active
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Layout */}
      <div className="flex-1 flex flex-col md:hidden">
        <header className="bg-white/80 backdrop-blur border-b p-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {sidebarOpen ? <X /> : <Menu />}
          </button>

          <div className="relative h-[32px] w-[140px]">
            <Image
              src="/AvantaSphere_Logo_Admin.png"
              alt="Avantasphere"
              fill
              priority
              className="object-contain"
            />
          </div>
        </header>

        {sidebarOpen && (
          <div className="bg-white border-b p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-gray-100"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 text-sm text-red-600"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        )}

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>

      {/* Desktop Content */}
      <main className="hidden md:block flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
