"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Smith",
    email: "john.smith@company.com",
    phone: "+1 (555) 123-4567",
    company: "Global Textiles Ltd",
    country: "United States",
    address: "123 Business Street, Suite 100",
    city: "New York",
    state: "NY",
    zipcode: "10001",
  });

  return (
    <DashboardLayout role="buyer" currentPage="Profile">
      <div className="p-4 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-2">
            👤 Profile Management
          </h1>
          <p className="text-lg text-green-700">Manage your account settings</p>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-4xl">
          <div className="flex md:flex-row flex-col justify-between items-start gap-6 mb-8">
            <div>
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-4xl">
                👤
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mt-4">
                {profile.name}
              </h2>
              <p className="text-gray-600 mt-1">{profile.company}</p>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
            >
              {isEditing ? "✓ Save" : "✏️ Edit Profile"}
            </button>
          </div>

          {/* Profile Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={profile.name}
                disabled={!isEditing}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={profile.email}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={profile.phone}
                disabled={!isEditing}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                value={profile.company}
                disabled={!isEditing}
                onChange={(e) =>
                  setProfile({ ...profile, company: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                value={profile.address}
                disabled={!isEditing}
                onChange={(e) =>
                  setProfile({ ...profile, address: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                value={profile.city}
                disabled={!isEditing}
                onChange={(e) =>
                  setProfile({ ...profile, city: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                State
              </label>
              <input
                type="text"
                value={profile.state}
                disabled={!isEditing}
                onChange={(e) =>
                  setProfile({ ...profile, state: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Zipcode */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Zipcode
              </label>
              <input
                type="text"
                value={profile.zipcode}
                disabled={!isEditing}
                onChange={(e) =>
                  setProfile({ ...profile, zipcode: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Country
              </label>
              <input
                type="text"
                value={profile.country}
                disabled={!isEditing}
                onChange={(e) =>
                  setProfile({ ...profile, country: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
