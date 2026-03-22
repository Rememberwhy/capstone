"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BOOKING_CONTEXT_STORAGE_KEY,
  formatBookingContext,
} from "@/lib/lead-attribution";
import { trackMarketingEvent } from "@/lib/marketing-tracking";
import { siteConfig } from "@/lib/site";

const bookingUrl = siteConfig.bookingUrl;

const serviceOptions = [
  "Brand strategy",
  "Visual identity",
  "Website design",
  "Website redesign",
  "Web development",
  "Mobile app development",
  "Ad campaign creative",
  "Full package",
  "Enterprise engagement",
];

const budgetOptions = [
  "Under $5k",
  "$5k-$12k",
  "$12k-$25k",
  "$25k-$50k",
  "$50k+",
];

const timelineOptions = [
  "As soon as possible",
  "Within 30 days",
  "Within 60 to 90 days",
  "Exploring for later this year",
];

export default function BookingSection() {
  const [serviceType, setServiceType] = useState(serviceOptions[2]);
  const [budgetRange, setBudgetRange] = useState(budgetOptions[1]);
  const [timeline, setTimeline] = useState(timelineOptions[1]);
  const [showCalendar, setShowCalendar] = useState(false);

  const fallbackBriefUrl = useMemo(() => {
    const params = new URLSearchParams({
      source: "booking-section",
      project: serviceType,
      details: `Booking context:\n${formatBookingContext({
        serviceType,
        budgetRange,
        timeline,
      })}\n\nProject details:\n`,
    });

    return `/contact?${params.toString()}`;
  }, [budgetRange, serviceType, timeline]);

  const personalizedBookingUrl = useMemo(() => {
    if (!bookingUrl) {
      return "";
    }

    try {
      const url = new URL(bookingUrl);
      url.searchParams.set("source", "capstone-booking-section");
      url.searchParams.set("service", serviceType);
      url.searchParams.set("budget", budgetRange);
      url.searchParams.set("timeline", timeline);
      return url.toString();
    } catch {
      return bookingUrl;
    }
  }, [budgetRange, serviceType, timeline]);

  function persistBookingContext() {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(
      BOOKING_CONTEXT_STORAGE_KEY,
      JSON.stringify({
        serviceType,
        budgetRange,
        timeline,
      }),
    );
  }

  function handleContinueToCalendar() {
    persistBookingContext();
    setShowCalendar(true);
    track("booking_qualifier_completed", {
      serviceType,
      budgetRange,
      timeline,
    });
    trackMarketingEvent("BookingQualified", {
      serviceType,
      budgetRange,
      timeline,
    });
  }

  return (
    <section className="border-t border-[color:var(--color-line)] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-6">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Book a Call
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Let&apos;s talk through your brand, website, or next move.
          </h2>
          <p className="mt-5 text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg">
            If you already have a project in mind, the fastest way to start is
            a short conversation. We&apos;ll talk through your goals, where the
            friction is, and what kind of engagement makes the most sense.
          </p>

          <div className="mt-8 grid gap-3 text-sm text-[color:var(--color-text-muted)]">
            <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-3">
              1. Choose the type of work you want to discuss.
            </div>
            <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-3">
              2. Share budget range and timing so the call is more useful.
            </div>
            <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-3">
              3. Open the calendar and book the best time.
            </div>
          </div>

          {bookingUrl ? (
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleContinueToCalendar}
                className="button-primary px-5 py-3 text-sm"
              >
                {showCalendar ? "Refresh Calendar View" : "Continue to Calendar"}
              </button>
              <a
                href={personalizedBookingUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  persistBookingContext();
                  track("booking_link_clicked", {
                    location: "booking-section-external",
                    serviceType,
                    budgetRange,
                    timeline,
                  });
                  trackMarketingEvent("Contact", {
                    serviceType,
                    budgetRange,
                    timeline,
                    location: "booking-section-external",
                  });
                }}
                className="button-secondary px-5 py-3 text-sm"
              >
                Open in New Tab
              </a>
            </div>
          ) : (
            <p className="mt-8 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-4 text-sm leading-6 text-[color:var(--color-text-muted)]">
              Add your Cal.com booking URL as
              {" "}
              <code className="text-[color:var(--color-accent)]">
                NEXT_PUBLIC_BOOKING_URL
              </code>
              {" "}
              and the scheduler will appear here. Until then, use the inquiry
              form below and we&apos;ll arrange the best next step manually.
            </p>
          )}
        </div>

        <div className="overflow-hidden rounded-[32px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-3">
          {bookingUrl && showCalendar ? (
            <div className="space-y-4">
              <div className="rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.24)] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  Booking summary
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-2 text-[color:var(--color-text)]">
                    {serviceType}
                  </span>
                  <span className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-2 text-[color:var(--color-text)]">
                    {budgetRange}
                  </span>
                  <span className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-2 text-[color:var(--color-text)]">
                    {timeline}
                  </span>
                </div>
              </div>

              <div className="rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  Prefer to send details first?
                </p>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  The same booking context can flow into a full project brief if you want us to review scope before the call.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={fallbackBriefUrl}
                    onClick={() =>
                      track("booking_brief_clicked", {
                        serviceType,
                        budgetRange,
                        timeline,
                      })
                    }
                    className="button-secondary"
                  >
                    Send Full Brief Instead
                  </Link>
                </div>
              </div>

              <iframe
                src={personalizedBookingUrl}
                title="Book a call with Capstone"
                onLoad={() =>
                  track("booking_calendar_loaded", {
                    serviceType,
                    budgetRange,
                    timeline,
                  })
                }
                className="h-[680px] w-full rounded-[24px] bg-[color:var(--color-text)]"
              />
            </div>
          ) : (
            <div className="rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.28)] p-6 md:p-7">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Qualification
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[color:var(--color-text)]">
                Share a little context before booking.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-[color:var(--color-text-muted)]">
                A few quick details help us prepare for the call and point you
                toward the right engagement path from the start.
              </p>

              <div className="mt-8 grid gap-5">
                <div>
                  <label className="mb-2 block text-sm text-[color:var(--color-text-muted)]">
                    What do you want to discuss?
                  </label>
                  <select
                    value={serviceType}
                    onChange={(event) => setServiceType(event.target.value)}
                    className="w-full rounded-2xl border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.28)] px-4 py-3 text-[color:var(--color-text)] outline-none transition focus:border-[color:var(--color-accent)]"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option} className="bg-[#141412]">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-[color:var(--color-text-muted)]">
                      Budget range
                    </label>
                    <select
                      value={budgetRange}
                      onChange={(event) => setBudgetRange(event.target.value)}
                      className="w-full rounded-2xl border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.28)] px-4 py-3 text-[color:var(--color-text)] outline-none transition focus:border-[color:var(--color-accent)]"
                    >
                      {budgetOptions.map((option) => (
                        <option key={option} value={option} className="bg-[#141412]">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-[color:var(--color-text-muted)]">
                      Ideal timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(event) => setTimeline(event.target.value)}
                      className="w-full rounded-2xl border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.28)] px-4 py-3 text-[color:var(--color-text)] outline-none transition focus:border-[color:var(--color-accent)]"
                    >
                      {timelineOptions.map((option) => (
                        <option key={option} value={option} className="bg-[#141412]">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {bookingUrl ? (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleContinueToCalendar}
                    className="button-primary"
                  >
                    Continue to Live Calendar
                  </button>
                  <Link
                    href={fallbackBriefUrl}
                    onClick={() =>
                      track("booking_brief_clicked", {
                        serviceType,
                        budgetRange,
                        timeline,
                      })
                    }
                    className="button-secondary"
                  >
                    Send Full Brief First
                  </Link>
                </div>
              ) : (
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={fallbackBriefUrl} className="button-primary">
                    Continue with Inquiry Form
                  </Link>
                  <a
                    href="https://cal.com"
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary"
                  >
                    Create Cal.com Account
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
