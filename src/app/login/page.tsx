'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/lib/api/client';
import { STATIC_CREDENTIALS } from '@/lib/constants/auth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { data, error: err } = await api.post<{ user: { role: string } }>('/api/auth/login', { email, password });
    setLoading(false);
    if (err) {
      setError(err);
      return;
    }
    if (data?.user?.role === 'admin') {
      router.push('/admin');
    } else {
      router.push('/buyer/dashboard');
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="mt-2 text-sm text-gray-600">
          Use the same credentials for Admin or Buyer (role is determined by email).
        </p>

        <div className="mt-4 rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
          <p className="font-semibold">Static credentials:</p>
          <p className="mt-1">
            <strong>Admin:</strong> {STATIC_CREDENTIALS.admin.email} / {STATIC_CREDENTIALS.admin.password}
          </p>
          <p className="mt-1">
            <strong>Buyer:</strong> {STATIC_CREDENTIALS.buyer.email} / {STATIC_CREDENTIALS.buyer.password}
          </p>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {error && <div className="rounded bg-red-100 p-3 text-sm text-red-700">{error}</div>}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded border px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded border px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
