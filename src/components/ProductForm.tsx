"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "./ImageUpload";
import { useCategories } from "@/lib/hooks/use-api";

export default function ProductForm({ product }: any) {
  const router = useRouter();
  const {
    data: categoriesData,
    loading: catLoading,
    error: catError,
  } = useCategories();

  const categories = Array.isArray(categoriesData) ? categoriesData : [];
  const [tab, setTab] = useState("general");

  //const [images, setImages] = useState<string[]>(product?.images || []);

  const [images, setImages] = useState<string[]>(
    product?.images?.map((i: any) => i.imageUrl) || [],
  );
  console.log("Initial images state:", images);
  const [form, setForm] = useState({
    name: product?.name || "",
    slug: product?.slug || "",
    category_id: product?.categoryId || "",
    manufacturerId: product?.manufacturerId || "",
    description: product?.description || "",

    hs_code: product?.hsCode || "",

    material: product?.material || "",
    finish: product?.finish || "",
    polish: product?.polish ?? false,
    certification: product?.certification || "",

    length: product?.length || "",
    width: product?.width || "",
    height: product?.height || "",
    weight: product?.weight || "",

    color: product?.color || "",
    grade: product?.grade || "",
    packaging_type: product?.packagingType || "",

    moq: product?.moq || "",
    container_capacity: product?.containerCapacity || "",

    is_visible: product?.isVisible ?? true,
    is_featured: product?.isFeatured ?? false,
    costPrice: product?.pricing?.[0]?.costPrice || "",
    logisticsCost: product?.pricing?.[0]?.logisticsCost || "",
    landingCost: product?.pricing?.[0]?.landingCost || "",
    salePrice: product?.pricing?.[0]?.salePrice || "",
    images: product?.images || [],
  });

  const update = (key: string, value: any) =>
    setForm({ ...form, [key]: value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      product: form,
      images,
    };

    const method = product ? "PUT" : "POST";
    const url = product ? `/api/products/${product.id}` : "/api/products";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    router.push("/admin/products");
  };

  const tabs = [
    { id: "general", label: "General" },
    { id: "specs", label: "Specifications" },
    { id: "dimensions", label: "Dimensions" },
    { id: "export", label: "Export & Packaging" },
    { id: "pricing", label: "Pricing" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-6 border-b text-sm">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`pb-3 ${
              tab === t.id
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8 mt-6">
        {/* MAIN */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* GENERAL */}
          {tab === "general" && (
            <div className="card">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  className="form-input"
                  placeholder="Product Name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />

                <input
                  className="form-input"
                  placeholder="Slug"
                  value={form.slug}
                  onChange={(e) => update("slug", e.target.value)}
                />

                <select
                  className="form-input w-full"
                  value={form.category_id}
                  onChange={(e) => update("category_id", e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>

                <input
                  className="form-input"
                  placeholder="Manufacturer ID"
                  value={form.manufacturerId}
                  onChange={(e) => update("manufacturerId", e.target.value)}
                />
              </div>

              <textarea
                className="form-input mt-4"
                rows={5}
                placeholder="Description"
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
              />
            </div>
          )}

          {/* SPECIFICATIONS */}
          {tab === "specs" && (
            <div className="card grid md:grid-cols-2 gap-4">
              <input
                className="form-input"
                placeholder="Material"
                value={form.material}
                onChange={(e) => update("material", e.target.value)}
              />

              <input
                className="form-input"
                placeholder="Finish"
                value={form.finish}
                onChange={(e) => update("finish", e.target.value)}
              />

              <input
                className="form-input"
                placeholder="Color"
                value={form.color}
                onChange={(e) => update("color", e.target.value)}
              />

              <input
                className="form-input"
                placeholder="Grade"
                value={form.grade}
                onChange={(e) => update("grade", e.target.value)}
              />

              <input
                className="form-input"
                placeholder="Certification"
                value={form.certification}
                onChange={(e) => update("certification", e.target.value)}
              />

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.polish}
                  onChange={(e) => update("polish", e.target.checked)}
                />
                Polish
              </label>
            </div>
          )}

          {/* DIMENSIONS */}
          {tab === "dimensions" && (
            <div className="card grid md:grid-cols-4 gap-4">
              <input
                className="form-input"
                placeholder="Length"
                value={form.length}
                onChange={(e) => update("length", e.target.value)}
              />

              <input
                className="form-input"
                placeholder="Width"
                value={form.width}
                onChange={(e) => update("width", e.target.value)}
              />

              <input
                className="form-input"
                placeholder="Height"
                value={form.height}
                onChange={(e) => update("height", e.target.value)}
              />

              <input
                className="form-input"
                placeholder="Weight"
                value={form.weight}
                onChange={(e) => update("weight", e.target.value)}
              />
            </div>
          )}

          {/* EXPORT */}
          {tab === "export" && (
            <div className="card grid md:grid-cols-3 gap-4">
              <input
                className="form-input"
                placeholder="HS Code"
                value={form.hs_code}
                onChange={(e) => update("hs_code", e.target.value)}
              />

              <input
                className="form-input"
                placeholder="MOQ"
                value={form.moq}
                onChange={(e) => update("moq", e.target.value)}
              />

              <input
                className="form-input"
                placeholder="Container Capacity"
                value={form.container_capacity}
                onChange={(e) => update("container_capacity", e.target.value)}
              />

              <input
                className="form-input"
                placeholder="Packaging Type"
                value={form.packaging_type}
                onChange={(e) => update("packaging_type", e.target.value)}
              />
            </div>
          )}

          {/* PRICING */}
          {tab === "pricing" && (
            <div className="card grid md:grid-cols-4 gap-4">
              <input
                className="form-input"
                placeholder="Cost Price"
                value={form.costPrice}
                onChange={(e) => update("costPrice", e.target.value)}
              />
              <input
                className="form-input"
                placeholder="Logistics Cost"
                value={form.logisticsCost}
                onChange={(e) => update("logisticsCost", e.target.value)}
              />
              <input
                className="form-input"
                placeholder="Landing Cost"
                value={form.landingCost}
                onChange={(e) => update("landingCost", e.target.value)}
              />
              <input
                className="form-input"
                placeholder="Sale Price"
                value={form.salePrice}
                onChange={(e) => update("salePrice", e.target.value)}
              />
            </div>
          )}

          {/* SETTINGS */}
          {tab === "settings" && (
            <div className="card space-y-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.is_visible}
                  onChange={(e) => update("is_visible", e.target.checked)}
                />
                Visible
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.is_featured}
                  onChange={(e) => update("is_featured", e.target.checked)}
                />
                Featured
              </label>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white border rounded-xl p-6 sticky top-6">
            <h3 className="font-semibold mb-4">Product Images</h3>

            <ImageUploader
              value={images}
              onChange={(files) => setImages(files)}
            />
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4">
        <button
          type="submit"
          className="px-6 py-2 bg-gradient-to-r from-[#3B82F6] to-[#0c1951] text-white rounded-lg"
        >
          {product ? "Update Product" : "Publish Product"}
        </button>

        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2 bg-gray-200 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
