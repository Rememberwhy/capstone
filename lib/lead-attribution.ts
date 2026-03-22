import { siteConfig } from "@/lib/site";

export const BOOKING_CONTEXT_STORAGE_KEY = "capstone_booking_context";

export type BookingContext = {
  serviceType: string;
  budgetRange: string;
  timeline: string;
};

export function parseStoredBookingContext(raw: string | null) {
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<BookingContext>;

    if (
      typeof parsed.serviceType === "string" &&
      typeof parsed.budgetRange === "string" &&
      typeof parsed.timeline === "string"
    ) {
      return parsed as BookingContext;
    }
  } catch {
    return null;
  }

  return null;
}

export function formatBookingContext(context: BookingContext) {
  return [
    `Service discussed: ${context.serviceType}`,
    `Budget range: ${context.budgetRange}`,
    `Timeline: ${context.timeline}`,
  ].join("\n");
}

type InquiryMailtoInput = {
  name?: string;
  email?: string;
  projectType?: string;
  details?: string;
  source?: string;
  bookingContext?: BookingContext | null;
};

export function buildInquiryMailto({
  name,
  email,
  projectType,
  details,
  source,
  bookingContext,
}: InquiryMailtoInput) {
  const subject = `Capstone inquiry${projectType ? `: ${projectType}` : ""}`;
  const body = [
    "Hello Capstone,",
    "",
    "I would like to discuss a project.",
    "",
    `Name: ${name || "-"}`,
    `Email: ${email || "-"}`,
    `Project type: ${projectType || "-"}`,
    `Source: ${source || "-"}`,
    ...(bookingContext
      ? ["", "Booking context:", formatBookingContext(bookingContext)]
      : []),
    "",
    "Project details:",
    details || "-",
  ].join("\n");

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
