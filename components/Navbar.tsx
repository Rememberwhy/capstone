"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { trackConversionClick } from "@/lib/tracking-events";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/enterprise-solutions", label: "Enterprise" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/insights", label: "Insights" },
  { href: "/resources", label: "Resources" },
];

const mobileExploreLinks = [
  { href: "/results", label: "Results" },
  { href: "/selected-clients", label: "Selected Clients" },
  { href: "/why-capstone", label: "Why Capstone" },
  { href: "/industries", label: "Industries" },
  { href: "/process", label: "Process" },
  { href: "/partnership-models", label: "Partnership Models" },
];

const mobileActionLinks = [
  { href: "/book-a-call", label: "Book a Call" },
  { href: "/contact", label: "Contact" },
  { href: "/proposal-request", label: "Proposal Request" },
  { href: "/audit-workshop", label: "Audit / Workshop" },
  { href: "/client-faq", label: "Client FAQ" },
  { href: "/security-tech-stack", label: "Security / Tech Stack" },
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

  function handleNavClick(
    href: string,
    label: string,
    location: "desktop-nav" | "mobile-nav" | "desktop-cta",
    marketingEventName?: string,
  ) {
    setIsOpen(false);
    trackConversionClick(
      "navigation_clicked",
      {
        href,
        label,
        location,
      },
      marketingEventName,
    );
  }

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
              onClick={() => handleNavClick(link.href, link.label, "desktop-nav")}
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

        <motion.div
          whileHover={{ y: -1, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block"
        >
          <Link
            href="/book-a-call"
            onClick={() =>
              trackConversionClick(
                "navigation_clicked",
                { href: "/book-a-call", label: "Book a Call", location: "desktop-cta" },
                "Contact",
              )
            }
            className="button-primary px-4 py-2 text-sm uppercase tracking-[0.14em]"
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
          className="max-h-[calc(100svh-4.75rem)] overflow-y-auto border-t border-[color:var(--color-line)] bg-[rgba(20,20,18,0.96)] px-5 py-5 md:hidden"
        >
          <div className="space-y-6 pb-24">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Main
              </p>
              <nav className="grid gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href, link.label, "mobile-nav")}
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
            </div>

            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Explore
              </p>
              <nav className="grid gap-3">
                {mobileExploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href, link.label, "mobile-nav")}
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
            </div>

            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                Start
              </p>
              <nav className="grid gap-3">
                {mobileActionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() =>
                      handleNavClick(
                        link.href,
                        link.label,
                        "mobile-nav",
                        link.href === "/book-a-call"
                          ? "Contact"
                          : link.href === "/proposal-request"
                            ? "SubmitApplication"
                            : link.href === "/contact"
                              ? "Contact"
                              : undefined,
                      )
                    }
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
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
