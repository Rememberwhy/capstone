"use client";
/* eslint-disable @next/next/no-img-element */

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  parseCookieConsent,
} from "@/lib/consent";
import { trackMarketingEvent } from "@/lib/marketing-tracking";

const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function TrackingScripts() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const hasTrackedInitialRoute = useRef(false);

  useEffect(() => {
    function syncConsent() {
      const stored = parseCookieConsent(
        window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY),
      );

      setAnalyticsAllowed(Boolean(stored?.analytics));
    }

    syncConsent();
    window.addEventListener("capstone-consent-changed", syncConsent);

    return () => {
      window.removeEventListener("capstone-consent-changed", syncConsent);
    };
  }, []);

  useEffect(() => {
    if (!analyticsAllowed) {
      hasTrackedInitialRoute.current = false;
      return;
    }

    if (!hasTrackedInitialRoute.current) {
      hasTrackedInitialRoute.current = true;
      return;
    }

    const hasSearch = searchParams?.toString();
    trackMarketingEvent("PageView", {
      path: hasSearch ? `${pathname}?${hasSearch}` : pathname,
    });
  }, [analyticsAllowed, pathname, searchParams]);

  if (!analyticsAllowed) {
    return null;
  }

  return (
    <>
      {metaPixelId ? (
        <>
          <Script id="meta-pixel-base" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      ) : null}

      {clarityId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      ) : null}
    </>
  );
}
