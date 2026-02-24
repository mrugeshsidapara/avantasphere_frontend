"use client";

import React from "react";

type BaseModalProps = {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
};

export function BaseModal({
  title,
  children,
  onClose,
  className = "",
}: BaseModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className={`relative w-full rounded-xl bg-white shadow-lg ${className}`}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
}
