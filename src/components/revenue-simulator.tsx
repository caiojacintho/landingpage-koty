"use client";

import { useMemo, useState } from "react";
import NumberFlow from "@number-flow/react";
import { Check } from "lucide-react";
import { motion } from "motion/react";

import { PLANS } from "@/lib/plans";
import { cn, RANGE_CLASS, rangeProgressStyle } from "@/lib/utils";

const PERIODS = [
  { label: "6 meses", months: 6 },
  { label: "1 ano", months: 12 },
  { label: "2 anos", months: 24 },
  { label: "3 anos", months: 36 },
];

const DEFAULT_OCCUPANCY = 72; // ocupação média das propriedades geridas, em %

// A Koty não cobra comissão: o custo é a mensalidade fixa do plano Profissional.
const MONTHLY_PRICE =
  PLANS.find((p) => p.id === "profissional")?.monthly ?? 169.9;

const BENEFITS = [
  "Sem comissão sobre a sua receita",
  "Comece sem taxa de adesão",
  "Cancele quando quiser",
];

const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function RevenueSimulator() {
  const [rate, setRate] = useState(320);
  const [occupancy, setOccupancy] = useState(DEFAULT_OCCUPANCY);
  const [months, setMonths] = useState(12);

  const periodLabel =
    PERIODS.find((p) => p.months === months)?.label.toLowerCase() ?? "";

  const { gross, cost, net } = useMemo(() => {
    const nights = 30.4 * (occupancy / 100) * months;
    const gross = rate * nights;
    const cost = MONTHLY_PRICE * months;
    return { gross, cost, net: gross - cost };
  }, [rate, occupancy, months]);

  return (
    <section id="resultados" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
            Simulador de receita
          </p>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl">
            Descubra quanto seu imóvel pode render
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Ajuste a diária média e o período para ver a projeção de receita
            com a Koty te ajudando a cuidar da operação.
          </p>

          <ul className="mt-8 space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm">
                <Check className="size-4 shrink-0 text-brand" strokeWidth={2.5} />
                {b}
              </li>
            ))}
          </ul>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <div className="rounded-xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-8">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Calculadora de receita
            </p>

            {/* diária */}
            <div className="mt-7">
              <div className="flex items-baseline justify-between">
                <label htmlFor="diaria" className="text-sm text-muted-foreground">
                  Diária média
                </label>
                <span className="text-xl font-bold tabular-nums">
                  {brl(rate)}
                </span>
              </div>
              <input
                id="diaria"
                type="range"
                min={80}
                max={1500}
                step={10}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className={RANGE_CLASS}
                style={rangeProgressStyle(rate, 80, 1500)}
              />
              <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                <span>R$ 80</span>
                <span>R$ 1.500</span>
              </div>
            </div>

            {/* ocupação */}
            <div className="mt-7">
              <div className="flex items-baseline justify-between">
                <label
                  htmlFor="ocupacao"
                  className="text-sm text-muted-foreground"
                >
                  Taxa de ocupação
                </label>
                <span className="text-xl font-bold tabular-nums">
                  {occupancy}%
                </span>
              </div>
              <input
                id="ocupacao"
                type="range"
                min={0}
                max={100}
                step={1}
                value={occupancy}
                onChange={(e) => setOccupancy(Number(e.target.value))}
                className={RANGE_CLASS}
                style={rangeProgressStyle(occupancy, 0, 100)}
              />
              <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>

            {/* período */}
            <div className="mt-8">
              <p className="text-sm text-muted-foreground">
                Por quanto tempo quer projetar?
              </p>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {PERIODS.map((p) => (
                  <button
                    key={p.months}
                    type="button"
                    onClick={() => setMonths(p.months)}
                    aria-pressed={months === p.months}
                    className={cn(
                      "h-10 rounded-lg text-sm font-medium transition-colors",
                      months === p.months
                        ? "bg-foreground text-background"
                        : "bg-muted text-foreground hover:bg-foreground/10",
                    )}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* resultado */}
            <div className="mt-8 rounded-lg bg-muted p-5">
              <p className="text-sm text-muted-foreground">
                Receita líquida projetada
              </p>
              <NumberFlow
                value={net}
                format={{
                  style: "currency",
                  currency: "BRL",
                  maximumFractionDigits: 0,
                }}
                locales="pt-BR"
                className="mt-1 block text-4xl font-extrabold tracking-tight"
              />

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Receita bruta</p>
                  <NumberFlow
                    value={gross}
                    format={{
                      style: "currency",
                      currency: "BRL",
                      maximumFractionDigits: 0,
                    }}
                    locales="pt-BR"
                    className="mt-1 block font-bold"
                  />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Assinatura Koty {periodLabel}
                  </p>
                  {gross > 0 && (
                    <span className="mt-1 inline-flex items-center rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand">
                      {((cost / gross) * 100).toLocaleString("pt-BR", {
                        maximumFractionDigits: 1,
                      })}
                      % da receita bruta
                    </span>
                  )}
                  <NumberFlow
                    value={cost}
                    format={{
                      style: "currency",
                      currency: "BRL",
                      maximumFractionDigits: 0,
                    }}
                    locales="pt-BR"
                    className="mt-1 block font-bold text-brand"
                  />
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-[11px] leading-relaxed text-muted-foreground">
              *A simulação é uma estimativa e não garante resultados futuros.
              Desconta apenas a mensalidade da Koty — não inclui impostos,
              limpeza nem taxas das plataformas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
