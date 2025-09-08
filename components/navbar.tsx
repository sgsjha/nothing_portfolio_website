"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { nothing } from "@/app/font";

const NAV_ITEMS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close on Esc and on outside click
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClickAway = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    document.addEventListener("click", onClickAway);
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.removeEventListener("click", onClickAway);
    };
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(92vw,720px)]">
      <div
        ref={wrapRef}
        className={[
          "rounded-2xl shadow-lg backdrop-blur-md overflow-hidden",
          "bg-zinc-200/90 dark:bg-zinc-800/70 text-zinc-900 dark:text-zinc-100",
          "transition-[max-height,box-shadow,background-color] duration-300 ease-out",
          open ? "max-h-[85vh]" : "max-h-[56px]",
        ].join(" ")}
        role="navigation"
        aria-expanded={open}
      >
        {/* Bar header */}
        <div className="px-5 py-3 flex items-center justify-between gap-4">
          {/* Left: dotted hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={(e) => {
              e.stopPropagation(); // keep outside-click handler from firing
              setOpen((v) => !v);
            }}
            className="grid grid-cols-4 grid-rows-3 gap-[2px] p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="block h-[3px] w-[3px] rounded-full bg-zinc-600 dark:bg-zinc-400"
              />
            ))}
          </button>

          {/* Center: brand */}
          <div
            className={`${nothing.className} text-sm opacity-80 select-none tracking-[.06em]`}
          >
            NOTHING (R)
          </div>

          {/* Right: bag icon (no-op here, but kept for symmetry) */}
          <button
            aria-label="Cart"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
          >
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
              <path
                d="M3.5 6h15a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 18.5 16h-15A1.5 1.5 0 0 1 2 14.5v-7A1.5 1.5 0 0 1 3.5 6Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="0 4"
              />
            </svg>
          </button>
        </div>

        {/* Divider when open */}
        <div
          className={`mx-5 h-px transition-opacity ${
            open ? "opacity-20" : "opacity-0"
          } bg-zinc-900/20 dark:bg-white/20`}
        />

        {/* Expanding content */}
        <div
          className={[
            "px-6 md:px-10 pt-4 pb-6 md:pb-8",
            "grid place-items-center",
            "transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <ul className="w-full text-center space-y-5 md:space-y-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${nothing.className} block text-2xl md:text-4xl tracking-[.06em] leading-tight
                              hover:opacity-80 transition-opacity`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] tracking-wide text-zinc-600 dark:text-zinc-400">
            <Link href="/account">ACCOUNT</Link>
            <Link href="/community">COMMUNITY</Link>
            <Link href="/stores">STORES</Link>
            <Link href="/support">SUPPORT</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
