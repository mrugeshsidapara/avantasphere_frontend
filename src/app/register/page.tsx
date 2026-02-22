export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow">
        <h1 className="text-2xl font-bold">Buyer Registration</h1>
        <p className="mt-2 text-gray-600">Register to submit inquiries.</p>
        <form className="mt-6 space-y-4" action="/api/auth/register" method="POST">
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
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 w-full rounded border px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Company</label>
            <input type="text" name="company" className="mt-1 w-full rounded border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Country</label>
            <input type="text" name="country" className="mt-1 w-full rounded border px-3 py-2" />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </main>
  );
}
