import Link from "next/link";
import { faqs, pricingTiers, processSteps } from "@/lib/content";

export default function FaqPricingSection() {
  return (
    <section className="border-t border-[color:var(--color-line)] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Pricing + Process
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] md:text-5xl">
              Clear pricing ranges and a clear process make decisions easier.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)]">
              We keep the early picture simple: where projects usually start,
              how the work tends to flow, and what to expect after the first
              conversation.
            </p>
            <div className="mt-8 grid gap-4">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-[28px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.16)] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[color:var(--color-text)]">
                        {tier.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
                        {tier.details}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-[color:var(--color-accent)]">{tier.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Typical project flow
              </p>
              <div className="mt-4 grid gap-4">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="grid gap-2 md:grid-cols-[80px_1fr]">
                    <p className="text-sm text-[color:var(--color-accent)]">0{index + 1}</p>
                    <div>
                      <h4 className="text-base font-semibold text-[color:var(--color-text)]">{step.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-[color:var(--color-text-muted)]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/pricing"
                className="button-secondary mt-5"
              >
                View Pricing Details
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">FAQ</p>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.16)] p-5"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold text-[color:var(--color-text)]">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
