"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[color:var(--color-line)] bg-[rgba(20,20,18,0.94)] p-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <Link
          href="/book-a-call"
          onClick={() => track("sticky_mobile_cta_clicked", { action: "book-call" })}
          className="button-primary flex-1 px-4 py-3 text-center text-sm"
        >
          Book a Call
        </Link>
        <Link
          href="/contact"
          onClick={() => track("sticky_mobile_cta_clicked", { action: "start-project" })}
          className="button-secondary flex-1 px-4 py-3 text-center text-sm"
        >
          Start Project
        </Link>
      </div>
    </div>
  );
}
