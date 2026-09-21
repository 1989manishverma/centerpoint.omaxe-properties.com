import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { projectSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <HomePage />
    </>
  );
}
