import { InvestmentPage } from "@/components/InvestmentPage";
import { JsonLd } from "@/components/JsonLd";
import { investmentPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const title = "Omaxe Centre Point Amausi Investment | Returns, Hotel Lease & Location";
const description =
  "Explore the Centre Point Amausi investment proposition: 12% annual return for 48 months under applicable scheme, after possession hotel lease guarantee, airport-corridor demand drivers and documents to verify.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/investment",
});

export default function Page() {
  return (
    <>
      <JsonLd data={investmentPageSchema} />
      <InvestmentPage />
    </>
  );
}
