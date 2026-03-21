import type { Metadata } from "next";
import { selectedClients } from "@/lib/content";

export const metadata: Metadata = {
  title: "Selected Clients",
  description:
    "See the kinds of businesses Capstone has supported across brand, website, and growth work.",
};

export default function SelectedClientsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-24 md:px-6">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          Selected Clients
        </p>
        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          The strongest trust signal is the kind of company willing to work with you.
        </h1>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {selectedClients.map((client) => (
          <article
            key={client.name}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
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
          </article>
        ))}
      </div>
    </main>
  );
}
