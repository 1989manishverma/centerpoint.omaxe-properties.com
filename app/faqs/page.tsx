import { FaqsPage } from "@/components/FaqsPage";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const title = "Omaxe Centre Point Amausi FAQs | Returns, Lease, Pricing & Location";
const description =
  "Frequently asked questions about Omaxe Centre Point Amausi: location near Lucknow Airport, 12% return scheme, after possession hotel lease guarantee, retail/studio options, price list and site visits.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/faqs",
});

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      <FaqsPage />
    </>
  );
}
