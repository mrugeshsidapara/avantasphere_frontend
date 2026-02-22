"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function InquiriesPage() {
  const [inquiries] = useState([
    {
      id: "INQ-001",
      buyer: "John Smith",
      product: "Cotton Blend",
      quantity: "1000m",
      status: "Quoted",
      date: "2025-02-15",
    },
    {
      id: "INQ-002",
      buyer: "Sarah Johnson",
      product: "Leather Sheet",
      quantity: "500 sq.m",
      status: "Pending",
      date: "2025-02-18",
    },
    {
      id: "INQ-003",
      buyer: "Emma Davis",
      product: "Wool Fabric",
      quantity: "200kg",
      status: "Quoted",
      date: "2025-02-12",
    },
  ]);

  return (
    <DashboardLayout role="admin" currentPage="Inquiries">
      <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
            📋 Inquiries
          </h1>
          <p className="text-lg text-blue-700">
            Handle and respond to buyer inquiries
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">
                  Inquiry ID
                </th>
                <th className="px-6 py-4 text-left font-semibold">Buyer</th>
                <th className="px-6 py-4 text-left font-semibold">Product</th>
                <th className="px-6 py-4 text-left font-semibold">Quantity</th>
                <th className="px-6 py-4 text-left font-semibold">Date</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {inquiries.map((inq) => (
                <tr key={inq.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {inq.id}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{inq.buyer}</td>
                  <td className="px-6 py-4 text-gray-700">{inq.product}</td>
                  <td className="px-6 py-4 text-gray-700">{inq.quantity}</td>
                  <td className="px-6 py-4 text-gray-700">{inq.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${inq.status === "Quoted" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
                    >
                      {inq.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors text-sm">
                      💬 Reply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {inquiries.map((inq) => (
            <div
              key={inq.id}
              className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900">{inq.id}</h3>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${inq.status === "Quoted" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
                >
                  {inq.status}
                </span>
              </div>
              <div className="space-y-1 text-sm text-gray-600 mb-3">
                <p>👤 {inq.buyer}</p>
                <p>📦 {inq.product}</p>
                <p>📏 {inq.quantity}</p>
                <p>📅 {inq.date}</p>
              </div>
              <button className="w-full px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors font-semibold text-sm">
                💬 Reply
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
