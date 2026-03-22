import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn how Capstone uses cookies and similar technologies for site operation, analytics, and marketing attribution.",
  alternates: {
    canonical: "/cookies",
  },
};

const cookieTypes = [
  {
    title: "Essential cookies and storage",
    body: "These help the site function correctly, keep navigation and form flow stable, and preserve useful context such as booking details carried between pages.",
  },
  {
    title: "Analytics and session analysis",
    body: "If you consent, we use analytics and behavioral tools to understand which pages perform well, where users click, where forms lose momentum, and how mobile or desktop experiences can improve.",
  },
  {
    title: "Marketing attribution",
    body: "If you consent, we may use marketing pixels to understand which visits, campaigns, and touchpoints lead to inquiries, proposal requests, and other conversion events.",
  },
];

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-20 md:px-6 md:py-24">
      <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
        Cookie Policy
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
        How cookies and similar technologies are used.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg md:leading-8">
        Last updated March 22, 2026. This page explains the types of cookies
        and local storage used across the site and how consent affects
        analytics and marketing tools.
      </p>

      <div className="mt-12 grid gap-5">
        {cookieTypes.map((item) => (
          <section
            key={item.title}
            className="rounded-[28px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 md:p-7"
          >
            <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">
              {item.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
              {item.body}
            </p>
          </section>
        ))}
      </div>

      <section className="mt-12 rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          Your choices
        </p>
        <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
          When the banner appears, you can accept analytics and marketing
          measurement or continue with essential-only storage. If you change
          your mind later, clearing site storage in your browser and revisiting
          the site will prompt the banner again.
        </p>
      </section>
    </main>
  );
}
