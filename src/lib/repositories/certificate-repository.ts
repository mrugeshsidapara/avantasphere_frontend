import type { Certificate } from '@/lib/types';

import { certificates } from '../../../data';

export interface ICertificateRepository {
  findAll(): Promise<Certificate[]>;
  findVisible(): Promise<Certificate[]>;
  findById(id: string): Promise<Certificate | null>;
  update(id: string, data: Partial<Certificate>): Promise<Certificate | null>;
}

export class CertificateRepository implements ICertificateRepository {
  private data: Certificate[] = [...certificates];

  async findAll(): Promise<Certificate[]> {
    return [...this.data].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async findVisible(): Promise<Certificate[]> {
    return this.data.filter((c) => c.visible).sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async findById(id: string): Promise<Certificate | null> {
    return this.data.find((c) => c.id === id) ?? null;
  }

  async update(id: string, input: Partial<Certificate>): Promise<Certificate | null> {
    const idx = this.data.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    this.data[idx] = { ...this.data[idx], ...input };
    return this.data[idx];
  }
}

export const certificateRepository = new CertificateRepository();
