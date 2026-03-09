"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { FileText, Clock, CheckCircle, Search, Plus } from "lucide-react";

export default function RFQPage() {
  return (
    <DashboardLayout role="admin" currentPage="RFQs">
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white p-4 md:p-8">
        <div className="max-w-[1400px] mx-auto space-y-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                RFQ Requests
              </h1>
              <p className="text-sm text-gray-500">
                Manage buyer quotation requests.
              </p>
            </div>

            <button
              //onClick={openAdd}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#0a1c4f] text-white rounded-lg text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              New RFQ
            </button>
          </div>

          {/* KPI Cards */}
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <p className="text-sm text-gray-500">Total RFQs</p>
                <p className="text-2xl font-semibold text-gray-900 mt-2">0</p>
              </div>

              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <p className="text-sm text-gray-500">Pending</p>
                <p className="text-2xl font-semibold text-orange-600 mt-2">0</p>
              </div>

              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <p className="text-sm text-gray-500">Quoted</p>
                <p className="text-2xl font-semibold text-blue-600 mt-2">0</p>
              </div>

              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <p className="text-sm text-gray-500">Converted</p>
                <p className="text-2xl font-semibold text-green-600 mt-2">0</p>
              </div>
            </div>
          </div>
          {/* Search + Filters */}
          <div className="mt-10">
            <div className="bg-white border rounded-xl p-4 flex items-center justify-between">
              <div className="relative w-[260px]">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  placeholder="Search RFQ..."
                  className="w-full border rounded-lg pl-9 pr-3 py-2 text-sm"
                />
              </div>

              <div className="flex gap-3">
                <select className="border rounded-lg px-3 py-2 text-sm">
                  <option>Status</option>
                  <option>Pending</option>
                  <option>Quoted</option>
                  <option>Negotiation</option>
                  <option>Converted</option>
                </select>

                <select className="border rounded-lg px-3 py-2 text-sm">
                  <option>Country</option>
                </select>
              </div>
            </div>

            {/* RFQ Table */}
            <div className="mt-10">
              <div className="bg-white border rounded-xl shadow-sm">
                <div className="p-4 border-b">
                  <h2 className="text-sm font-semibold text-gray-900">
                    RFQ List
                  </h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="text-xs text-gray-500 border-b">
                      <tr>
                        <th className="text-left px-4 py-3">RFQ ID</th>
                        <th className="text-left px-4 py-3">Buyer</th>
                        <th className="text-left px-4 py-3">Products</th>
                        <th className="text-left px-4 py-3">Country</th>
                        <th className="text-left px-4 py-3">Status</th>
                        <th className="text-left px-4 py-3">Date</th>
                        <th className="text-right px-4 py-3">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 font-medium">RFQ-0001</td>

                        <td className="px-4 py-3">John Smith</td>

                        <td className="px-4 py-3">Rice, Wheat</td>

                        <td className="px-4 py-3">USA</td>

                        <td className="px-4 py-3">
                          <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
                            Pending
                          </span>
                        </td>

                        <td className="px-4 py-3">2026-03-06</td>

                        <td className="px-4 py-3 text-right">
                          <button className="text-blue-600 text-sm">
                            View
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
