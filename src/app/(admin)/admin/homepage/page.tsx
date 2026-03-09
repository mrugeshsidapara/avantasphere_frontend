"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { Save } from "lucide-react";

export default function HomepagePage() {
  const [sections, setSections] = useState([
    {
      id: 1,
      name: "Hero Section",
      status: "Active",
      content: "Welcome banner",
    },
    {
      id: 2,
      name: "Featured Products",
      status: "Active",
      content: "Top 6 Products",
    },
    {
      id: 3,
      name: "Categories Showcase",
      status: "Active",
      content: "Category cards",
    },
    {
      id: 4,
      name: "Testimonials",
      status: "Inactive",
      content: "Customer reviews",
    },
    {
      id: 5,
      name: "Newsletter",
      status: "Active",
      content: "Email signup",
    },
  ]);

  const toggleSection = (id: number) => {
    setSections(
      sections.map((section) =>
        section.id === id
          ? {
              ...section,
              status: section.status === "Active" ? "Inactive" : "Active",
            }
          : section,
      ),
    );
  };

  return (
    <DashboardLayout role="admin" currentPage="Homepage">
      <div className="p-6 md:p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Homepage Control</h1>
          <p className="text-gray-500">
            Manage and customize homepage sections
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">Total Sections</p>
            <h3 className="text-2xl font-bold text-gray-900">
              {sections.length}
            </h3>
          </div>

          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">Active</p>
            <h3 className="text-2xl font-bold text-green-600">
              {sections.filter((s) => s.status === "Active").length}
            </h3>
          </div>

          <div className="bg-white border rounded-xl shadow-sm p-5">
            <p className="text-sm text-gray-500">Inactive</p>
            <h3 className="text-2xl font-bold text-gray-600">
              {sections.filter((s) => s.status === "Inactive").length}
            </h3>
          </div>
        </div>

        {/* Sections List */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white border rounded-xl shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {section.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">{section.content}</p>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    section.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {section.status}
                </span>

                {/* Toggle */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`relative w-12 h-6 rounded-full transition ${
                    section.status === "Active" ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
                      section.status === "Active" ? "translate-x-6" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Section */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Edit Section Content
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Section
              </label>

              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                {sections.map((section) => (
                  <option key={section.id}>{section.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>

              <textarea
                className="w-full px-4 py-2 border rounded-lg h-28 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter section content..."
              />
            </div>

            <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
