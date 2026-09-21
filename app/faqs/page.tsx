import type { Metadata } from "next";
import { FaqsPage } from "@/components/FaqsPage";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Omaxe Centre Point Amausi FAQs | Returns, Lease, Pricing & Location",
  description:
    "Frequently asked questions about Omaxe Centre Point Amausi: location near Lucknow Airport, 12% return scheme, after possession hotel lease guarantee, retail/studio options, price list and site visits.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "Omaxe Centre Point Amausi FAQs | Returns, Lease, Pricing & Location",
    description:
      "Frequently asked questions about Omaxe Centre Point Amausi: location near Lucknow Airport, 12% return scheme, after possession hotel lease guarantee, retail/studio options, price list and site visits.",
    url: "/faqs",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <FaqsPage />
    </>
  );
}
