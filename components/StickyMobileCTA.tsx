"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { trackMarketingEvent } from "@/lib/marketing-tracking";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[color:var(--color-line)] bg-[rgba(20,20,18,0.94)] p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <Link
          href="/contact"
          onClick={() => {
            track("sticky_mobile_cta_clicked", { action: "start-project" });
            trackMarketingEvent("Contact", {
              action: "start-project",
              location: "sticky-mobile-cta",
            });
          }}
          className="button-primary flex-1 px-4 py-3 text-center text-sm"
        >
          Start Project
        </Link>
        <Link
          href="/proposal-request"
          onClick={() => {
            track("sticky_mobile_cta_clicked", { action: "request-proposal" });
            trackMarketingEvent("SubmitApplication", {
              action: "request-proposal",
              location: "sticky-mobile-cta",
            });
          }}
          className="button-secondary flex-1 px-4 py-3 text-center text-sm"
        >
          Request Proposal
        </Link>
      </div>
    </div>
  );
}
