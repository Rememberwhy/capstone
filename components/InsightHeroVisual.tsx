import { getInsightTheme } from "@/lib/insight-theme";

type InsightHeroVisualProps = {
  article: {
    category: string;
    readTime: string;
    published: string;
    keywords: string[];
    framework: {
      title: string;
      steps: {
        title: string;
      }[];
    };
  };
  compact?: boolean;
};

export default function InsightHeroVisual({
  article,
  compact = false,
}: InsightHeroVisualProps) {
  const theme = getInsightTheme(article.category);
  const steps = compact ? article.framework.steps.slice(0, 2) : article.framework.steps;

  return (
    <div
      className={`relative overflow-hidden rounded-[30px] border border-[color:var(--color-line)] ${
        compact ? "p-5" : "p-6 md:p-7"
      }`}
      style={{
        background: `linear-gradient(145deg, ${theme.primary}30 0%, ${theme.secondary}18 44%, rgba(11,11,10,0.18) 100%)`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 18% 18%, ${theme.highlight}28, transparent 34%), radial-gradient(circle at 82% 20%, ${theme.secondary}24, transparent 26%)`,
        }}
      />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.2)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
            {article.category}
          </span>
          <span className="rounded-full border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.14)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
            {article.readTime}
          </span>
          <span className="rounded-full border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.14)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
            {article.published}
          </span>
        </div>

        <div className={`mt-5 grid gap-4 ${compact ? "" : "md:grid-cols-[1.1fr_0.9fr]"}`}>
          <div className="rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.2)] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              Framework snapshot
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[color:var(--color-text)]">
              {article.framework.title}
            </h3>
            <div className="mt-5 grid gap-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[18px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[color:var(--color-text)]">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                Topic signals
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {article.keywords.slice(0, compact ? 3 : 4).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="min-h-[140px] rounded-[24px] border border-[color:var(--color-line)]"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}55, ${theme.secondary}1f 58%, rgba(243,240,232,0.06))`,
              }}
            >
              <div className="grid h-full gap-3 p-5">
                <div className="h-2.5 w-2/5 rounded-full bg-[rgba(243,240,232,0.26)]" />
                <div className="h-2.5 w-4/5 rounded-full bg-[rgba(243,240,232,0.16)]" />
                <div className="h-2.5 w-3/5 rounded-full bg-[rgba(198,165,107,0.24)]" />
                <div className="mt-auto grid grid-cols-3 gap-2">
                  <div className="h-16 rounded-[16px] bg-[rgba(11,11,10,0.14)]" />
                  <div className="h-16 rounded-[16px] bg-[rgba(11,11,10,0.18)]" />
                  <div className="h-16 rounded-[16px] bg-[rgba(11,11,10,0.22)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
