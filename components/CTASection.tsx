"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { track } from "@vercel/analytics";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

const projectOptions = [
  "Brand identity",
  "Website design",
  "Web development",
  "Full digital refresh",
];

const ctaSchema = z.object({
  email: z.email("Enter a valid work email."),
  projectType: z.string().min(1, "Choose a project type."),
});

type CtaFormValues = z.infer<typeof ctaSchema>;

export default function CTASection() {
  const [status, setStatus] = useState<"idle" | "success" | "fallback">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CtaFormValues>({
    resolver: zodResolver(ctaSchema),
    defaultValues: {
      email: "",
      projectType: projectOptions[0],
    },
  });

  const email = useWatch({
    control,
    name: "email",
  });
  const projectType = useWatch({
    control,
    name: "projectType",
  });

  const briefUrl = useMemo(() => {
    const params = new URLSearchParams({
      email,
      project: projectType,
      source: "homepage-cta",
    });

    return `/contact?${params.toString()}`;
  }, [email, projectType]);

  async function onSubmit(values: CtaFormValues) {
    setErrorMessage("");
    setStatus("idle");

    try {
      track("homepage_cta_started", {
        projectType: values.projectType,
      });

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          projectType: values.projectType,
          source: "homepage-cta",
        }),
      });

      if (response.ok) {
        setStatus("success");
        reset({
          email: "",
          projectType: projectOptions[0],
        });
        track("homepage_cta_captured", {
          projectType: values.projectType,
        });
        return;
      }

      setStatus("fallback");
      setErrorMessage(
        "Lead storage is not configured yet, so we’ll continue with the full brief form.",
      );
      track("homepage_cta_fallback", {
        projectType: values.projectType,
      });
    } catch {
      setStatus("fallback");
      setErrorMessage(
        "Something interrupted submission, but you can continue with the full brief below.",
      );
    }
  }

  return (
    <section className="border-t border-[color:var(--color-line)] py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Start the Conversation
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Tell us what you need and we&apos;ll point you in the right direction.
          </h2>
          <p className="mt-6 text-base leading-7 text-[color:var(--color-text-muted)] md:text-lg">
            Whether you need a stronger brand, a better website, or both, this
            short form gives us enough context to guide the next step without
            making you fill out a long brief immediately.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[color:var(--color-text-muted)]">
            <span className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-2">
              Clearer next step
            </span>
            <span className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-2">
              Better-fit inquiries
            </span>
            <span className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-2">
              Faster project intake
            </span>
          </div>
        </div>

        <div className="rounded-[28px] border border-[color:var(--color-line)] bg-[linear-gradient(180deg,rgba(27,27,24,1),rgba(33,31,26,0.94))] p-6 backdrop-blur-sm md:p-7">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="mb-2 block text-sm text-[color:var(--color-text-muted)]">
                Work email
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full rounded-2xl border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.28)] px-4 py-3 text-[color:var(--color-text)] outline-none transition focus:border-[color:var(--color-accent)]"
                placeholder="you@company.com"
              />
              {errors.email ? (
                <p className="mt-2 text-sm text-rose-300">{errors.email.message}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm text-[color:var(--color-text-muted)]">
                What are you looking for?
              </label>
              <select
                {...register("projectType")}
                className="w-full rounded-2xl border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.28)] px-4 py-3 text-[color:var(--color-text)] outline-none transition focus:border-[color:var(--color-accent)]"
              >
                {projectOptions.map((option) => (
                  <option key={option} value={option} className="bg-[#141412]">
                    {option}
                  </option>
                ))}
              </select>
              {errors.projectType ? (
                <p className="mt-2 text-sm text-rose-300">
                  {errors.projectType.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Saving..." : "Start Project Brief"}
            </button>
          </form>

          {status === "success" ? (
            <p className="mt-4 text-sm leading-6 text-emerald-300">
              Thanks. Your details are in. The next step is a quick review on
              our side, then we&apos;ll guide you toward the best fit.
            </p>
          ) : null}

          {status === "fallback" ? (
            <div className="mt-4 space-y-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
              <p>{errorMessage}</p>
              <Link
                href={briefUrl}
                onClick={() => track("homepage_cta_brief_clicked")}
                className="button-secondary px-4 py-2"
              >
                Continue to Full Project Brief
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
