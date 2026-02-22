"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

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
      <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
              🚚 Tracking Updates
            </h1>
            <p className="text-lg text-blue-700">
              Update shipment tracking information
            </p>
          </div>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors whitespace-nowrap">
            + New Shipment
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">
                  Shipment ID
                </th>
                <th className="px-6 py-4 text-left font-semibold">Order ID</th>
                <th className="px-6 py-4 text-left font-semibold">Carrier</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">ETA</th>
                <th className="px-6 py-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {shipments.map((ship) => (
                <tr
                  key={ship.id}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {ship.id}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{ship.order}</td>
                  <td className="px-6 py-4 text-gray-700">{ship.carrier}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
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
                  <td className="px-6 py-4 text-gray-700">{ship.eta}</td>
                  <td className="px-6 py-4">
                    <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors text-sm">
                      ✎ Update
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
              className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900">{ship.id}</h3>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
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
              <div className="space-y-1 text-sm text-gray-600 mb-3">
                <p>📦 Order: {ship.order}</p>
                <p>🚚 Carrier: {ship.carrier}</p>
                <p>📅 ETA: {ship.eta}</p>
              </div>
              <button className="w-full px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors font-semibold text-sm">
                ✎ Update
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
