"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const options = [
  {
    label: "Branding",
    summary: "You need clearer positioning, stronger identity, or a rebrand.",
    href: "/services/brand-strategy",
    cta: "Explore brand strategy",
  },
  {
    label: "Website",
    summary: "You need a sharper site, stronger conversion flow, or redesign.",
    href: "/services/website-design",
    cta: "Explore website design",
  },
  {
    label: "Redesign",
    summary: "You have something in place, but it no longer matches your quality or growth stage.",
    href: "/services/website-redesign",
    cta: "Explore redesign service",
  },
  {
    label: "Growth",
    summary: "You need better digital performance, clearer CTA paths, and stronger lead flow.",
    href: "/book-a-call",
    cta: "Book a discovery call",
  },
];

export default function QualificationQuiz() {
  const [selected, setSelected] = useState(options[0].label);

  const recommendation = useMemo(
    () => options.find((option) => option.label === selected) ?? options[0],
    [selected],
  );

  return (
    <section className="border-t border-[color:var(--color-line)] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-6">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Find Your Starting Point
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] md:text-5xl">
            Not sure what you need first?
          </h2>
          <p className="mt-5 text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg">
            Choose the area you want to improve most and we&apos;ll point you
            toward the most relevant next step.
          </p>
        </div>

        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7">
          <div className="grid gap-3 sm:grid-cols-2">
            {options.map((option) => {
              const isActive = option.label === selected;

              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setSelected(option.label)}
                  className={`rounded-2xl border px-4 py-4 text-left transition ${
                    isActive
                      ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent)] text-[#181613]"
                      : "border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] text-[color:var(--color-text)] hover:border-[color:var(--color-accent)]"
                  }`}
                >
                  <p className="text-base font-semibold">{option.label}</p>
                  <p
                    className={`mt-2 text-sm leading-6 ${
                      isActive
                        ? "text-[#181613]/72"
                        : "text-[color:var(--color-text-muted)]"
                    }`}
                  >
                    {option.summary}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.2)] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              Suggested next step
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)]">
              {recommendation.label}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[color:var(--color-text-muted)]">
              {recommendation.summary}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href={recommendation.href} className="button-primary">
                {recommendation.cta}
              </Link>
              <Link href="/contact" className="button-secondary">
                Send project details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
