import type { Metadata } from "next";
import { testimonials, trustMetrics } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Results",
  description:
    "See testimonials, proof points, and performance outcomes from Capstone client work.",
  alternates: {
    canonical: "/results",
  },
  openGraph: {
    title: "Results | Capstone",
    description:
      "See testimonials, proof points, and performance outcomes from Capstone client work.",
    url: `${siteConfig.url}/results`,
  },
};

export default function ResultsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Capstone Results",
    url: `${siteConfig.url}/results`,
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Results
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
            Proof formatted for trust, not just for applause.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg md:leading-8">
            This page brings together the numbers, delivery signals, and client language that help prospects assess fit quickly.
          </p>
        </div>

        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            How to read the proof
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              ["Outcomes", "Metrics show what changed for the business, not just what changed visually."],
              ["Delivery", "Timeframes and response rhythm help buyers understand how the work is handled."],
              ["Credibility", "Testimonials are paired with role and proof so they feel grounded."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-4"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {title}
                </p>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
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
            <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
              {metric.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7"
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
