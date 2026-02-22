import type { HomepageSections } from '@/lib/types';

import { homepageSections } from '../../../data';

export class HomepageRepository {
  private data: HomepageSections = { ...homepageSections };

  async getSections(): Promise<HomepageSections> {
    return { ...this.data };
  }

  async updateSection(key: string, value: { enabled: boolean; sortOrder?: number }): Promise<HomepageSections> {
    if (this.data[key]) {
      this.data[key] = { ...this.data[key], ...value };
    }
    return { ...this.data };
  }

  async updateSections(sections: Partial<Record<string, { enabled: boolean; sortOrder?: number }>>): Promise<HomepageSections> {
    for (const [k, v] of Object.entries(sections)) {
      if (this.data[k] && v) this.data[k] = { ...this.data[k], ...v };
    }
    return { ...this.data };
  }
}

export const homepageRepository = new HomepageRepository();
