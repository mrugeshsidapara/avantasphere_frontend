"use client";

import { useState, useEffect } from "react";

type Props = {
  value?: string[];
  onChange?: (files: string[]) => void;
};

export default function ImageUploader({ value = [], onChange }: Props) {
  console.log("ImageUploader rendered with value:", value);
  const [images, setImages] = useState<string[]>(value);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    onChange?.(images);
  }, [images]);

  const handleImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    setUploading(true);

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", "products");
      formData.append("name", `${Date.now()}-${file.name}`);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setImages((prev) => [...prev, data.data.url]);
    }

    setUploading(false);
  };

  const removeImage = (index: number) => {
    const copy = [...images];
    copy.splice(index, 1);
    setImages(copy);
  };

  return (
    <div className="space-y-4">
      {/* Upload */}
      <label className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer block hover:border-blue-400">
        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleImages}
        />

        <p className="text-sm text-gray-600">
          {uploading ? "Uploading..." : "Upload product images"}
        </p>

        <span className="text-xs text-gray-400">PNG, JPG up to 5MB</span>
      </label>

      {/* Preview */}
      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative border rounded-lg overflow-hidden group"
            >
              <img src={image} className="w-full h-24 object-cover" />

              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100"
              >
                ✕
              </button>

              {index === 0 && (
                <span className="absolute bottom-1 left-1 text-xs bg-black/70 text-white px-2 py-0.5 rounded">
                  Cover
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
