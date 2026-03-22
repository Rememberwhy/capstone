import type { Metadata } from "next";
import Link from "next/link";
import { enterpriseCapabilities, trustMetrics } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enterprise Solutions",
  description:
    "See how Capstone supports larger teams with structured delivery, digital ecosystem thinking, and enterprise-grade execution.",
  alternates: {
    canonical: "/enterprise-solutions",
  },
  openGraph: {
    title: "Enterprise Solutions | Capstone",
    description:
      "See how Capstone supports larger teams with structured delivery, digital ecosystem thinking, and enterprise-grade execution.",
    url: `${siteConfig.url}/enterprise-solutions`,
  },
};

const enterpriseReasons = [
  {
    title: "One partner across strategy, design, and delivery",
    text: "Enterprise work weakens when positioning, experience design, and implementation are treated as disconnected streams. Capstone keeps those decisions closer together so the business story stays intact through launch.",
  },
  {
    title: "A process that can stand up internally",
    text: "Larger teams need ownership clarity, review rhythm, milestone visibility, and communication that works across founders, leadership, marketing, product, and technical stakeholders.",
  },
  {
    title: "Premium work without vague execution",
    text: "The goal is to combine strong visual and strategic judgment with rollout discipline, so the outcome feels credible to leadership teams as well as end users.",
  },
  {
    title: "A model that scales beyond one release",
    text: "From phased website programs to mobile product scope and launch support, the delivery model is designed for broader digital ecosystems rather than single isolated outputs.",
  },
];

const enterpriseModel = [
  {
    step: "01",
    title: "Assessment",
    text: "We review business context, current systems, stakeholder structure, and what the next phase actually needs to accomplish.",
  },
  {
    step: "02",
    title: "Alignment",
    text: "We define roadmap, governance, and review language so the engagement can move without ambiguity between teams.",
  },
  {
    step: "03",
    title: "Execution",
    text: "Strategy, design, technical implementation, and launch coordination run in a clearer operating rhythm with checkpoints and ownership.",
  },
  {
    step: "04",
    title: "Rollout",
    text: "We support launch readiness, handoff, and follow-on planning so the engagement creates momentum rather than a one-time release.",
  },
];

export default function EnterpriseSolutionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Enterprise Solutions
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
            Structured delivery for businesses with bigger scope, more stakeholders, and higher expectations.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg md:leading-8">
            Capstone supports larger digital engagements with a more disciplined operating model: clearer governance, phased rollout thinking, stronger documentation, and delivery that can stand up to internal scrutiny.
          </p>
        </div>

        <div className="rounded-[32px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Enterprise fit
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Multi-stakeholder teams",
              "Phased digital programs",
              "Website and product scope",
              "Campaign and rollout support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] px-4 py-4 text-sm text-[color:var(--color-text)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {trustMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              {metric.label}
            </p>
            <p className="mt-3 text-3xl font-semibold text-[color:var(--color-accent)]">
              {metric.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
              {metric.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {enterpriseReasons.map((item) => (
          <section
            key={item.title}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Why choose Capstone
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[color:var(--color-text)]">
              {item.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
              {item.text}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {enterpriseCapabilities.map((item) => (
          <section
            key={item.title}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Capability
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[color:var(--color-text)]">
              {item.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
              {item.description}
            </p>
            <div className="mt-6 rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.24)] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                Enterprise scope
              </p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--color-text)]">
                {item.scope}
              </p>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16 rounded-[32px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Delivery model
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[color:var(--color-text)]">
              Enterprise engagements need a clearer operating rhythm.
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
              The strongest enterprise work is not just visually strong. It is easier to review, easier to defend internally, and easier to launch with confidence because the process is structured from the start.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {enterpriseModel.map((item) => (
              <div
                key={item.step}
                className="rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-5"
              >
                <p className="text-sm text-[color:var(--color-accent)]">{item.step}</p>
                <h3 className="mt-3 text-xl font-semibold text-[color:var(--color-text)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[32px] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(198,165,107,0.12),rgba(33,31,26,0.94))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Enterprise next step
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[color:var(--color-text)]">
            Need a proposal for a broader digital engagement?
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
            If the scope involves multiple stakeholders, phased delivery, platform complexity, or a mix of web, product, and campaign work, start with a proposal request.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/proposal-request" className="button-primary">
              Request a Proposal
            </Link>
            <Link href="/book-a-call" className="button-secondary">
              Book a Call
            </Link>
          </div>
        </div>

        <div className="rounded-[32px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Continue exploring
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[color:var(--color-text)]">
            Read the strategic thinking behind the work.
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
            If your team is still evaluating where the real friction sits, the Insights section is the best place to understand how Capstone approaches positioning, redesign decisions, digital systems, and growth clarity.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/insights" className="button-secondary">
              Explore Insights
            </Link>
            <Link href="/security-tech-stack" className="button-secondary">
              Security / Tech Stack
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
