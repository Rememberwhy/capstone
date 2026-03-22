export const COOKIE_CONSENT_STORAGE_KEY = "capstone_cookie_consent";

export type CookieConsentState = {
  analytics: boolean;
  updatedAt: string;
};

export function parseCookieConsent(
  value: string | null | undefined,
): CookieConsentState | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<CookieConsentState>;

    if (typeof parsed.analytics !== "boolean") {
      return null;
    }

    return {
      analytics: parsed.analytics,
      updatedAt:
        typeof parsed.updatedAt === "string"
          ? parsed.updatedAt
          : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function serializeCookieConsent(
  consent: CookieConsentState,
): string {
  return JSON.stringify(consent);
}
