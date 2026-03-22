import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ConversionPanel from "@/components/ConversionPanel";
import RelatedInsights from "@/components/RelatedInsights";
import {
  getCaseStudiesBySlugs,
  getInsightsBySlugs,
  getServiceBySlug,
  selectedClients,
  services,
  trustMetrics,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Capstone`,
      description: service.description,
      url: `${siteConfig.url}/services/${service.slug}`,
      images: [
        {
          url: `${siteConfig.url}/services/${service.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Capstone`,
      description: service.description,
      images: [`${siteConfig.url}/services/${service.slug}/opengraph-image`],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedInsights = getInsightsBySlugs(service.relatedInsights);
  const relatedCaseStudies = getCaseStudiesBySlugs(service.relatedCaseStudies);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/services/${service.slug}`,
    areaServed: siteConfig.locations,
    keywords: service.keywords.join(", "),
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <section className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-end">
        <div className="max-w-3xl">
          <Link
            href="/services"
            className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)] transition hover:text-[color:var(--color-text)]"
          >
            Back to Services
          </Link>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Service Detail
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-text-muted)]">
            {service.description}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)]">
            {service.idealFor}
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

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {service.outcomes.map((outcome, index) => (
            <div
              key={outcome}
              className="rounded-[24px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.96))] p-5"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                0{index + 1}
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

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

      <section className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Why this service converts better with the right structure
          </p>
          <div className="mt-6 grid gap-4">
            {[
              "The scope starts with business clarity, not decorative output.",
              "The service is shaped around trust, proof, and decision-making on both desktop and mobile.",
              "You leave with a stronger next step even if the right answer is a narrower engagement first.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.16)] px-4 py-4 text-sm leading-6 text-[color:var(--color-text-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.96))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Teams that trust this approach
          </p>
          <div className="mt-6 grid gap-3">
            {selectedClients.slice(0, 3).map((client) => (
              <div
                key={client.name}
                className="rounded-[20px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-4"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold text-[color:var(--color-text)]">
                    {client.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                    {client.category}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {client.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Deliverables
          </p>
          <div className="mt-5 grid gap-3">
            {service.deliverables.map((item) => (
              <div
                key={item}
                className="rounded-[18px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.16)] px-4 py-4 text-sm leading-6 text-[color:var(--color-text-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.96))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Delivery rhythm
          </p>
          <div className="mt-5 grid gap-3">
            {service.process.map((step, index) => (
              <div
                key={step}
                className="rounded-[18px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-4"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  0{index + 1}
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <RelatedInsights
          title="Insight articles tied to this service"
          description="These articles help teams understand the strategic questions that usually come before this kind of work."
          articles={relatedInsights}
        />

        <section className="rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Frequently asked
          </p>
          <div className="mt-4 grid gap-4">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[18px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.2)] p-4"
              >
                <p className="text-sm font-semibold text-[color:var(--color-text)]">
                  {faq.question}
                </p>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {relatedCaseStudies.length ? (
        <section className="mt-14">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Related case studies
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {relatedCaseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="rounded-[26px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 transition hover:border-[color:var(--color-accent)]"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                  {study.category}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)]">
                  {study.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {study.result}
                </p>
                <p className="mt-4 text-sm text-[color:var(--color-text-muted)]">
                  {study.industry} • {study.timeline}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-14">
        <ConversionPanel
          eyebrow="Ready to move?"
          title={`Talk through whether ${service.title.toLowerCase()} is the right next step.`}
          description="If the fit feels close, the fastest way forward is a short call or a project brief. We can tell you whether this service should be the starting point or whether another path would create more value first."
          primaryLabel="Book a Discovery Call"
          secondaryLabel="Send Project Details"
          secondaryHref="/contact"
          bullets={[
            "Get a recommendation on the right scope before you commit.",
            "Use the call to clarify timing, budget, and delivery fit.",
            "Move into a proposal, audit, or focused sprint with better context.",
          ]}
        />
      </div>
    </main>
  );
}
