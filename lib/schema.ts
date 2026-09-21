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

export const projectSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      name: SITE.title,
      url: `${SITE_URL}/`,
      description:
        "Commercial property near Lucknow Airport with retail shops, hotel studio investment and transit-led investment potential in Amausi, Lucknow.",
      inLanguage: "en-IN",
      about: {
        "@type": "Place",
        name: SITE.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Amausi",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
      },
    },
    {
      "@type": "RealEstateListing",
      "@id": `${SITE_URL}/#listing`,
      name: SITE.title,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}${SITE.ogImage}`,
      description: SITE.description,
      telephone: SITE.phoneTel,
    },
    {
      "@type": "Organization",
      name: "Aparamous Solutions Pvt. Ltd.",
      url: SITE_URL,
      email: "office@aparamous.com",
      telephone: "+918009227605",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Office No. 205 & 206, Millennium Place, Sector B, Ansal API, Sushant Golf City",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226030",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      name: SITE.name,
      url: `${SITE_URL}/`,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqEntities(HOME_FAQS),
    },
  ],
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faqs#faq`,
  url: `${SITE_URL}/faqs`,
  name: "Omaxe Centre Point Amausi FAQs",
  mainEntity: faqEntities(PAGE_FAQS),
};
