"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function GlassNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Certifications", href: "/certifications" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <div
        className={`
          mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-24
          flex items-center transition-all duration-300
          ${scrolled ? "justify-end" : "justify-between"}
        `}
      >
        {/* LOGO — LEFT (ALL DEVICES) */}
        {!scrolled && (
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/AvantaSphere_Logo.png"
              alt="AvantaSphere"
              width={320}
              height={80}
              className="object-contain"
              priority
            />
          </Link>
        )}

        {/* NAV BAR — RIGHT */}
        <nav
          className={`
            flex items-center gap-6 px-6 py-3 rounded-full
            transition-all duration-300
            ${
              scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-lg border border-slate-200"
                : "bg-white/40 backdrop-blur-md border border-white/30"
            }
          `}
        >
          {/* TABLET + DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            {menu.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition
                    ${
                      active
                        ? "text-[#0B1F3F]"
                        : "text-slate-700 hover:text-[#0B1F3F]"
                    }
                  `}
                >
                  {item.name}
                  {active && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#0B1F3F] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* MOBILE HAMBURGER — RIGHT */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/80 backdrop-blur border border-slate-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg border border-slate-200">
          <nav className="flex flex-col py-3">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-6 py-3 text-sm transition
                  ${
                    pathname === item.href
                      ? "text-[#0B1F3F] font-semibold"
                      : "text-slate-700 hover:bg-slate-100"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
