"use client";

import { useEffect, useState, type ReactNode } from "react";
import { SITE } from "@/lib/site";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

function buildWhatsAppUrl() {
  if (typeof window === "undefined") return SITE.whatsappUrl;
  const qs = new URLSearchParams(window.location.search);
  const utmText = UTM_KEYS.map((key) => (qs.get(key) ? `${key}: ${qs.get(key)}` : ""))
    .filter(Boolean)
    .join("\n");
  const text = `Hello, I want investment details for Omaxe Centre Point Amausi.${utmText ? `\n\n${utmText}` : ""}`;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function WhatsAppLink({
  className,
  children,
  "aria-label": ariaLabel,
}: {
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}) {
  const [href, setHref] = useState(SITE.whatsappUrl);

  useEffect(() => {
    setHref(buildWhatsAppUrl());
  }, []);

  return (
    <a className={className} href={href} target="_blank" rel="noopener" aria-label={ariaLabel}>
      {children}
    </a>
  );
}
