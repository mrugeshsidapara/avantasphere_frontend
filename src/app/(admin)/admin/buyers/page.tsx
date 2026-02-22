"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function BuyersPage() {
  const [buyers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john@company.com",
      company: "Global Textiles",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@fabric.com",
      company: "Fabric Imports Inc",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike@supplier.com",
      company: "Chen Supplies",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Emma Davis",
      email: "emma@trade.com",
      company: "Trade Global",
      status: "Active",
    },
  ]);

  return (
    <DashboardLayout role="admin" currentPage="Buyers">
      <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
              👥 Buyers
            </h1>
            <p className="text-lg text-blue-700">
              Manage buyer accounts and access
            </p>
          </div>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors whitespace-nowrap">
            + Add Buyer
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Name</th>
                <th className="px-6 py-4 text-left font-semibold">Email</th>
                <th className="px-6 py-4 text-left font-semibold">Company</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {buyers.map((buyer) => (
                <tr
                  key={buyer.id}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {buyer.name}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{buyer.email}</td>
                  <td className="px-6 py-4 text-gray-700">{buyer.company}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${buyer.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                    >
                      {buyer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors text-sm">
                      ✎ Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition-colors text-sm">
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {buyers.map((buyer) => (
            <div
              key={buyer.id}
              className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900">
                  {buyer.name}
                </h3>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${buyer.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                >
                  {buyer.status}
                </span>
              </div>
              <div className="space-y-1 text-sm text-gray-600 mb-3">
                <p>✉️ {buyer.email}</p>
                <p>🏢 {buyer.company}</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors font-semibold text-sm">
                  ✎ Edit
                </button>
                <button className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors font-semibold text-sm">
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
