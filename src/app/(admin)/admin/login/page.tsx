export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <p className="mt-2 text-gray-600">Sign in to access the admin panel.</p>
        <form className="mt-6 space-y-4" action="/api/admin/auth/login" method="POST">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full rounded border px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full rounded border px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
