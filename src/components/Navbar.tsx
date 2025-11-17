// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const NAV_ITEMS = [
  { id: "new", label: "New & Featured", href: "/" },
  { id: "men", label: "Men", href: "/men" },
  { id: "women", label: "Women", href: "/women" },
  { id: "kids", label: "Kids", href: "/kids" },
  { id: "collections", label: "Collections", href: "/collections" },
  { id: "sports", label: "Sports", href: "/sports" },
  { id: "sale", label: "Sale", href: "/sale" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // ⭐ SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Hide on scroll down
      if (current > lastScroll && current > 70) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Close menus on click outside + ESC
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!navRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!navRef.current.contains(e.target)) setOpenMenu(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`
        w-full fixed top-0 z-50 transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Top micro bar */}
      <div className="w-full bg-transparent text-sm text-white/70">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <span className="text-xs">Find a store</span>
          <div className="flex gap-4 items-center text-xs">
            <a className="hover:underline" href="#">Help</a>
            <a className="hover:underline" href="#">Join Us</a>
            <a className="hover:underline" href="#">Sign In</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
<nav
  className="
    backdrop-blur-xl
    border-b border-white/10
    bg-[linear-gradient(90deg,#072032_0%,#0b0b0b_45%,#2b0d00_100%)]
    shadow-[0_0_20px_rgba(0,180,255,0.15),0_0_25px_rgba(255,100,0,0.15)]
  "
>
  <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
        <Link href="/" className="flex items-center">
  <div className="w-14 h-14 flex items-center justify-center">
    <Image
      src="/nike-logo.png"
      alt="Nike Logo"
      width={55}
      height={55}
      className="object-contain bg-transparent"
      priority
    />
  </div>
</Link>


          {/* Center Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setOpenMenu(item.id)}
                  onMouseLeave={() => setOpenMenu((s) => (s === item.id ? null : s))}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition ${
                      isActive ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Mega Menu Example */}
                  {openMenu === item.id && item.id === "new" && (
                    <div className="absolute left-0 top-10 mt-3 w-[880px] bg-[rgba(8,8,8,0.86)] text-white rounded-2xl p-6 shadow-2xl border border-white/6">
                      {/* Add real mega menu later */}
                      <p className="text-white/60">MegaMenu content…</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-white/6">
              🔍
            </button>

            <button className="p-2 rounded-full hover:bg-white/6">
              ❤️
            </button>

            <Link
              href="/cart"
              className="p-2 rounded-md border border-white/10 text-sm"
            >
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
