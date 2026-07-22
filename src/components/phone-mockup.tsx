import {
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Home,
  MessageSquare,
  Search,
  Settings,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

const QUICK = [
  { icon: CalendarDays, label: "Calendário" },
  { icon: BookOpen, label: "Guia" },
  { icon: Sparkles, label: "Limpeza" },
  { icon: BarChart3, label: "Financeiro" },
  { icon: MessageSquare, label: "Mensagens" },
];

const TABS = [
  { icon: Home, active: true },
  { icon: BarChart3, active: false },
  { icon: Store, active: false },
  { icon: Users, active: false },
  { icon: Settings, active: false },
];

/**
 * Mockup de celular com uma UI fictícia da plataforma (site responsivo).
 * Se `image` existir em /public, ela é sobreposta à UI fictícia.
 */
export function PhoneMockup({
  image,
  className,
}: {
  image?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-[248px] shrink-0 rounded-[2.4rem] border-[7px] border-neutral-900 bg-neutral-900 shadow-2xl shadow-black/25",
        className,
      )}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-neutral-900" />

      <div className="relative overflow-hidden rounded-[1.9rem] bg-white">
        <div className="flex min-h-[30rem] flex-col gap-3 p-3.5 pt-7 text-neutral-900">
          {/* topbar */}
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-extrabold tracking-tight text-brand">
              koty
            </span>
            <div className="ml-auto flex items-center gap-2 text-neutral-400">
              <Bell className="size-3.5" />
              <Search className="size-3.5" />
              <span className="size-4 rounded-full bg-neutral-200" />
            </div>
          </div>

          {/* chips */}
          <div className="flex gap-1.5 text-[7px] font-semibold">
            {["Imóvel 1", "Imóvel 2", "Todos"].map((c, i) => (
              <span
                key={c}
                className={cn(
                  "rounded-full px-2 py-1",
                  i === 0
                    ? "bg-brand/10 text-brand"
                    : "bg-neutral-100 text-neutral-500",
                )}
              >
                {c}
              </span>
            ))}
          </div>

          {/* saldo */}
          <div className="flex items-center rounded-xl border border-neutral-200/80 px-3 py-2.5">
            <span className="text-[13px] font-bold tracking-wider">
              R$ ●●●●●
            </span>
            <ChevronRight className="ml-auto size-3.5 text-neutral-400" />
          </div>

          {/* atalhos */}
          <div className="grid grid-cols-5 gap-1">
            {QUICK.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="grid size-8 place-items-center rounded-lg bg-neutral-100">
                  <Icon className="size-3.5 text-neutral-700" />
                </span>
                <span className="text-center text-[5.5px] leading-tight text-neutral-500">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* card: IA respondendo o hóspede */}
          <div className="overflow-hidden rounded-xl bg-gradient-to-br from-brand-soft to-brand/20 p-3">
            <p className="text-[7px] font-semibold text-brand">
              IA respondeu por você
            </p>
            <p className="mt-1.5 text-[6.5px] leading-relaxed text-neutral-700">
              “What&apos;s the wifi password?”
            </p>
            <p className="mt-1 text-[6.5px] leading-relaxed text-neutral-600">
              Respondido em inglês há 2 min, com a senha do Guia da Casa.
            </p>
            <span className="mt-2 inline-block rounded-full bg-brand px-2 py-1 text-[6px] font-semibold text-white">
              Ver conversa
            </span>
          </div>

          {/* checklist da equipe */}
          <div className="rounded-xl border border-neutral-200/80 p-2.5">
            <div className="flex items-center gap-1.5">
              <span className="size-4 rounded-full bg-brand/15" />
              <span className="text-[7px] font-semibold">
                Checklist de limpeza
              </span>
              <span className="ml-auto text-[6px] text-neutral-400">6 de 8</span>
            </div>
            <p className="mt-1.5 text-[6.5px] leading-relaxed text-neutral-500">
              Enviado à equipe no WhatsApp · fotos anexadas por cômodo.
            </p>
          </div>

          {/* bottom nav */}
          <div className="mt-auto flex items-center justify-between border-t border-neutral-100 px-2 pt-2.5">
            {TABS.map(({ icon: Icon, active }, i) => (
              <Icon
                key={i}
                className={cn(
                  "size-3.5",
                  active ? "text-brand" : "text-neutral-300",
                )}
              />
            ))}
          </div>
        </div>

        {/* screenshot real (se existir) sobrepõe a UI fictícia */}
        {image && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${image}')` }}
          />
        )}
      </div>
    </div>
  );
}
