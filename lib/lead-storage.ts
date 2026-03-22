import { createClient } from "@supabase/supabase-js";

type LeadSubmission = {
  email: string;
  projectType: string;
  source: string;
  leadType?: string;
  name?: string;
  details?: string;
  metadata?: Record<string, unknown>;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function storeLeadSubmission({
  email,
  projectType,
  source,
  leadType = "lead",
  name,
  details,
  metadata,
}: LeadSubmission) {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return {
      ok: false as const,
      status: 503,
      error:
        "Lead capture is not configured yet. Add Supabase env vars to store submissions.",
    };
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false },
  });

  const baseRow = {
    email,
    project_type: projectType,
    source,
  };

  const candidateRows = [
    {
      ...baseRow,
      name,
      details,
      lead_type: leadType,
      metadata: metadata ?? {},
    },
    {
      ...baseRow,
      metadata: metadata ?? {},
    },
    baseRow,
  ];

  for (const row of candidateRows) {
    const { error } = await supabase.from("leads").insert(row);

    if (!error) {
      return {
        ok: true as const,
        status: 200,
      };
    }
  }

  return {
    ok: false as const,
    status: 500,
    error: "Unable to save this lead right now.",
  };
}
