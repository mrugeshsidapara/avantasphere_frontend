"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { Search } from "lucide-react";

export default function QuotesPage() {
  return (
    <DashboardLayout role="admin" currentPage="Quotes">
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-[1400px] mx-auto space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Quotes</h1>
            <p className="text-sm text-gray-500">
              Manage quotations sent to buyers.
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <p className="text-sm text-gray-500">Total Quotes</p>
              <p className="text-2xl font-semibold text-gray-900 mt-2">0</p>
            </div>

            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <p className="text-sm text-gray-500">Sent</p>
              <p className="text-2xl font-semibold text-blue-600 mt-2">0</p>
            </div>

            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <p className="text-sm text-gray-500">Accepted</p>
              <p className="text-2xl font-semibold text-green-600 mt-2">0</p>
            </div>

            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <p className="text-sm text-gray-500">Expired</p>
              <p className="text-2xl font-semibold text-red-600 mt-2">0</p>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="bg-white border rounded-xl p-4 flex items-center justify-between">
            <div className="relative w-[260px]">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                placeholder="Search quote..."
                className="w-full border rounded-lg pl-9 pr-3 py-2 text-sm"
              />
            </div>

            <div className="flex gap-3">
              <select className="border rounded-lg px-3 py-2 text-sm">
                <option>Status</option>
                <option>Draft</option>
                <option>Sent</option>
                <option>Accepted</option>
                <option>Rejected</option>
              </select>

              <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">
                Create Quote
              </button>
            </div>
          </div>

          {/* Quotes Table */}
          <div className="bg-white border rounded-xl shadow-sm">
            <div className="p-4 border-b">
              <h2 className="text-sm font-semibold text-gray-900">
                Quote List
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-xs text-gray-500 border-b">
                  <tr>
                    <th className="text-left px-4 py-3">Quote ID</th>
                    <th className="text-left px-4 py-3">RFQ</th>
                    <th className="text-left px-4 py-3">Total Price</th>
                    <th className="text-left px-4 py-3">Shipping</th>
                    <th className="text-left px-4 py-3">Valid Until</th>
                    <th className="text-left px-4 py-3">Status</th>
                    <th className="text-right px-4 py-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">QT-0001</td>

                    <td className="px-4 py-3">RFQ-0001</td>

                    <td className="px-4 py-3">$12,000</td>

                    <td className="px-4 py-3">$1,500</td>

                    <td className="px-4 py-3">2026-03-20</td>

                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                        Sent
                      </span>
                    </td>

                    <td className="px-4 py-3 text-right">
                      <button className="text-blue-600 text-sm">View</button>
                    </td>
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
