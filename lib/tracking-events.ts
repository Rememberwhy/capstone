"use client";

import { track } from "@vercel/analytics";
import { trackMarketingEvent } from "@/lib/marketing-tracking";

type TrackingValue = string | number | boolean | null | undefined;

export function trackConversionClick(
  eventName: string,
  properties: Record<string, TrackingValue> = {},
  marketingEventName?: string,
) {
  track(eventName, properties);

  if (marketingEventName) {
    trackMarketingEvent(marketingEventName, properties);
  }
}
