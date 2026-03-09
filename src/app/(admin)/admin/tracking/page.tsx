"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { Plus, Search, Pencil } from "lucide-react";

export default function TrackingPage() {
  const [shipments] = useState([
    {
      id: "SHIP-001",
      order: "ORD-2025-080",
      status: "Delivered",
      eta: "2025-02-22",
      carrier: "FedEx",
    },
    {
      id: "SHIP-002",
      order: "ORD-2025-081",
      status: "In Transit",
      eta: "2025-02-27",
      carrier: "UPS",
    },
    {
      id: "SHIP-003",
      order: "ORD-2025-082",
      status: "Processing",
      eta: "2025-03-05",
      carrier: "DHL",
    },
  ]);

  return (
    <DashboardLayout role="admin" currentPage="Tracking">
      <div className="p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Shipment Tracking
            </h1>

            <p className="text-gray-500">Manage shipment tracking updates</p>
          </div>

          <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            <Plus size={18} />
            New Shipment
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">Total Shipments</p>
            <h3 className="text-2xl font-bold text-gray-900">
              {shipments.length}
            </h3>
          </div>

          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">Delivered</p>
            <h3 className="text-2xl font-bold text-green-600">
              {shipments.filter((s) => s.status === "Delivered").length}
            </h3>
          </div>

          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">In Transit</p>
            <h3 className="text-2xl font-bold text-blue-600">
              {shipments.filter((s) => s.status === "In Transit").length}
            </h3>
          </div>

          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">Processing</p>
            <h3 className="text-2xl font-bold text-yellow-600">
              {shipments.filter((s) => s.status === "Processing").length}
            </h3>
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
              placeholder="Search shipments..."
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
                  Shipment ID
                </th>

                <th className="px-6 py-4 text-left font-semibold">Order</th>

                <th className="px-6 py-4 text-left font-semibold">Carrier</th>

                <th className="px-6 py-4 text-left font-semibold">Status</th>

                <th className="px-6 py-4 text-left font-semibold">ETA</th>

                <th className="px-6 py-4 text-right font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {shipments.map((ship) => (
                <tr key={ship.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {ship.id}
                  </td>

                  <td className="px-6 py-4 text-gray-600">{ship.order}</td>

                  <td className="px-6 py-4 text-gray-600">{ship.carrier}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        ship.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : ship.status === "In Transit"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {ship.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-600">{ship.eta}</td>

                  <td className="px-6 py-4 flex justify-end">
                    <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
                      <Pencil size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {shipments.map((ship) => (
            <div
              key={ship.id}
              className="bg-white rounded-xl border shadow-sm p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">{ship.id}</h3>

                <span
                  className={`px-2 py-1 text-xs rounded-full
                  ${
                    ship.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : ship.status === "In Transit"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {ship.status}
                </span>
              </div>

              <p className="text-sm text-gray-600">Order: {ship.order}</p>

              <p className="text-sm text-gray-600">Carrier: {ship.carrier}</p>

              <p className="text-sm text-gray-500 mb-3">ETA: {ship.eta}</p>

              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg text-sm">
                <Pencil size={16} />
                Update Tracking
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
