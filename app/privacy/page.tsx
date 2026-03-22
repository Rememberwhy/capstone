import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Capstone collects, uses, and protects personal information submitted through this website.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Information we collect",
    body: "We collect the information you choose to share with us, including names, email addresses, project details, proposal details, and any booking context you submit through forms on this website.",
  },
  {
    title: "How we use information",
    body: "We use submitted information to review project fit, respond to inquiries, prepare calls or proposals, improve the site experience, and understand which pages and calls to action lead to stronger inquiries.",
  },
  {
    title: "Analytics and marketing tools",
    body: "With your consent, we may use analytics, session analysis, and marketing attribution tools to understand which pages users visit, where they click, and where they drop off. These tools help us improve conversion flow, content clarity, and campaign performance.",
  },
  {
    title: "Sharing and storage",
    body: "We do not sell personal information. Information may be processed through service providers that support lead storage, hosting, analytics, scheduling, and communication. We only use providers that help operate or improve the business responsibly.",
  },
  {
    title: "Your choices",
    body: "You can choose essential-only cookies when prompted. You can also contact us to request access, correction, or deletion of personal information we have received through this site, subject to legal and operational requirements.",
  },
  {
    title: "Contact",
    body: `For privacy requests or questions, contact ${siteConfig.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-20 md:px-6 md:py-24">
      <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
        Privacy Policy
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
        How Capstone handles personal information.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg md:leading-8">
        Last updated March 22, 2026. This policy explains what information we
        collect through the site, how we use it, and what choices visitors have.
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
