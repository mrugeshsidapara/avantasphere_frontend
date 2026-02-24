"use client";

import { useEffect, useState } from "react";
import Modal from "./Modal";
import { Trash2 } from "lucide-react";
import { useCategories } from "@/lib/hooks/use-api";
import { Category } from "../../lib/types";
import { ModalMedium } from "./ModalMedium";
import { ModalLarge } from "./ModalLarge";
import { ModalScrollable } from "./ModalScrollable";

type Product = {
  id?: string;
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

export default function ProductModal({
  product,
  onClose,
  onSaved,
}: {
  product: Product | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const { data, loading } = useCategories() as {
    data: Category[] | null;
    loading: boolean;
  };
  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none";

  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const categories = data ?? [];

  const [form, setForm] = useState<Product>({
    categoryId: "",
    name: "",
    slug: "",
    description: "",
    images: [],
    specifications: {},
    applications: [],
    certificateIds: [],
    sortOrder: 0,
  });

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (product) setForm(product);
  }, [product]);

  /* ---------------- IMAGE UPLOAD ---------------- */
  async function uploadImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploading(false);

    setForm((prev) => ({
      ...prev,
      images: [...prev.images, data.url],
    }));
  }

  /* ---------------- SAVE ---------------- */
  async function save() {
    await fetch("/api/admin/products", {
      method: product ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    onClose();
    onSaved();
  }

  return (
    <ModalScrollable
      title={product ? "Edit Product" : "New Product"}
      onClose={onClose}
    >
      {/* FORM GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ================= BASIC INFO ================= */}
        <div className="space-y-5">
          <h3 className="text-base font-semibold text-gray-800">
            Basic Information
          </h3>

          <div>
            <label className={labelClass}>Product Name *</label>
            <input
              className={inputClass}
              placeholder="Brass Ball Valve - Quarter Turn"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label className={labelClass}>Slug *</label>
            <input
              className={inputClass}
              placeholder="brass-ball-valve-quarter-turn"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
            />
          </div>

          <div>
            <label className={labelClass}>Category *</label>
            <select
              className={inputClass}
              value={form.categoryId}
              onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>Sort Order</label>
            <input
              type="number"
              className={inputClass}
              value={form.sortOrder}
              onChange={(e) =>
                setForm({
                  ...form,
                  sortOrder: Number(e.target.value),
                })
              }
            />
          </div>
        </div>

        {/* ================= DESCRIPTION & META ================= */}
        <div className="space-y-5">
          <h3 className="text-base font-semibold text-gray-800">
            Description & Meta
          </h3>

          <div>
            <label className={labelClass}>Description</label>
            <textarea
              className={`${inputClass} min-h-[140px] resize-none`}
              placeholder="Export-grade brass ball valve designed for industrial, commercial and OEM applications."
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className={labelClass}>Applications</label>
            <input
              className={inputClass}
              placeholder="Water Systems, Gas Lines, Pipelines"
              value={form.applications.join(", ")}
              onChange={(e) =>
                setForm({
                  ...form,
                  applications: e.target.value.split(",").map((v) => v.trim()),
                })
              }
            />
            <p className="text-xs text-gray-500 mt-1">Comma separated values</p>
          </div>

          <div>
            <label className={labelClass}>Certificates</label>
            <input
              className={inputClass}
              placeholder="ISO9001, CE"
              value={form.certificateIds.join(", ")}
              onChange={(e) =>
                setForm({
                  ...form,
                  certificateIds: e.target.value
                    .split(",")
                    .map((v) => v.trim()),
                })
              }
            />
          </div>
        </div>

        {/* ================= SPECIFICATIONS ================= */}
        <div className="space-y-5">
          <h3 className="text-base font-semibold text-gray-800">
            Specifications
          </h3>

          <div className="space-y-3">
            {Object.entries(form.specifications).map(([key, value]) => (
              <div key={key} className="grid grid-cols-[1fr_1fr_auto] gap-2">
                <input
                  className={inputClass}
                  placeholder="Property"
                  value={key}
                  onChange={(e) => {
                    const copy = {
                      ...form.specifications,
                    };
                    delete copy[key];
                    copy[e.target.value] = value;
                    setForm({
                      ...form,
                      specifications: copy,
                    });
                  }}
                />

                <input
                  className={inputClass}
                  placeholder="Value"
                  value={value}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      specifications: {
                        ...form.specifications,
                        [key]: e.target.value,
                      },
                    })
                  }
                />

                <button
                  type="button"
                  onClick={() => {
                    const copy = {
                      ...form.specifications,
                    };
                    delete copy[key];
                    setForm({
                      ...form,
                      specifications: copy,
                    });
                  }}
                  className="text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setForm({
                ...form,
                specifications: {
                  ...form.specifications,
                  [`spec_${Date.now()}`]: "",
                },
              })
            }
            className="text-sm font-medium text-blue-600"
          >
            + Add Specification
          </button>
        </div>
      </div>

      {/* ================= IMAGES ================= */}
      <div className="mt-10 space-y-4">
        <h3 className="text-base font-semibold text-gray-800">
          Product Images
        </h3>

        <div className="grid grid-cols-3 gap-4">
          {form.images.map((img) => (
            <div
              key={img}
              className="relative h-28 rounded-lg border overflow-hidden"
            >
              <img src={img} className="h-full w-full object-cover" />
              <button
                onClick={() =>
                  setForm({
                    ...form,
                    images: form.images.filter((i) => i !== img),
                  })
                }
                className="absolute top-2 right-2 bg-black/70 text-white rounded p-1"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          ))}

          <label className="h-28 rounded-lg border-2 border-dashed flex items-center justify-center text-sm text-gray-500 cursor-pointer hover:bg-gray-50">
            + Upload Image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files && uploadImage(e.target.files[0])}
            />
          </label>
        </div>

        {uploading && <p className="text-xs text-gray-500">Uploading image…</p>}
      </div>

      {/* ================= FOOTER ================= */}
      <div className="mt-10 border-t pt-5 flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-5 py-2 text-sm rounded-lg border"
        >
          Cancel
        </button>
        <button
          onClick={save}
          className="px-5 py-2 text-sm rounded-lg bg-blue-600 text-white"
        >
          Save Product
        </button>
      </div>
    </ModalScrollable>
  );
}
