"use client";

import Link from "next/link";
import { motion, cubicBezier } from "framer-motion";
import { trackConversionClick } from "@/lib/tracking-events";

const stats = [
  {
    value: "20+",
    label:
      "Projects delivered across branding, websites, and digital growth engagements.",
    mobileLabel: "20+ projects delivered across brand, web, and growth work.",
  },
  {
    value: "End-to-end",
    label:
      "From positioning and visual identity to design and development in one seamless process.",
    mobileLabel: "Strategy, identity, design, and development in one process.",
  },
  {
    value: "Built for trust",
    label:
      "Premium digital experiences designed to communicate clearly, earn credibility, and convert better.",
    mobileLabel: "Premium websites built to earn trust and convert better.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-bg)]">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#c6a56b]/14 blur-[84px] md:h-[420px] md:w-[420px] md:blur-[110px]" />
        <div className="absolute left-0 top-[30%] h-[150px] w-[150px] rounded-full bg-[#8e9a82]/10 blur-[72px] md:h-[220px] md:w-[220px] md:blur-[96px]" />
        <div className="absolute bottom-0 right-0 h-[180px] w-[180px] rounded-full bg-[#f3f0e8]/5 blur-[72px] md:h-[260px] md:w-[260px] md:blur-[96px]" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 py-20 md:px-8 md:py-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex max-w-full self-start rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-accent)] backdrop-blur-sm md:w-fit md:px-4 md:text-[11px] md:tracking-[0.28em]"
        >
          <span className="md:hidden">Strategy • Brand • Web</span>
          <span className="hidden md:inline">
            Strategy • Brand Systems • Websites • Digital Growth
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="mt-6 max-w-5xl text-4xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-5xl md:mt-8 md:text-7xl"
        >
          <span className="md:hidden">
            We build premium brands and websites that earn trust.
          </span>
          <span className="hidden md:inline">
            We build premium brands and websites that help businesses earn trust,
            stand out clearly, and grow.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="mt-6 max-w-3xl text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg md:mt-8 md:text-xl md:leading-8"
        >
          <span className="md:hidden">
            Strategy, design, and development for businesses that need a
            stronger digital presence.
          </span>
          <span className="hidden md:inline">
            Capstone combines strategy, design, and development to help
            ambitious businesses clarify their positioning, strengthen
            credibility, and turn attention into better inquiries.
          </span>
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <Link
            href="/book-a-call"
            onClick={() =>
              trackConversionClick(
                "hero_cta_clicked",
                { action: "book-call", location: "hero" },
                "Contact",
              )
            }
            className="button-primary sm:text-left"
          >
            <span>Book a Call</span>
          </Link>

          <Link
            href="/case-studies"
            onClick={() =>
              trackConversionClick(
                "hero_cta_clicked",
                { action: "case-studies", location: "hero" },
                "ViewContent",
              )
            }
            className="button-secondary sm:text-left"
          >
            <span>View Case Studies</span>
          </Link>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          custom={4}
          variants={fadeUp}
          className="mt-5 max-w-2xl text-sm leading-6 text-[color:var(--color-text-muted)] md:mt-6 md:text-[15px]"
        >
          Brand strategy • Visual identity • Website design • Development •
          Conversion-focused digital systems
        </motion.p>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3 md:gap-5">
          {stats.map((item, index) => (
            <motion.div
              key={item.value}
              initial="hidden"
              animate="show"
              custom={index + 5}
              variants={fadeUp}
              className="rounded-[24px] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5 backdrop-blur-sm md:rounded-[28px] md:p-6"
            >
              <p className="text-2xl font-semibold tracking-tight text-[color:var(--color-accent)] md:text-3xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)] md:leading-7">
                <span className="md:hidden">{item.mobileLabel}</span>
                <span className="hidden md:inline">{item.label}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
