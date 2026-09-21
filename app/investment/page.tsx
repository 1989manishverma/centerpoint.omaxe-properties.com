import type { Metadata } from "next";
import { InvestmentPage } from "@/components/InvestmentPage";

export const metadata: Metadata = {
  title: "Omaxe Centre Point Amausi Investment | Returns, Hotel Lease & Location",
  description:
    "Explore the Centre Point Amausi investment proposition: 12% annual return for 48 months under applicable scheme, after possession hotel lease guarantee, airport-corridor demand drivers and documents to verify.",
  alternates: {
    canonical: "/investment",
  },
  openGraph: {
    title: "Omaxe Centre Point Amausi Investment | Returns, Hotel Lease & Location",
    description:
      "Explore the Centre Point Amausi investment proposition: 12% annual return for 48 months under applicable scheme, after possession hotel lease guarantee, airport-corridor demand drivers and documents to verify.",
    url: "/investment",
  },
};

export default function Page() {
  return <InvestmentPage />;
}
