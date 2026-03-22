import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ConversionPanel from "@/components/ConversionPanel";
import InsightDiagram from "@/components/InsightDiagram";
import InsightHeroVisual from "@/components/InsightHeroVisual";
import {
  caseStudies,
  getInsightBySlug,
  insights,
  services,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";

type InsightPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return insights.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.summary,
    keywords: article.keywords,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Capstone`,
      description: article.summary,
      url: `${siteConfig.url}/insights/${article.slug}`,
      type: "article",
      images: [
        {
          url: `${siteConfig.url}/insights/${article.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Capstone`,
      description: article.summary,
      images: [`${siteConfig.url}/insights/${article.slug}/opengraph-image`],
    },
  };
}

export default async function InsightArticlePage({
  params,
}: InsightPageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insights.filter((item) => item.slug !== article.slug).slice(0, 3);
  const connectedServices = services.filter((service) =>
    article.relatedServices.includes(service.slug),
  );
  const connectedCaseStudies = caseStudies.filter((study) =>
    article.relatedCaseStudies.includes(study.slug),
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.published,
    keywords: article.keywords.join(", "),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/insights/${article.slug}`,
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
        name: "Insights",
        item: `${siteConfig.url}/insights`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/insights/${article.slug}`,
      },
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.questions.map((question) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: article.takeaway,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="max-w-3xl">
          <Link
            href="/insights"
            className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)] transition hover:text-[color:var(--color-text)]"
          >
            Back to Insights
          </Link>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
            {article.category} • {article.readTime}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-text-muted)]">
            {article.excerpt}
          </p>
        </div>
        <InsightHeroVisual article={article} />
      </section>

      <section className="mt-12 rounded-[34px] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(198,165,107,0.14),rgba(33,31,26,0.94))] p-7 md:p-9">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          Overview
        </p>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--color-text-muted)]">
          {article.lead}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {article.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]"
            >
              {keyword}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <InsightDiagram framework={article.framework} />
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.34fr]">
        <article className="grid gap-8">
          {article.sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7"
            >
              <h2 className="text-2xl font-semibold text-[color:var(--color-text)] md:text-3xl">
                {section.heading}
              </h2>
              <p className="mt-4 text-base leading-8 text-[color:var(--color-text-muted)]">
                {section.body}
              </p>
            </section>
          ))}

          <section className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Key takeaway
            </p>
            <p className="mt-4 text-lg leading-8 text-[color:var(--color-text)]">
              {article.takeaway}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-a-call" className="button-primary">
                Book a Call
              </Link>
              <Link href="/resources" className="button-secondary">
                Explore Resources
              </Link>
            </div>
          </section>

          <ConversionPanel
            eyebrow="Need a clear recommendation?"
            title="Turn this diagnosis into an actual next step."
            description="If the issues in this article feel familiar, the fastest way forward is a short call or a concise project brief. We can tell you whether this is a messaging, redesign, product, or campaign problem before you commit to the wrong scope."
            primaryLabel="Book a Discovery Call"
            secondaryLabel="Send Project Details"
            secondaryHref="/contact"
            bullets={[
              "Get a clear recommendation on the right service path.",
              "Avoid over-scoping when the real issue is narrower.",
              "Leave with a practical next step, not just general advice.",
            ]}
          />

          <section className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Questions this article answers
            </p>
            <div className="mt-5 grid gap-3">
              {article.questions.map((question) => (
                <div
                  key={question}
                  className="rounded-[20px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.16)] px-4 py-4 text-sm leading-6 text-[color:var(--color-text-muted)]"
                >
                  {question}
                </div>
              ))}
            </div>
          </section>

          {connectedServices.length ? (
            <section className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Connected services
              </p>
              <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
                If this topic reflects the friction your business is feeling, these are usually
                the service routes to explore next.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {connectedServices.map((service) => (
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
          ) : null}

          {connectedCaseStudies.length ? (
            <section className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Relevant case studies
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {connectedCaseStudies.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/case-studies/${study.slug}`}
                    className="rounded-[20px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.16)] p-5 transition hover:border-[color:var(--color-accent)]"
                  >
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                      {study.category}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[color:var(--color-text)]">
                      {study.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                      {study.result}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>

        <aside className="grid gap-5 self-start lg:sticky lg:top-28">
          <ConversionPanel
            eyebrow="Next step"
            title="Need this solved for your business?"
            description="Use the article to diagnose the problem, then let us recommend the most useful next move for your situation."
            primaryLabel="Book a Call"
            secondaryLabel="Contact Us"
            compact
          />

          <div className="rounded-[26px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Article details
            </p>
            <div className="mt-4 space-y-3 text-sm text-[color:var(--color-text-muted)]">
              <p>{article.category}</p>
              <p>{article.readTime}</p>
              <p>{article.published}</p>
            </div>
          </div>

          <div className="rounded-[26px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Related reads
            </p>
            <div className="mt-4 grid gap-4">
              {relatedArticles.map((item) => (
                <Link
                  key={item.slug}
                  href={`/insights/${item.slug}`}
                  className="rounded-[18px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.16)] p-4 transition hover:border-[color:var(--color-accent)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                    {item.category}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[color:var(--color-text)]">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
