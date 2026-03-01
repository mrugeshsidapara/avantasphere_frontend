import { z } from "zod";

// Zod must be installed
// npm install zod

export const categoryCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1).optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  subcategories: z.array(z.string()).optional(),
  sortOrder: z.number().optional(),
});

export const categoryUpdateSchema = categoryCreateSchema.partial();

export const productCreateSchema = z.object({
  categoryId: z.string().min(1, "Category is required"),
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1).optional(),
  description: z.string().optional(),
  images: z.array(z.string()).optional(),
  specifications: z.record(z.string()).optional(),
  applications: z.array(z.string()).optional(),
  certificateIds: z.array(z.string()).optional(),
  sortOrder: z.number().optional(),
});

export const productUpdateSchema = productCreateSchema.partial();

export const certificateUpdateSchema = z.object({
  visible: z.boolean().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  sortOrder: z.number().optional(),
});

export const homepageSectionUpdateSchema = z.object({
  enabled: z.boolean(),
  sortOrder: z.number().optional(),
});

export const buyerCreateSchema = z.object({
  username: z.string().min(3, "Username is required"),
  email: z.string().email(),
  name: z.string().min(1),
  company: z.string().optional(),
  country: z.string().optional(),
  password: z.string().min(8),
});

export const buyerUpdateSchema = z.object({
  name: z.string().optional(),
  company: z.string().optional(),
  country: z.string().optional(),
});

export const orderUpdateSchema = z.object({
  status: z
    .enum(["pending", "processing", "shipped", "delivered", "cancelled"])
    .optional(),
  shippingStatus: z.string().optional(),
  trackingNumber: z.string().nullable().optional(),
});

export const inquiryCreateSchema = z.object({
  productId: z.string().min(1),
  message: z.string().min(1),
});

export const inquiryUpdateSchema = z.object({
  status: z.enum(["pending", "responded", "closed"]).optional(),
});

export const loginSchema = z.object({
  identifier: z.string().min(1), // email or username
  password: z.string().min(1),
});
