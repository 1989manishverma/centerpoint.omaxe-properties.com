import { HomePage } from "@/components/HomePage";
import { JsonLd } from "@/components/JsonLd";
import { projectSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: SITE.title,
  description: SITE.description,
  path: "/",
  ogDescription: SITE.ogDescription,
  twitterTitle: SITE.shortName,
});

export default function Page() {
  return (
    <>
      <JsonLd data={projectSchema} />
      <HomePage />
    </>
  );
}
