import { NextResponse } from "next/server";
import { storeLeadSubmission } from "@/lib/lead-storage";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | {
        name?: string;
        email?: string;
        projectType?: string;
        details?: string;
        source?: string;
        pagePath?: string;
        referrer?: string;
        bookingContext?: {
          serviceType?: string;
          budgetRange?: string;
          timeline?: string;
        } | null;
      }
    | null;

  const name = body?.name?.trim();
  const email = body?.email?.trim().toLowerCase();
  const projectType = body?.projectType?.trim();
  const details = body?.details?.trim();
  const source = body?.source?.trim() || "contact-page";

  if (!name || name.length < 2) {
    return NextResponse.json(
      { error: "A valid name is required." },
      { status: 400 },
    );
  }

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 },
    );
  }

  if (!projectType) {
    return NextResponse.json(
      { error: "A project type is required." },
      { status: 400 },
    );
  }

  if (!details || details.length < 20) {
    return NextResponse.json(
      { error: "Project details are required." },
      { status: 400 },
    );
  }

  const result = await storeLeadSubmission({
    email,
    name,
    projectType,
    details,
    source,
    leadType: "inquiry",
    metadata: {
      pagePath: body?.pagePath || "",
      referrer: body?.referrer || "",
      bookingContext: body?.bookingContext || null,
    },
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json({ ok: true });
}
