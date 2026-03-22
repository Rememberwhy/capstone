type CaseStudy = {
  title: string;
  industry: string;
  metric: string;
  visual: {
    eyebrow: string;
    primary: string;
    secondary: string;
    surface: string;
    highlight: string;
    chips: string[];
  };
  kpis: {
    label: string;
    value: string;
  }[];
};

type CaseStudyVisualProps = {
  study: CaseStudy;
  compact?: boolean;
};

export default function CaseStudyVisual({
  study,
  compact = false,
}: CaseStudyVisualProps) {
  const outerHeight = compact ? "h-72" : "min-h-[320px]";
  const innerPadding = compact ? "p-5" : "p-6 md:p-7";
  const chromeInset = compact ? "inset-x-8 top-8" : "inset-x-8 top-8 md:inset-x-10 md:top-10";

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-[color:var(--color-line)] ${outerHeight}`}
      style={{
        background: `linear-gradient(145deg, ${study.visual.primary}33 0%, ${study.visual.secondary}1a 42%, rgba(11,11,10,0.18) 100%)`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 18% 20%, ${study.visual.highlight}22, transparent 30%), radial-gradient(circle at 85% 18%, ${study.visual.secondary}20, transparent 24%)`,
        }}
      />

      <div className={`absolute ${chromeInset} bottom-0 rounded-t-[24px] border border-[color:var(--color-line)]`} style={{ backgroundColor: `${study.visual.surface}ee` }}>
        <div className="flex items-center justify-between border-b border-[color:var(--color-line)] px-4 py-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              {study.visual.eyebrow}
            </p>
            <p className="mt-1 text-sm font-medium text-[color:var(--color-text)]">
              {study.industry}
            </p>
          </div>
          <div className="rounded-full border border-[color:var(--color-line)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
            {study.metric}
          </div>
        </div>

        <div className={innerPadding}>
          <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[20px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.16)] p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                Featured view
              </p>
              <div className="mt-4 space-y-3">
                <div
                  className="h-28 rounded-[18px]"
                  style={{
                    background: `linear-gradient(135deg, ${study.visual.primary}55, ${study.visual.secondary}20 62%, rgba(243,240,232,0.06))`,
                  }}
                />
                <div className="grid gap-2">
                  <div className="h-2.5 w-1/3 rounded-full bg-[rgba(243,240,232,0.16)]" />
                  <div className="h-2.5 w-4/5 rounded-full bg-[rgba(243,240,232,0.08)]" />
                  <div className="h-2.5 w-2/3 rounded-full bg-[rgba(198,165,107,0.16)]" />
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {study.kpis.slice(0, compact ? 2 : 3).map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-[18px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                    {kpi.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[color:var(--color-text)]">
                    {kpi.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {study.visual.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-5 top-5 rounded-full border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.28)] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
        {study.title}
      </div>
    </div>
  );
}
