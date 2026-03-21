"use client";

import { useSearchParams } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source") ?? "";

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        Contact
      </p>
      <h1 className="mt-4 text-5xl font-semibold">Start a project</h1>
      <p className="mt-6 text-[color:var(--color-text-muted)]">
        Tell us about your brand, website, or digital project.
      </p>

      {source ? (
        <div className="mt-8 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-4 text-sm text-[color:var(--color-text-muted)]">
          You came from the homepage CTA. A few details have already been
          carried over so the handoff feels smoother.
        </div>
      ) : null}

      <InquiryForm
        source={source || "contact-page"}
        defaultValues={{
          email: searchParams.get("email") ?? "",
          projectType: searchParams.get("project") ?? "",
        }}
      />
    </main>
  );
}
