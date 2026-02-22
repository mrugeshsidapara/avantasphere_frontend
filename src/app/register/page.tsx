export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="lg:grid lg:grid-cols-2 lg:gap-0 min-h-screen">
        {/* Left Side - Benefits (Desktop Only) */}
        <div className="hidden lg:flex flex-col justify-center px-12 py-12 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Join Avantasphere</h2>
            <p className="text-green-100 text-lg">
              Registration is required before submitting any inquiries.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: "📊",
                title: "Dashboard",
                desc: "Track all your activities",
              },
              {
                icon: "💬",
                title: "Submit Inquiries",
                desc: "Request product quotations",
              },
              {
                icon: "🛍️",
                title: "Track Orders",
                desc: "Monitor your purchases",
              },
              {
                icon: "📥",
                title: "Download Documents",
                desc: "Access invoices & PDFs",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{benefit.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-green-100">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="flex items-center justify-center px-4 py-8 lg:py-0">
          <div className="w-full max-w-md">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-8">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <span className="text-5xl">📝</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Create Account
              </h1>
              <p className="text-gray-600 text-sm mt-2">
                Registration required before inquiries
              </p>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h2>
              <p className="text-gray-600">Create your buyer account</p>
            </div>

            {/* Registration Card */}
            <div className="backdrop-blur-sm bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <form
                className="space-y-4"
                action="/api/auth/register"
                method="POST"
              >
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 focus:border-green-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 focus:border-green-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Country Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Country (Optional)
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="United States"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-gray-50 focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl mt-6"
                >
                  Create Account
                </button>
              </form>

              {/* Already have account */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-green-600 hover:text-green-700 font-semibold"
                  >
                    Sign in here
                  </a>
                </p>
              </div>

              {/* Privacy Note */}
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-xs text-green-700">
                  <span className="font-semibold">🔒 Privacy:</span> Your
                  information is secure and will never be shared.
                </p>
              </div>
            </div>

            {/* Mobile Benefits */}
            <div className="lg:hidden mt-8 grid grid-cols-1 gap-3">
              {[
                { icon: "✓", text: "Browse product catalog" },
                { icon: "✓", text: "Submit inquiries" },
                { icon: "✓", text: "Track orders & shipments" },
                { icon: "✓", text: "Download documents" },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-sm text-gray-700 p-3 bg-white rounded-lg border border-gray-200"
                >
                  <span className="text-green-600 font-bold mr-3 text-lg">
                    {benefit.icon}
                  </span>
                  {benefit.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
