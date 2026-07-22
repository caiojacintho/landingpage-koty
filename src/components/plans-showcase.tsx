"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SHOWCASE = [
  {
    id: "essencial",
    tab: "Essencial",
    title: "Koty Essencial",
    description:
      "Calendário unificado, Guia da Casa e checklists da equipe. Ideal para quem já recebe hóspedes e quer tirar a rotina manual do caminho.",
    footnote: "A partir de 12% por reserva confirmada",
    image: "/planos/essencial.png",
  },
  {
    id: "profissional",
    tab: "Profissional",
    title: "Koty Profissional",
    description:
      "Tudo do Essencial mais atendimento aos hóspedes 24/7, check-in digital e limpeza acionada a cada saída. A operação inteira sai da sua mão.",
    footnote: "A partir de 18% por reserva confirmada",
    image: "/planos/profissional.png",
  },
];

export function PlansShowcase() {
  const [active, setActive] = useState(SHOWCASE[0].id);
  const plan = SHOWCASE.find((p) => p.id === active) ?? SHOWCASE[0];

  return (
    <section
      id="planos"
      className="relative isolate overflow-hidden bg-brand py-20 text-white lg:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,var(--brand-strong)_0%,var(--brand)_55%)]"
      />
      <div
        aria-hidden
        className="absolute -right-40 -top-40 -z-10 size-[46rem] rounded-full border border-white/12"
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Escolha o plano que combina com seu imóvel
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">
            Do apartamento único à carteira com dezenas de unidades, a Koty tem
            um formato de gestão para o seu momento.
          </p>
        </motion.div>

        {/* abas */}
        <div
          role="tablist"
          aria-label="Planos da Koty"
          className="mt-9 flex flex-wrap gap-2.5"
        >
          {SHOWCASE.map((p) => {
            const selected = p.id === active;
            return (
              <button
                key={p.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(p.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors",
                  selected
                    ? "border-white bg-white/10"
                    : "border-white/40 text-white/70 hover:border-white/70 hover:text-white",
                )}
              >
                {selected && (
                  <span className="size-1.5 rounded-full bg-white" />
                )}
                {p.tab}
              </button>
            );
          })}
        </div>

        {/* conteúdo */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:order-1"
            >
              <h3 className="text-3xl font-extrabold">{plan.title}</h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85 lg:text-base">
                {plan.description}
              </p>
              <Button
                size="lg"
                className="mt-8 bg-white text-brand hover:bg-white/90"
              >
                Conhecer planos
                <ArrowRight className="size-4" />
              </Button>
            </motion.div>
          </AnimatePresence>

          <div className="relative lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.94, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: -8 }}
                exit={{ opacity: 0, scale: 0.94, rotate: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto aspect-[1.586/1] w-full max-w-md rounded-2xl bg-gradient-to-br from-white/35 to-white/10 p-6 shadow-2xl shadow-black/25 backdrop-blur-sm"
                style={{
                  backgroundImage: `url('${plan.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex h-full flex-col">
                  <span className="text-lg font-extrabold tracking-tight">
                    koty
                  </span>
                  <span className="mt-auto text-[11px] uppercase tracking-[0.2em] text-white/80">
                    {plan.tab}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-start gap-2 lg:justify-end">
              <Sparkles className="mt-0.5 size-4 shrink-0" />
              <div className="text-xs">
                <p className="font-semibold uppercase tracking-[0.14em]">
                  Koty {plan.tab}
                </p>
                <p className="mt-1 text-white/80">{plan.footnote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
