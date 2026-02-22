"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function ProductsPage() {
  const [products] = useState([
    {
      id: 1,
      name: "Premium Cotton Fabric",
      category: "Fabrics",
      price: "$45.00",
      stock: 250,
      specs: "Color, Weight, Width",
    },
    {
      id: 2,
      name: "Synthetic Leather",
      category: "Leather",
      price: "$65.00",
      stock: 120,
      specs: "Color, Thickness, Finish",
    },
    {
      id: 3,
      name: "Organic Wool",
      category: "Organic",
      price: "$89.00",
      stock: 80,
      specs: "Grade, Weight, Treatment",
    },
  ]);

  return (
    <DashboardLayout role="admin" currentPage="Products">
      <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
              📦 Products
            </h1>
            <p className="text-lg text-blue-700">
              Manage product catalog with dynamic specifications
            </p>
          </div>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors whitespace-nowrap">
            + New Product
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">
                  Product Name
                </th>
                <th className="px-6 py-4 text-left font-semibold">Category</th>
                <th className="px-6 py-4 text-left font-semibold">Price</th>
                <th className="px-6 py-4 text-left font-semibold">Stock</th>
                <th className="px-6 py-4 text-left font-semibold">
                  Specifications
                </th>
                <th className="px-6 py-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {products.map((prod) => (
                <tr
                  key={prod.id}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {prod.name}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{prod.category}</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">
                    {prod.price}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {prod.stock} units
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {prod.specs}
                  </td>
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
          {products.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500"
            >
              <h3 className="font-bold text-lg text-gray-900">{prod.name}</h3>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <p>📁 {prod.category}</p>
                <p>💰 {prod.price}</p>
                <p>📦 {prod.stock} units available</p>
                <p className="mt-2 font-semibold text-gray-700">
                  Specs: {prod.specs}
                </p>
              </div>
              <div className="flex gap-2 mt-3">
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
