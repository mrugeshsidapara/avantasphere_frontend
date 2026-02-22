"use client";

import { DashboardLayout } from "@/components/DashboardLayout";

export default function InvoicesPage() {
  const invoices = [
    {
      id: "INV-2025-001",
      order: "ORD-2025-001",
      date: "2025-02-20",
      amount: "$1,200.00",
      status: "Paid",
      dueDate: "2025-03-10",
    },
    {
      id: "INV-2025-002",
      order: "ORD-2025-002",
      date: "2025-02-18",
      amount: "$890.00",
      status: "Pending",
      dueDate: "2025-03-18",
    },
    {
      id: "INV-2025-003",
      order: "ORD-2025-003",
      date: "2025-02-15",
      amount: "$2,100.00",
      status: "Paid",
      dueDate: "2025-03-15",
    },
    {
      id: "INV-2025-004",
      order: "ORD-2025-004",
      date: "2025-02-10",
      amount: "$1,500.00",
      status: "Overdue",
      dueDate: "2025-02-25",
    },
  ];

  return (
    <DashboardLayout role="buyer" currentPage="Invoices">
      <div className="p-4 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-2">
            📋 Invoices
          </h1>
          <p className="text-lg text-green-700">View your payment records</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-500">
            <p className="text-gray-600 text-sm">Total Invoiced</p>
            <p className="text-2xl md:text-3xl font-bold text-green-600">
              $5,690.00
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-500">
            <p className="text-gray-600 text-sm">Paid</p>
            <p className="text-2xl md:text-3xl font-bold text-blue-600">
              $3,300.00
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-yellow-500">
            <p className="text-gray-600 text-sm">Pending</p>
            <p className="text-2xl md:text-3xl font-bold text-yellow-600">
              $890.00
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-red-500">
            <p className="text-gray-600 text-sm">Overdue</p>
            <p className="text-2xl md:text-3xl font-bold text-red-600">
              $1,500.00
            </p>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">
                  Invoice ID
                </th>
                <th className="px-6 py-4 text-left font-semibold">Order ID</th>
                <th className="px-6 py-4 text-left font-semibold">Date</th>
                <th className="px-6 py-4 text-left font-semibold">Due Date</th>
                <th className="px-6 py-4 text-left font-semibold">Amount</th>
                <th className="px-6 py-4 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {invoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="hover:bg-green-50 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {invoice.id}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{invoice.order}</td>
                  <td className="px-6 py-4 text-gray-700">{invoice.date}</td>
                  <td className="px-6 py-4 text-gray-700">{invoice.dueDate}</td>
                  <td className="px-6 py-4 font-semibold text-green-600">
                    {invoice.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        invoice.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : invoice.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-green-600 text-sm">
                    {invoice.id}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Order: {invoice.order}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    invoice.status === "Paid"
                      ? "bg-green-100 text-green-700"
                      : invoice.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {invoice.status}
                </span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>📅 Issued: {invoice.date}</p>
                <p>⏰ Due: {invoice.dueDate}</p>
                <p className="font-semibold text-green-600 pt-2">
                  💰 {invoice.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
