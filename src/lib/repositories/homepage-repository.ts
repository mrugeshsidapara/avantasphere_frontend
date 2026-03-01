import type { HomepageSections } from "@/lib/types";

export class HomepageRepository {
  async getSections(): Promise<HomepageSections> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("homepage_sections")
      .select("*");
    if (error) throw error;
    const sections: HomepageSections = {};
    (data ?? []).forEach((section) => {
      sections[section.key] = {
        enabled: section.enabled ?? true,
        sortOrder: section.sort_order ?? 999,
      };
    });
    return sections;
  }

  async updateSection(
    key: string,
    value: { enabled: boolean; sortOrder?: number },
  ): Promise<HomepageSections> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    await supabase
      .from("homepage_sections")
      .update({ enabled: value.enabled, sort_order: value.sortOrder })
      .eq("key", key);
    return this.getSections();
  }

  async updateSections(
    sections: Partial<Record<string, { enabled: boolean; sortOrder?: number }>>,
  ): Promise<HomepageSections> {
    const { createSupabaseServerClient } =
      await import("@/lib/supabase/server");
    const supabase = await createSupabaseServerClient();
    for (const [k, v] of Object.entries(sections)) {
      if (v) {
        await supabase
          .from("homepage_sections")
          .update({ enabled: v.enabled, sort_order: v.sortOrder })
          .eq("key", k);
      }
    }
    return this.getSections();
  }
}

export const homepageRepository = new HomepageRepository();
