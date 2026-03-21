import type { Metadata } from "next";
import Link from "next/link";
import { enterpriseCapabilities, trustMetrics } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enterprise Solutions",
  description:
    "See how Capstone supports larger teams with structured delivery, digital ecosystem thinking, and enterprise-grade execution.",
};

export default function EnterpriseSolutionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-24 md:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Enterprise Solutions
          </p>
          <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
            Structured delivery for businesses with bigger scope, more stakeholders, and higher expectations.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--color-text-muted)]">
            Capstone supports larger digital engagements with a more disciplined
            operating model: clearer governance, phased rollout thinking,
            stronger documentation, and delivery that can stand up to internal
            scrutiny.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
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

      <div className="mt-16 rounded-[32px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          Next step
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[color:var(--color-text)]">
          Need a proposal for a broader digital engagement?
        </h2>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/proposal-request" className="button-primary">
            Request a Proposal
          </Link>
          <Link href="/book-a-call" className="button-secondary">
            Book a Call
          </Link>
        </div>
      </div>
    </main>
  );
}
