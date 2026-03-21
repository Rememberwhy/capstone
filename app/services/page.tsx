import Link from "next/link";
import { serviceHighlights, services, trustMetrics } from "@/lib/content";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-24 md:px-6">
      <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        Services
      </p>
      <h1 className="mt-4 text-5xl font-semibold">
        Services built around clarity, trust, and growth
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--color-text-muted)]">
        Capstone helps businesses sharpen how they are positioned, how they are
        presented, and how their digital presence performs. Some clients need a
        focused sprint. Others need a more complete brand and website system.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {trustMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[24px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              {metric.label}
            </p>
            <p className="mt-3 text-3xl font-semibold text-[color:var(--color-accent)]">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
          >
            <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">
              {service.title}
            </h2>
            <p className="mt-3 text-[color:var(--color-text-muted)]">{service.description}</p>
            <p className="mt-4 text-sm leading-6 text-[color:var(--color-accent)]/80">
              {service.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {serviceHighlights.map((block) => (
          <section
            key={block.heading}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              {block.heading}
            </p>
            <div className="mt-6 grid gap-3">
              {block.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[color:var(--color-line)] px-4 py-3 text-sm text-[color:var(--color-text-muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7">
        <h2 className="text-3xl font-semibold text-[color:var(--color-text)]">
          Need a larger multi-phase scope?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)]">
          For broader rollouts involving web, campaigns, mobile product, or a
          more structured stakeholder process, the enterprise routes are the
          better place to start.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/enterprise-solutions" className="button-primary">
            Enterprise Solutions
          </Link>
          <Link href="/proposal-request" className="button-secondary">
            Request a Proposal
          </Link>
        </div>
      </div>
    </main>
  );
}
