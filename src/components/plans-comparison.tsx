"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";

import { COMPARISON } from "@/lib/plans";

const GRID =
  "mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_5.5rem_5.5rem] items-center gap-x-4 px-5 sm:grid-cols-[minmax(0,1fr)_22%_22%] lg:px-8";

function Cell({ included, plan }: { included: boolean; plan: string }) {
  return (
    <div className="text-center">
      {included ? (
        <span className="inline-grid size-6 place-items-center rounded-full bg-emerald-50 dark:bg-emerald-500/15">
          <Check
            className="size-3.5 text-emerald-600 dark:text-emerald-400"
            strokeWidth={3}
          />
          <span className="sr-only">Incluído no plano {plan}</span>
        </span>
      ) : (
        <>
          <span className="text-muted-foreground" aria-hidden>
            —
          </span>
          <span className="sr-only">Não incluído no plano {plan}</span>
        </>
      )}
    </div>
  );
}

export function PlansComparison() {
  return (
    <section className="bg-background pb-28 pt-12">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Compare os planos
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Tudo que cada plano oferece, lado a lado — escolha o que faz sentido
            para o seu momento.
          </p>
        </motion.div>
      </div>

      <div className="mt-12">
        <div className={`${GRID} pb-3`}>
          <div />
          <div className="text-center text-[15px] font-semibold">Essencial</div>
          <div className="text-center text-[15px] font-semibold">
            Profissional
          </div>
        </div>

        <div className="border-t border-border">
          {COMPARISON.map((group) => (
            <div key={group.group}>
              <div className="border-b border-border bg-muted/70">
                <div className="mx-auto max-w-5xl px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground lg:px-8">
                  {group.group}
                </div>
              </div>
              {group.rows.map((row) => (
                <div
                  key={row.label}
                  className="border-b border-border transition-colors duration-200 hover:bg-muted/60"
                >
                  <div className={`${GRID} py-4`}>
                    <div className="text-[15px] leading-relaxed">
                      {row.label}
                    </div>
                    <Cell included={row.essencial} plan="Essencial" />
                    <Cell included={row.profissional} plan="Profissional" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
