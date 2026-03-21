import type { Metadata } from "next";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "See how Capstone approaches discovery, direction, design, development, and launch.",
};

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-24 md:px-6">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-white/50">
          Process
        </p>
        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          A clearer process makes the whole engagement easier to trust.
        </h1>
      </div>

      <div className="mt-14 grid gap-5">
        {processSteps.map((step, index) => (
          <section
            key={step.title}
            className="grid gap-4 rounded-[30px] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[120px_1fr]"
          >
            <p className="text-sm text-white/38">0{index + 1}</p>
            <div>
              <h2 className="text-3xl font-semibold text-white">{step.title}</h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-white/66">
                {step.text}
              </p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
