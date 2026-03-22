import Link from "next/link";

type InsightLink = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
};

type RelatedInsightsProps = {
  title?: string;
  description?: string;
  articles: InsightLink[];
  compact?: boolean;
};

export default function RelatedInsights({
  title = "Related insights",
  description,
  articles,
  compact = false,
}: RelatedInsightsProps) {
  if (!articles.length) {
    return null;
  }

  return (
    <section className="rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
        {title}
      </p>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[color:var(--color-text-muted)]">
          {description}
        </p>
      ) : null}
      <div className={`mt-4 grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="rounded-[18px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.2)] p-4 transition hover:border-[color:var(--color-accent)]"
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
              {article.category} • {article.readTime}
            </p>
            <p className="mt-2 text-sm font-semibold text-[color:var(--color-text)]">
              {article.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
              {article.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
