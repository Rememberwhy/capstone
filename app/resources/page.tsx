import type { Metadata } from "next";
import Link from "next/link";
import ConversionPanel from "@/components/ConversionPanel";
import { resourceDownloads } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore downloadable resources from Capstone including audit checklists, positioning worksheets, and launch planning notes.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Resources | Capstone",
    description:
      "Explore downloadable resources from Capstone including audit checklists, positioning worksheets, and launch planning notes.",
    url: `${siteConfig.url}/resources`,
  },
};

export default function ResourcesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Capstone Resources",
    url: `${siteConfig.url}/resources`,
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Resources
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
            Downloadable tools for teams working through brand and digital decisions.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg md:leading-8">
            These resources are designed to be useful enough to create trust
            before the call. They help teams clarify what is wrong, what matters
            most, and where to start.
          </p>
        </div>

        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Lead magnet
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[color:var(--color-text)]">
            Want a tailored version instead?
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
            If you want a direct review instead of a self-serve resource, request
            an audit or book a short strategy conversation.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/audit-workshop" className="button-primary">
              Request Audit
            </Link>
            <Link href="/book-a-call" className="button-secondary">
              Book a Call
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {resourceDownloads.map((resource) => (
          <article
            key={resource.title}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-5 md:p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                {resource.format}
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
                {resource.detail}
              </p>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-[color:var(--color-text)]">
              {resource.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-muted)]">
              {resource.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
                {resource.pages}
              </span>
              <span className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
                {resource.audience}
              </span>
            </div>
            <div className="mt-5 rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                Includes
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {resource.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--color-line)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={resource.href}
                download
                className="button-primary"
              >
                Download Resource
              </a>
              <Link href="/audit-workshop" className="button-secondary">
                Request a Tailored Version
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <ConversionPanel
          eyebrow="Prefer direct guidance?"
          title="Turn the resource into a real recommendation for your business."
          description="Use the downloads for internal clarity, then let us review your situation directly and point you toward the strongest next step."
          primaryLabel="Book a Call"
          secondaryLabel="Contact Us"
          bullets={[
            "Get outside perspective on what matters first.",
            "Avoid using the wrong service or package as the starting point.",
            "Move from self-serve notes into a tailored proposal or workshop path.",
          ]}
        />
      </div>
    </main>
  );
}
