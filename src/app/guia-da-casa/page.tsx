import type { Metadata } from "next";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
  ArrowRight,
  Bot,
  ClipboardList,
  Languages,
  MapPin,
  Wifi,
} from "lucide-react";
import QRCode from "react-qr-code";

import { PageShell, Section } from "@/components/page-shell";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Guia da Casa — Koty",
  description:
    "Um guia digital com regras, Wi-Fi, instruções e dicas locais, e uma IA que responde os hóspedes 24h por dia.",
};

/** TODO: trocar pela URL real do Guia da Casa de demonstração. */
const GUIA_DA_CASA_URL = "https://koty.com.br/guia-da-casa/demo";

const CARDS = [
  {
    icon: MapPin,
    title: "Mapa interativo",
    description:
      "Compartilhe as melhores dicas dos anfitriões — restaurantes, passeios e experiências únicas na região, direto no guia do hóspede.",
  },
  {
    icon: ClipboardList,
    title: "Formulário de entrada",
    description:
      "Colete antecipadamente os dados dos hóspedes e veículos e envie automaticamente para a portaria do seu condomínio.",
  },
  {
    icon: Bot,
    title: "IA mensageiro",
    description:
      "Nossa IA responde as dúvidas mais frequentes dos hóspedes, no idioma deles, a qualquer hora do dia ou da noite.",
  },
];

const CONTENT = [
  { icon: Wifi, label: "Wi-Fi e senha", detail: "Sem soletrar no WhatsApp." },
  {
    icon: ClipboardList,
    label: "Regras da casa",
    detail: "Horários, silêncio, pets e o que mais você definir.",
  },
  {
    icon: MapPin,
    label: "Instruções de entrada",
    detail: "Como chegar, onde estacionar e como abrir a porta.",
  },
  {
    icon: Languages,
    label: "Múltiplos idiomas",
    detail: "O guia se adapta ao idioma do hóspede.",
  },
];

export default function GuiaDaCasaPage() {
  return (
    <PageShell
      eyebrow="Guia da Casa"
      title="Antecipe as dúvidas dos hóspedes com um guia inteligente da casa"
      description="Wi-Fi, regras, instruções de entrada e dicas do bairro num link que o hóspede abre pelo celular — sem instalar aplicativo nenhum."
    >
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              Um QR code resolve a maior parte das mensagens
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Cole o código na porta da geladeira ou envie o link junto da
              confirmação. O hóspede aponta a câmera e encontra sozinho o que
              perguntaria para você.
            </p>

            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {CONTENT.map(({ icon: Icon, label, detail }) => (
                <li key={label} className="flex gap-3">
                  <Icon
                    className="mt-0.5 size-5 shrink-0 text-brand"
                    strokeWidth={1.75}
                  />
                  <div>
                    <p className="text-sm font-bold">{label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-border bg-muted/50 p-8">
              <div className="mx-auto grid size-40 place-items-center rounded-xl border border-border bg-white p-3">
                <QRCode
                  value={GUIA_DA_CASA_URL}
                  size={256}
                  bgColor="transparent"
                  fgColor="#171717"
                  style={{ height: "100%", width: "100%" }}
                  aria-label="QR code de acesso ao Guia da Casa de demonstração"
                />
              </div>
              <p className="mt-6 text-center font-semibold">
                Veja um Guia da Casa de exemplo
              </p>
              <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
                Aponte a câmera do celular ou abra pelo link.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!bg-cream">
        <h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
          E uma IA que responde mensagens 24h por dia — tudo via WhatsApp
        </h2>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group">
              <div className="overflow-hidden rounded-xl">
                <AspectRatio ratio={4 / 3.4}>
                  <div className="grid size-full place-items-center bg-background transition-transform duration-500 group-hover:scale-[1.03]">
                    <Icon
                      className="size-12 text-brand"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                  </div>
                </AspectRatio>
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>

        <Button asChild size="lg" className="mt-12">
          <Link href="/planos">
            Ver planos e preços
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Section>
    </PageShell>
  );
}
