import type { Metadata } from "next";
import { trustMetrics } from "@/lib/content";

const differentiators = [
  "We think beyond visuals and connect design choices to business clarity.",
  "We work well with founders and teams who need both strategic direction and execution.",
  "We build premium-feeling systems without making the process feel opaque.",
  "We care about how the work performs after launch, not just how it looks in a portfolio.",
];

export const metadata: Metadata = {
  title: "Why Capstone",
  description:
    "Learn what makes Capstone different as a branding, website, and digital growth partner.",
};

export default function WhyCapstonePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-24 md:px-6">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          Why Capstone
        </p>
        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          A more disciplined brand, not just a more stylish one.
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

      <div className="mt-14 grid gap-5">
        {differentiators.map((item, index) => (
          <section
            key={item}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
          >
            <p className="text-sm text-[color:var(--color-accent)]">0{index + 1}</p>
            <p className="mt-3 max-w-3xl text-2xl font-semibold leading-9 text-[color:var(--color-text)]">
              {item}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
