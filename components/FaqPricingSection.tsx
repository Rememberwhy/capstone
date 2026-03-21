import Link from "next/link";
import { faqs, pricingTiers, processSteps } from "@/lib/content";

export default function FaqPricingSection() {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-white/50">
              Pricing + Process
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Clear pricing ranges and a clear process make decisions easier.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
              We keep the early picture simple: where projects usually start,
              how the work tends to flow, and what to expect after the first
              conversation.
            </p>
            <div className="mt-8 grid gap-4">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {tier.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/62">
                        {tier.details}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-white/72">{tier.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                Typical project flow
              </p>
              <div className="mt-4 grid gap-4">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="grid gap-2 md:grid-cols-[80px_1fr]">
                    <p className="text-sm text-white/38">0{index + 1}</p>
                    <div>
                      <h4 className="text-base font-semibold text-white">{step.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-white/58">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/pricing"
                className="mt-5 inline-flex rounded-full border border-white/12 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
              >
                View Pricing Details
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-white/50">FAQ</p>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-white/62">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
