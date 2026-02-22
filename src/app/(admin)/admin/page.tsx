"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <DashboardLayout role="admin" currentPage="Dashboard">
      <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
            Welcome, Admin! 👋
          </h1>
          <p className="text-lg text-blue-700">
            Manage products, categories, buyers, and orders
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-blue-500">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">
              $45.2K
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-1">
              Revenue
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-blue-500">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">
              128
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-1">
              Products
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-blue-500">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">
              45
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-1">
              Buyers
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-blue-500">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">
              82
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-1">
              Orders
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-blue-500">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">
              18
            </div>
            <div className="text-sm md:text-base text-gray-600 mt-1">
              Inquiries
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Categories */}
          <Link href="/admin/categories">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-blue-500">
              <div className="text-5xl mb-3">📂</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Categories
              </h3>
              <p className="text-gray-600 text-sm">Manage product categories</p>
              <div className="mt-4 text-blue-600 font-semibold">
                Manage Categories →
              </div>
            </div>
          </Link>

          {/* Products */}
          <Link href="/admin/products">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-blue-500">
              <div className="text-5xl mb-3">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Products</h3>
              <p className="text-gray-600 text-sm">
                Create and manage products
              </p>
              <div className="mt-4 text-blue-600 font-semibold">
                Manage Products →
              </div>
            </div>
          </Link>

          {/* Buyers */}
          <Link href="/admin/buyers">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-blue-500">
              <div className="text-5xl mb-3">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buyers</h3>
              <p className="text-gray-600 text-sm">Manage buyer accounts</p>
              <div className="mt-4 text-blue-600 font-semibold">
                View Buyers →
              </div>
            </div>
          </Link>

          {/* Orders */}
          <Link href="/admin/orders">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-blue-500">
              <div className="text-5xl mb-3">🛍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Orders</h3>
              <p className="text-gray-600 text-sm">Process and manage orders</p>
              <div className="mt-4 text-blue-600 font-semibold">
                Manage Orders →
              </div>
            </div>
          </Link>

          {/* Inquiries */}
          <Link href="/admin/inquiries">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-blue-500">
              <div className="text-5xl mb-3">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Inquiries
              </h3>
              <p className="text-gray-600 text-sm">Handle buyer inquiries</p>
              <div className="mt-4 text-blue-600 font-semibold">
                View Inquiries →
              </div>
            </div>
          </Link>

          {/* Certificates */}
          <Link href="/admin/certificates">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-blue-500">
              <div className="text-5xl mb-3">🎖️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Certificates
              </h3>
              <p className="text-gray-600 text-sm">Manage certifications</p>
              <div className="mt-4 text-blue-600 font-semibold">
                Configure Certs →
              </div>
            </div>
          </Link>

          {/* Homepage */}
          <Link href="/admin/homepage">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-blue-500">
              <div className="text-5xl mb-3">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Homepage</h3>
              <p className="text-gray-600 text-sm">Control homepage sections</p>
              <div className="mt-4 text-blue-600 font-semibold">
                Edit Homepage →
              </div>
            </div>
          </Link>

          {/* Tracking */}
          <Link href="/admin/tracking">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all p-6 cursor-pointer border-t-4 border-blue-500">
              <div className="text-5xl mb-3">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tracking</h3>
              <p className="text-gray-600 text-sm">Update shipment tracking</p>
              <div className="mt-4 text-blue-600 font-semibold">
                Update Tracking →
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
                  New Order #ORD-2025-082 Placed
                </p>
                <p className="text-sm text-gray-600">1 hour ago</p>
              </div>
              <span className="text-blue-600 font-semibold">✓</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-semibold text-gray-900">
                  New Buyer Registration
                </p>
                <p className="text-sm text-gray-600">3 hours ago</p>
              </div>
              <span className="text-blue-600 font-semibold">👤</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-semibold text-gray-900">
                  Product #PRD-125 Updated
                </p>
                <p className="text-sm text-gray-600">5 hours ago</p>
              </div>
              <span className="text-blue-600 font-semibold">📝</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
