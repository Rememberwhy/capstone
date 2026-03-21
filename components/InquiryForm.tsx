"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { track } from "@vercel/analytics";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
};

export default function InquiryForm({
  defaultValues,
  source = "contact-page",
  submitLabel = "Send Inquiry",
}: InquiryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
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

  async function onSubmit(values: InquiryFormValues) {
    track("contact_form_submitted", {
      projectType: values.projectType,
      source,
    });
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

      {isSubmitSuccessful ? (
        <p className="text-sm text-emerald-300">
          Thanks. Your inquiry passed validation and is ready for your live
          handling flow.
        </p>
      ) : null}
    </form>
  );
}
