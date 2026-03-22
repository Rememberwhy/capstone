import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thanks for reaching out to Capstone. Here is what happens next.",
  robots: {
    index: false,
    follow: false,
  },
};

type SearchParamValue = string | string[] | undefined;

function readParam(value: SearchParamValue) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

const contentMap = {
  lead: {
    eyebrow: "Lead captured",
    title: "Thanks. Your starting point is in.",
    text: "We have the initial context and will use it to point you toward the strongest next step.",
  },
  contact: {
    eyebrow: "Project brief received",
    title: "Thanks. Your project details are in.",
    text: "We will review the brief, assess fit, and come back with the clearest path forward.",
  },
  proposal: {
    eyebrow: "Proposal request received",
    title: "Thanks. Your proposal request is in.",
    text: "We will review scope, complexity, and timing, then respond with the right proposal path or recommendation.",
  },
  booking: {
    eyebrow: "Call preparation received",
    title: "Thanks. We have your context before the call.",
    text: "We will use what you shared to make the booking conversation more focused and useful.",
  },
} as const;

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, SearchParamValue>>;
}) {
  const params = (await searchParams) ?? {};
  const type = readParam(params.type) as keyof typeof contentMap;
  const project = readParam(params.project);
  const content = contentMap[type] ?? contentMap.contact;

  return (
    <main className="mx-auto max-w-5xl px-5 py-20 md:px-6 md:py-24">
      <section className="rounded-[34px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-7 md:p-10">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          {content.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-[color:var(--color-text)] sm:text-5xl md:text-6xl">
          {content.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg md:leading-8">
          {content.text}
        </p>
        {project ? (
          <div className="mt-6 inline-flex rounded-full border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.22)] px-4 py-2 text-sm text-[color:var(--color-text)]">
            Project focus: {project}
          </div>
        ) : null}
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          "We review fit, urgency, and the best engagement path.",
          "If needed, we will suggest a call, proposal route, or more focused recommendation.",
          "You can keep exploring while we review the details you sent.",
        ].map((step, index) => (
          <article
            key={step}
            className="rounded-[26px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
              0{index + 1}
            </p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
              {step}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 md:p-7">
        <h2 className="text-3xl font-semibold text-[color:var(--color-text)]">
          Keep the momentum going
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)]">
          If you want to move faster, you can book a short call, review case
          studies, or read insights while we prepare the next response.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/book-a-call" className="button-primary">
            Book a Discovery Call
          </Link>
          <Link href="/case-studies" className="button-secondary">
            View Case Studies
          </Link>
          <Link href="/insights" className="button-secondary">
            Read Insights
          </Link>
        </div>
      </section>
    </main>
  );
}
