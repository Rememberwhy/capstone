"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { track } from "@vercel/analytics";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import {
  BOOKING_CONTEXT_STORAGE_KEY,
  buildInquiryMailto,
  formatBookingContext,
  parseStoredBookingContext,
} from "@/lib/lead-attribution";
import { trackMarketingEvent } from "@/lib/marketing-tracking";

const inquirySchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.email("Enter a valid email."),
  projectType: z.string().min(2, "Tell us the type of project."),
  details: z.string().min(20, "Share a bit more detail so we can help well."),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

type InquiryFormProps = {
  defaultValues?: Partial<InquiryFormValues>;
  source?: string;
  submitLabel?: string;
  successTitle?: string;
  successMessage?: string;
  thankYouType?: "contact" | "proposal" | "booking";
};

export default function InquiryForm({
  defaultValues,
  source = "contact-page",
  submitLabel = "Send Inquiry",
  successTitle = "Thanks. Your project details are in.",
  successMessage = "We’ll review the context, assess fit, and come back with the clearest next step.",
  thankYouType = "contact",
}: InquiryFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "success" | "fallback">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [bookingContext] = useState<ReturnType<typeof parseStoredBookingContext>>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    return parseStoredBookingContext(
      window.localStorage.getItem(BOOKING_CONTEXT_STORAGE_KEY),
    );
  });
  const hasTrackedStart = useRef(false);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      details: "",
      ...defaultValues,
    },
  });

  const watchedValues = useWatch({
    control,
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!bookingContext) {
      return;
    }

    if (!getValues("details")) {
      setValue(
        "details",
        `Booking context:\n${formatBookingContext(bookingContext)}\n\nProject details:\n`,
      );
    }

    if (!getValues("projectType")) {
      setValue("projectType", bookingContext.serviceType);
    }
  }, [bookingContext, getValues, setValue]);

  const mailtoHref = useMemo(
    () =>
      buildInquiryMailto({
        name: watchedValues.name,
        email: watchedValues.email,
        projectType: watchedValues.projectType,
        details: watchedValues.details,
        source,
        bookingContext,
      }),
    [bookingContext, source, watchedValues.details, watchedValues.email, watchedValues.name, watchedValues.projectType],
  );

  function handleFormStart() {
    if (hasTrackedStart.current) {
      return;
    }

    hasTrackedStart.current = true;
    track("contact_form_started", { source });
  }

  async function onSubmit(values: InquiryFormValues) {
    setStatus("idle");
    setErrorMessage("");

    try {
      const pagePath =
        typeof window !== "undefined" ? window.location.pathname : "";
      const referrer =
        typeof window !== "undefined" ? document.referrer : "";

      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          source,
          pagePath,
          referrer,
          bookingContext,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;

        setStatus("fallback");
        setErrorMessage(
          data?.error ||
            "Direct storage is unavailable right now, but you can still send this inquiry by email.",
        );
        track("contact_form_fallback", {
          projectType: values.projectType,
          source,
        });
        return;
      }

      if (typeof window !== "undefined") {
        window.localStorage.removeItem(BOOKING_CONTEXT_STORAGE_KEY);
      }

      setStatus("success");
      track("contact_form_submitted", {
        projectType: values.projectType,
        source,
      });
      trackMarketingEvent(
        thankYouType === "proposal" ? "SubmitApplication" : "Lead",
        {
          projectType: values.projectType,
          source,
        },
      );
      reset({
        name: "",
        email: "",
        projectType: "",
        details: "",
      });
      const params = new URLSearchParams({
        type: thankYouType,
        source,
        project: values.projectType,
      });
      router.push(`/thank-you?${params.toString()}`);
    } catch {
      setStatus("fallback");
      setErrorMessage(
        "Something interrupted submission, but you can still send the same details directly by email.",
      );
    }
  }

  return (
    <form className="mt-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="mb-2 block text-sm text-[color:var(--color-text-muted)]">
          Name
        </label>
        <input
          type="text"
          {...register("name")}
          onFocus={handleFormStart}
          className="w-full rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-text)] outline-none transition focus:border-[color:var(--color-accent)]"
          placeholder="Your name"
        />
        {errors.name ? (
          <p className="mt-2 text-sm text-rose-300">{errors.name.message}</p>
        ) : null}
      </div>

      <div>
        <label className="mb-2 block text-sm text-[color:var(--color-text-muted)]">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          onFocus={handleFormStart}
          className="w-full rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-text)] outline-none transition focus:border-[color:var(--color-accent)]"
          placeholder="you@example.com"
        />
        {errors.email ? (
          <p className="mt-2 text-sm text-rose-300">{errors.email.message}</p>
        ) : null}
      </div>

      <div>
        <label className="mb-2 block text-sm text-[color:var(--color-text-muted)]">
          Project type
        </label>
        <input
          type="text"
          {...register("projectType")}
          onFocus={handleFormStart}
          className="w-full rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-text)] outline-none transition focus:border-[color:var(--color-accent)]"
          placeholder="Website design, branding, development..."
        />
        {errors.projectType ? (
          <p className="mt-2 text-sm text-rose-300">
            {errors.projectType.message}
          </p>
        ) : null}
      </div>

      <div>
        <label className="mb-2 block text-sm text-[color:var(--color-text-muted)]">
          Project details
        </label>
        <textarea
          rows={6}
          {...register("details")}
          onFocus={handleFormStart}
          className="w-full rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-3 text-[color:var(--color-text)] outline-none transition focus:border-[color:var(--color-accent)]"
          placeholder="Tell us about your project..."
        />
        {errors.details ? (
          <p className="mt-2 text-sm text-rose-300">{errors.details.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="button-primary disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : submitLabel}
      </button>

      {status === "success" ? (
        <div className="rounded-[24px] border border-emerald-500/30 bg-emerald-500/10 p-5 text-sm text-emerald-100">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
            Inquiry received
          </p>
          <h3 className="mt-3 text-xl font-semibold text-emerald-50">
            {successTitle}
          </h3>
          <p className="mt-3 leading-6 text-emerald-100/85">
            {successMessage}
          </p>
          <div className="mt-4 grid gap-3">
            <div className="rounded-[18px] border border-emerald-500/20 bg-black/10 px-4 py-3 text-emerald-100/80">
              We typically review fit, scope, and the strongest next move before replying.
            </div>
            <div className="rounded-[18px] border border-emerald-500/20 bg-black/10 px-4 py-3 text-emerald-100/80">
              If you want to speed things up, you can also book a short discovery call now.
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/book-a-call" className="button-primary">
              Book a Discovery Call
            </Link>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="button-secondary"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : null}

      {status === "fallback" ? (
        <div className="rounded-[24px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] p-5 text-sm leading-6 text-[color:var(--color-text-muted)]">
          <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            Direct fallback
          </p>
          <p className="mt-3">{errorMessage}</p>
          <div className="mt-4 grid gap-3">
            <div className="rounded-[18px] border border-[color:var(--color-line)] bg-[rgba(11,11,10,0.18)] px-4 py-3">
              Use the prefilled email option below and the same project details will carry over.
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={mailtoHref} className="button-primary">
              Email This Inquiry
            </a>
            <Link href="/book-a-call" className="button-secondary">
              Book a Call Instead
            </Link>
          </div>
        </div>
      ) : null}
    </form>
  );
}
