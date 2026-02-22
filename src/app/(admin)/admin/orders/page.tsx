'use client';

import { DashboardLayout } from '@/components/DashboardLayout';
import { useState } from 'react';

export default function OrdersPage() {
  const [orders] = useState([
    { id: 'ORD-2025-082', buyer: 'John Smith', total: '$1,200', status: 'Shipped', date: '2025-02-20' },
    { id: 'ORD-2025-081', buyer: 'Sarah Johnson', total: '$890', status: 'Processing', date: '2025-02-18' },
    { id: 'ORD-2025-080', buyer: 'Mike Chen', total: '$2,100', status: 'Delivered', date: '2025-02-15' },
    { id: 'ORD-2025-079', buyer: 'Emma Davis', total: '$1,500', status: 'Pending', date: '2025-02-14' },
  ]);

  return (
    <DashboardLayout role="admin" currentPage="Orders">
      <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
            🛍️ Orders
          </h1>
          <p className="text-lg text-blue-700">Process and manage buyer orders</p>
        </div>

        {/* Status Filter */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {['All', 'Pending', 'Processing', 'Shipped', 'Delivered'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap bg-white text-gray-700 hover:bg-blue-600 hover:text-white"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Order ID</th>
                <th className="px-6 py-4 text-left font-semibold">Buyer</th>
                <th className="px-6 py-4 text-left font-semibold">Date</th>
                <th className="px-6 py-4 text-left font-semibold">Total</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-700">{order.buyer}</td>
                  <td className="px-6 py-4 text-gray-700">{order.date}</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">{order.total}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'Shipped'
                            ? 'bg-blue-100 text-blue-700'
                            : order.status === 'Processing'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors text-sm">
                      👁️ View
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
            <div key={order.id} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900">{order.id}</h3>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    order.status === 'Delivered'
                      ? 'bg-green-100 text-green-700'
                      : order.status === 'Shipped'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="space-y-1 text-sm text-gray-600 mb-3">
                <p>👤 {order.buyer}</p>
                <p>📅 {order.date}</p>
                <p className="font-semibold text-blue-600">💰 {order.total}</p>
              </div>
              <button className="w-full px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors font-semibold text-sm">
                👁️ View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
