import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore Capstone case studies across branding, web design, and digital growth projects.",
};

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-24 md:px-6">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-white/50">
          Case Studies
        </p>
        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          Proof built around outcomes, not just aesthetics.
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/66">
          Each project below is framed around the real decision a lead wants to
          make: can this team improve how our business is perceived and how it
          performs online?
        </p>
      </div>

      <div className="mt-16 space-y-8">
        {caseStudies.map((study, index) => (
          <article
            key={study.slug}
            className="grid gap-6 rounded-[34px] border border-white/10 bg-white/[0.04] p-7 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                0{index + 1}
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                {study.title}
              </h2>
              <p className="mt-2 text-sm text-white/50">{study.category}</p>
              <div className="mt-8 rounded-[22px] border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Outcome
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {study.metric}
                </p>
                <p className="mt-2 text-sm text-white/55">{study.timeline}</p>
              </div>
            </div>

            <div className="grid gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Problem
                </p>
                <p className="mt-2 text-base leading-7 text-white/68">
                  {study.problem}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Solution
                </p>
                <p className="mt-2 text-base leading-7 text-white/68">
                  {study.solution}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Result
                </p>
                <p className="mt-2 text-base leading-7 text-white/68">
                  {study.result}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/[0.03] p-7 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/45">
            Next Step
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Want your business to become the next case study?
          </h2>
        </div>
        <Link
          href="/book-a-call"
          className="button-primary"
        >
          Book a Call
        </Link>
      </div>
    </main>
  );
}
