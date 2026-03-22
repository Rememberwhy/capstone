"use client";

import Link from "next/link";
import { trackConversionClick } from "@/lib/tracking-events";

type ConversionPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  bullets?: string[];
  compact?: boolean;
};

export default function ConversionPanel({
  eyebrow,
  title,
  description,
  primaryHref = "/book-a-call",
  primaryLabel = "Book a Call",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Us",
  bullets = [],
  compact = false,
}: ConversionPanelProps) {
  return (
    <section className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.96))] p-6 md:p-7">
      <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-semibold text-[color:var(--color-text)] ${
          compact ? "text-2xl" : "text-3xl md:text-4xl"
        }`}
      >
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
        {description}
      </p>

      {bullets.length ? (
        <div className="mt-5 grid gap-3">
          {bullets.map((bullet) => (
            <div
              key={bullet}
              className="rounded-[18px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] px-4 py-3 text-sm leading-6 text-[color:var(--color-text-muted)]"
            >
              {bullet}
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href={primaryHref}
          onClick={() =>
            trackConversionClick(
              "conversion_panel_clicked",
              { action: primaryLabel, href: primaryHref, location: eyebrow },
              primaryHref.includes("book-a-call") ? "Contact" : "Lead",
            )
          }
          className="button-primary"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          onClick={() =>
            trackConversionClick("conversion_panel_clicked", {
              action: secondaryLabel,
              href: secondaryHref,
              location: eyebrow,
            })
          }
          className="button-secondary"
        >
          {secondaryLabel}
        </Link>
      </div>
    </section>
  );
}
