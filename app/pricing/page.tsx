import type { Metadata } from "next";
import Link from "next/link";
import { pricingTiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore starting price ranges and engagement models for Capstone branding and website projects.",
};

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-24 md:px-6">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          Pricing
        </p>
        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          Engagements designed around the level of transformation you need.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[color:var(--color-text-muted)]">
          These ranges are here to make early decisions easier. Some clients
          need a focused refresh. Others need a full brand, website, campaign,
          or mobile product system. We shape scope around ambition, complexity,
          and what the business actually needs next.
        </p>
      </div>

      <div className="mt-14 grid gap-6 xl:grid-cols-2">
        {pricingTiers.map((tier) => (
          <section
            key={tier.name}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">{tier.name}</h2>
                <p className="mt-4 text-3xl font-semibold text-[color:var(--color-accent)]">{tier.price}</p>
              </div>
              <span className="rounded-full border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.24)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                Starting range
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-[color:var(--color-text-muted)]">{tier.details}</p>
            {"items" in tier && Array.isArray(tier.items) ? (
              <div className="mt-6 grid gap-3">
                {tier.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.24)] px-4 py-3 text-sm text-[color:var(--color-text-muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7">
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

        <section className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(198,165,107,0.12),rgba(33,31,26,0.94))] p-7">
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
      </div>
    </main>
  );
}
