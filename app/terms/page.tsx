import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Review the terms governing use of the Capstone website and inquiries submitted through it.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    title: "Website use",
    body: "This website is provided for information, lead capture, and business development purposes. By using it, you agree not to misuse the site, interfere with its operation, or submit unlawful, harmful, or misleading information.",
  },
  {
    title: "Project discussions",
    body: "Submitting a form, proposal request, or booking a call does not create a client relationship by itself. Work only begins after both sides agree on scope, timing, and commercial terms.",
  },
  {
    title: "Content and intellectual property",
    body: "Unless otherwise noted, site copy, design, layout, and original materials on this website are owned by Capstone and may not be reproduced or reused without written permission.",
  },
  {
    title: "Accuracy and availability",
    body: "We aim to keep the site accurate and up to date, but we do not guarantee that all content is complete, current, or uninterrupted at all times. Pricing ranges and service descriptions are indicative rather than binding offers.",
  },
  {
    title: "Third-party services",
    body: "The website may link to or rely on external services such as scheduling, analytics, communications, or storage providers. Their separate terms and policies may also apply.",
  },
  {
    title: "Contact",
    body: `Questions about these terms can be sent to ${siteConfig.email}.`,
  },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-20 md:px-6 md:py-24">
      <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
        Terms of Use
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
        Terms that govern use of this website.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg md:leading-8">
        Last updated March 22, 2026. These terms explain the basic rules around
        using the site, submitting information, and engaging with Capstone.
      </p>

      <div className="mt-12 grid gap-5">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-[28px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7"
          >
            <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">
              {section.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
