"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import {
  UserPlus,
  Mail,
  Globe,
  CheckCircle,
  Plus,
  SlidersHorizontal,
  Search,
} from "lucide-react";

export default function LeadsPage() {
  return (
    <DashboardLayout role="admin" currentPage="Leads">
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white p-4 md:p-8">
        <div className="max-w-[1400px] mx-auto space-y-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Leads</h1>
              <p className="text-sm text-gray-500">
                Manage buyer inquiries and RFQ leads.
              </p>
            </div>

            <button
              //onClick={openAdd}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#0a1c4f] text-white rounded-lg text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              New Lead
            </button>
          </div>
          {/* KPI Cards */}
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="bg-white border rounded-xl p-6 shadow-sm flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Total Leads</p>
                  <p className="text-2xl font-semibold text-gray-900">0</p>
                </div>
                <UserPlus className="w-5 h-5 text-blue-500" />
              </div>

              <div className="bg-white border rounded-xl p-6 shadow-sm flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">New Leads</p>
                  <p className="text-2xl font-semibold text-gray-900">0</p>
                </div>
                <Mail className="w-5 h-5 text-green-500" />
              </div>

              <div className="bg-white border rounded-xl p-6 shadow-sm flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Qualified</p>
                  <p className="text-2xl font-semibold text-gray-900">0</p>
                </div>
                <CheckCircle className="w-5 h-5 text-purple-500" />
              </div>

              <div className="bg-white border rounded-xl p-6 shadow-sm flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Countries</p>
                  <p className="text-2xl font-semibold text-gray-900">0</p>
                </div>
                <Globe className="w-5 h-5 text-orange-500" />
              </div>
            </div>
          </div>
          {/* Filters */}
          <div className="mt-10">
            <div className="p-4 flex items-center justify-between gap-4">
              {/* Search Left */}
              <div className="flex items-center">
                <input
                  placeholder="Search lead..."
                  className="border rounded-lg px-3 py-2 text-sm w-[260px]"
                />
              </div>

              {/* Right Side Controls */}
              <div className="flex items-center gap-3">
                <select className="border rounded-lg px-3 py-2 text-sm">
                  <option>Status</option>
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Qualified</option>
                  <option>Converted</option>
                </select>

                <select className="border rounded-lg px-3 py-2 text-sm">
                  <option>Source</option>
                  <option>Website</option>
                  <option>LinkedIn</option>
                  <option>Email</option>
                </select>

                <select className="border rounded-lg px-3 py-2 text-sm">
                  <option>Country</option>
                </select>
              </div>
            </div>
          </div>
          {/* Leads Table */}
          <div className="mt-2">
            <div className="bg-white border rounded-xl shadow-sm">
              <div className="p-4 border-b">
                <h2 className="text-sm font-semibold text-gray-900">
                  Lead List
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-xs text-gray-500 border-b">
                    <tr>
                      <th className="text-left px-4 py-3">Lead</th>
                      <th className="text-left px-4 py-3">Company</th>
                      <th className="text-left px-4 py-3">Country</th>
                      <th className="text-left px-4 py-3">Product</th>
                      <th className="text-left px-4 py-3">Source</th>
                      <th className="text-left px-4 py-3">Status</th>
                      <th className="text-left px-4 py-3">Date</th>
                      <th className="text-right px-4 py-3">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium text-gray-900">
                            John Smith
                          </p>
                          <p className="text-xs text-gray-500">
                            john@email.com
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-3">ABC Imports</td>

                      <td className="px-4 py-3">USA</td>

                      <td className="px-4 py-3">Rice</td>

                      <td className="px-4 py-3">Website</td>

                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                          New
                        </span>
                      </td>

                      <td className="px-4 py-3">2026-03-05</td>

                      <td className="px-4 py-3 text-right">
                        <button className="text-sm text-blue-600">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
