import { NextResponse } from "next/server";
import { storeLeadSubmission } from "@/lib/lead-storage";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | {
        email?: string;
        projectType?: string;
        source?: string;
        pagePath?: string;
      }
    | null;

  const email = body?.email?.trim().toLowerCase();
  const projectType = body?.projectType?.trim();
  const source = body?.source?.trim() || "homepage-cta";

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

  const result = await storeLeadSubmission({
    email,
    projectType,
    source,
    leadType: "homepage-cta",
    metadata: {
      pagePath: body?.pagePath || "/",
    },
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json({ ok: true });
}
