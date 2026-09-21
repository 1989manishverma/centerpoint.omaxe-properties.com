import { GetDetailsPage } from "@/components/GetDetailsPage";
import { JsonLd } from "@/components/JsonLd";
import { getDetailsPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const title = "Get Omaxe Centre Point Amausi Details | Price, Inventory & Payment Plan";
const description =
  "Request the latest Omaxe Centre Point Amausi price list, live inventory, payment plan, return-scheme details, after-possession hotel lease information and site visit.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/get-details",
});

export default function Page() {
  return (
    <>
      <JsonLd data={getDetailsPageSchema} />
      <GetDetailsPage />
    </>
  );
}
