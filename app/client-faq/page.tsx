import type { Metadata } from "next";
import { clientFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Client FAQ",
  description:
    "Read practical answers to common questions about working with Capstone across scope, process, and delivery.",
};

export default function ClientFaqPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-6">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          Client FAQ
        </p>
        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          Practical answers for teams evaluating fit.
        </h1>
      </div>

      <div className="mt-14 space-y-4">
        {clientFaqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-[24px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-[color:var(--color-text)]">
              {faq.question}
            </summary>
            <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-muted)]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </main>
  );
}
