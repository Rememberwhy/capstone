import type { Metadata } from "next";
import { selectedClients } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Selected Clients",
  description:
    "See the kinds of businesses Capstone has supported across brand, website, and growth work.",
  alternates: {
    canonical: "/selected-clients",
  },
  openGraph: {
    title: "Selected Clients | Capstone",
    description:
      "See the kinds of businesses Capstone has supported across brand, website, and growth work.",
    url: `${siteConfig.url}/selected-clients`,
  },
};

export default function SelectedClientsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Selected Clients
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
            The strongest trust signal is the kind of company willing to work with you.
          </h1>
        </div>

        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            What this page shows
          </p>
          <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
            These are examples of the kinds of businesses Capstone is built to support: brands that care about perception, clarity, trust, and the quality of the digital experience around the offer.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {selectedClients.map((client) => (
          <article
            key={client.name}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              {client.category}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[color:var(--color-text)]">
              {client.name}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-muted)]">
              {client.note}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
              {client.scope}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
