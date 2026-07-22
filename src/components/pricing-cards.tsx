"use client";

import { useState } from "react";
import NumberFlow from "@number-flow/react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";

import { ANNUAL_DISCOUNT, PLANS } from "@/lib/plans";
import { cn } from "@/lib/utils";

export function PricingCards() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="bg-background pt-32 pb-16 lg:pt-40">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
            Preços
          </h1>

          {/* toggle mensal / anual */}
          <div
            role="radiogroup"
            aria-label="Ciclo de cobrança"
            className="mx-auto mt-8 inline-flex rounded-full bg-muted p-1"
          >
            {[
              { label: "Mensal", value: false },
              { label: "Anual", value: true },
            ].map((opt) => {
              const selected = annual === opt.value;
              return (
                <button
                  key={opt.label}
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setAnnual(opt.value)}
                  className={cn(
                    "relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors",
                    selected
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {selected && (
                    <motion.span
                      layoutId="billing-pill"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                      className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-neutral-700"
                    />
                  )}
                  <span className="relative">
                    {opt.label}
                    {opt.value && (
                      <span
                        className={cn(
                          "ml-2 font-semibold",
                          selected ? "text-emerald-300" : "text-emerald-600",
                        )}
                      >
                        -{Math.round(ANNUAL_DISCOUNT * 100)}%
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            7 dias grátis · cancele quando quiser
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PLANS.map((plan, i) => {
            const price = annual
              ? plan.monthly * (1 - ANNUAL_DISCOUNT)
              : plan.monthly;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-neutral-900 px-4 py-1.5 text-xs font-medium text-white dark:bg-neutral-700">
                    Mais Popular
                  </span>
                )}

                <div
                  className={cn(
                    "flex h-full flex-col rounded-2xl border bg-card p-7 sm:p-8",
                    plan.popular ? "border-neutral-900/25" : "border-border",
                  )}
                >
                  <span className="self-start rounded-full bg-neutral-900 px-3.5 py-1.5 text-xs font-medium text-white dark:bg-neutral-700">
                    {plan.name}
                  </span>

                  <h2 className="mt-6 text-xl font-bold tracking-tight">
                    {plan.headline}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>

                  <div className="mt-8 flex items-end gap-1.5">
                    <NumberFlow
                      value={price}
                      format={{
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }}
                      locales="pt-BR"
                      className="text-5xl font-bold tracking-tight lg:text-[3.4rem]"
                    />
                    <span className="pb-2 text-sm text-muted-foreground">
                      /mês /imóvel
                    </span>
                  </div>
                  {annual && (
                    <p className="mt-2 text-xs text-emerald-600">
                      Cobrado anualmente ·{" "}
                      {(plan.monthly * 12 * (1 - ANNUAL_DISCOUNT)).toLocaleString(
                        "pt-BR",
                        { style: "currency", currency: "BRL" },
                      )}{" "}
                      por ano
                    </p>
                  )}

                  <ul className="mt-8 flex-1 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-foreground"
                          strokeWidth={2}
                        />
                        <span className="text-[15px] leading-relaxed text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-8 inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 text-[15px] font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-700 dark:hover:bg-neutral-600">
                    Começar 7 dias grátis
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
