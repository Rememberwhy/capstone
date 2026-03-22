type InsightDiagramProps = {
  framework: {
    title: string;
    intro: string;
    steps: {
      title: string;
      detail: string;
    }[];
  };
};

export default function InsightDiagram({ framework }: InsightDiagramProps) {
  return (
    <section className="rounded-[30px] border border-[color:var(--color-line)] bg-[linear-gradient(135deg,rgba(198,165,107,0.12),rgba(33,31,26,0.96))] p-6 md:p-7">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          Diagram
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-text)] md:text-3xl">
          {framework.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
          {framework.intro}
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {framework.steps.map((step, index) => (
          <div
            key={step.title}
            className="relative rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.2)] p-5"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                0{index + 1}
              </span>
              <p className="text-base font-semibold text-[color:var(--color-text)]">
                {step.title}
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-[color:var(--color-text-muted)]">
              {step.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
