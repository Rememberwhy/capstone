import type { Metadata } from "next";
import { partnershipModels } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partnership Models",
  description:
    "Explore Capstone partnership models from focused sprints to retained support and enterprise rollout.",
};

export default function PartnershipModelsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-24 md:px-6">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          Partnership Models
        </p>
        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          Different kinds of businesses need different engagement models.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--color-text-muted)]">
          Some teams need a short, focused sprint. Others need a retained
          partner, a transformation engagement, or a broader enterprise rollout
          with more structure around it.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {partnershipModels.map((model) => (
          <section
            key={model.name}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
          >
            <h2 className="text-3xl font-semibold text-[color:var(--color-text)]">
              {model.name}
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
              {model.summary}
            </p>
            <div className="mt-6 rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.24)] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Best fit
              </p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--color-text)]">
                {model.fit}
              </p>
            </div>
            <div className="mt-6 grid gap-3">
              {model.deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[color:var(--color-line)] px-4 py-3 text-sm text-[color:var(--color-text-muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
