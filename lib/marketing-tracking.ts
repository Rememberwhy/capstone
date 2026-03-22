"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

const standardMetaEvents = new Set([
  "PageView",
  "Lead",
  "Contact",
  "ViewContent",
  "CompleteRegistration",
  "SubmitApplication",
]);

export function trackMarketingEvent(
  eventName: string,
  parameters: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.fbq === "function") {
    if (standardMetaEvents.has(eventName)) {
      window.fbq("track", eventName, parameters);
    } else {
      window.fbq("trackCustom", eventName, parameters);
    }
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", eventName);
  }
}
