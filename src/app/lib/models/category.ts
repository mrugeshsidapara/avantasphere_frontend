export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  productCount: number;
  subcategories: string[];
  sortOrder: number;
  createdAt?: string;
  updatedAt?: string;
};
