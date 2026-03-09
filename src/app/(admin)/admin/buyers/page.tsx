"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";

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
      <div className="p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Buyers</h1>
            <p className="text-gray-500">Manage buyer accounts and access</p>
          </div>

          <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-sm">
            <Plus size={18} />
            Add Buyer
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-5 border">
            <p className="text-gray-500 text-sm">Total Buyers</p>
            <h3 className="text-2xl font-bold text-gray-900">124</h3>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 border">
            <p className="text-gray-500 text-sm">Active</p>
            <h3 className="text-2xl font-bold text-green-600">102</h3>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-5 border">
            <p className="text-gray-500 text-sm">Inactive</p>
            <h3 className="text-2xl font-bold text-gray-500">22</h3>
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
              placeholder="Search buyers..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-xl shadow-sm border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b text-gray-600 text-sm">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Name</th>
                <th className="px-6 py-4 text-left font-semibold">Email</th>
                <th className="px-6 py-4 text-left font-semibold">Company</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-right font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {buyers.map((buyer) => (
                <tr key={buyer.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {buyer.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">{buyer.email}</td>

                  <td className="px-6 py-4 text-gray-600">{buyer.company}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        buyer.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {buyer.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 flex justify-end gap-3">
                    <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
                      <Pencil size={16} />
                    </button>

                    <button className="p-2 rounded-lg hover:bg-red-50 text-red-600">
                      <Trash2 size={16} />
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
              className="bg-white rounded-xl shadow-sm border p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">{buyer.name}</h3>

                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    buyer.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {buyer.status}
                </span>
              </div>

              <p className="text-sm text-gray-600">{buyer.email}</p>

              <p className="text-sm text-gray-500 mb-3">{buyer.company}</p>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 bg-blue-600 text-white py-2 rounded-lg text-sm">
                  <Pencil size={14} />
                  Edit
                </button>

                <button className="flex-1 flex items-center justify-center gap-1 bg-red-600 text-white py-2 rounded-lg text-sm">
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
