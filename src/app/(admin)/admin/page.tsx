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

export default function AdminDashboardPage() {
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
          {[
            [DollarSign, "$45.2K", "Revenue"],
            [Package, "128", "Products"],
            [Users, "45", "Buyers"],
            [ShoppingCart, "82", "Orders"],
            [MessageSquare, "18", "Inquiries"],
          ].map(([Icon, value, label], i) => (
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
            {[
              [
                Folder,
                "Categories",
                "Manage product categories",
                "/admin/categories",
              ],
              [
                Boxes,
                "Products",
                "Create and manage products",
                "/admin/products",
              ],
              [UserCheck, "Buyers", "Manage buyer accounts", "/admin/buyers"],
              [
                ShoppingCart,
                "Orders",
                "Process customer orders",
                "/admin/orders",
              ],
              [
                MessageSquare,
                "Inquiries",
                "Handle buyer inquiries",
                "/admin/inquiries",
              ],
              [
                Award,
                "Certificates",
                "Manage certifications",
                "/admin/certificates",
              ],
              [Home, "Homepage", "Control homepage content", "/admin/homepage"],
              [
                Truck,
                "Tracking",
                "Update shipment tracking",
                "/admin/tracking",
              ],
            ].map(([Icon, title, desc, link], i) => (
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
            {[
              [
                Activity,
                "New Order Placed",
                "Order #ORD-2025-082",
                "/admin/orders",
              ],
              [
                UserCheck,
                "New Buyer Registered",
                "Buyer account created",
                "/admin/buyers",
              ],
              [
                FileText,
                "Product Updated",
                "PRD-125 modified",
                "/admin/products",
              ],
            ].map(([Icon, title, desc, link], i) => (
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
