"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nothing } from "@/app/font"; // <- your dotted "Nothing" font

const NAV_ITEMS = [
  { href: "/offers", label: "OFFERS" },
  { href: "/shop", label: "SHOP ALL" },
  { href: "/phones", label: "PHONES" },
  { href: "/audio", label: "AUDIO" },
  { href: "/watches", label: "WATCHES" },
  { href: "/accessories", label: "ACCESSORIES" },
  { href: "/cmf", label: "CMF" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top pill navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div
          className="w-[min(92vw,720px)] bg-zinc-200/90 dark:bg-zinc-800/70 text-zinc-900 dark:text-zinc-100
                        rounded-2xl px-5 py-3 shadow-lg backdrop-blur-md flex items-center justify-between gap-4"
        >
          {/* Dotted hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid grid-cols-4 grid-rows-3 gap-[2px] p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="block h-[3px] w-[3px] rounded-full bg-zinc-600 dark:bg-zinc-400"
              />
            ))}
          </button>

          {/* Brand center — dotted font */}
          <div
            className={`${nothing.className} text-sm opacity-80 select-none tracking-[.06em]`}
          >
            NOTHING (R)
          </div>

          {/* Dotted “bag” icon */}
          <button
            aria-label="Cart"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setOpen(true)}
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
      </nav>

      {/* Dim backdrop */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Frosted sheet */}
      <aside
        className={`fixed inset-x-4 top-6 z-50 mx-auto w-[min(960px,96vw)]
                    rounded-3xl backdrop-blur-xl shadow-2xl transition-transform duration-300
                    bg-[radial-gradient(60%_90%_at_50%_0%,rgba(255,255,255,.85),rgba(255,255,255,.7))]
                    dark:bg-[radial-gradient(60%_90%_at_50%_0%,rgba(24,24,27,.95),rgba(24,24,27,.8))]
                    ${
                      open
                        ? "translate-y-0"
                        : "-translate-y-[120%] pointer-events-none"
                    }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <button
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path
                d="M3 3l12 12M15 3 3 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="0 4"
              />
            </svg>
          </button>

          <div
            className={`${nothing.className} text-sm opacity-70 select-none tracking-[.06em]`}
          >
            NOTHING (R)
          </div>

          <button
            aria-label="Share"
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setOpen(false)}
          >
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
              <rect
                x="3"
                y="4"
                width="16"
                height="11"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeDasharray="0 4"
              />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div className="px-10 pb-10 pt-4 text-center">
          <ul className="space-y-6 md:space-y-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${nothing.className} block text-3xl md:text-5xl leading-tight tracking-[.06em]
                              text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs tracking-wide text-zinc-600 dark:text-zinc-400">
            <Link href="/account">ACCOUNT</Link>
            <Link href="/community">COMMUNITY</Link>
            <Link href="/stores">STORES</Link>
            <Link href="/support">SUPPORT</Link>
          </div>
        </div>
      </aside>
    </>
  );
}
