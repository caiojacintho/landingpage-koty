"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";

import { COMPARISON } from "@/lib/plans";

function Cell({ included, plan }: { included: boolean; plan: string }) {
  return (
    <td className="px-4 py-4 text-center align-middle">
      {included ? (
        <span className="inline-grid size-6 place-items-center rounded-full bg-emerald-50 dark:bg-emerald-500/15">
          <Check
            className="size-3.5 text-emerald-600 dark:text-emerald-400"
            strokeWidth={3}
          />
          <span className="sr-only">Incluído no plano {plan}</span>
        </span>
      ) : (
        <span className="text-muted-foreground" aria-hidden>
          —
        </span>
      )}
      {!included && (
        <span className="sr-only">Não incluído no plano {plan}</span>
      )}
    </td>
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

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-separate border-spacing-y-6 text-left">
            <thead>
              <tr>
                <th className="w-1/2" />
                <th className="w-1/4 px-4 pb-2 text-center text-[15px] font-semibold">
                  Essencial
                </th>
                <th className="w-1/4 px-4 pb-2 text-center text-[15px] font-semibold">
                  Profissional
                </th>
              </tr>
            </thead>

            {COMPARISON.map((group) => (
              <tbody key={group.group} className="align-middle">
                <tr>
                  <td colSpan={3} className="p-0">
                    <div className="overflow-hidden rounded-xl border border-border">
                      <table className="w-full table-fixed">
                        <tbody>
                          <tr className="bg-muted/70">
                            <td
                              colSpan={3}
                              className="px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground"
                            >
                              {group.group}
                            </td>
                          </tr>
                          {group.rows.map((row) => (
                            <tr
                              key={row.label}
                              className="border-t border-border"
                            >
                              <td className="w-1/2 px-5 py-4 text-[15px] leading-relaxed">
                                {row.label}
                              </td>
                              <Cell included={row.essencial} plan="Essencial" />
                              <Cell
                                included={row.profissional}
                                plan="Profissional"
                              />
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
}
