import { HOME_FAQS, PAGE_FAQS } from "@/lib/faqs";
import { SITE, SITE_URL } from "@/lib/site";

function faqEntities(items: readonly { q: string; a: string }[]) {
  return items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  }));
}

function pageUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Aparamous Solutions Pvt. Ltd.",
  url: SITE_URL,
  email: "office@aparamous.com",
  telephone: "+918009227605",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office No. 205 & 206, Millennium Place, Sector B, Ansal API, Sushant Golf City",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226030",
    addressCountry: "IN",
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE.name,
  url: `${SITE_URL}/`,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};

export const placeSchema = {
  "@type": "Place",
  name: SITE.name,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amausi",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${pageUrl(path)}#webpage`,
    name,
    url: pageUrl(path),
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: placeSchema,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export const listingSchema = {
  "@type": "RealEstateListing",
  "@id": `${SITE_URL}/#listing`,
  name: SITE.title,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${SITE.ogImage}`,
  description: SITE.description,
  telephone: SITE.phoneTel,
};

export const projectSchema = {
  "@context": "https://schema.org",
  "@graph": [
    webPageSchema({
      name: SITE.title,
      description:
        "Commercial property near Lucknow Airport with retail shops, hotel studio investment and transit-led investment potential in Amausi, Lucknow.",
      path: "/",
    }),
    listingSchema,
    organizationSchema,
    websiteSchema,
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqEntities(HOME_FAQS),
    },
  ],
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    webPageSchema({
      name: "Omaxe Centre Point Amausi FAQs | Returns, Lease, Pricing & Location",
      description:
        "Frequently asked questions about Omaxe Centre Point Amausi: location near Lucknow Airport, 12% return scheme, after possession hotel lease guarantee, retail/studio options, price list and site visits.",
      path: "/faqs",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "FAQs", path: "/faqs" },
    ]),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/faqs#faq`,
      url: `${SITE_URL}/faqs`,
      name: "Omaxe Centre Point Amausi FAQs",
      mainEntity: faqEntities(PAGE_FAQS),
    },
  ],
};

export const investmentPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    webPageSchema({
      name: "Omaxe Centre Point Amausi Investment | Returns, Hotel Lease & Location",
      description:
        "Explore the Centre Point Amausi investment proposition: 12% annual return for 48 months under applicable scheme, after possession hotel lease guarantee, airport-corridor demand drivers and documents to verify.",
      path: "/investment",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Investment", path: "/investment" },
    ]),
    listingSchema,
  ],
};

export const getDetailsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    webPageSchema({
      name: "Get Omaxe Centre Point Amausi Details | Price, Inventory & Payment Plan",
      description:
        "Request the latest Omaxe Centre Point Amausi price list, live inventory, payment plan, return-scheme details, after-possession hotel lease information and site visit.",
      path: "/get-details",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Get Details", path: "/get-details" },
    ]),
  ],
};
