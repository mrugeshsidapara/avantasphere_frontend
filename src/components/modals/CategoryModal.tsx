"use client";

import { useState } from "react";
import Modal from "./Modal";
import { Category } from "@/app/lib/models/category";

export default function CategoryModal({
  category,
  onClose,
  onSaved,
}: {
  category: Category | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [name, setName] = useState(category?.name ?? "");
  const [description, setDescription] = useState(category?.description ?? "");
  const [image, setImage] = useState<string | null>(category?.image || null);
  const [uploading, setUploading] = useState(false);
  const save = async () => {
    await fetch(category ? `/api/categories/${category.id}` : "/api/categories", {
      method: category ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        slug: category?.slug ?? name.toLowerCase().replace(/\s+/g, "-"),
        description,
        image,
      }),
    });

    onClose();
    onSaved();
  };

  return (
    <Modal
      title={category ? "Edit Category" : "New Category"}
      onClose={onClose}
    >
      <input
        className="w-full border rounded-md px-3 py-2 text-sm mb-3"
        placeholder="Category name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="w-full border rounded-md px-3 py-2 text-sm"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="space-y-2">
        <label className="text-xs font-medium text-gray-600">
          Category Image
        </label>

        {image && (
          <img
            src={image}
            className="w-full h-40 object-cover rounded-lg border"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            if (!e.target.files?.[0]) return;

            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("file", file);

            setUploading(true);

            const res = await fetch("/api/upload", {
              method: "POST",
              body: formData,
            });

            const data = await res.json();
            setImage(data.url);
            setUploading(false);
          }}
          className="block w-full text-sm"
        />

        {uploading && <p className="text-xs text-gray-500">Uploading image…</p>}
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button onClick={onClose} className="text-sm px-4 py-2">
          Cancel
        </button>
        <button
          onClick={save}
          className="text-sm px-4 py-2 bg-[#3B82F6] text-white rounded-md"
        >
          Save
        </button>
      </div>
    </Modal>
  );
}
