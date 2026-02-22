import type { Order } from '@/lib/types';

import { orders } from '../../../data';

export interface IOrderRepository {
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  findByBuyerId(buyerId: string): Promise<Order[]>;
  create(data: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<Order>;
  update(id: string, data: Partial<Order>): Promise<Order | null>;
  delete(id: string): Promise<boolean>;
}

export class OrderRepository implements IOrderRepository {
  private data: Order[] = [...orders];

  async findAll(): Promise<Order[]> {
    return [...this.data];
  }

  async findById(id: string): Promise<Order | null> {
    return this.data.find((o) => o.id === id) ?? null;
  }

  async findByBuyerId(buyerId: string): Promise<Order[]> {
    return this.data.filter((o) => o.buyerId === buyerId);
  }

  async create(input: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<Order> {
    const id = `order-${Date.now()}`;
    const now = new Date().toISOString();
    const order: Order = {
      ...input,
      id,
      createdAt: now,
      updatedAt: now,
    };
    this.data.push(order);
    return order;
  }

  async update(id: string, input: Partial<Order>): Promise<Order | null> {
    const idx = this.data.findIndex((o) => o.id === id);
    if (idx === -1) return null;
    this.data[idx] = { ...this.data[idx], ...input, updatedAt: new Date().toISOString() };
    return this.data[idx];
  }

  async delete(id: string): Promise<boolean> {
    const idx = this.data.findIndex((o) => o.id === id);
    if (idx === -1) return false;
    this.data.splice(idx, 1);
    return true;
  }
}

export const orderRepository = new OrderRepository();
