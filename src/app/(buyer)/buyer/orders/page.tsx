"use client";

import { DashboardLayout } from "@/components/DashboardLayout";

export default function OrdersPage() {
  const orders = [
    {
      id: "ORD-2025-001",
      product: "Cotton Fabric Roll",
      date: "2025-02-20",
      quantity: "100 meters",
      total: "$1,200",
      status: "Shipped",
      shipping: "In Transit",
      eta: "2025-02-27",
    },
    {
      id: "ORD-2025-002",
      product: "Synthetic Leather Sheets",
      date: "2025-02-18",
      quantity: "50 sheets",
      total: "$890",
      status: "Processing",
      shipping: "Preparing",
      eta: "2025-03-05",
    },
    {
      id: "ORD-2025-003",
      product: "Organic Wool Fabric",
      date: "2025-02-15",
      quantity: "75 kg",
      total: "$2,100",
      status: "Delivered",
      shipping: "Delivered",
      eta: "2025-02-22",
    },
  ];

  return (
    <DashboardLayout role="buyer" currentPage="Orders">
      <div className="p-4 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-2">
            🛍️ Track Orders
          </h1>
          <p className="text-lg text-green-700">
            Monitor and track your purchases
          </p>
        </div>

        {/* Status Filter */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {["All", "Processing", "Shipped", "Delivered"].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap bg-white text-gray-700 hover:bg-green-600 hover:text-white"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Order ID</th>
                <th className="px-6 py-4 text-left font-semibold">Product</th>
                <th className="px-6 py-4 text-left font-semibold">Date</th>
                <th className="px-6 py-4 text-left font-semibold">Total</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">ETA</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-green-50 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{order.product}</td>
                  <td className="px-6 py-4 text-gray-700">{order.date}</td>
                  <td className="px-6 py-4 font-semibold text-green-600">
                    {order.total}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{order.eta}</td>
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
              className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-green-600 text-sm">{order.id}</p>
                  <p className="font-semibold text-gray-900 mt-1">
                    {order.product}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
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
              <div className="text-sm text-gray-600 space-y-1">
                <p>📅 Order Date: {order.date}</p>
                <p>📦 Quantity: {order.quantity}</p>
                <p>
                  💰 Total:{" "}
                  <span className="font-semibold text-green-600">
                    {order.total}
                  </span>
                </p>
                <p>
                  🚚 Status:{" "}
                  <span className="font-semibold">{order.shipping}</span>
                </p>
                <p>📍 ETA: {order.eta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
