import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyVisual from "@/components/CaseStudyVisual";
import ConversionPanel from "@/components/ConversionPanel";
import RelatedInsights from "@/components/RelatedInsights";
import {
  caseStudies,
  getCaseStudyBySlug,
  getInsightsBySlugs,
  getServicesBySlugs,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {};
  }

  return {
    title: study.title,
    description: study.result,
    keywords: study.keywords,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} | Case Study | Capstone`,
      description: study.result,
      url: `${siteConfig.url}/case-studies/${study.slug}`,
      images: [
        {
          url: `${siteConfig.url}/case-studies/${study.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Case Study | Capstone`,
      description: study.result,
      images: [`${siteConfig.url}/case-studies/${study.slug}/opengraph-image`],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const relatedInsights = getInsightsBySlugs(study.relatedInsights);
  const relatedServices = getServicesBySlugs(study.relatedServices);
  const relatedStudies = caseStudies
    .filter((item) => item.slug !== study.slug)
    .slice(0, 2);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.result,
    url: `${siteConfig.url}/case-studies/${study.slug}`,
    keywords: study.keywords.join(", "),
    about: study.category,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: `${siteConfig.url}/case-studies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: `${siteConfig.url}/case-studies/${study.slug}`,
      },
    ],
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div className="max-w-3xl">
          <Link
            href="/case-studies"
            className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)] transition hover:text-[color:var(--color-text)]"
          >
            Back to Case Studies
          </Link>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            {study.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
            {study.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-text-muted)]">
            {study.result}
          </p>
          <p className="mt-5 text-base leading-7 text-[color:var(--color-text-muted)]">
            {study.industry} • {study.timeline}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-a-call" className="button-primary">
              Book a Call
            </Link>
            <Link href="/contact" className="button-secondary">
              Contact Us
            </Link>
          </div>
        </div>

        <CaseStudyVisual study={study} />
      </section>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {study.kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-[24px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              {kpi.label}
            </p>
            <p className="mt-3 text-3xl font-semibold text-[color:var(--color-accent)]">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Problem
          </p>
          <p className="mt-4 text-base leading-8 text-[color:var(--color-text-muted)]">
            {study.problem}
          </p>
        </div>

        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.96))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Solution
          </p>
          <p className="mt-4 text-base leading-8 text-[color:var(--color-text-muted)]">
            {study.solution}
          </p>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Scope
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {study.scope.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Deliverables
          </p>
          <div className="mt-5 grid gap-3">
            {study.deliverables.map((item) => (
              <div
                key={item}
                className="rounded-[18px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.16)] px-4 py-4 text-sm leading-6 text-[color:var(--color-text-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <blockquote className="rounded-[30px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-6 text-lg leading-8 text-[color:var(--color-text)] md:p-7">
            “{study.quote}”
          </blockquote>

          <section className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Related services
            </p>
            <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
              These are the service paths most closely tied to the kind of result this project needed.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-full border border-[color:var(--color-line)] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)] transition hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-text)]"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <div className="mt-14">
        <RelatedInsights
          title="Insight articles tied to this project"
          description="These articles unpack the strategic decisions behind this kind of outcome so the proof and the thinking stay connected."
          articles={relatedInsights}
        />
      </div>

      {relatedStudies.length ? (
        <section className="mt-14">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            More case studies
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {relatedStudies.map((item) => (
              <Link
                key={item.slug}
                href={`/case-studies/${item.slug}`}
                className="rounded-[26px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 transition hover:border-[color:var(--color-accent)]"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                  {item.category}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {item.result}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-14">
        <ConversionPanel
          eyebrow="Need this level of proof?"
          title="Let’s talk about whether your business needs a similar scope."
          description="If this case study feels close to your situation, we can help you diagnose whether the right move is strategy, redesign, identity, development, or a broader multi-phase engagement."
          primaryLabel="Book a Discovery Call"
          secondaryLabel="Send Project Details"
          secondaryHref="/contact"
          bullets={[
            "Talk through the business problem before choosing the service path.",
            "Get a recommendation on the right scope and sequence.",
            "Move into a proposal, workshop, or focused sprint with stronger context.",
          ]}
        />
      </div>
    </main>
  );
}
