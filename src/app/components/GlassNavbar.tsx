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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between transition-all duration-300">
        {/* ================= MOBILE & TABLET HEADER ================= */}
        {/* ================= MOBILE / TABLET SCROLLED BAR ================= */}
        <div className="md:hidden w-full flex justify-center">
          <div
            className={`
      flex items-center justify-between w-full max-w-[92%]
      px-3 py-2 rounded-2xl transition-all duration-300
      ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-md border border-white/40" : ""}
    `}
          >
            {/* LEFT: HAMBURGER */}
            <button onClick={() => setOpen(!open)} className="p-2 rounded-xl">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* RIGHT: LOGO */}
            <Link href="/" className="flex items-center">
              <Image
                src="/AvantaSphere_Logo.png"
                alt="AvantaSphere"
                width={130}
                height={36}
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>

        {/* ================= DESKTOP LOGO (UNCHANGED) ================= */}
        <div className="hidden md:block">
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
        </div>

        {/* ================= DESKTOP NAV (UNCHANGED) ================= */}
        <nav
          className={`
            hidden md:flex items-center gap-3 px-6 py-3 rounded-full
            transition-all duration-300
            ${
              scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-lg border border-slate-200"
                : "bg-white/40 backdrop-blur-md border border-white/30"
            }
          `}
        >
          {/* MENU */}
          <div className="flex items-center gap-3">
            {menu.map((item, index) => {
              const active = pathname === item.href;
              return (
                <div key={item.href} className="flex items-center gap-1.5">
                  <Link
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

                  {index !== menu.length - 1 && (
                    <span className="text-slate-300">|</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* AUTH */}
          <div className="flex items-center gap-2 ml-2 pl-2 border-slate-300">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-700 hover:text-[#0B1F3F]"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-sm font-medium px-4 py-2 rounded-full
                         bg-[#0B1F3F] text-white hover:bg-[#102a57] transition"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>

      {/* ================= MOBILE / TABLET DROPDOWN ================= */}
      {open && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg border border-slate-200">
          <nav className="flex flex-col py-3">
            {/* MENU LINKS */}
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

            {/* DIVIDER */}
            <div className="my-3 mx-6 h-px bg-slate-200" />

            {/* AUTH BUTTONS (MOBILE & TABLET) */}
            <div className="px-6 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="text-center text-sm font-medium text-[#0B1F3F] py-2 rounded-lg border border-[#0B1F3F]/20"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="text-center text-sm font-medium py-2 rounded-lg
                     bg-[#0B1F3F] text-white hover:bg-[#102a57] transition"
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
