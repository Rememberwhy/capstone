"use client";

import Link from "next/link";
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "20+",
    label: "Brand, website, and digital experience projects delivered for businesses ready to level up.",
    mobileLabel: "Projects delivered across brand, web, and digital growth work.",
  },
  {
    value: "Positioning",
    label: "Clearer messaging, stronger identity systems, and sharper market presentation.",
    mobileLabel: "Sharper messaging, identity, and brand presentation.",
  },
  {
    value: "Websites",
    label: "Premium digital experiences designed to earn trust, guide decisions, and support growth.",
    mobileLabel: "Websites built to earn trust and drive better inquiries.",
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.72]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[color:var(--color-bg)]">
      <motion.div className="pointer-events-none absolute inset-0 opacity-70" style={{ y: glowY }}>
        <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#c6a56b]/16 blur-[110px] md:h-[500px] md:w-[500px] md:blur-[140px]" />
        <div className="absolute left-0 top-[30%] h-[180px] w-[180px] rounded-full bg-[#8e9a82]/12 blur-[90px] md:h-[260px] md:w-[260px] md:blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-[#f3f0e8]/6 blur-[90px] md:h-[320px] md:w-[320px] md:blur-[120px]" />
      </motion.div>

      <motion.div
        className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 py-20 md:px-8 md:py-32"
        style={{ y: contentY, opacity: contentOpacity }}
      >
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
            We build brands and websites people trust faster.
          </span>
          <span className="hidden md:inline">
            We help ambitious businesses look sharper, sound clearer, and grow
            through better brand and website systems.
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
            Capstone combines strategy, design, and development to create a
            stronger first impression and a better path to inquiry.
          </span>
          <span className="hidden md:inline">
            Capstone combines positioning, design, and development to create
            brands and websites that feel premium, communicate clearly, and
            support real business growth.
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
            href="/case-studies"
            className="button-primary sm:text-left"
          >
            <span className="md:hidden">View Work</span>
            <span className="hidden md:inline">View Case Studies</span>
          </Link>

          <Link
            href="/book-a-call"
            className="button-secondary sm:text-left"
          >
            <span className="md:hidden">Book Call</span>
            <span className="hidden md:inline">Book a Discovery Call</span>
          </Link>
        </motion.div>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3 md:gap-5">
          {stats.map((item, index) => (
            <motion.div
              key={item.value}
              initial="hidden"
              animate="show"
              custom={index + 4}
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
      </motion.div>
    </section>
  );
}
