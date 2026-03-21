"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const options = [
  {
    label: "Branding",
    summary: "You need clearer positioning, stronger identity, or a rebrand.",
    href: "/pricing",
  },
  {
    label: "Website",
    summary: "You need a sharper site, stronger conversion flow, or redesign.",
    href: "/case-studies",
  },
  {
    label: "Redesign",
    summary: "You have something in place, but it no longer matches your quality or growth stage.",
    href: "/process",
  },
  {
    label: "Growth",
    summary: "You need better digital performance, clearer CTA paths, and stronger lead flow.",
    href: "/book-a-call",
  },
];

export default function QualificationQuiz() {
  const [selected, setSelected] = useState(options[0].label);

  const recommendation = useMemo(
    () => options.find((option) => option.label === selected) ?? options[0],
    [selected],
  );

  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-6">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.18em] text-white/50">
            Find Your Starting Point
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Not sure what you need first?
          </h2>
          <p className="mt-5 text-base leading-7 text-white/68 md:text-lg">
            Choose the area you want to improve most and we&apos;ll point you
            toward the most relevant next step.
          </p>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-7">
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
                      ? "border-white/20 bg-white text-black"
                      : "border-white/10 bg-black/15 text-white hover:border-white/20"
                  }`}
                >
                  <p className="text-base font-semibold">{option.label}</p>
                  <p
                    className={`mt-2 text-sm leading-6 ${
                      isActive ? "text-black/70" : "text-white/60"
                    }`}
                  >
                    {option.summary}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">
              Suggested next step
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              {recommendation.label}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/62">
              {recommendation.summary}
            </p>
            <Link
              href={recommendation.href}
              className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
