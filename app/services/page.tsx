import type { Metadata } from "next";
import Link from "next/link";
import RelatedInsights from "@/components/RelatedInsights";
import {
  getInsightsBySlugs,
  serviceHighlights,
  selectedClients,
  services,
  trustMetrics,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Capstone services across brand strategy, website design, redesign, development, mobile app delivery, and campaign creative.",
  keywords: [
    "brand strategy services",
    "website design services",
    "website redesign agency",
    "mobile app development services",
    "campaign creative services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Capstone",
    description:
      "Explore Capstone services across brand strategy, website design, redesign, development, mobile app delivery, and campaign creative.",
    url: `${siteConfig.url}/services`,
    images: [
      {
        url: `${siteConfig.url}/services/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Capstone Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Capstone",
    description:
      "Explore Capstone services across brand strategy, website design, redesign, development, mobile app delivery, and campaign creative.",
    images: [`${siteConfig.url}/services/opengraph-image`],
  },
};

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.description,
      url: `${siteConfig.url}/services/${service.slug}`,
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-24 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        Services
      </p>
      <h1 className="mt-4 text-5xl font-semibold">
        Services built around clarity, trust, and growth
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--color-text-muted)]">
        Capstone helps businesses sharpen how they are positioned, how they are
        presented, and how their digital presence performs. Some clients need a
        focused sprint. Others need a more complete brand and website system.
      </p>

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

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            id={service.slug}
            className="rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
          >
            <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">
              {service.title}
            </h2>
            <p className="mt-3 text-[color:var(--color-text-muted)]">{service.description}</p>
            <p className="mt-4 text-sm leading-6 text-[color:var(--color-accent)]/80">
              {service.detail}
            </p>
            <div className="mt-6">
              <RelatedInsights
                title="Read before you scope"
                articles={getInsightsBySlugs(service.relatedInsights)}
                compact
              />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={`/services/${service.slug}`} className="button-primary">
                Explore Service
              </Link>
              <Link href="/book-a-call" className="button-secondary">
                Book a Call
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {serviceHighlights.map((block) => (
          <section
            key={block.heading}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              {block.heading}
            </p>
            <div className="mt-6 grid gap-3">
              {block.items.map((item) => (
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

      <div className="mt-16 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <section className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Why teams choose Capstone
          </p>
          <div className="mt-6 grid gap-4">
            {[
              "Strategy, design, and development are scoped together so the work solves the real business problem.",
              "Mobile behavior, trust signals, and conversion paths are treated as part of quality, not an afterthought.",
              "Clients get clear next-step recommendations instead of being pushed into the biggest package by default.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] px-4 py-4 text-sm leading-6 text-[color:var(--color-text-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Selected clients
          </p>
          <div className="mt-6 grid gap-3">
            {selectedClients.slice(0, 4).map((client) => (
              <div
                key={client.name}
                className="rounded-[20px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.16)] p-4"
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
                  {client.scope}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-16 rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7">
        <h2 className="text-3xl font-semibold text-[color:var(--color-text)]">
          Need a larger multi-phase scope?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)]">
          For broader rollouts involving web, campaigns, mobile product, or a
          more structured stakeholder process, the enterprise routes are the
          better place to start.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/enterprise-solutions" className="button-primary">
            Enterprise Solutions
          </Link>
          <Link href="/proposal-request" className="button-secondary">
            Request a Proposal
          </Link>
        </div>
      </div>
    </main>
  );
}
