import { BureaucracySection } from "@/components/bureaucracy-section";
import { Hero } from "@/components/hero";
import { RevenueSimulator } from "@/components/revenue-simulator";
import { SimplifySection } from "@/components/simplify-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SolutionsSection } from "@/components/solutions-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SimplifySection />
        <SolutionsSection />
        <RevenueSimulator />
        <BureaucracySection />
      </main>
      <SiteFooter />
    </>
  );
}
