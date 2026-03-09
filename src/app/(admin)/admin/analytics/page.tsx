"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { DollarSign, TrendingUp, FileText, Truck } from "lucide-react";

export default function AdminAnalyticsPage() {
  return (
    <DashboardLayout role="admin" currentPage="Analytics">
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white p-4 md:p-8">
        {/* Header – compact & left */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-900">
            Business Analytics
          </h1>
          <p className="text-sm text-gray-500">
            Overview of revenue, RFQs, orders and shipments.
          </p>
        </div>
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Revenue (MTD)</p>
              <DollarSign className="w-5 h-5 text-green-500" />
            </div>

            <p className="mt-3 text-2xl font-semibold text-gray-900">$0.00</p>

            <p className="text-xs text-gray-400 mt-1">Current month revenue</p>
          </div>

          <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Profit Margin</p>
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>

            <p className="mt-3 text-2xl font-semibold text-gray-900">0%</p>

            <p className="text-xs text-gray-400 mt-1">
              Overall margin this month
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Active RFQs</p>
              <FileText className="w-5 h-5 text-orange-500" />
            </div>

            <p className="mt-3 text-2xl font-semibold text-gray-900">0</p>

            <p className="text-xs text-gray-400 mt-1">
              Requests waiting for quotes
            </p>
          </div>

          <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Shipments In Transit</p>
              <Truck className="w-5 h-5 text-purple-500" />
            </div>

            <p className="mt-3 text-2xl font-semibold text-gray-900">0</p>

            <p className="text-xs text-gray-400 mt-1">
              Currently shipping orders
            </p>
          </div>
        </div>
        <div className="mt-10">
          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <div className="bg-white border rounded-xl shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-gray-900">
                  Monthly Revenue
                </h2>
              </div>

              <div className="h-56 flex items-center justify-center text-sm text-gray-400">
                Chart goes here (Recharts / Chart.js)
              </div>
            </div>

            {/* Profit Chart */}
            <div className="bg-white border rounded-xl shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-gray-900">
                  Monthly Profit
                </h2>
              </div>

              <div className="h-56 flex items-center justify-center text-sm text-gray-400">
                Connect /api/admin/analytics/profit
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          {/* Bottom Table */}
          <div className="bg-white border rounded-xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">
                Recent Business Activity
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-xs text-gray-500 border-b">
                  <tr>
                    <th className="text-left py-3">Type</th>
                    <th className="text-left py-3">Reference</th>
                    <th className="text-left py-3">Status</th>
                    <th className="text-left py-3">Date</th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-3">Order</td>
                    <td>ORD-0001</td>
                    <td className="text-green-600">Completed</td>
                    <td>2026-03-01</td>
                  </tr>

                  <tr>
                    <td className="py-3">Shipment</td>
                    <td>SHIP-0001</td>
                    <td className="text-orange-600">In Transit</td>
                    <td>2026-03-03</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
