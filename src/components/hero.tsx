"use client";

import { ArrowRight, CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: "Mais segurança e controle" },
  { icon: Sparkles, label: "Plataforma completa para sua rotina" },
  { icon: CalendarCheck, label: "Sem taxa de adesão" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand text-white">
      {/* Fundo: brilho radial ao centro-direita + vinheta nas bordas */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundColor: "var(--brand)",
          backgroundImage: [
            // clarão principal, atrás do assunto da foto
            "radial-gradient(ellipse 62% 70% at 64% 42%, var(--brand-glow) 0%, color-mix(in oklab, var(--brand-glow) 45%, transparent) 38%, transparent 68%)",
            // vinheta: escurece progressivamente em direção às bordas
            "radial-gradient(ellipse 115% 105% at 58% 45%, transparent 22%, color-mix(in oklab, var(--brand-deep) 65%, transparent) 68%, var(--brand-deep) 100%)",
          ].join(", "),
        }}
      />
      {/* Foto sangrando pela direita — a máscara faz a borda esquerda
          desaparecer sem pintar cor por cima do gradiente. */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 hidden w-[52%] bg-[image:var(--hero-image)] bg-cover bg-center lg:block [--hero-image:url('/hero.jpg')]"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 22%, #000 45%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 22%, #000 45%)",
        }}
      />
      {/* Anéis decorativos */}
      <div
        aria-hidden
        className="absolute -right-24 top-1/3 -z-10 size-[38rem] rounded-full border border-white/15"
      />
      <div
        aria-hidden
        className="absolute -right-10 top-1/2 -z-10 size-[26rem] rounded-full border border-white/10"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-32 pt-40 lg:grid-cols-12 lg:px-8 lg:pb-44 lg:pt-48">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
          className="lg:col-span-6"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75"
          >
            Gestão completa de Airbnb
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-sans text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl"
          >
            Tudo que você precisa para cuidar do seu imóvel
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-md text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Responda hóspedes, confirme reservas, envie as regras da casa e
            acione a equipe de limpeza —{" "}
            <span className="italic">
              tudo de forma automática
            </span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <Button
              size="lg"
              className="bg-white text-brand shadow-lg shadow-black/10 hover:bg-white/90"
            >
              Começar 15 dias grátis
              <ArrowRight className="size-4" />
            </Button>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-6 lg:flex lg:items-end lg:justify-end">
          <motion.ul
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.1, delayChildren: 0.45 }}
            className="space-y-5 lg:pb-2"
          >
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <motion.li
                key={label}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 text-sm text-white/95"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/15 backdrop-blur-sm">
                  <Icon className="size-4.5" />
                </span>
                {label}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
