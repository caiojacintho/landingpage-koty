import {
  BarChart3,
  CalendarDays,
  Check,
  Home,
  Search,
  Settings,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

import { cn } from "@/lib/utils";

const NAV = [
  { icon: Home, label: "Início", active: false },
  { icon: CalendarDays, label: "Calendário", active: false },
  { icon: Sparkles, label: "Limpeza", active: true },
  { icon: Wrench, label: "Manutenção", active: false },
  { icon: BarChart3, label: "Financeiro", active: false },
  { icon: Users, label: "Equipe", active: false },
  { icon: Settings, label: "Ajustes", active: false },
];

const TASKS = [
  { title: "Vila Madalena · 302", meta: "Saída 11h · Ana", done: true },
  { title: "Pinheiros · Loft", meta: "Saída 11h · Jorge", done: true },
  { title: "Itaim · Cobertura", meta: "Saída 14h · Ana", done: false },
  { title: "Moema · 45B", meta: "Saída 15h · Equipe 2", done: false },
];

/**
 * Mockup de desktop com o painel do app.
 * Se `image` existir em /public, ela é sobreposta à UI fictícia.
 */
export function DesktopMockup({
  image,
  className,
}: {
  image?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        /* raio interno = raio externo - borda (14 - 6 = 8), senão o canto "descasa" */
        "w-[420px] shrink-0 rounded-[14px] border-[6px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-black/25",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[8px] bg-white">
        {/* barra de janela */}
        <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-2.5 py-1.5">
          <span className="size-1.5 rounded-full bg-neutral-300" />
          <span className="size-1.5 rounded-full bg-neutral-300" />
          <span className="size-1.5 rounded-full bg-neutral-300" />
          <span className="ml-2 rounded-full bg-white px-2 py-0.5 text-[6px] text-neutral-400">
            app.koty.com.br/limpeza
          </span>
        </div>

        <div className="flex min-h-[21rem] text-neutral-900">
          {/* sidebar */}
          <div className="w-[92px] shrink-0 border-r border-neutral-100 p-2.5">
            <span className="text-[11px] font-extrabold tracking-tight text-brand">
              koty
            </span>
            <div className="mt-3 flex flex-col gap-0.5">
              {NAV.map(({ icon: Icon, label, active }) => (
                <span
                  key={label}
                  className={cn(
                    "flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[6.5px] font-semibold",
                    active
                      ? "bg-brand/10 text-brand"
                      : "text-neutral-500",
                  )}
                >
                  <Icon className="size-2.5" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* conteúdo */}
          <div className="flex-1 p-3">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold">Limpeza de hoje</span>
              <span className="ml-auto flex items-center gap-1 rounded-full bg-neutral-100 px-1.5 py-0.5 text-[6px] text-neutral-400">
                <Search className="size-2" />
                Buscar
              </span>
              <span className="size-3.5 rounded-full bg-neutral-200" />
            </div>

            {/* métricas */}
            <div className="mt-2.5 grid grid-cols-3 gap-1.5">
              {[
                { value: "8", label: "Saídas" },
                { value: "6", label: "Concluídas" },
                { value: "2", label: "Em rota" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-neutral-200/80 px-2 py-1.5"
                >
                  <p className="text-[11px] font-bold leading-none">
                    {m.value}
                  </p>
                  <p className="mt-1 text-[6px] text-neutral-500">{m.label}</p>
                </div>
              ))}
            </div>

            {/* lista de tarefas */}
            <div className="mt-2.5 overflow-hidden rounded-lg border border-neutral-200/80">
              {TASKS.map((t, i) => (
                <div
                  key={t.title}
                  className={cn(
                    "flex items-center gap-2 px-2 py-1.5",
                    i > 0 && "border-t border-neutral-100",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-3 shrink-0 place-items-center rounded-full",
                      t.done ? "bg-brand text-white" : "bg-neutral-200",
                    )}
                  >
                    {t.done && <Check className="size-2" strokeWidth={4} />}
                  </span>
                  <span className="text-[6.5px] font-semibold">{t.title}</span>
                  <span className="ml-auto text-[6px] text-neutral-400">
                    {t.meta}
                  </span>
                </div>
              ))}
            </div>

            {/* comprovação */}
            <div className="mt-2.5 rounded-lg bg-gradient-to-br from-brand-soft to-brand/20 p-2.5">
              <p className="text-[6.5px] font-semibold text-brand">
                Comprovação por foto
              </p>
              <div className="mt-1.5 flex gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-6 flex-1 rounded bg-white/70"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* screenshot real (se existir) sobrepõe a UI fictícia */}
        {image && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url('${image}')` }}
          />
        )}
      </div>
    </div>
  );
}
