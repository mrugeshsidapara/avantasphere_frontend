import type { Product } from '@/lib/types';

// Static data - replace with Prisma when ready
import { products } from '../../../data';

export interface IProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  findByCategoryId(categoryId: string): Promise<Product[]>;
  findBySlug(slug: string): Promise<Product | null>;
  create(data: Omit<Product, 'id'>): Promise<Product>;
  update(id: string, data: Partial<Product>): Promise<Product | null>;
  delete(id: string): Promise<boolean>;
}

export class ProductRepository implements IProductRepository {
  private data: Product[] = [...products];

  async findAll(): Promise<Product[]> {
    return [...this.data].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async findById(id: string): Promise<Product | null> {
    return this.data.find((p) => p.id === id) ?? null;
  }

  async findByCategoryId(categoryId: string): Promise<Product[]> {
    return this.data.filter((p) => p.categoryId === categoryId).sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async findBySlug(slug: string): Promise<Product | null> {
    return this.data.find((p) => p.slug === slug) ?? null;
  }

  async create(input: Omit<Product, 'id'>): Promise<Product> {
    const id = input.slug || input.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const product: Product = {
      ...input,
      id,
      images: input.images ?? [],
      specifications: input.specifications ?? {},
    };
    this.data.push(product);
    return product;
  }

  async update(id: string, input: Partial<Product>): Promise<Product | null> {
    const idx = this.data.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    this.data[idx] = { ...this.data[idx], ...input };
    return this.data[idx];
  }

  async delete(id: string): Promise<boolean> {
    const idx = this.data.findIndex((p) => p.id === id);
    if (idx === -1) return false;
    this.data.splice(idx, 1);
    return true;
  }
}

export const productRepository = new ProductRepository();
