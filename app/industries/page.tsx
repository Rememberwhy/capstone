import type { Metadata } from "next";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Explore the industries Capstone serves across branding, design, and digital growth work.",
};

export default function IndustriesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-24 md:px-6">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-white/50">
          Industries
        </p>
        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          Different industries need different kinds of clarity.
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/66">
          This page helps visitors self-identify quickly, which improves both
          trust and conversion quality.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <div
            key={industry}
            className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
          >
            <h2 className="text-2xl font-semibold text-white">{industry}</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Positioning, credibility, and a stronger digital presence for
              brands that need to look as strong as they actually are.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
