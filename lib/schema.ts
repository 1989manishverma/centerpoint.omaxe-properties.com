import { SITE, SITE_URL } from "@/lib/site";

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
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Omaxe Centre Point Amausi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Omaxe Centre Point Amausi is a mixed-use commercial development in Amausi, Lucknow, positioned around retail, hospitality and transit-led commercial demand near the airport corridor.",
          },
        },
        {
          "@type": "Question",
          name: "Is Centre Point Amausi near Lucknow Airport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The project is positioned in the Amausi airport corridor with access to Chaudhary Charan Singh International Airport, Amausi Metro, Kanpur Road and major city routes.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a 12% annual return plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 12% annual return for 48 months is currently marketed under selected payment or developer schemes. Eligibility, payment structure and all terms are subject to the current developer scheme and documentation.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after possession?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An after possession hotel lease guarantee is marketed for applicable hotel or studio inventory. The operating, lease, rental, eligibility and payout terms must be verified in the final developer and lease documentation.",
          },
        },
        {
          "@type": "Question",
          name: "How can I get the current price list and payment plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Request the latest price list, inventory, payment plan and site visit using the enquiry form or on +91 8127777274.",
          },
        },
      ],
    },
  ],
};
