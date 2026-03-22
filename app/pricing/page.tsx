import type { Metadata } from "next";
import Link from "next/link";
import { pricingTiers, selectedClients } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore starting price ranges and engagement models for Capstone branding and website projects.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing | Capstone",
    description:
      "Explore starting price ranges and engagement models for Capstone branding and website projects.",
    url: `${siteConfig.url}/pricing`,
    images: [
      {
        url: `${siteConfig.url}/pricing/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Capstone Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Capstone",
    description:
      "Explore starting price ranges and engagement models for Capstone branding and website projects.",
    images: [`${siteConfig.url}/pricing/opengraph-image`],
  },
};

export default function PricingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Capstone Pricing",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.locations,
    description: metadata.description,
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Pricing
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
            Engagements structured around the level of change your business actually needs.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg md:leading-8">
            These ranges are designed to make early decisions easier. Some teams need a focused refresh. Others need a full brand, website, campaign, or mobile product system with more strategic and technical depth.
          </p>
        </div>

        <div className="rounded-[32px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Reading the ranges
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              ["Scope", "Single-sprint work behaves very differently from a broader multi-phase rollout."],
              ["Complexity", "Messaging, stakeholder count, product logic, and content readiness all change the effort."],
              ["Pace", "Compressed timelines and larger launches usually require more structure and support."],
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

      <section className="mt-14 grid gap-6 xl:grid-cols-2">
        {pricingTiers.map((tier) => (
          <section
            key={tier.name}
            className="rounded-[32px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  Engagement track
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)] md:text-3xl">{tier.name}</h2>
                <p className="mt-4 text-3xl font-semibold text-[color:var(--color-accent)]">{tier.price}</p>
              </div>
              <span className="rounded-full border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.24)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                Starting range
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-[color:var(--color-text-muted)] md:text-base">{tier.details}</p>
            {"items" in tier && Array.isArray(tier.items) ? (
              <div className="mt-6 grid gap-3">
                {tier.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.22)] px-4 py-3 text-sm leading-6 text-[color:var(--color-text-muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[32px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            What every engagement includes
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Clear project scope before work begins",
              "Milestone reviews and approval points",
              "Responsive and mobile QA before launch",
              "Direct next-step recommendation if scope needs to shift",
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

        <section className="rounded-[32px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Trusted by growing teams
          </p>
          <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
            Teams usually come to Capstone when the business has matured but the
            brand, website, or digital sales story has not caught up yet.
          </p>
          <div className="mt-6 grid gap-3">
            {selectedClients.slice(0, 3).map((client) => (
              <div
                key={client.name}
                className="rounded-[20px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.2)] p-4"
              >
                <p className="text-sm font-semibold text-[color:var(--color-text)]">
                  {client.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                  {client.category}
                </p>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {client.note}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <section className="rounded-[32px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            How pricing works
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[color:var(--color-text)]">
            Scope, speed, and complexity all matter.
          </h2>
          <div className="mt-6 grid gap-4 text-base leading-7 text-[color:var(--color-text-muted)]">
            <p>
              A smaller brand or website refresh is naturally lighter than a
              full repositioning, multi-page website, campaign rollout, or app
              build. That is why we use ranges instead of fixed package pricing.
            </p>
            <p>
              If your business needs identity, website, campaign creative, and
              mobile product thinking working together, the right fit is usually
              a more complete package rather than separate disconnected projects.
            </p>
            <p>
              For larger businesses, enterprise engagements often include
              multiple phases, wider stakeholder involvement, deeper product
              scope, and higher technical demands.
            </p>
          </div>
        </section>

        <section className="rounded-[32px] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(198,165,107,0.12),rgba(33,31,26,0.94))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Next step
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[color:var(--color-text)]">
            Not sure where your project fits?
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
            A short discovery call is usually the fastest way to identify the
            right scope, the right starting point, and whether a focused sprint
            or a larger engagement makes more sense.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book-a-call"
              className="button-primary text-center"
            >
              Book a Call
            </Link>
            <Link
              href="/contact"
              className="button-secondary text-center"
            >
              Start a Project Brief
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
