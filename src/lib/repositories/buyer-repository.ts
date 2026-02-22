import type { Buyer } from '@/lib/types';

import { buyers } from '../../../data';

export interface IBuyerRepository {
  findAll(): Promise<Buyer[]>;
  findById(id: string): Promise<Buyer | null>;
  findByEmail(email: string): Promise<Buyer | null>;
  create(data: Omit<Buyer, 'id' | 'role' | 'createdAt' | 'updatedAt'>): Promise<Buyer>;
  update(id: string, data: Partial<Buyer>): Promise<Buyer | null>;
  delete(id: string): Promise<boolean>;
}

export class BuyerRepository implements IBuyerRepository {
  private data: Buyer[] = [...buyers];

  async findAll(): Promise<Buyer[]> {
    return [...this.data];
  }

  async findById(id: string): Promise<Buyer | null> {
    return this.data.find((b) => b.id === id) ?? null;
  }

  async findByEmail(email: string): Promise<Buyer | null> {
    return this.data.find((b) => b.email.toLowerCase() === email.toLowerCase()) ?? null;
  }

  async create(input: Omit<Buyer, 'id' | 'role' | 'createdAt' | 'updatedAt'>): Promise<Buyer> {
    const id = `buyer-${Date.now()}`;
    const now = new Date().toISOString();
    const buyer: Buyer = {
      ...input,
      id,
      role: 'buyer',
      createdAt: now,
      updatedAt: now,
    };
    this.data.push(buyer);
    return buyer;
  }

  async update(id: string, input: Partial<Buyer>): Promise<Buyer | null> {
    const idx = this.data.findIndex((b) => b.id === id);
    if (idx === -1) return null;
    this.data[idx] = { ...this.data[idx], ...input, updatedAt: new Date().toISOString() };
    return this.data[idx];
  }

  async delete(id: string): Promise<boolean> {
    const idx = this.data.findIndex((b) => b.id === id);
    if (idx === -1) return false;
    this.data.splice(idx, 1);
    return true;
  }
}

export const buyerRepository = new BuyerRepository();
