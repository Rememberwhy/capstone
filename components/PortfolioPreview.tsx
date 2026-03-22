"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import CaseStudyVisual from "@/components/CaseStudyVisual";
import { caseStudies, getInsightsBySlugs } from "@/lib/content";
import { trackConversionClick } from "@/lib/tracking-events";

export default function PortfolioPreview() {
  const [activeProject, setActiveProject] = useState<(typeof caseStudies)[number] | null>(
    null,
  );

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <section className="border-t border-[color:var(--color-line)] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Portfolio
            </p>
            <h2 className="mt-4 text-4xl font-semibold">Case-study led work</h2>
          </div>

          <Link
            href="/case-studies"
            className="text-[color:var(--color-text-muted)] transition hover:text-[color:var(--color-accent)]"
          >
            View case studies →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {caseStudies.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="group overflow-hidden rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] transition hover:border-[color:var(--color-accent)]"
            >
              <div className="p-4">
                <CaseStudyVisual study={project} compact />
              </div>
              <div className="p-6">
                <p className="text-sm text-[color:var(--color-accent)]">{project.category}</p>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {project.result}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.scope.slice(0, 2).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--color-line)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-sm text-[color:var(--color-text-muted)]">
                    {project.timeline}
                  </span>
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/case-studies/${project.slug}`}
                      onClick={() =>
                        trackConversionClick(
                          "case_study_clicked",
                          { study: project.slug, location: "homepage-portfolio" },
                          "ViewContent",
                        )
                      }
                      className="text-sm text-[color:var(--color-accent)] transition hover:text-[color:var(--color-text)]"
                    >
                      View study
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        trackConversionClick("case_study_preview_opened", {
                          study: project.slug,
                          location: "homepage-portfolio",
                        });
                        setActiveProject(project);
                      }}
                      className="inline-flex items-center gap-2 text-sm text-[color:var(--color-accent)] transition group-hover:text-[color:var(--color-text)]"
                    >
                      <span>Quick Preview</span>
                      <motion.span
                        className="inline-block"
                        initial={false}
                        whileHover={{ x: 4 }}
                      >
                        →
                      </motion.span>
                    </button>
                  </div>
                </div>
                <div className="mt-5 h-px w-16 bg-[color:var(--color-line)] transition duration-300 group-hover:w-28 group-hover:bg-[color:var(--color-accent)]" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      </section>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(11,11,10,0.76)] p-4 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-3xl rounded-[34px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.96))] p-6 md:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-5 top-5 text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)] transition hover:text-[color:var(--color-accent)]"
              >
                Close
              </button>

              <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
                <div className="space-y-4">
                  <CaseStudyVisual study={activeProject} />
                  <div className="rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.2)] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                      Deliverables
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.deliverables.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[color:var(--color-line)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                      Problem
                    </p>
                    <p className="mt-2 text-base leading-7 text-[color:var(--color-text-muted)]">
                      {activeProject.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                      Solution
                    </p>
                    <p className="mt-2 text-base leading-7 text-[color:var(--color-text-muted)]">
                      {activeProject.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                      Result
                    </p>
                    <p className="mt-2 text-base leading-7 text-[color:var(--color-text-muted)]">
                      {activeProject.result}
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                      Client perspective
                    </p>
                    <p className="mt-3 text-base leading-7 text-[color:var(--color-text)]">
                      “{activeProject.quote}”
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.16)] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                      Related insight
                    </p>
                    <div className="mt-4 grid gap-3">
                      {getInsightsBySlugs(activeProject.relatedInsights).map((article) => (
                        <Link
                          key={article.slug}
                          href={`/insights/${article.slug}`}
                          onClick={() =>
                            trackConversionClick("case_study_related_insight_clicked", {
                              study: activeProject.slug,
                              insight: article.slug,
                            })
                          }
                          className="rounded-[18px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-4 transition hover:border-[color:var(--color-accent)]"
                        >
                          <p className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                            {article.category}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-[color:var(--color-text)]">
                            {article.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={`/case-studies/${activeProject.slug}`}
                        onClick={() =>
                          trackConversionClick(
                            "case_study_clicked",
                            { study: activeProject.slug, location: "portfolio-preview-modal" },
                            "ViewContent",
                          )
                        }
                        className="button-primary"
                      >
                        View full case study
                      </Link>
                      <Link href="/case-studies" className="button-secondary">
                        All case studies
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
