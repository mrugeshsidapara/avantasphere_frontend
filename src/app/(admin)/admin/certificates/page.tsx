"use client";

import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useCertificates } from "@/lib/hooks/use-api";
import type { Certificate } from "@/lib/types";
import ConfirmDeleteModal from "@/components/modals/ConfirmDeleteModal";
import CertificateModal from "@/components/modals/CertificateModal";

export default function CertificatesPage() {
  const { data, loading } = useCertificates();
  const [items, setItems] = useState<Certificate[]>([]);
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    if (Array.isArray(data)) {
      setItems(data as Certificate[]);
    }
  }, [data]);

  const toggleVisibility = async (cert: Certificate) => {
    const nextVisible = !cert.visible;
    setItems((prev) =>
      prev.map((c) =>
        c.id === cert.id ? { ...c, visible: nextVisible } : c,
      ),
    );
    await fetch(`/api/certificates/${cert.id}/visibility`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visible: nextVisible }),
    });
  };

  const openNew = () => {
    setSelected(null);
    setModalOpen(true);
  };

  const openEdit = (cert: Certificate) => {
    setSelected(cert);
    setModalOpen(true);
  };

  const openDelete = (cert: Certificate) => {
    setSelected(cert);
    setDeleteOpen(true);
  };

  const handleDeleted = async () => {
    if (!selected) return;
    await fetch(`/api/certificates/${selected.id}`, {
      method: "DELETE",
    });
    setItems((prev) => prev.filter((c) => c.id !== selected.id));
    setDeleteOpen(false);
  };

  const visibleCount = items.filter((c) => c.visible).length;
  const hiddenCount = items.length - visibleCount;

  return (
    <DashboardLayout role="admin" currentPage="Certificates">
      <div className="p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Certificates</h1>
            <p className="text-gray-500">
              Manage certificate visibility and content for buyers
            </p>
          </div>
          <button
            onClick={openNew}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#0a1c4f] text-white rounded-xl text-sm font-medium shadow-sm hover:scale-[1.01] transition-all"
          >
            <Plus className="w-4 h-4" />
            New Certificate
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">Total Certificates</p>
            <h3 className="text-2xl font-bold text-gray-900">
              {items.length}
            </h3>
          </div>

          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">Visible</p>
            <h3 className="text-2xl font-bold text-green-600">
              {visibleCount}
            </h3>
          </div>

          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">Hidden</p>
            <h3 className="text-2xl font-bold text-gray-600">
              {hiddenCount}
            </h3>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading && (
            <div className="text-sm text-gray-500">Loading certificates…</div>
          )}
          {!loading &&
            items.map((cert) => (
              <div
                key={cert.id}
                className="bg-white border rounded-xl shadow-sm p-6 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-3">
                      {cert.description || "No description"}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleVisibility(cert)}
                    className={`relative w-12 h-6 rounded-full transition ${
                      cert.visible ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                        cert.visible ? "translate-x-6" : ""
                      }`}
                    />
                  </button>
                </div>

                {cert.image && (
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="mt-4 w-full h-32 object-cover rounded-lg border"
                  />
                )}

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-400">
                    Sort order: {cert.sortOrder}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEdit(cert)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-xs"
                    >
                      <Pencil className="w-3 h-3" />
                      Edit
                    </button>
                    <button
                      onClick={() => openDelete(cert)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-red-50 hover:bg-red-100 text-red-600 text-xs"
                    >
                      <Trash2 className="w-3 h-3" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Modals */}
        {modalOpen && (
          <CertificateModal
            certificate={selected}
            onClose={() => setModalOpen(false)}
            onSaved={() => window.location.reload()}
          />
        )}

        {deleteOpen && selected && (
          <ConfirmDeleteModal
            title="Delete Certificate"
            message={`Are you sure you want to delete "${selected.name}"? This action cannot be undone.`}
            onClose={() => setDeleteOpen(false)}
            onConfirm={handleDeleted}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
