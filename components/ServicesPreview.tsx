"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/content";

export default function ServicesPreview() {
  return (
    <section className="border-t border-[color:var(--color-line)] py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-semibold">
              Brand, website, and growth support built around clarity.
            </h2>
            <p className="mt-4 text-[color:var(--color-text-muted)]">
              Capstone works with businesses that need a sharper position, a more
              credible digital presence, and a website that supports better
              conversations and better-fit inquiries.
            </p>
          </div>
          <Link
            href="/services"
            className="text-[color:var(--color-text-muted)] transition hover:text-[color:var(--color-accent)]"
          >
            View all services →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="group rounded-[28px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.92))] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-[color:var(--color-text)]">
                  {service.title}
                </h3>
                <motion.span
                  initial={false}
                  whileHover={{ x: 2 }}
                  className="text-sm text-[color:var(--color-accent)]"
                >
                  0{index + 1}
                </motion.span>
              </div>
              <p className="mt-3 leading-7 text-[color:var(--color-text-muted)]">
                {service.description}
              </p>
              <p className="mt-4 text-sm leading-6 text-[color:var(--color-accent)]/80 transition duration-300 group-hover:text-[color:var(--color-accent-strong)]">
                {service.detail}
              </p>
              <div className="mt-6 h-px w-16 bg-[color:var(--color-line)] transition duration-300 group-hover:w-28 group-hover:bg-[color:var(--color-accent)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
