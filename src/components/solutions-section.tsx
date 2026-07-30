"use client";

import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  CalendarSync,
  QrCode,
  Smartphone,
  Star,
  Wallet,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { PhoneMockup } from "@/components/phone-mockup";
import { cn } from "@/lib/utils";

type Block = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  href: string;
  bullets: { icon: LucideIcon; text: string }[];
};

const BLOCKS: Block[] = [
  {
    id: "anfitriao",
    icon: Smartphone,
    title: "Tudo o que sua operação precisa, em um só lugar",
    description:
      "A Koty reúne calendário, hóspedes, checklists da equipe e financeiro em uma experiência simples e completa.",
    cta: "Conheça a plataforma da Koty",
    href: "/#gestao",
    bullets: [
      { icon: CalendarSync, text: "Calendário sincronizado com Airbnb e Booking" },
      {
        icon: Wallet,
        text: "Controle total da sua receita direto na plataforma",
      },
    ],
  },
  {
    id: "guia-da-casa",
    icon: BookOpen,
    title: "O que o hóspede vê quando chega",
    description:
      "Tudo o que ele precisa saber já está lá: senha do Wi-Fi, como entrar, como ligar o ar, as regras da casa e o que fazer no bairro. Ele resolve sozinho, na hora — e você para de responder as mesmas perguntas a cada reserva.",
    cta: "Veja um Guia da Casa",
    href: "/guia-da-casa/demo",
    bullets: [
      {
        icon: QrCode,
        text: "Aponta a câmera e pronto: sem app, sem senha, em qualquer idioma",
      },
      {
        icon: Star,
        text: "Hóspede que não fica na dúvida deixa avaliação 5 estrelas",
      },
    ],
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

export function SolutionsSection() {
  const bandRef = useRef<HTMLDivElement>(null);

  // O celular acompanha o scroll: fica preso no centro da tela e faz um
  // leve movimento vertical/rotação enquanto a faixa passa.
  const { scrollYProgress } = useScroll({
    target: bandRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });
  const y = useTransform(smooth, [0, 1], [24, -24]);

  return (
    <section id="checklists" className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-14 lg:px-8 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 lg:grid-cols-12 lg:items-start"
        >
          <h2 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:col-span-8 lg:text-6xl">
            Soluções para você e para o seu negócio
          </h2>
          <div className="lg:col-span-4 lg:pt-3">
            <p className="text-sm font-bold uppercase leading-relaxed tracking-[0.1em]">
              Uma gestão pra cada momento da sua vida de anfitrião.
            </p>
            <span className="mt-4 block h-px w-8 bg-brand" />
          </div>
        </motion.div>
      </div>

      <div ref={bandRef} className="rounded-[2.5rem] bg-peach lg:rounded-[3.5rem]">
        <div className="mx-auto max-w-7xl px-5 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          {/* Celular único, compartilhado pelos dois blocos */}
          <div className="flex justify-center pt-16 lg:col-span-4 lg:col-start-5 lg:row-span-2 lg:row-start-1 lg:py-24">
            {/* 15.5rem ≈ metade da altura do mockup, para centralizar na viewport */}
            <div className="self-start lg:sticky lg:top-[max(8rem,calc(50vh-15.5rem))]">
              <motion.div style={{ y }}>
                <PhoneMockup />
              </motion.div>
            </div>
          </div>

          {BLOCKS.map((block, i) => {
            const Icon = block.icon;
            const first = i === 0;
            return (
              <div key={block.id} className="contents">
                {/* texto */}
                <motion.div
                  {...reveal}
                  className={cn(
                    "flex flex-col justify-center pt-14 lg:col-span-4 lg:min-h-[85vh] lg:pt-0",
                    first
                      ? "lg:col-start-1 lg:row-start-1"
                      : "lg:col-start-1 lg:row-start-2 lg:border-t lg:border-foreground/10",
                  )}
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-strong text-white shadow-md shadow-brand/25">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-7 text-3xl font-extrabold leading-[1.1] lg:text-[2.1rem]">
                    {block.title}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground lg:text-base">
                    {block.description}
                  </p>
                  <a
                    href={block.href}
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand hover:underline"
                  >
                    {block.cta}
                    <ArrowRight className="size-4" />
                  </a>
                </motion.div>

                {/* bullets */}
                <motion.ul
                  {...reveal}
                  className={cn(
                    "flex flex-col justify-center gap-10 pt-12 pb-16 lg:col-span-4 lg:min-h-[85vh] lg:py-0",
                    first
                      ? "lg:col-start-9 lg:row-start-1"
                      : "lg:col-start-9 lg:row-start-2 lg:border-t lg:border-foreground/10",
                  )}
                >
                  {block.bullets.map(({ icon: BulletIcon, text }) => (
                    <li
                      key={text}
                      className="max-w-xs rounded-xl bg-background/55 p-5 backdrop-blur-sm"
                    >
                      <BulletIcon className="size-5 text-brand" strokeWidth={1.75} />
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {text}
                      </p>
                    </li>
                  ))}
                </motion.ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
