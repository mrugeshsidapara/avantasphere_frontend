"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function CertificatesPage() {
  const [certificates, setCertificates] = useState([
    { id: 1, name: "ISO 9001", visible: true },
    { id: 2, name: "ISO 14001", visible: true },
    { id: 3, name: "OEKO-TEX", visible: false },
    { id: 4, name: "Fair Trade", visible: true },
  ]);

  const toggleVisibility = (id: number) => {
    setCertificates(
      certificates.map((cert) =>
        cert.id === id ? { ...cert, visible: !cert.visible } : cert,
      ),
    );
  };

  return (
    <DashboardLayout role="admin" currentPage="Certificates">
      <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
            🎖️ Certificates
          </h1>
          <p className="text-lg text-blue-700">
            Manage certificate visibility on buyer portal
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {cert.visible
                      ? "✓ Visible to Buyers"
                      : "✕ Hidden from Buyers"}
                  </p>
                </div>
                <button
                  onClick={() => toggleVisibility(cert.id)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    cert.visible
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-gray-400 hover:bg-gray-500 text-white"
                  }`}
                >
                  {cert.visible ? "👁️ Hide" : "👁️‍🗨️ Show"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Certificate */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            + Add New Certificate
          </h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Certificate Name"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors whitespace-nowrap">
              + Add
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
