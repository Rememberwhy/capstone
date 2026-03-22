import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";
import FaqPricingSection from "@/components/FaqPricingSection";
import InquiryForm from "@/components/InquiryForm";
import { bookingExpectations, selectedClients } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a discovery call with Capstone and see how projects typically work before you commit.",
  alternates: {
    canonical: "/book-a-call",
  },
  openGraph: {
    title: "Book a Call | Capstone",
    description:
      "Book a discovery call with Capstone and see how projects typically work before you commit.",
    url: `${siteConfig.url}/book-a-call`,
    images: [
      {
        url: `${siteConfig.url}/book-a-call/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Book a Call with Capstone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Call | Capstone",
    description:
      "Book a discovery call with Capstone and see how projects typically work before you commit.",
    images: [`${siteConfig.url}/book-a-call/opengraph-image`],
  },
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
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              What happens next
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] md:text-5xl">
              The call is designed to create clarity, not just fill a calendar.
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg">
              We use the booking call to understand the business context, identify the strongest next step, and avoid wasting time on the wrong type of engagement.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {selectedClients.slice(0, 4).map((client) => (
                <span
                  key={client.name}
                  className="rounded-full border border-[color:var(--color-line)] px-4 py-2 text-sm text-[color:var(--color-text)]"
                >
                  {client.name}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {bookingExpectations.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
              >
                <p className="text-sm text-[color:var(--color-accent)]">0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-muted)] md:text-base">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
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
          thankYouType="booking"
          submitLabel="Send Project Details"
          defaultValues={{ projectType: "Discovery call" }}
          successTitle="Thanks. Your details are in before the call."
          successMessage="We’ll use this context to make the conversation more useful and point you toward the strongest next step after it."
        />
      </section>
      <FaqPricingSection />
    </main>
  );
}
