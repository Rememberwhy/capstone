import type { Metadata } from "next";
import { securityPillars, techStack } from "@/lib/content";

export const metadata: Metadata = {
  title: "Security & Tech Stack",
  description:
    "Review Capstone's practical approach to structured delivery, quality, and modern implementation.",
};

export default function SecurityTechStackPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-24 md:px-6">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Security / Tech Stack
          </p>
          <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
            A practical trust page for teams that need more technical confidence.
          </h1>
          <div className="mt-8 grid gap-5">
            {securityPillars.map((pillar) => (
              <section
                key={pillar.title}
                className="rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
              >
                <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-[color:var(--color-text-muted)]">
                  {pillar.text}
                </p>
              </section>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Core stack
          </p>
          <div className="mt-6 grid gap-3">
            {techStack.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[color:var(--color-line)] px-4 py-3 text-sm text-[color:var(--color-text-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
