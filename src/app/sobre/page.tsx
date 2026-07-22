import type { Metadata } from "next";
import { Compass, HeartHandshake, Wrench } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Sobre nós — Koty",
  description:
    "Uma plataforma brasileira criada por quem vive a hospedagem na prática e entende os desafios dos anfitriões.",
};

const VALUES = [
  {
    icon: Wrench,
    title: "Feito por quem opera",
    description:
      "Cada função nasce de uma dor real de quem recebe hóspede, não de um roadmap distante da operação.",
  },
  {
    icon: Compass,
    title: "Simples antes de completo",
    description:
      "Preferimos uma tela que o anfitrião entende sozinho a um painel cheio de recursos que ninguém usa.",
  },
  {
    icon: HeartHandshake,
    title: "O hóspede também é usuário",
    description:
      "Guia da Casa, check-in e mensagens são pensados para a experiência de quem se hospeda.",
  },
];

export default function SobrePage() {
  return (
    <PageShell
      eyebrow="Sobre nós"
      title="Uma plataforma brasileira criada por quem vive a hospedagem na prática"
      description="A Koty nasceu da rotina de administrar imóveis de temporada: planilhas soltas, mensagens repetidas e equipe desalinhada. Resolvemos isso para nós primeiro."
    >
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold leading-tight">
              Do problema próprio ao produto
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Quem aluga por temporada conhece a cena: o calendário de um lado,
                o financeiro numa planilha, as instruções da casa copiadas e
                coladas a cada reserva e a equipe de limpeza avisada por
                mensagem solta.
              </p>
              <p>
                A Koty juntou tudo isso em um lugar só. Calendário unificado,
                respostas automáticas por IA, checklists enviados à equipe pelo
                WhatsApp, controle financeiro e um Guia da Casa que o hóspede
                acessa sozinho — sem instalar nada.
              </p>
              <p>
                Continuamos anfitriões. Toda decisão de produto passa pelo teste
                de quem vai usar aquilo às onze da noite, no celular, entre um
                check-in e outro.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-border bg-muted/50 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">
                Em uma frase
              </p>
              <p className="mt-4 text-xl font-bold leading-snug">
                Menos burocracia para o anfitrião, mais autonomia para o hóspede.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, description }) => (
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
      </Section>
    </PageShell>
  );
}
