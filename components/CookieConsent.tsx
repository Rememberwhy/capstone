"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  parseCookieConsent,
  serializeCookieConsent,
} from "@/lib/consent";

export default function CookieConsent() {
  const consentState = useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") {
        return () => undefined;
      }

      window.addEventListener("capstone-consent-changed", callback);

      return () => {
        window.removeEventListener("capstone-consent-changed", callback);
      };
    },
    () => {
      const stored = parseCookieConsent(
        window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY),
      );

      return stored ? "saved" : "missing";
    },
    () => "saved",
  );

  function saveConsent(analytics: boolean) {
    const consent = {
      analytics,
      updatedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      serializeCookieConsent(consent),
    );
    window.dispatchEvent(new Event("capstone-consent-changed"));
  }

  if (consentState !== "missing") {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-[calc(6.5rem+env(safe-area-inset-bottom))] z-[70] md:bottom-4 md:left-4 md:right-auto md:max-w-md">
      <div className="rounded-[28px] border border-[color:var(--color-line)] bg-[rgba(20,20,18,0.96)] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          Cookies
        </p>
        <h3 className="mt-3 text-xl font-semibold text-[color:var(--color-text)]">
          Help us measure what works.
        </h3>
        <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
          We use cookies and similar tools for marketing attribution and session
          analysis so we can see where visitors click, where they drop off, and
          where the site needs improvement.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-[color:var(--color-text-muted)]">
          <Link href="/cookies" className="transition hover:text-[color:var(--color-accent)]">
            Cookie Policy
          </Link>
          <Link href="/privacy" className="transition hover:text-[color:var(--color-accent)]">
            Privacy Policy
          </Link>
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => saveConsent(true)}
            className="button-primary"
          >
            Accept Analytics
          </button>
          <button
            type="button"
            onClick={() => saveConsent(false)}
            className="button-secondary"
          >
            Essential Only
          </button>
        </div>
      </div>
    </div>
  );
}
