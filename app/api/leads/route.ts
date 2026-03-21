import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | {
        email?: string;
        projectType?: string;
        source?: string;
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

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return NextResponse.json(
      {
        error:
          "Lead capture is not configured yet. Add Supabase env vars to store submissions.",
      },
      { status: 503 },
    );
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase.from("leads").insert({
    email,
    project_type: projectType,
    source,
  });

  if (error) {
    return NextResponse.json(
      { error: "Unable to save this lead right now." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
