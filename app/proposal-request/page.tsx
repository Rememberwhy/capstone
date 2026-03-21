import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import { proposalTracks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Proposal Request",
  description:
    "Request a proposal for brand, website, campaign, or enterprise product work with Capstone.",
};

export default function ProposalRequestPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-24 md:px-6">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Proposal Request
          </p>
          <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
            Start with the right proposal track.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-text-muted)]">
            If you already know the kind of support you need, this is the best
            place to send scope context and request a tailored proposal.
          </p>

          <div className="mt-10 grid gap-4">
            {proposalTracks.map((track) => (
              <div
                key={track.name}
                className="rounded-[24px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
              >
                <h2 className="text-xl font-semibold text-[color:var(--color-text)]">
                  {track.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-7">
          <InquiryForm
            source="proposal-request"
            submitLabel="Request Proposal"
            defaultValues={{ projectType: "Proposal request" }}
          />
        </div>
      </div>
    </main>
  );
}
