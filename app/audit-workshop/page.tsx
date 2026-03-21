import type { Metadata } from "next";
import Link from "next/link";
import InquiryForm from "@/components/InquiryForm";
import { workshopOffer } from "@/lib/content";

export const metadata: Metadata = {
  title: "Audit / Strategy Workshop",
  description:
    "Book a strategy workshop with Capstone for positioning, website, and conversion clarity before a larger engagement.",
};

export default function AuditWorkshopPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-24 md:px-6">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Audit / Strategy Workshop
          </p>
          <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
            A lower-friction way to start with clear outside perspective.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-text-muted)]">
            For teams that want strong strategic guidance before committing to a
            larger project, the workshop creates a concrete diagnosis and a
            practical roadmap.
          </p>

          <div className="mt-10 rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              Offer
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-text)]">
              {workshopOffer.title}
            </h2>
            <p className="mt-3 text-2xl font-semibold text-[color:var(--color-accent)]">
              {workshopOffer.price}
            </p>
            <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
              {workshopOffer.description}
            </p>
            <div className="mt-6 grid gap-3">
              {workshopOffer.includes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[color:var(--color-line)] px-4 py-3 text-sm text-[color:var(--color-text-muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
            <Link href="/book-a-call" className="button-secondary mt-6">
              Book a Call Instead
            </Link>
          </div>
        </div>

        <div className="rounded-[32px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-7">
          <InquiryForm
            source="audit-workshop"
            submitLabel="Request Workshop"
            defaultValues={{ projectType: "Strategy workshop" }}
          />
        </div>
      </div>
    </main>
  );
}
