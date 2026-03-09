// Core entity types - compatible with static data and future Prisma models
export interface LoginApiResponse {
  user: {
    id: string;
    email: string;
    role: "admin" | "buyer";
    username?: string;
    name?: string;
  };
}

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

export interface CategoryRpcRow {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  product_count: number | null;
  subcategories: string[] | null;
  sort_order: number | null;
}

export interface Product {
  id: string;

  categoryId: string;
  manufacturerId?: string;

  name: string;
  slug: string;
  description?: string;

  material?: string;
  finish?: string;
  polish?: boolean;
  certification?: string;

  length?: number;
  width?: number;
  height?: number;
  weight?: number;

  color?: string;
  grade?: string;

  hsCode?: string;
  packagingType?: string;
  moq?: number;
  containerCapacity?: number;

  isVisible?: boolean;
  isFeatured?: boolean;

  sortOrder?: number;

  images?: ProductImage[];
  specifications?: ProductSpecification[];
  pricing?: ProductPricing[];
}

export interface ProductImage {
  id?: string;
  imageUrl: string;
  sortOrder?: number;
}

export interface ProductSpecification {
  id?: string;
  specName: string;
  specValue: string;
}

export interface ProductPricing {
  id?: string;
  manufacturerId?: string;
  costPrice?: number;
  logisticsCost?: number;
  landingCost?: number;
  salePrice?: number;
  currency?: string;
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
