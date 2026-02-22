"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

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
    { id: 5, name: "Newsletter", status: "Active", content: "Email signup" },
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
      <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
            🏠 Homepage Control
          </h1>
          <p className="text-lg text-blue-700">
            Manage and customize homepage sections
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {section.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{section.content}</p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-4 py-2 rounded-full font-semibold ${
                    section.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {section.status}
                </span>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                >
                  {section.status === "Active" ? "Disable" : "Enable"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Edit Section Content
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Section
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Hero Section</option>
                <option>Featured Products</option>
                <option>Categories Showcase</option>
                <option>Testimonials</option>
                <option>Newsletter</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter section content..."
              />
            </div>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
              💾 Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
