"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useProducts } from "@/lib/hooks/use-api";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { mutate } from "swr";
import { Product } from "@/lib/types";
export default function ProductsPage() {
  const { data, loading, error } = useProducts();
  const router = useRouter();

  const products: Product[] = Array.isArray(data) ? data : [];

  const deleteProduct = async (id: string) => {
    if (!confirm("Delete this product?")) return;

    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    mutate("/api/products");
  };

  return (
    <DashboardLayout role="admin" currentPage="Products">
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white p-4 md:p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Products</h1>
            <p className="text-sm text-gray-500">
              Manage export & OEM product catalog
            </p>
          </div>
          <button
            onClick={() => router.push("/admin/products/new")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#0a1c4f] text-white rounded-lg text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            New Product
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border overflow-hidden">
          <div className="bg-white rounded-xl border overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="p-4 text-left">Product</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">MOQ</th>
                  <th className="p-4 text-left">HS Code</th>
                  <th className="p-4 text-left">Featured</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Sort</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((prod) => (
                  <tr key={prod.id} className="border-t hover:bg-gray-50">
                    {/* Product */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={prod.images?.[0]?.imageUrl || "/placeholder.png"}
                          className="w-10 h-10 object-cover rounded-md border"
                        />

                        <div>
                          <div className="font-medium text-gray-900">
                            {prod.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {prod.slug}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="p-4 text-gray-600">{prod.categoryId}</td>

                    {/* MOQ */}
                    <td className="p-4">{prod.moq || "-"}</td>

                    {/* HS Code */}
                    <td className="p-4">{prod.hsCode || "-"}</td>

                    {/* Featured */}
                    <td className="p-4">
                      {prod.isFeatured ? (
                        <span className="px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded">
                          Yes
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      {prod.isVisible ? (
                        <span className="px-2 py-1 text-xs bg-green-50 text-green-600 rounded">
                          Active
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs bg-red-50 text-red-600 rounded">
                          Disabled
                        </span>
                      )}
                    </td>

                    {/* Sort */}
                    <td className="p-4">{prod.sortOrder}</td>

                    {/* Actions */}
                    <td className="p-4 flex justify-end gap-2">
                      <button
                        onClick={() =>
                          router.push(`/admin/products/${prod.id}/edit`)
                        }
                        className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-md text-sm"
                      >
                        <Pencil className="w-4 h-4" />
                        Edit
                      </button>

                      <button
                        onClick={() => deleteProduct(prod.id)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 rounded-md text-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
