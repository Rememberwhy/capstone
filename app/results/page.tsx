import type { Metadata } from "next";
import { testimonials, trustMetrics } from "@/lib/content";

export const metadata: Metadata = {
  title: "Results",
  description:
    "See testimonials, proof points, and performance outcomes from Capstone client work.",
};

export default function ResultsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-24 md:px-6">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          Results
        </p>
        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          Proof formatted for trust, not just for applause.
        </h1>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {trustMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[24px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              {metric.label}
            </p>
            <p className="mt-3 text-3xl font-semibold text-[color:var(--color-accent)]">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Verified outcome
            </p>
            <p className="mt-4 text-lg leading-8 text-[color:var(--color-text)]">
              “{item.quote}”
            </p>
            <div className="mt-8 rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.24)] p-4">
              <p className="text-sm font-semibold text-[color:var(--color-text)]">{item.name}</p>
              <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">{item.role}</p>
              <p className="mt-4 text-sm leading-6 text-[color:var(--color-accent)]">{item.proof}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
