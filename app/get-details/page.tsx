import type { Metadata } from "next";
import { GetDetailsPage } from "@/components/GetDetailsPage";

export const metadata: Metadata = {
  title: "Get Omaxe Centre Point Amausi Details | Price, Inventory & Payment Plan",
  description:
    "Request the latest Omaxe Centre Point Amausi price list, live inventory, payment plan, return-scheme details, after-possession hotel lease information and site visit.",
  alternates: {
    canonical: "/get-details",
  },
  openGraph: {
    title: "Get Omaxe Centre Point Amausi Details | Price, Inventory & Payment Plan",
    description:
      "Request the latest Omaxe Centre Point Amausi price list, live inventory, payment plan, return-scheme details, after-possession hotel lease information and site visit.",
    url: "/get-details",
  },
};

export default function Page() {
  return <GetDetailsPage />;
}
