"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { caseStudies } from "@/lib/content";

export default function PortfolioPreview() {
  const [activeProject, setActiveProject] = useState<(typeof caseStudies)[number] | null>(
    null,
  );
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const visualY = useTransform(scrollYProgress, [0, 1], [18, -24]);

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
      <section ref={sectionRef} className="border-t border-[color:var(--color-line)] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <motion.div
          style={{ y: headingY }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
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
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {caseStudies.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="group overflow-hidden rounded-[30px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] transition hover:border-[color:var(--color-accent)]"
            >
              <motion.div
                style={{ y: visualY }}
                className="relative h-72 overflow-hidden bg-[linear-gradient(135deg,rgba(198,165,107,0.22),rgba(142,154,130,0.08)_48%,rgba(243,240,232,0.03))]"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0"
                />
                <div className="absolute inset-x-10 bottom-0 top-10 rounded-t-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.42)] transition duration-500 group-hover:translate-y-2">
                  <div className="flex items-center justify-between border-b border-[color:var(--color-line)] px-4 py-3">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                      {project.industry}
                    </span>
                    <span className="text-sm text-[color:var(--color-accent)] transition duration-300 group-hover:text-[color:var(--color-accent-strong)]">
                      {project.metric}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="h-24 rounded-[18px] bg-[rgba(243,240,232,0.06)]" />
                    <div className="mt-4 grid gap-3">
                      <div className="h-3 w-1/2 rounded-full bg-[rgba(243,240,232,0.1)]" />
                      <div className="h-3 w-4/5 rounded-full bg-[rgba(198,165,107,0.18)]" />
                      <div className="h-3 w-2/3 rounded-full bg-[rgba(142,154,130,0.14)]" />
                    </div>
                  </div>
                </div>
                <div className="absolute left-6 top-6 rounded-full border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.38)] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  0{index + 1}
                </div>
              </motion.div>
              <div className="p-6">
                <p className="text-sm text-[color:var(--color-accent)]">{project.category}</p>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {project.result}
                </p>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-sm text-[color:var(--color-text-muted)]">
                    {project.timeline}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
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
                <div className="rounded-[28px] bg-[linear-gradient(135deg,rgba(198,165,107,0.22),rgba(142,154,130,0.08)_48%,rgba(243,240,232,0.03))] p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {activeProject.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-[color:var(--color-text)]">
                    {activeProject.title}
                  </h3>
                  <div className="mt-8 rounded-[22px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.28)] p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                      Outcome
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-[color:var(--color-accent)]">
                      {activeProject.metric}
                    </p>
                    <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
                      {activeProject.timeline}
                    </p>
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
                  <div className="pt-2">
                    <Link href="/case-studies" className="button-primary">
                      View full case studies
                    </Link>
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
