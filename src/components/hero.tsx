"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

/** Nós decorativos (centro em % da seção) conectados por linhas no SVG abaixo. */
const NODES: { icon: LucideIcon; x: number; y: number; delay: number }[] = [
  // esquerda
  { icon: Bot, x: 14, y: 24, delay: 0.5 },
  { icon: MessageCircle, x: 7, y: 50, delay: 0.65 },
  { icon: CalendarCheck, x: 16, y: 78, delay: 0.8 },
  // direita
  { icon: ShieldCheck, x: 86, y: 22, delay: 0.55 },
  { icon: Sparkles, x: 93, y: 48, delay: 0.7 },
  { icon: Wallet, x: 84, y: 76, delay: 0.85 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [3, 4],
  [4, 5],
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* grid de pontos, esmaecendo atrás do texto */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in oklab, var(--foreground) 14%, transparent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 55% 60% at 50% 42%, transparent 30%, #000 78%), linear-gradient(to bottom, #000 55%, transparent 96%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 60% at 50% 42%, transparent 30%, #000 78%), linear-gradient(to bottom, #000 55%, transparent 96%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      {/* linhas conectando os nós */}
      <svg
        aria-hidden
        className="absolute inset-0 -z-10 hidden size-full text-border lg:block"
      >
        {EDGES.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={`${NODES[a].x}%`}
            y1={`${NODES[a].y}%`}
            x2={`${NODES[b].x}%`}
            y2={`${NODES[b].y}%`}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      {/* nós */}
      {NODES.map(({ icon: Icon, x, y, delay }, i) => (
        <motion.span
          key={`${x}-${y}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, i % 2 ? 16 : -16, 0] }}
          transition={{
            opacity: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            scale: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            y: {
              delay,
              duration: 4.5 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{ left: `${x}%`, top: `${y}%` }}
          className="absolute hidden size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-background shadow-lg shadow-black/5 lg:grid"
        >
          <Icon className="size-5 text-brand" strokeWidth={1.75} />
        </motion.span>
      ))}

      <div className="mx-auto max-w-7xl px-5 pb-32 pt-40 lg:px-8 lg:pb-40 lg:pt-48">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-sm"
          >
            Gestão completa de Airbnb
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-sans text-5xl font-extrabold leading-[1.04] sm:text-6xl lg:text-7xl"
          >
            Tudo que você precisa para cuidar do seu imóvel
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Responda hóspedes, confirme reservas, envie as regras da casa e
            acione a equipe de limpeza —{" "}
            <span className="italic">tudo de forma automática</span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <Button size="lg">
              Começar 15 dias grátis
              <ArrowRight className="size-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
