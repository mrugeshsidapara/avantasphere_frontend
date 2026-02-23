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

  const save = async () => {
    await fetch("/api/categories", {
      method: category ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: category?.id,
        name,
        description,
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
