import type { Metadata } from "next";

import { PlansComparison } from "@/components/plans-comparison";
import { PricingCards } from "@/components/pricing-cards";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { GUIA_PLANS } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Planos e preços — Koty",
  description:
    "Essencial a partir de R$ 49,90/mês por imóvel e Profissional a partir de R$ 169,90. 15 dias grátis, cancele quando quiser.",
};

export default function PlanosPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="flex-1">
        <PricingCards />
        <PricingCards
          compact
          heading="h2"
          title="Guia da Casa"
          subtitle="Quer só o guia digital? Contrate o Guia da Casa avulso, sem a plataforma de gestão."
          plans={GUIA_PLANS}
          pillId="guia-billing-pill"
        />
        <PlansComparison />
      </main>
      <SiteFooter />
    </>
  );
}
