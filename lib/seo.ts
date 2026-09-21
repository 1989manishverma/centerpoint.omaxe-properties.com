import type { Metadata } from "next";
import { SITE, SITE_URL } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogDescription?: string;
  twitterTitle?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  ogDescription,
  twitterTitle,
}: PageMetaInput): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const socialDescription = ogDescription ?? description;

  return {
    title,
    description,
    keywords: [...SITE.keywords],
    authors: [{ name: "Centre Point Amausi Enquiry Desk" }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      title,
      description: socialDescription,
      siteName: SITE.name,
      images: [{ url: SITE.ogImage, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle ?? title,
      description: socialDescription,
      images: [SITE.ogImage],
    },
  };
}
