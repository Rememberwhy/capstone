import type { Metadata } from "next";
import Link from "next/link";
import { resourceDownloads } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore downloadable resources from Capstone including audit checklists, positioning worksheets, and launch planning notes.",
};

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-24 md:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Resources
          </p>
          <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
            Downloadable tools for teams working through brand and digital decisions.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-text-muted)]">
            These resources are designed to be useful enough to create trust
            before the call. They help teams clarify what is wrong, what matters
            most, and where to start.
          </p>
        </div>

        <div className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-7">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Lead magnet
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[color:var(--color-text)]">
            Want a tailored version instead?
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
            If you want a direct review instead of a self-serve resource, request
            an audit or book a short strategy conversation.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/audit-workshop" className="button-primary">
              Request Audit
            </Link>
            <Link href="/book-a-call" className="button-secondary">
              Book a Call
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {resourceDownloads.map((resource) => (
          <article
            key={resource.title}
            className="rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                {resource.format}
              </p>
              <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
                {resource.detail}
              </p>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-[color:var(--color-text)]">
              {resource.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-muted)]">
              {resource.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={resource.href}
                download
                className="button-primary"
              >
                Download Resource
              </a>
              <Link href="/audit-workshop" className="button-secondary">
                Request a Tailored Version
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
