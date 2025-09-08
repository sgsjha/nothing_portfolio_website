"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { nothing } from "@/app/font";

const NAV_ITEMS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
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
        <div className="px-5 py-3 flex items-center justify-between gap-4 relative">
          {/* Left: dotted hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={(e) => {
              e.stopPropagation(); // keep outside-click handler from firing
              setOpen((v) => !v);
            }}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
          >
            {/* inline hamburger-dots SVG from project root */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-zinc-700 dark:text-zinc-300 w-5 h-4"
              width="22"
              height="16"
              viewBox="0 0 44.4 32.4"
              aria-hidden="true"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="none" />
              <circle cx="6.2" cy="6.2" r="2.2" fill="currentColor" />
              <circle cx="14.2" cy="6.2" r="2.2" fill="currentColor" />
              <circle cx="22.2" cy="6.2" r="2.2" fill="currentColor" />
              <circle cx="30.2" cy="6.2" r="2.2" fill="currentColor" />
              <circle cx="38.2" cy="6.2" r="2.2" fill="currentColor" />
              <circle cx="6.2" cy="26.2" r="2.2" fill="currentColor" />
              <circle cx="14.2" cy="26.2" r="2.2" fill="currentColor" />
              <circle cx="22.2" cy="26.2" r="2.2" fill="currentColor" />
              <circle cx="30.2" cy="26.2" r="2.2" fill="currentColor" />
              <circle cx="38.2" cy="26.2" r="2.2" fill="currentColor" />
            </svg>
          </button>

          {/* Center: brand */}
          <div
            className={`${nothing.className} text-sm opacity-80 select-none tracking-[.06em]`}
          >
            HIRE ME NOTHING
          </div>
          {/* Right: extra toggle (same as left) + bag icon (kept for symmetry) */}
          <div className="flex items-center gap-2">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-zinc-700 dark:text-zinc-300 w-5 h-4"
                width="22"
                height="16"
                viewBox="0 0 44.4 32.4"
                aria-hidden="true"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="none" />
                <circle cx="6.2" cy="6.2" r="2.2" fill="currentColor" />
                <circle cx="14.2" cy="6.2" r="2.2" fill="currentColor" />
                <circle cx="22.2" cy="6.2" r="2.2" fill="currentColor" />
                <circle cx="30.2" cy="6.2" r="2.2" fill="currentColor" />
                <circle cx="38.2" cy="6.2" r="2.2" fill="currentColor" />
                <circle cx="6.2" cy="26.2" r="2.2" fill="currentColor" />
                <circle cx="14.2" cy="26.2" r="2.2" fill="currentColor" />
                <circle cx="22.2" cy="26.2" r="2.2" fill="currentColor" />
                <circle cx="30.2" cy="26.2" r="2.2" fill="currentColor" />
                <circle cx="38.2" cy="26.2" r="2.2" fill="currentColor" />
              </svg>
            </button>

            {/* cart removed — right side only has the toggle now */}
          </div>
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
            <p>
              © SARTHAK JHA 2025 BUILT WITH NOTHING IN MIND. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
