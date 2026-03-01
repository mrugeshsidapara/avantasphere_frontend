/** Base URL for API requests. Server-side needs absolute URL; client uses same origin. */
export function getApiBaseUrl(): string {
  if (typeof window !== 'undefined') return '';
  const vercel = process.env.NEXT_PUBLIC_VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXTAUTH_URL ?? 'http://localhost:3000';
}

const getBase = () => getApiBaseUrl();

async function handleRes<T>(res: Response): Promise<{ data?: T; error?: string }> {
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    return { error: json.error ?? res.statusText ?? 'Request failed' };
  }
  return { data: json.data ?? json };
}

export const api = {
  async get<T>(path: string): Promise<{ data?: T; error?: string }> {
    const res = await fetch(`${getBase()}${path}`, { credentials: 'include' });
    return handleRes<T>(res);
  },

  async post<T>(path: string, body: unknown): Promise<{ data?: T; error?: string }> {
    const res = await fetch(`${getBase()}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      credentials: 'include',
    });
    return handleRes<T>(res);
  },

  async postFormData<T>(path: string, formData: FormData): Promise<{ data?: T; error?: string }> {
    const res = await fetch(`${getBase()}${path}`, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });
    return handleRes<T>(res);
  },
};
