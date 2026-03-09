"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { Search, MessageSquare } from "lucide-react";

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
      <div className="p-6 md:p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inquiries</h1>
          <p className="text-gray-500">Manage and respond to buyer inquiries</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">Total Inquiries</p>
            <h3 className="text-2xl font-bold text-gray-900">84</h3>
          </div>

          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">Pending</p>
            <h3 className="text-2xl font-bold text-yellow-600">21</h3>
          </div>

          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">Quoted</p>
            <h3 className="text-2xl font-bold text-green-600">63</h3>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white border rounded-xl shadow-sm p-4">
          <div className="relative max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-2.5 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search inquiries..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white border rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-600 text-sm border-b">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">
                  Inquiry ID
                </th>

                <th className="px-6 py-4 text-left font-semibold">Buyer</th>

                <th className="px-6 py-4 text-left font-semibold">Product</th>

                <th className="px-6 py-4 text-left font-semibold">Quantity</th>

                <th className="px-6 py-4 text-left font-semibold">Date</th>

                <th className="px-6 py-4 text-left font-semibold">Status</th>

                <th className="px-6 py-4 text-right font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {inquiries.map((inq) => (
                <tr key={inq.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {inq.id}
                  </td>

                  <td className="px-6 py-4 text-gray-600">{inq.buyer}</td>

                  <td className="px-6 py-4 text-gray-600">{inq.product}</td>

                  <td className="px-6 py-4 text-gray-600">{inq.quantity}</td>

                  <td className="px-6 py-4 text-gray-500">{inq.date}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        inq.status === "Quoted"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {inq.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 flex justify-end">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      <MessageSquare size={16} />
                      Reply
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
              className="bg-white rounded-xl border shadow-sm p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">{inq.id}</h3>

                <span
                  className={`px-2 py-1 text-xs rounded-full
                  ${
                    inq.status === "Quoted"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {inq.status}
                </span>
              </div>

              <p className="text-sm text-gray-600">Buyer: {inq.buyer}</p>

              <p className="text-sm text-gray-600">Product: {inq.product}</p>

              <p className="text-sm text-gray-600">Quantity: {inq.quantity}</p>

              <p className="text-sm text-gray-500 mb-3">Date: {inq.date}</p>

              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg text-sm">
                <MessageSquare size={16} />
                Reply
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
