"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


  useEffect(() => {
    const prev = document.body.style.overflow;
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prev || "";
    }
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [menuOpen]);


  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-colors ${
          scrolled || menuOpen ? "bg-[#0d1117]/85 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
          <Link href="/" className="text-2xl font-bold text-emerald-400">
            LOGO
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-white text-xl hover:text-emerald-400 font-lg transition-all after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-emerald-400 after:transition-all hover:after:w-full"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-md hover:bg-gray-800 transition"
            >
              {menuOpen ? (
                <X className="w-7 h-7 text-white" />
              ) : (
                <Menu className="w-7 h-7 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen mobile overlay */}
      {menuOpen && (
        <div
          aria-hidden={!menuOpen}
          className="fixed inset-0 z-50 bg-[#0d1117]/95 backdrop-blur-sm flex flex-col items-center justify-center gap-10 md:hidden transition-colors"
        >
          {/* Close button (top-right) */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-800/70 transition"
          >
            <X className="w-7 h-7 text-white" />
          </button>

          {/* Links (vertical) */}
          <nav className="flex flex-col items-center gap-8 text-2xl font-semibold">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-emerald-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
