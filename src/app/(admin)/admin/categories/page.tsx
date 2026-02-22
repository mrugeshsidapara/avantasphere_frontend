"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function CategoriesPage() {
  const [categories] = useState([
    {
      id: 1,
      name: "Fabrics & Textiles",
      description: "Premium fabric collections",
      products: 24,
    },
    {
      id: 2,
      name: "Leather Products",
      description: "High-quality leather materials",
      products: 18,
    },
    {
      id: 3,
      name: "Organic Materials",
      description: "Eco-friendly materials",
      products: 12,
    },
    {
      id: 4,
      name: "Industrial Supplies",
      description: "Bulk industrial materials",
      products: 35,
    },
  ]);

  return (
    <DashboardLayout role="admin" currentPage="Categories">
      <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
              📂 Categories
            </h1>
            <p className="text-lg text-blue-700">Manage product categories</p>
          </div>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors whitespace-nowrap">
            + New Category
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">
                  Category Name
                </th>
                <th className="px-6 py-4 text-left font-semibold">
                  Description
                </th>
                <th className="px-6 py-4 text-left font-semibold">Products</th>
                <th className="px-6 py-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {cat.name}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{cat.description}</td>
                  <td className="px-6 py-4 text-gray-700">{cat.products}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors text-sm">
                      ✎ Edit
                    </button>
                    <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition-colors text-sm">
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500"
            >
              <h3 className="font-bold text-lg text-gray-900">{cat.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{cat.description}</p>
              <div className="mt-3 text-sm text-gray-600 mb-3">
                📦 {cat.products} products
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors font-semibold text-sm">
                  ✎ Edit
                </button>
                <button className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors font-semibold text-sm">
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
