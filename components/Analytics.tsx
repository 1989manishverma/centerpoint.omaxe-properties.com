"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { SITE } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function AnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstLoad = useRef(true);

  useEffect(() => {
    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    const pageLocation = window.location.href;
    const pageTitle = document.title;

    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: pagePath,
      page_location: pageLocation,
      page_title: pageTitle,
    });

    if (typeof window.gtag === "function") {
      window.gtag("config", SITE.gaId, {
        page_path: pagePath,
        page_location: pageLocation,
        page_title: pageTitle,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  );
}
