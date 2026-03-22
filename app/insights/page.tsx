import type { Metadata } from "next";
import Link from "next/link";
import ConversionPanel from "@/components/ConversionPanel";
import InsightHeroVisual from "@/components/InsightHeroVisual";
import { insights } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Read Capstone insights on branding, websites, digital positioning, and growth strategy.",
  keywords: [
    "brand strategy insights",
    "website redesign advice",
    "premium web design insights",
    "digital growth articles",
    "mobile app strategy",
    "campaign landing page strategy",
  ],
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights | Capstone",
    description:
      "Read Capstone insights on branding, websites, digital positioning, and growth strategy.",
    url: `${siteConfig.url}/insights`,
    images: [
      {
        url: `${siteConfig.url}/insights/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Capstone Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Capstone",
    description:
      "Read Capstone insights on branding, websites, digital positioning, and growth strategy.",
    images: [`${siteConfig.url}/insights/opengraph-image`],
  },
};

export default function InsightsPage() {
  const [featured, ...articles] = insights;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Capstone Insights",
    url: `${siteConfig.url}/insights`,
    hasPart: insights.map((article, index) => ({
      "@type": "Article",
      position: index + 1,
      headline: article.title,
      url: `${siteConfig.url}/insights/${article.slug}`,
      keywords: article.keywords.join(", "),
      articleSection: article.category,
    })),
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Insights
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
            Writing on brand clarity, websites, products, and digital growth.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg md:leading-8">
            These pieces are built around the kinds of questions businesses ask before they commit: what actually needs fixing, where growth friction starts, and which investment will make the biggest difference first.
          </p>
        </div>

        <ConversionPanel
          eyebrow="Use this section for"
          title="Diagnose the problem, then move straight to the right conversation."
          description="These articles are here to help teams understand where the real friction lives so the next call starts with stronger context and better questions."
          primaryLabel="Book a Discovery Call"
          secondaryLabel="Contact Us"
          bullets={[
            "Work out whether the issue is branding, redesign, product, or campaigns.",
            "Prepare for proposal and audit conversations with better context.",
            "Move from reading into an actual next step when the fit feels right.",
          ]}
        />
      </div>

      <section className="mt-14 grid gap-6 rounded-[34px] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(198,165,107,0.14),rgba(33,31,26,0.94))] p-7 md:p-9 lg:grid-cols-[1fr_0.88fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Featured insight
          </p>
          <p className="mt-5 text-sm uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
            {featured.category} • {featured.readTime}
          </p>
          <Link href={`/insights/${featured.slug}`} className="block">
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold text-[color:var(--color-text)] transition hover:text-[color:var(--color-accent)] md:text-5xl">
              {featured.title}
            </h2>
          </Link>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[color:var(--color-text-muted)]">
            {featured.excerpt}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[color:var(--color-text-muted)]">
            {featured.summary}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={`/insights/${featured.slug}`} className="button-primary">
              Read article
            </Link>
            <Link href="/book-a-call" className="button-secondary">
              Book a Call
            </Link>
          </div>
        </div>
        <InsightHeroVisual article={featured} compact />
      </section>

      <div className="mt-14 grid gap-6">
        {articles.map((article) => (
          <article
            key={article.title}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              {article.category} • {article.readTime}
            </p>
            <Link href={`/insights/${article.slug}`} className="block">
              <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-text)] transition hover:text-[color:var(--color-accent)]">
                {article.title}
              </h2>
            </Link>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[color:var(--color-text-muted)]">
              {article.excerpt}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--color-text-muted)]">
              {article.summary}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href={`/insights/${article.slug}`} className="button-secondary">
                Read article
              </Link>
              <Link href="/book-a-call" className="button-secondary">
                Talk to Capstone
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <ConversionPanel
          eyebrow="Why these articles matter"
          title="Use the content to build conviction, then use the call to build momentum."
          description="Most teams do not need more inspiration. They need a clearer recommendation, a better scoped next step, and confidence that the investment is pointed at the real issue."
          primaryLabel="Book a Call"
          secondaryLabel="Contact Us"
          bullets={[
            "Clarify whether you need branding, redesign, product, or campaign support.",
            "Get a recommendation before committing to the wrong package.",
            "Move from research into an actual proposal or workshop path.",
          ]}
        />
      </div>
    </main>
  );
}
