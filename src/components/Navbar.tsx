"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SpotlightNavbar, type NavItem } from "@/components/ui/spotlight-navbar";
import { navLinks } from "@/data/portfolio";

const items: NavItem[] = navLinks.map((l) => ({ label: l.label, href: l.href }));

function scrollToHash(href: string): void {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-4 sm:px-6">
        <a
          href="#home"
          className="flex h-11 items-center rounded-full border border-white/10 bg-surface/70 px-4 font-display text-lg font-bold tracking-wider backdrop-blur-md"
        >
          VK<span className="text-accent-2">.</span>
        </a>

        <SpotlightNavbar
          items={items}
          className="hidden pt-0 lg:flex"
          onItemClick={(item) => scrollToHash(item.href)}
        />

        <a
          href="#contact"
          className="hidden h-11 items-center rounded-full bg-gradient-to-r from-accent to-accent-3 px-5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:brightness-110 lg:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface/70 backdrop-blur-md lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 space-y-1 rounded-2xl border border-white/10 bg-surface/95 p-3 backdrop-blur-md lg:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-muted hover:bg-surface-2 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
