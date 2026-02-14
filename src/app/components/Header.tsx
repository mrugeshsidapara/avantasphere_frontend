'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-semibold text-[#0B1F3F]">
            Avanta<span className="text-[#3B82F6]">Sphere</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm transition-colors ${
              isActive('/')
                ? 'text-[#0B1F3F] font-medium'
                : 'text-gray-600 hover:text-[#0B1F3F]'
            }`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`text-sm transition-colors ${
              pathname.startsWith('/products')
                ? 'text-[#0B1F3F] font-medium'
                : 'text-gray-600 hover:text-[#0B1F3F]'
            }`}
          >
            Products
          </Link>
          <Link
            href="/about"
            className={`text-sm transition-colors ${
              isActive('/about')
                ? 'text-[#0B1F3F] font-medium'
                : 'text-gray-600 hover:text-[#0B1F3F]'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/certifications"
            className={`text-sm transition-colors ${
              isActive('/certifications')
                ? 'text-[#0B1F3F] font-medium'
                : 'text-gray-600 hover:text-[#0B1F3F]'
            }`}
          >
            Certifications
          </Link>
        </nav>

        {/* CTA Button */}
        <Link href="/request-quote">
          <Button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white">
            Request Quote
          </Button>
        </Link>
      </div>
    </header>
  )
}