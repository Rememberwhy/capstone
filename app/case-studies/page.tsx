import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyVisual from "@/components/CaseStudyVisual";
import RelatedInsights from "@/components/RelatedInsights";
import { caseStudies, getInsightsBySlugs } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore Capstone case studies across branding, web design, and digital growth projects.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Capstone",
    description:
      "Explore Capstone case studies across branding, web design, and digital growth projects.",
    url: `${siteConfig.url}/case-studies`,
    images: [
      {
        url: `${siteConfig.url}/case-studies/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Capstone Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Capstone",
    description:
      "Explore Capstone case studies across branding, web design, and digital growth projects.",
    images: [`${siteConfig.url}/case-studies/opengraph-image`],
  },
};

export default function CaseStudiesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Capstone Case Studies",
    url: `${siteConfig.url}/case-studies`,
    hasPart: caseStudies.map((study) => ({
      "@type": "CreativeWork",
      name: study.title,
      about: study.category,
    })),
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Case Studies
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
            Proof built around outcomes, not just aesthetics.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg md:leading-8">
            Each project below is framed around the real decision a lead wants to make: can this team improve how our business is perceived and how it performs online?
          </p>
        </div>

        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            What these studies show
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              ["Positioning", "How the business was reframed to feel clearer and more credible."],
              ["Execution", "How design, development, and content were brought into one delivery rhythm."],
              ["Outcome", "What changed in trust, speed, conversion, or fit after launch."],
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
      </section>

      <div className="mt-16 space-y-8">
        {caseStudies.map((study, index) => (
          <article
            key={study.slug}
            id={study.slug}
            className="grid gap-6 rounded-[34px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-5 sm:p-6 md:grid-cols-[0.92fr_1.08fr] md:p-7"
          >
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                0{index + 1}
              </p>
              <CaseStudyVisual study={study} />
              <div className="rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.2)] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                  Scope
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.scope.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {study.category}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-text)]">
                  {study.title}
                </h2>
                <p className="mt-3 text-sm text-[color:var(--color-text-muted)]">
                  {study.industry} • {study.timeline}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                  Problem
                </p>
                <p className="mt-2 text-base leading-7 text-[color:var(--color-text-muted)]">
                  {study.problem}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                  Solution
                </p>
                <p className="mt-2 text-base leading-7 text-[color:var(--color-text-muted)]">
                  {study.solution}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                  Result
                </p>
                <p className="mt-2 text-base leading-7 text-[color:var(--color-text-muted)]">
                  {study.result}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {study.kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-[20px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
                      {kpi.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[color:var(--color-text)]">
                      {kpi.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.22)] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                  Deliverables
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <blockquote className="rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.2)] p-5 text-base leading-7 text-[color:var(--color-text)]">
                “{study.quote}”
              </blockquote>
              <RelatedInsights
                title="Relevant insight articles"
                description="These reads expand on the strategy decisions behind this kind of result."
                articles={getInsightsBySlugs(study.relatedInsights)}
              />
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link href={`/case-studies/${study.slug}`} className="button-primary">
                  View Full Case Study
                </Link>
                <Link href="/book-a-call" className="button-secondary">
                  Book a Call
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-4 rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
            Next Step
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-text)]">
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
