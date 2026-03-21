import type { Metadata } from "next";
import { insights } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Read Capstone insights on branding, websites, digital positioning, and growth strategy.",
};

export default function InsightsPage() {
  const [featured, ...articles] = insights;

  return (
    <main className="mx-auto max-w-6xl px-5 py-24 md:px-6">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-white/50">
          Insights
        </p>
        <h1 className="mt-4 text-5xl font-semibold md:text-6xl">
          Writing on brand clarity, websites, products, and digital growth.
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/66">
          These pieces are built around the kinds of questions businesses ask
          before they commit: what actually needs fixing, where growth friction
          starts, and which investment will make the biggest difference first.
        </p>
      </div>

      <section className="mt-14 rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 md:p-9">
        <p className="text-sm uppercase tracking-[0.18em] text-white/45">
          Featured insight
        </p>
        <p className="mt-5 text-sm uppercase tracking-[0.18em] text-white/50">
          {featured.category}
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold text-white md:text-5xl">
          {featured.title}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
          {featured.excerpt}
        </p>
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/58">
          {featured.summary}
        </p>
      </section>

      <div className="mt-14 grid gap-6">
        {articles.map((article) => (
          <article
            key={article.title}
            className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
              {article.category}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              {article.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/66">
              {article.excerpt}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/54">
              {article.summary}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-14 rounded-[30px] border border-white/10 bg-white/[0.03] p-7">
        <p className="text-sm uppercase tracking-[0.18em] text-white/45">
          Why these articles matter
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white">
          Better decisions usually start with better diagnosis.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/66">
          Most businesses do not need every service at once. They need the right
          move at the right time. The goal of this section is to make that
          decision easier by explaining where clarity, design, development,
          campaigns, and product thinking actually create value.
        </p>
      </section>
    </main>
  );
}
