"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import ProductModal from "@/components/modals/ProductModal";
import { useProducts } from "@/lib/hooks/use-api";
import { useState } from "react";
import { Plus, Pencil, Trash2, Package } from "lucide-react";
import { mutate } from "swr";

/* ---------------- TYPES ---------------- */
type Product = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  images: string[];
  specifications: Record<string, string>;
  applications: string[];
  certificateIds: string[];
  sortOrder: number;
};

/* ---------------- PAGE ---------------- */
export default function ProductsPage() {
  const { data, loading } = useProducts();

  const products: Product[] = Array.isArray(data) ? data : [];

  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);

  /* ---------------- ACTIONS ---------------- */
  const openAdd = () => {
    setSelected(null);
    setModalOpen(true);
  };

  const openEdit = (prod: Product) => {
    setSelected(prod);
    setModalOpen(true);
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("Delete this product?")) return;

    await fetch(`/api/admin/products/${id}`, {
      method: "DELETE",
    });

    mutate("/api/admin/products");
  };

  return (
    <DashboardLayout role="admin" currentPage="Products">
      <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-white via-gray-50 to-white">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Products</h1>
            <p className="text-sm text-gray-500">
              Manage export & OEM product catalog
            </p>
          </div>

          <button
            onClick={openAdd}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#0a1c4f] text-white rounded-lg text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            New Product
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-sm text-gray-500">Loading products…</div>
        )}

        {/* Desktop Table */}
        {!loading && (
          <div className="hidden md:block rounded-2xl bg-white/60 backdrop-blur-md border shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100 text-gray-700 text-sm">
                <tr>
                  <th className="px-6 py-4 text-left">Image</th>
                  <th className="px-6 py-4 text-left">Product</th>
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-left">Specifications</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {products.map((prod: Product) => (
                  <tr key={prod.id} className="hover:bg-white/50">
                    <td className="px-6 py-4">
                      {prod.images?.[0] ? (
                        <img
                          src={prod.images[0]}
                          alt={prod.name}
                          className="w-14 h-14 rounded-md object-cover border"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-md bg-gray-100" />
                      )}
                    </td>

                    <td className="px-6 py-4">
                      <div className="font-medium">{prod.name}</div>
                      <div className="text-xs text-gray-500">{prod.slug}</div>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {prod.categoryId}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {Object.entries(prod.specifications)
                        .slice(0, 3)
                        .map(([k]) => k)
                        .join(", ")}
                      {Object.keys(prod.specifications).length > 3 && "…"}
                    </td>

                    <td className="px-6 py-4 flex gap-2">
                      <button
                        onClick={() => openEdit(prod)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
                      >
                        <Pencil className="w-4 h-4" />
                        Edit
                      </button>

                      <button
                        onClick={() => deleteProduct(prod.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-red-50 hover:bg-red-100 text-red-600 text-sm"
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
        )}

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {products.map((prod: Product) => (
            <div
              key={prod.id}
              className="rounded-xl bg-white/60 backdrop-blur-md border p-4"
            >
              {prod.images?.[0] && (
                <img
                  src={prod.images[0]}
                  alt={prod.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              )}

              <h3 className="font-medium">{prod.name}</h3>
              <p className="text-xs text-gray-500">{prod.categoryId}</p>

              <p className="text-sm text-gray-600 mt-2">{prod.description}</p>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <Package className="w-4 h-4" />
                {prod.applications.join(", ")}
              </div>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => openEdit(prod)}
                  className="flex-1 px-3 py-2 bg-gray-100 rounded-md text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(prod.id)}
                  className="flex-1 px-3 py-2 bg-red-50 text-red-600 rounded-md text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty */}
        {!loading && products.length === 0 && (
          <div className="text-sm text-gray-500 mt-6">No products found.</div>
        )}

        {/* Modal */}
        {modalOpen && (
          <ProductModal
            product={selected}
            onClose={() => setModalOpen(false)}
            onSaved={() => mutate("/api/admin/products")}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
