import type { Category } from '@/lib/types';

// Static data - replace with Prisma/database when ready
import { categories } from '../../../data';

export interface ICategoryRepository {
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | null>;
  findBySlug(slug: string): Promise<Category | null>;
  create(data: Omit<Category, 'id'>): Promise<Category>;
  update(id: string, data: Partial<Category>): Promise<Category | null>;
  delete(id: string): Promise<boolean>;
}

export class CategoryRepository implements ICategoryRepository {
  private data: Category[] = [...categories];

  async findAll(): Promise<Category[]> {
    return [...this.data].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async findById(id: string): Promise<Category | null> {
    return this.data.find((c) => c.id === id) ?? null;
  }

  async findBySlug(slug: string): Promise<Category | null> {
    return this.data.find((c) => c.slug === slug) ?? null;
  }

  async create(input: Omit<Category, 'id'>): Promise<Category> {
    const id = input.slug || input.name.toLowerCase().replace(/\s+/g, '-');
    const category: Category = {
      ...input,
      id,
      productCount: input.productCount ?? 0,
    };
    this.data.push(category);
    return category;
  }

  async update(id: string, input: Partial<Category>): Promise<Category | null> {
    const idx = this.data.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    this.data[idx] = { ...this.data[idx], ...input };
    return this.data[idx];
  }

  async delete(id: string): Promise<boolean> {
    const idx = this.data.findIndex((c) => c.id === id);
    if (idx === -1) return false;
    this.data.splice(idx, 1);
    return true;
  }
}

export const categoryRepository = new CategoryRepository();
