"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ScrollPromptCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const triggerPoint = window.innerHeight * 0.6;
      setIsVisible(window.scrollY > triggerPoint);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden w-[340px] rounded-[28px] border border-[color:var(--color-line)] bg-[rgba(20,20,18,0.94)] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block">
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="absolute right-4 top-4 text-xs uppercase tracking-[0.16em] text-[color:var(--color-text-muted)] transition hover:text-[color:var(--color-accent)]"
      >
        Close
      </button>
      <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
        Quick Review
      </p>
      <h3 className="mt-3 max-w-[16rem] text-2xl font-semibold text-[color:var(--color-text)]">
        Want us to review your brand or website?
      </h3>
      <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
        Book a short strategy call or start a project brief. This prompt appears
        only after a visitor has shown real interest by scrolling.
      </p>
      <div className="mt-5 flex gap-3">
        <Link
          href="/book-a-call"
          onClick={() => track("scroll_prompt_clicked", { action: "book-call" })}
          className="button-primary px-4 py-2 text-sm"
        >
          Book a Call
        </Link>
        <Link
          href="/contact"
          onClick={() => track("scroll_prompt_clicked", { action: "brief" })}
          className="button-secondary px-4 py-2 text-sm"
        >
          Start Brief
        </Link>
      </div>
    </div>
  );
}
