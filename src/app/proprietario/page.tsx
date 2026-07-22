import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Bot, CalendarDays, Check, Wallet } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Para proprietários — Koty",
  description:
    "Um imóvel, zero planilha. Calendário unificado, IA respondendo hóspedes e checklists para a sua equipe.",
};

const FEATURES = [
  {
    icon: CalendarDays,
    title: "Um calendário só",
    description:
      "Airbnb e Booking sincronizados via iCal. Entradas, saídas, diárias e status em segundos.",
  },
  {
    icon: Bot,
    title: "A IA responde por você",
    description:
      "As perguntas de sempre resolvidas 24h por dia, no idioma do hóspede, sem você abrir o celular.",
  },
  {
    icon: BookOpen,
    title: "Guia da Casa",
    description:
      "Wi-Fi, regras, instruções de entrada e dicas do bairro num link que o hóspede abre sozinho.",
  },
  {
    icon: Wallet,
    title: "Financeiro sem planilha",
    description:
      "Receita entrando automaticamente, despesas no lugar e o lucro por período visível.",
  },
];

const STEPS = [
  "Conecte seu anúncio do Airbnb ou Booking",
  "Monte o Guia da Casa do seu imóvel",
  "Cadastre quem cuida da limpeza",
  "Deixe a rotina rodar sozinha",
];

export default function ProprietarioPage() {
  return (
    <PageShell
      eyebrow="Para proprietários"
      title="Seu imóvel rodando sozinho, mesmo com você fora"
      description="Se você administra o próprio imóvel, a Koty tira do seu colo a parte repetitiva: responder hóspede, avisar a limpeza e fechar as contas do mês."
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
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Do cadastro à primeira reserva automatizada
            </h2>
            <ul className="mt-8 space-y-4">
              {STEPS.map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl border border-border bg-background p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">
                Plano Essencial
              </p>
              <p className="mt-4 text-4xl font-extrabold tracking-tight">
                R$ 49,90
                <span className="ml-2 align-middle text-sm font-normal text-muted-foreground">
                  /mês /imóvel
                </span>
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Calendário sincronizado via iCal",
                  "Guia da Casa digital",
                  "Checklists por e-mail para a equipe",
                  "Suporte por e-mail",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8 w-full">
                <Link href="/planos">
                  Ver planos e preços
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
