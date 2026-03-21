"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/enterprise-solutions", label: "Enterprise" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  const linkClassName = (href: string) =>
    isActive(href)
      ? "text-[color:var(--color-accent)]"
      : "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]";

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line)] bg-[rgba(20,20,18,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="font-[family:var(--font-display)] text-lg font-semibold tracking-[0.12em] text-[color:var(--color-text)] sm:text-xl sm:tracking-[0.18em]"
        >
          Cap.*Stone
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-1 py-2 text-sm uppercase tracking-[0.18em] transition ${linkClassName(link.href)}`}
            >
              {link.label}
              {isActive(link.href) ? (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-x-0 -bottom-[14px] h-px bg-[color:var(--color-accent)]"
                />
              ) : null}
            </Link>
          ))}
        </nav>

        <motion.div whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
          href="/book-a-call"
          className="button-primary hidden px-4 py-2 text-sm uppercase tracking-[0.14em] md:inline-flex"
        >
          Book a Call
        </Link>
        </motion.div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex items-center rounded-full border border-[color:var(--color-line)] px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-text)] transition hover:border-[color:var(--color-accent)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-[color:var(--color-line)] bg-[rgba(20,20,18,0.96)] px-6 py-6 md:hidden"
        >
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl border px-4 py-3 text-sm uppercase tracking-[0.12em] transition ${
                  isActive(link.href)
                    ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent)] text-[#181613]"
                    : "border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-[color:var(--color-text-muted)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-text)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/book-a-call"
            onClick={() => setIsOpen(false)}
            className="button-primary mt-5 inline-flex px-5 py-3 text-sm uppercase tracking-[0.1em]"
          >
            Book a Call
          </Link>
        </div>
      ) : null}
    </header>
  );
}
