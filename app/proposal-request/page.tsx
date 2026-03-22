import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import { proposalFlow, proposalTracks, trustMetrics } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proposal Request",
  description:
    "Request a proposal for brand, website, campaign, or enterprise product work with Capstone.",
  alternates: {
    canonical: "/proposal-request",
  },
  openGraph: {
    title: "Proposal Request | Capstone",
    description:
      "Request a proposal for brand, website, campaign, or enterprise product work with Capstone.",
    url: `${siteConfig.url}/proposal-request`,
    images: [
      {
        url: `${siteConfig.url}/proposal-request/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Capstone Proposal Request",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proposal Request | Capstone",
    description:
      "Request a proposal for brand, website, campaign, or enterprise product work with Capstone.",
    images: [`${siteConfig.url}/proposal-request/opengraph-image`],
  },
};

export default function ProposalRequestPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Capstone Proposal Request",
    url: `${siteConfig.url}/proposal-request`,
    description: metadata.description,
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Proposal Request
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
            Start with the right proposal track.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg md:leading-8">
            If you already know the kind of support you need, this is the best
            place to send scope context and request a tailored proposal.
          </p>

          <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3">
            {trustMetrics.slice(0, 3).map((metric) => (
              <div
                key={metric.label}
                className="rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-4"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[color:var(--color-accent)]">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4">
            {proposalTracks.map((track) => (
              <div
                key={track.name}
                className="rounded-[26px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-5 md:p-6"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <h2 className="text-xl font-semibold text-[color:var(--color-text)]">
                    {track.name}
                  </h2>
                  <span className="rounded-full border border-[color:var(--color-line)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                    {track.startingFrom}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {track.description}
                </p>
                <p className="mt-4 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {track.fit}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {track.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              How proposal requests work
            </p>
            <div className="mt-6 grid gap-4">
              {proposalFlow.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.16)] p-4"
                >
                  <p className="text-sm text-[color:var(--color-accent)]">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-[color:var(--color-text)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Request your proposal
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[color:var(--color-text)]">
            Give us the right context and we&apos;ll respond with the clearest next step.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-muted)] md:text-base">
            Strong proposal requests usually include the business context, the problem that needs solving, timing, and any important stakeholders or technical constraints.
          </p>
          <div className="mt-6 rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Best submissions usually include
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Business context", "Goals", "Timing", "Budget range", "Stakeholders"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <InquiryForm
            source="proposal-request"
            thankYouType="proposal"
            submitLabel="Request Proposal"
            defaultValues={{ projectType: "Proposal request" }}
            successTitle="Thanks. Your proposal request is in."
            successMessage="We’ll review the scope, assess fit, and come back with the clearest proposal path or next-step recommendation."
          />
        </div>
      </div>
    </main>
  );
}
