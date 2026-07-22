import type { Metadata } from "next";
import { LifeBuoy, MessageCircle, Rocket } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contato — Koty",
  description:
    "Fale com o time da Koty sobre a plataforma, suporte ou parcerias.",
};

const CHANNELS = [
  {
    icon: Rocket,
    title: "Quero começar",
    description:
      "Teste a plataforma por 15 dias, sem cartão. Se preferir, marcamos uma demonstração.",
  },
  {
    icon: LifeBuoy,
    title: "Já sou cliente",
    description:
      "Suporte por e-mail em todos os planos e por WhatsApp no plano Profissional.",
  },
  {
    icon: MessageCircle,
    title: "Parcerias e imprensa",
    description:
      "Conte o que tem em mente que direcionamos para a pessoa certa do time.",
  },
];

export default function ContatoPage() {
  return (
    <PageShell
      eyebrow="Contato"
      title="Fale com a gente"
      description="Time pequeno, resposta rápida. Conte o seu caso que respondemos em até um dia útil."
    >
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="space-y-8">
              {CHANNELS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-strong text-white shadow-md shadow-brand/25">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
