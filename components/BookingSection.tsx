"use client";

import { track } from "@vercel/analytics";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;

export default function BookingSection() {
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

          {bookingUrl ? (
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("booking_link_clicked", { location: "booking-section" })}
              className="button-secondary mt-8 px-5 py-3 text-sm"
            >
              Open Booking in New Tab
            </a>
          ) : (
            <p className="mt-8 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-4 text-sm leading-6 text-[color:var(--color-text-muted)]">
              Booking calendar coming soon. Use the inquiry form further down on
              this page and we&apos;ll arrange the best next step manually.
            </p>
          )}
        </div>

        <div className="overflow-hidden rounded-[32px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-3">
          {bookingUrl ? (
            <iframe
              src={bookingUrl}
              title="Book a call with Capstone"
              className="h-[680px] w-full rounded-[24px] bg-[color:var(--color-text)]"
            />
          ) : (
            <div className="flex h-[680px] flex-col items-center justify-center rounded-[24px] border border-dashed border-[color:var(--color-line)] bg-[rgba(11,11,10,0.28)] px-8 text-center">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Booking
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[color:var(--color-text)]">
                Calendar available soon
              </h3>
              <p className="mt-4 max-w-md text-base leading-7 text-[color:var(--color-text-muted)]">
                In the meantime, use the form on this page and we&apos;ll come
                back with the best next step, timeline, and availability.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
