import type { Metadata } from "next";
import { ArrowRight, Laptop, Rocket, Users } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Carreiras — Koty",
  description:
    "Venha construir a plataforma que tira a burocracia da rotina de quem aluga por temporada.",
};

const PERKS = [
  {
    icon: Laptop,
    title: "Remoto de verdade",
    description: "Time distribuído, rotina assíncrona e foco em entrega.",
  },
  {
    icon: Rocket,
    title: "Produto no começo",
    description: "Suas decisões aparecem no produto na mesma semana.",
  },
  {
    icon: Users,
    title: "Contato com o cliente",
    description: "Todo mundo fala com anfitrião, de engenharia a suporte.",
  },
];

/** TODO: substituir pelas vagas reais abertas. */
const OPENINGS = [
  { role: "Pessoa Desenvolvedora Full-stack", area: "Engenharia", type: "Remoto · PJ" },
  { role: "Pessoa Designer de Produto", area: "Design", type: "Remoto · PJ" },
  { role: "Customer Success", area: "Operações", type: "Remoto · CLT" },
];

export default function CarreirasPage() {
  return (
    <PageShell
      eyebrow="Carreiras"
      title="Construa a plataforma que tira a burocracia da hospedagem"
      description="Somos um time pequeno, próximo do cliente e com muita coisa relevante para resolver. Se isso te anima, dá uma olhada nas vagas."
    >
      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map(({ icon: Icon, title, description }) => (
            <div key={title}>
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

        <h2 className="mt-20 text-3xl font-extrabold">Vagas abertas</h2>

        <ul className="mt-8 divide-y divide-border border-y border-border">
          {OPENINGS.map((job) => (
            <li
              key={job.role}
              className="grid gap-2 py-6 transition-colors hover:bg-muted/50 lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-2"
            >
              <span className="text-base font-bold lg:col-span-6">
                {job.role}
              </span>
              <span className="text-sm text-muted-foreground lg:col-span-3">
                {job.area}
              </span>
              <span className="text-sm text-muted-foreground lg:col-span-2">
                {job.type}
              </span>
              <a
                href="/contato"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline lg:col-span-1 lg:justify-end"
              >
                Ver
                <ArrowRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          Não encontrou uma vaga com a sua cara?{" "}
          <a href="/contato" className="font-semibold text-brand hover:underline">
            Fale com a gente
          </a>{" "}
          mesmo assim.
        </p>
      </Section>
    </PageShell>
  );
}
