"use client";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { DesktopMockup } from "@/components/desktop-mockup";
import { PhoneMockup } from "@/components/phone-mockup";

type Card = {
  title: string;
  description: string;
  image: string;
  /** Mostra o topo da plataforma dentro de um celular no lugar da foto. */
  phone?: boolean;
  /** Mostra o topo do painel web dentro de um monitor no lugar da foto. */
  desktop?: boolean;
};

const CARDS: Card[] = [
  {
    title: "Plataforma completa e intuitiva",
    description: "Controle total da sua operação de aluguel em um só lugar.",
    image: "/cards/app.png",
  },
  {
    title: "Painel financeiro",
    description:
      "Receita, despesas e lucro por período, sem depender de planilha.",
    image: "/cards/financeiro.jpg",
    phone: true,
  },
  {
    title: "Guia da Casa",
    description:
      "Regras, Wi-Fi, instruções e dicas locais num guia digital que o hóspede acessa por QR code.",
    image: "/cards/guia-da-casa.png",
  },
  {
    title: "Limpeza e manutenção",
    description: "Equipe acionada a cada saída, com checklist e comprovação.",
    image: "/cards/limpeza.jpg",
    desktop: true,
  },
];

export function SimplifySection() {
  return (
    <section
      id="gestao"
      className="relative z-10 -mt-12 rounded-t-[3rem] bg-background pb-24 pt-20 lg:pt-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Gestão feita
              <br />
              para simplificar
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              Tudo o que você precisa para ter mais controle, previsibilidade e
              rentabilidade no seu imóvel.
            </p>
            <a
              href="#resultados"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Conheça todas as vantagens
              <ArrowRight className="size-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:pt-3"
          >
            <p className="text-sm font-bold uppercase leading-relaxed tracking-[0.1em]">
              Menos tarefas manuais, mais tempo pra você.
            </p>
            <span className="mt-4 block h-px w-8 bg-brand" />
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="overflow-hidden rounded-xl">
                <AspectRatio ratio={4 / 3.4}>
                  {/* gradiente de fallback enquanto a foto real não existe */}
                  <div className="relative size-full overflow-hidden bg-neutral-100 transition-transform duration-500 group-hover:scale-[1.04] dark:bg-neutral-800">
                    {card.phone ? (
                      /* só o topo do celular aparece; o resto sai pelo rodapé */
                      <div className="absolute inset-x-0 top-12 flex justify-center">
                        <PhoneMockup className="origin-top scale-[0.78]" />
                      </div>
                    ) : card.desktop ? (
                      /* monitor ancorado à esquerda: sai pelo rodapé e pela direita */
                      <div className="absolute left-8 top-12">
                        <DesktopMockup className="origin-top-left scale-[0.85]" />
                      </div>
                    ) : (
                      <div
                        className="size-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${card.image}')` }}
                      />
                    )}
                  </div>
                </AspectRatio>
              </div>
              <h3 className="mt-5 text-lg font-bold">{card.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
