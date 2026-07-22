import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ListChecks,
  MessageCircle,
  PieChart,
} from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Para gestoras — Koty",
  description:
    "Vários imóveis, uma operação só. Checklists no WhatsApp, IA atendendo hóspedes e financeiro por imóvel.",
};

const FEATURES = [
  {
    icon: Building2,
    title: "Vários imóveis, um painel",
    description:
      "Alterne entre unidades ou veja tudo junto, sem abrir uma aba por anúncio.",
  },
  {
    icon: ListChecks,
    title: "Equipe alinhada",
    description:
      "Checklists de check-in, check-out e limpeza saem automaticamente para os colaboradores via WhatsApp, com evidência em foto.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento que escala",
    description:
      "A IA responde as dúvidas frequentes de todos os hóspedes, no idioma deles, a qualquer hora.",
  },
  {
    icon: PieChart,
    title: "Resultado por imóvel",
    description:
      "Receita, despesas, ocupação e lucro por período — em cada unidade da carteira.",
  },
];

export default function GestoraPage() {
  return (
    <PageShell
      eyebrow="Para gestoras"
      title="Vários imóveis, uma operação só"
      description="Quando a carteira cresce, o gargalo deixa de ser reserva e passa a ser coordenação. A Koty padroniza a rotina para que a operação escale sem contratar na mesma proporção."
    >
      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-border p-7">
              <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-strong text-white shadow-md shadow-brand/25">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!bg-cream">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              O plano Profissional foi feito para operações assim
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Integração oficial com Airbnb e Booking, mensagens automáticas no
              WhatsApp para hóspedes e equipe, Guia da Casa completo com IA e
              suporte prioritário. A assinatura é por imóvel, então você cresce
              no seu ritmo.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/planos">
                Comparar os planos
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-border bg-background p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">
                Plano Profissional
              </p>
              <p className="mt-4 text-4xl font-extrabold tracking-tight">
                R$ 169,90
                <span className="ml-2 align-middle text-sm font-normal text-muted-foreground">
                  /mês /imóvel
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Tudo do Essencial mais integração oficial com os canais,
                WhatsApp automático, Guia da Casa com IA e Google Calendar.
              </p>
              <p className="mt-6 text-xs text-muted-foreground">
                Administra muitas unidades?{" "}
                <Link
                  href="/contato"
                  className="font-semibold text-brand hover:underline"
                >
                  Fale com a gente
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
