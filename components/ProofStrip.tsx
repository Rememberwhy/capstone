"use client";

import Link from "next/link";
import { industries, selectedClients, trustMetrics } from "@/lib/content";
import { trackConversionClick } from "@/lib/tracking-events";

export default function ProofStrip() {
  return (
    <section className="border-t border-[color:var(--color-line)] py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="flex flex-col gap-8 rounded-[32px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,0.9),rgba(33,31,26,0.84))] p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Selected proof
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-text)] md:text-4xl">
                Trusted by teams that need stronger positioning, better digital
                presence, and clearer growth support.
              </h2>
            </div>
            <Link
              href="/selected-clients"
              onClick={() =>
                trackConversionClick("selected_clients_clicked", {
                  location: "homepage-proof-strip",
                })
              }
              className="text-sm text-[color:var(--color-text-muted)] transition hover:text-[color:var(--color-accent)]"
            >
              View selected clients →
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {selectedClients.map((client) => (
              <span
                key={client.name}
                className="rounded-full border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.24)] px-4 py-2 text-sm text-[color:var(--color-text)]"
              >
                {client.name}
              </span>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-5"
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

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              Industries served
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[color:var(--color-text-muted)]"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-[color:var(--color-line)] pt-6 sm:flex-row">
            <Link
              href="/case-studies"
              onClick={() =>
                trackConversionClick(
                  "proof_strip_cta_clicked",
                  { action: "case-studies", location: "homepage-proof-strip" },
                  "ViewContent",
                )
              }
              className="button-primary"
            >
              View Case Studies
            </Link>
            <Link
              href="/book-a-call"
              onClick={() =>
                trackConversionClick(
                  "proof_strip_cta_clicked",
                  { action: "book-call", location: "homepage-proof-strip" },
                  "Contact",
                )
              }
              className="button-secondary"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
