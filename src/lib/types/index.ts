// Core entity types - compatible with static data and future Prisma models

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  subcategories: string[];
  sortOrder: number;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  images: string[];
  specifications: Record<string, string>;
  applications?: string[];
  certificateIds?: string[];
  sortOrder: number;
}

export interface Certificate {
  id: string;
  name: string;
  description: string;
  image: string;
  visible: boolean;
  sortOrder: number;
}

export interface Buyer {
  id: string;
  email: string;
  name: string;
  company: string;
  country: string;
  role: "admin" | "buyer";
  username?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AppUser {
  id: string;
  username: string;
  email: string;
  role: "admin" | "buyer" | "public";
  createdAt: string;
}

export interface Admin {
  id: string;
  email: string;
  role: "admin";
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  buyerId: string;
  status: OrderStatus;
  items: OrderItem[];
  totalAmount: number;
  shippingStatus: string;
  trackingNumber: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  unitPrice: number;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface Inquiry {
  id: string;
  buyerId: string;
  productId: string;
  message: string;
  status: "pending" | "responded" | "closed";
  createdAt: string;
  updatedAt: string;
}

export interface HomepageSections {
  [key: string]: { enabled: boolean; sortOrder: number };
}

export type UserRole = "admin" | "buyer";
