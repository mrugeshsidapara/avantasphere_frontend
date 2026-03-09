"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { Search, Eye } from "lucide-react";

export default function OrdersPage() {
  const [orders] = useState([
    {
      id: "ORD-2025-082",
      buyer: "John Smith",
      total: "$1,200",
      status: "Shipped",
      date: "2025-02-20",
    },
    {
      id: "ORD-2025-081",
      buyer: "Sarah Johnson",
      total: "$890",
      status: "Processing",
      date: "2025-02-18",
    },
    {
      id: "ORD-2025-080",
      buyer: "Mike Chen",
      total: "$2,100",
      status: "Delivered",
      date: "2025-02-15",
    },
    {
      id: "ORD-2025-079",
      buyer: "Emma Davis",
      total: "$1,500",
      status: "Pending",
      date: "2025-02-14",
    },
  ]);

  return (
    <DashboardLayout role="admin" currentPage="Orders">
      <div className="p-6 md:p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-500">Manage and track buyer orders</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border shadow-sm p-5">
            <p className="text-sm text-gray-500">Total Orders</p>
            <h3 className="text-2xl font-bold text-gray-900">348</h3>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-5">
            <p className="text-sm text-gray-500">Pending</p>
            <h3 className="text-2xl font-bold text-gray-600">21</h3>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-5">
            <p className="text-sm text-gray-500">Processing</p>
            <h3 className="text-2xl font-bold text-yellow-600">54</h3>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-5">
            <p className="text-sm text-gray-500">Delivered</p>
            <h3 className="text-2xl font-bold text-green-600">273</h3>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="bg-white border rounded-xl shadow-sm p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Search */}
          <div className="relative max-w-md w-full">
            <Search
              size={18}
              className="absolute left-3 top-2.5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Status Filters */}
          <div className="flex gap-2 overflow-x-auto">
            {["All", "Pending", "Processing", "Shipped", "Delivered"].map(
              (filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 text-sm font-medium border rounded-lg hover:bg-blue-600 hover:text-white transition whitespace-nowrap"
                >
                  {filter}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white border rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-600 text-sm border-b">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Order ID</th>

                <th className="px-6 py-4 text-left font-semibold">Buyer</th>

                <th className="px-6 py-4 text-left font-semibold">Date</th>

                <th className="px-6 py-4 text-left font-semibold">Total</th>

                <th className="px-6 py-4 text-left font-semibold">Status</th>

                <th className="px-6 py-4 text-right font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {order.id}
                  </td>

                  <td className="px-6 py-4 text-gray-600">{order.buyer}</td>

                  <td className="px-6 py-4 text-gray-600">{order.date}</td>

                  <td className="px-6 py-4 font-semibold text-blue-600">
                    {order.total}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-700"
                            : order.status === "Processing"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 flex justify-end">
                    <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl border shadow-sm p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">{order.id}</h3>

                <span
                  className={`px-2 py-1 text-xs rounded-full
                  ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <p className="text-sm text-gray-600">Buyer: {order.buyer}</p>

              <p className="text-sm text-gray-500">Date: {order.date}</p>

              <p className="text-sm font-semibold text-blue-600 mb-3">
                Total: {order.total}
              </p>

              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg text-sm">
                <Eye size={16} />
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
