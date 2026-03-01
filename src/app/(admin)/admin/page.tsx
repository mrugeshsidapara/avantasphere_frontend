"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";
import {
  DollarSign,
  Package,
  Users,
  ShoppingCart,
  MessageSquare,
  Folder,
  Boxes,
  UserCheck,
  Truck,
  Award,
  Home,
  Activity,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function AdminDashboardPage() {
  const stats: Array<{ Icon: LucideIcon; value: string; label: string }> = [
    { Icon: DollarSign, value: "$45.2K", label: "Revenue" },
    { Icon: Package, value: "128", label: "Products" },
    { Icon: Users, value: "45", label: "Buyers" },
    { Icon: ShoppingCart, value: "82", label: "Orders" },
    { Icon: MessageSquare, value: "18", label: "Inquiries" },
  ];

  const features: Array<{
    Icon: LucideIcon;
    title: string;
    desc: string;
    link: string;
  }> = [
    {
      Icon: Folder,
      title: "Categories",
      desc: "Manage product categories",
      link: "/admin/categories",
    },
    {
      Icon: Boxes,
      title: "Products",
      desc: "Create and manage products",
      link: "/admin/products",
    },
    { Icon: UserCheck, title: "Buyers", desc: "Manage buyer accounts", link: "/admin/buyers" },
    {
      Icon: ShoppingCart,
      title: "Orders",
      desc: "Process customer orders",
      link: "/admin/orders",
    },
    {
      Icon: MessageSquare,
      title: "Inquiries",
      desc: "Handle buyer inquiries",
      link: "/admin/inquiries",
    },
    {
      Icon: Award,
      title: "Certificates",
      desc: "Manage certifications",
      link: "/admin/certificates",
    },
    { Icon: Home, title: "Homepage", desc: "Control homepage content", link: "/admin/homepage" },
    {
      Icon: Truck,
      title: "Tracking",
      desc: "Update shipment tracking",
      link: "/admin/tracking",
    },
  ];

  const recent: Array<{
    Icon: LucideIcon;
    title: string;
    desc: string;
    link: string;
  }> = [
    {
      Icon: Activity,
      title: "New Order Placed",
      desc: "Order #ORD-2025-082",
      link: "/admin/orders",
    },
    {
      Icon: UserCheck,
      title: "New Buyer Registered",
      desc: "Buyer account created",
      link: "/admin/buyers",
    },
    {
      Icon: FileText,
      title: "Product Updated",
      desc: "PRD-125 modified",
      link: "/admin/products",
    },
  ];

  return (
    <DashboardLayout role="admin" currentPage="Dashboard">
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white p-4 md:p-8">
        {/* Header – compact & left */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="text-sm text-gray-500">Overview & management access</p>
        </div>

        {/* Stats – 5 in a Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {stats.map(({ Icon, value, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/30 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Icon className="h-7 w-7 text-gray-700" />
              <div>
                <div className="text-lg font-semibold text-gray-900">
                  {value}
                </div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Grid – cards aligned in rows */}
        <div className="mt-14">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Feature</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ Icon, title, desc, link }, i) => (
              <Link key={i} href={link}>
                <div className="flex items-start gap-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/30 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#0c1951] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{title}</p>
                    <p className="text-xs text-gray-500">{desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Recent Activity – grid + clickable */}
        <div className="mt-14">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recent.map(({ Icon, title, desc, link }, i) => (
              <Link key={i} href={link}>
                <div className="flex items-start gap-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/30 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#0c1951] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{title}</p>
                    <p className="text-xs text-gray-500">{desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
