import type { Inquiry } from '@/lib/types';

import { inquiries } from '../../../data';

export interface IInquiryRepository {
  findAll(): Promise<Inquiry[]>;
  findById(id: string): Promise<Inquiry | null>;
  findByBuyerId(buyerId: string): Promise<Inquiry[]>;
  create(data: Omit<Inquiry, 'id' | 'createdAt' | 'updatedAt'>): Promise<Inquiry>;
  update(id: string, data: Partial<Inquiry>): Promise<Inquiry | null>;
  delete(id: string): Promise<boolean>;
}

export class InquiryRepository implements IInquiryRepository {
  private data: Inquiry[] = [...inquiries];

  async findAll(): Promise<Inquiry[]> {
    return [...this.data];
  }

  async findById(id: string): Promise<Inquiry | null> {
    return this.data.find((i) => i.id === id) ?? null;
  }

  async findByBuyerId(buyerId: string): Promise<Inquiry[]> {
    return this.data.filter((i) => i.buyerId === buyerId);
  }

  async create(input: Omit<Inquiry, 'id' | 'createdAt' | 'updatedAt'>): Promise<Inquiry> {
    const id = `inq-${Date.now()}`;
    const now = new Date().toISOString();
    const inquiry: Inquiry = {
      ...input,
      id,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    };
    this.data.push(inquiry);
    return inquiry;
  }

  async update(id: string, input: Partial<Inquiry>): Promise<Inquiry | null> {
    const idx = this.data.findIndex((i) => i.id === id);
    if (idx === -1) return null;
    this.data[idx] = { ...this.data[idx], ...input, updatedAt: new Date().toISOString() };
    return this.data[idx];
  }

  async delete(id: string): Promise<boolean> {
    const idx = this.data.findIndex((i) => i.id === id);
    if (idx === -1) return false;
    this.data.splice(idx, 1);
    return true;
  }
}

export const inquiryRepository = new InquiryRepository();
