"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Bot,
  CalendarDays,
  Check,
  ListChecks,
  MessageCircle,
  Sparkles,
  Wallet,
} from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const ROWS: {
  title: string;
  icon: LucideIcon;
  description: string;
}[] = [
  {
    title: "Calendário unificado",
    icon: CalendarDays,
    description: "Visualize entradas/saídas, diárias e status em segundos.",
  },
  {
    title: "Respostas automáticas",
    icon: Bot,
    description:
      "Nossa IA responde as perguntas que os hóspedes sempre fazem, 24h por dia.",
  },
  {
    title: "Mensagens via WhatsApp",
    icon: MessageCircle,
    description:
      "Envie instruções antes do check-in, lembretes e follow-up pós-checkout.",
  },
  {
    title: "Checklist de limpeza",
    icon: ListChecks,
    description: "Padronize cômodo por cômodo e registre evidências com fotos.",
  },
  {
    title: "Controle financeiro",
    icon: Wallet,
    description: "Dashboard com receita, despesas, ocupação e lucro por período.",
  },
  {
    title: "Guia da Casa",
    icon: BookOpen,
    description: "Crie um guia com regras, Wi-Fi, instruções e dicas locais.",
  },
];

export function BureaucracySection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-background pt-20 pb-32 lg:pt-28 lg:pb-44">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 lg:grid-cols-12 lg:items-start"
        >
          <div className="lg:col-span-8">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">
              <Sparkles className="size-4" />
              Cadastre seu imóvel
            </p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              Menos burocracia.
              <br />
              Mais reservas.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-2">
            <p className="text-sm font-bold uppercase leading-relaxed tracking-[0.1em]">
              Entre para a gestão de temporada mais moderna do Brasil
            </p>
            <span className="mt-4 block h-px w-8 bg-brand" />
          </div>
        </motion.div>
      </div>

      <ul className="mt-14 divide-y divide-border border-y border-border">
        {ROWS.map((row, i) => {
            const Icon = row.icon;
            const isActive = i === active;
            return (
              <motion.li
                key={row.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                className={cn(
                  "cursor-default py-7 outline-none transition-colors",
                  isActive && "bg-muted/60",
                )}
              >
                <div className="mx-auto grid max-w-7xl gap-4 px-5 lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-8">
                  <div className="flex items-center gap-3.5 lg:col-span-4">
                    <span
                      className={cn(
                        "grid size-6 shrink-0 place-items-center rounded-full border transition-colors",
                        isActive
                          ? "border-brand bg-brand text-white"
                          : "border-border text-muted-foreground",
                      )}
                    >
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-bold">{row.title}</span>
                  </div>

                  <p className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground lg:col-span-8">
                    <Icon
                      className={cn(
                        "mt-0.5 size-4 shrink-0 transition-colors",
                        isActive ? "text-brand" : "text-muted-foreground",
                      )}
                      strokeWidth={1.75}
                    />
                    {row.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
      </ul>
    </section>
  );
}
