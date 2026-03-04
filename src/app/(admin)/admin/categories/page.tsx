"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { Plus, Pencil, Trash2, Package, Eye } from "lucide-react";
import CategoryModal from "@/components/modals/CategoryModal";
import ConfirmDeleteModal from "@/components/modals/ConfirmDeleteModal";
import { useCategories } from "@/lib/hooks/use-api";

/* ---------------- TYPES ---------------- */
type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  sortOrder: number;
  subcategories: string[];
  image?: string;
};

/* ---------------- PAGE ---------------- */
export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: categories = [], loading } = useCategories();

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selected, setSelected] = useState<Category | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  /* ---------------- PAGINATION ---------------- */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  /* ---------------- FILTER ---------------- */
  const filteredCategories = (
    Array.isArray(categories) ? categories : []
  ).filter(
    (c: Category) =>
      (c.name ?? "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.description ?? "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.subcategories ?? []).some((sub) =>
        sub.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const paginatedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  /* ---------------- ACTIONS ---------------- */
  const openAdd = () => {
    setSelected(null);
    setModalOpen(true);
  };

  const openEdit = (cat: Category) => {
    setSelected(cat);
    setModalOpen(true);
  };

  const openDelete = (cat: Category) => {
    setSelected(cat);
    setDeleteOpen(true);
  };

  return (
    <DashboardLayout role="admin" currentPage="Categories">
      <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-white via-gray-50 to-white">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Categories</h1>
            <p className="text-sm text-gray-500">Manage product categories</p>
          </div>

          <button
            onClick={openAdd}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#0a1c4f] text-white rounded-lg text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-sm text-gray-500">Loading categories…</div>
        )}

        {/* Desktop Table */}
        {!loading && (
          <>
            <div className="hidden md:block rounded-2xl bg-white/70 backdrop-blur-md border shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100 text-gray-700 text-sm">
                  <tr>
                    <th className="px-6 py-4 text-left">Name</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-left">Products</th>
                    <th className="px-6 py-4 text-left">Image</th>
                    <th className="px-6 py-4 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {paginatedCategories.map((cat) => (
                    <tr key={cat.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-medium">{cat.name}</td>

                      <td className="px-6 py-4 text-sm text-gray-600 max-w-sm truncate">
                        {cat.description}
                      </td>

                      <td className="px-6 py-4 text-sm">{cat.productCount}</td>

                      <td className="px-6 py-4">
                        {cat.image ? (
                          <button
                            onClick={() => setPreviewImage(cat.image!)}
                            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                          >
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                        ) : (
                          <span className="text-xs text-gray-400">N/A</span>
                        )}
                      </td>

                      <td className="px-6 py-4 flex gap-2">
                        <button
                          onClick={() => openEdit(cat)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-sm"
                        >
                          <Pencil className="w-4 h-4" />
                          Edit
                        </button>

                        <button
                          onClick={() => openDelete(cat)}
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 text-sm">
                <div className="text-gray-500">
                  Page {currentPage} of {totalPages}
                </div>

                <div className="flex gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="px-3 py-1 rounded-md bg-gray-100 disabled:opacity-50"
                  >
                    Prev
                  </button>

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-3 py-1 rounded-md bg-gray-100 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {paginatedCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-xl bg-white/70 backdrop-blur-md border p-4"
            >
              <h3 className="font-medium">{cat.name}</h3>
              <p className="text-sm text-gray-600">{cat.description}</p>

              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                <Package className="w-4 h-4" />
                {cat.productCount} products
              </div>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => openEdit(cat)}
                  className="flex-1 px-3 py-2 bg-gray-100 rounded-md text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => openDelete(cat)}
                  className="flex-1 px-3 py-2 bg-red-50 text-red-600 rounded-md text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Category Modal */}
        {modalOpen && (
          <CategoryModal
            category={selected}
            onClose={() => setModalOpen(false)}
            onSaved={() => window.location.reload()}
          />
        )}

        {/* Delete Modal */}
        {deleteOpen && selected && (
          <ConfirmDeleteModal
            title="Delete Category"
            message={`Are you sure you want to delete "${selected.name}"?`}
            onClose={() => setDeleteOpen(false)}
            onConfirm={async () => {
              await fetch(`/api/categories/${selected.id}`, {
                method: "DELETE",
              });
              setDeleteOpen(false);
              window.location.reload();
            }}
          />
        )}

        {/* Image Preview Modal */}
        {previewImage && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-4 max-w-lg w-full relative">
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
              >
                ✕
              </button>

              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
