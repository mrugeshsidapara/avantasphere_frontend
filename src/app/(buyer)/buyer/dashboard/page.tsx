"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";

export default function BuyerDashboardPage() {
  return (
    <DashboardLayout role="buyer" currentPage="Dashboard">
      <div className="p-4 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-2">
            Welcome, Buyer! 👋
          </h1>
          <p className="text-lg text-green-700">
            Manage your orders, inquiries, and account
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-green-500">
            <div className="text-3xl md:text-4xl font-bold text-green-600">
              5
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-1">
              Active Orders
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-green-500">
            <div className="text-3xl md:text-4xl font-bold text-green-600">
              3
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-1">
              Inquiries
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-green-500">
            <div className="text-3xl md:text-4xl font-bold text-green-600">
              12
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-1">
              Documents
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-green-500">
            <div className="text-3xl md:text-4xl font-bold text-green-600">
              8
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-1">
              Invoices
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Inquiries */}
          <Link href="/buyer/inquiries">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-green-500">
              <div className="text-5xl mb-3">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Inquiries
              </h3>
              <p className="text-gray-600 text-sm">
                View and manage your quotation requests
              </p>
              <div className="mt-4 text-green-600 font-semibold">
                View Inquiries →
              </div>
            </div>
          </Link>

          {/* Track Orders */}
          <Link href="/buyer/orders">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-green-500">
              <div className="text-5xl mb-3">🛍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Track Orders
              </h3>
              <p className="text-gray-600 text-sm">
                Monitor and track your purchases
              </p>
              <div className="mt-4 text-green-600 font-semibold">
                Track Orders →
              </div>
            </div>
          </Link>

          {/* Documents */}
          <Link href="/buyer/documents">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-green-500">
              <div className="text-5xl mb-3">📥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Documents
              </h3>
              <p className="text-gray-600 text-sm">
                Download your PDFs and files
              </p>
              <div className="mt-4 text-green-600 font-semibold">
                View Documents →
              </div>
            </div>
          </Link>

          {/* Invoices */}
          <Link href="/buyer/invoices">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-green-500">
              <div className="text-5xl mb-3">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Invoices</h3>
              <p className="text-gray-600 text-sm">View your payment records</p>
              <div className="mt-4 text-green-600 font-semibold">
                View Invoices →
              </div>
            </div>
          </Link>

          {/* Shipping Status */}
          <Link href="/buyer/orders?tab=shipping">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-green-500">
              <div className="text-5xl mb-3">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Shipping Status
              </h3>
              <p className="text-gray-600 text-sm">
                Real-time tracking information
              </p>
              <div className="mt-4 text-green-600 font-semibold">
                Check Status →
              </div>
            </div>
          </Link>

          {/* Profile */}
          <Link href="/buyer/profile">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-green-500">
              <div className="text-5xl mb-3">👤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Profile</h3>
              <p className="text-gray-600 text-sm">
                Manage your account settings
              </p>
              <div className="mt-4 text-green-600 font-semibold">
                Edit Profile →
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-semibold text-gray-900">
                  Order #ORD-2025-001 Shipped
                </p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
              <span className="text-green-600 font-semibold">✓</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-semibold text-gray-900">Invoice Generated</p>
                <p className="text-sm text-gray-600">1 day ago</p>
              </div>
              <span className="text-green-600 font-semibold">📄</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-semibold text-gray-900">
                  New Inquiry Response
                </p>
                <p className="text-sm text-gray-600">3 days ago</p>
              </div>
              <span className="text-green-600 font-semibold">💬</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
