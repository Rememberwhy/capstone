import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";
import FaqPricingSection from "@/components/FaqPricingSection";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a discovery call with Capstone and see how projects typically work before you commit.",
};

export default function BookACallPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Book a Call
          </p>
          <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
            Book a call or send your details directly.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-text-muted)]">
            If you are ready to talk, use the booking section below. If you
            prefer to share context first, there is a project inquiry form on
            this page too.
          </p>
        </div>
      </section>
      <BookingSection />
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Prefer to send details first?
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Share your project and we&apos;ll come back with the best next step.
          </h2>
          <p className="mt-5 text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg">
            This is useful if you are still comparing options, want to explain
            the scope first, or would rather let us recommend the right path
            before scheduling.
          </p>
        </div>
        <InquiryForm
          source="book-a-call-page"
          submitLabel="Send Project Details"
          defaultValues={{ projectType: "Discovery call" }}
        />
      </section>
      <FaqPricingSection />
    </main>
  );
}
