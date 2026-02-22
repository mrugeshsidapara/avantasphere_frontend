"use client";

import { DashboardLayout } from "@/components/DashboardLayout";

export default function InquiriesPage() {
  const inquiries = [
    {
      id: "INQ-001",
      product: "Premium Fabrics - Cotton Blend",
      quantity: "1000 meters",
      date: "2025-02-15",
      status: "Quoted",
      price: "$2,500",
    },
    {
      id: "INQ-002",
      product: "Synthetic Leather",
      quantity: "500 sq meters",
      date: "2025-02-10",
      status: "Pending",
      price: "-",
    },
    {
      id: "INQ-003",
      product: "Organic Wool",
      quantity: "200 kg",
      date: "2025-02-05",
      status: "Quoted",
      price: "$1,800",
    },
  ];

  return (
    <DashboardLayout role="buyer" currentPage="Inquiries">
      <div className="p-4 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-2">
            💬 Inquiries
          </h1>
          <p className="text-lg text-green-700">
            Manage your quotation requests
          </p>
        </div>

        {/* Action Button */}
        <div className="mb-6">
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors">
            + New Inquiry
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">
                  Inquiry ID
                </th>
                <th className="px-6 py-4 text-left font-semibold">Product</th>
                <th className="px-6 py-4 text-left font-semibold">Quantity</th>
                <th className="px-6 py-4 text-left font-semibold">Date</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
                <th className="px-6 py-4 text-left font-semibold">Quote</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {inquiries.map((inquiry) => (
                <tr
                  key={inquiry.id}
                  className="hover:bg-green-50 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {inquiry.id}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{inquiry.product}</td>
                  <td className="px-6 py-4 text-gray-700">
                    {inquiry.quantity}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{inquiry.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        inquiry.status === "Quoted"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-green-600">
                    {inquiry.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-green-600 text-sm">
                    {inquiry.id}
                  </p>
                  <p className="font-semibold text-gray-900">
                    {inquiry.product}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    inquiry.status === "Quoted"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {inquiry.status}
                </span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>📦 Quantity: {inquiry.quantity}</p>
                <p>📅 Date: {inquiry.date}</p>
                <p className="font-semibold text-green-600">
                  💰 Quote: {inquiry.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
