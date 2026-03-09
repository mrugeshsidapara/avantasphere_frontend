"use client";

import { useState } from "react";
import Modal from "./Modal";
import type { Certificate } from "@/lib/types";

export default function CertificateModal({
  certificate,
  onClose,
  onSaved,
}: {
  certificate: Certificate | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [name, setName] = useState(certificate?.name ?? "");
  const [description, setDescription] = useState(
    certificate?.description ?? "",
  );
  const [image, setImage] = useState<string>(certificate?.image ?? "");
  const [visible, setVisible] = useState<boolean>(certificate?.visible ?? true);

  const save = async () => {
    const payload = {
      name,
      description,
      image,
      visible,
    };
    await fetch(
      certificate ? `/api/certificates/${certificate.id}` : "/api/certificates",
      {
        method: certificate ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
    onClose();
    onSaved();
  };

  return (
    <Modal
      title={certificate ? "Edit Certificate" : "New Certificate"}
      onClose={onClose}
    >
      <div className="space-y-3">
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">Name</label>
          <input
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#3B82F6] outline-none"
            placeholder="Certificate name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">
            Description
          </label>
          <textarea
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#3B82F6] outline-none"
            placeholder="Short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-600">
            Image URL (optional)
          </label>
          <input
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#3B82F6] outline-none"
            placeholder="https://..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {image && (
            <img
              src={image}
              alt={name}
              className="mt-2 w-full h-32 object-cover rounded-lg border"
            />
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">Visible to buyers</span>
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className={`relative w-10 h-5 rounded-full transition ${
              visible ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition ${
                visible ? "translate-x-5" : ""
              }`}
            />
          </button>
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button onClick={onClose} className="text-sm px-4 py-2">
          Cancel
        </button>
        <button
          onClick={save}
          className="text-sm px-4 py-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#0a1c4f] text-white shadow-sm hover:scale-[1.01] transition-all"
        >
          Save
        </button>
      </div>
    </Modal>
  );
}

