"use client";

import { DashboardLayout } from "@/components/DashboardLayout";

export default function DocumentsPage() {
  const documents = [
    {
      id: "DOC-001",
      name: "Invoice #INV-2025-001",
      date: "2025-02-20",
      size: "245 KB",
      type: "PDF",
    },
    {
      id: "DOC-002",
      name: "Shipping Receipt",
      date: "2025-02-18",
      size: "156 KB",
      type: "PDF",
    },
    {
      id: "DOC-003",
      name: "Product Specification Sheet",
      date: "2025-02-15",
      size: "512 KB",
      type: "PDF",
    },
    {
      id: "DOC-004",
      name: "Order Confirmation #ORD-2025-001",
      date: "2025-02-12",
      size: "189 KB",
      type: "PDF",
    },
    {
      id: "DOC-005",
      name: "Certificate of Quality",
      date: "2025-02-10",
      size: "340 KB",
      type: "PDF",
    },
  ];

  return (
    <DashboardLayout role="buyer" currentPage="Documents">
      <div className="p-4 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-2">
            📥 Documents
          </h1>
          <p className="text-lg text-green-700">Download your PDFs and files</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">
                  Document Name
                </th>
                <th className="px-6 py-4 text-left font-semibold">Date</th>
                <th className="px-6 py-4 text-left font-semibold">Size</th>
                <th className="px-6 py-4 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {documents.map((doc) => (
                <tr
                  key={doc.id}
                  className="hover:bg-green-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📄</span>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {doc.name}
                        </p>
                        <p className="text-xs text-gray-600">{doc.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{doc.date}</td>
                  <td className="px-6 py-4 text-gray-700">{doc.size}</td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-semibold transition-colors">
                      ⬇️ Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">📄</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{doc.name}</p>
                  <p className="text-xs text-gray-600 mt-1">{doc.type}</p>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-1 mb-3">
                <p>📅 {doc.date}</p>
                <p>📦 {doc.size}</p>
              </div>
              <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-semibold transition-colors">
                ⬇️ Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
