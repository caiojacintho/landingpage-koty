"use client";

import { useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  Home,
  Images,
  Map as MapIcon,
  Menu as MenuIcon,
  Phone,
  ScrollText,
  Search,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  CONDO_RULES,
  CONTACTS,
  FAQS,
  HOUSE_RULES,
  PHOTOS,
  PLACES,
  PROPERTY,
  WIFI,
} from "./demo-data";

/** Card branco padrão do guia. */
const CARD =
  "rounded-2xl bg-white border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.06)]";

const TABS = [
  { id: "inicio", label: "Início", icon: Home },
  { id: "locais", label: "Explorar", icon: MapIcon },
  { id: "fotos", label: "Fotos", icon: Images },
  { id: "regras", label: "Regras", icon: ScrollText },
  { id: "contato", label: "Contato", icon: Phone },
];

/** Título de seção com chevron — no produto leva para a página completa. */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1 self-start">
      <h2 className="text-sm font-semibold">{children}</h2>
      <ChevronRight className="size-4" />
    </div>
  );
}

/** Lista sanfonada usada em regras, condomínio e FAQ (3 itens, como no produto). */
function RuleList({ items }: { items: { title: string; subtitle: string }[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  return (
    <div className="mt-1 flex flex-col gap-2">
      {items.slice(0, 3).map((item, i) => {
        const expanded = open.has(i);
        return (
          <button
            key={item.title}
            onClick={() =>
              setOpen((prev) => {
                const next = new Set(prev);
                if (next.has(i)) next.delete(i);
                else next.add(i);
                return next;
              })
            }
            className={cn(
              CARD,
              "flex w-full flex-col gap-1.5 px-4 py-4 text-left transition-colors hover:bg-stone-50",
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold leading-snug">{item.title}</p>
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 text-stone-400 transition-transform",
                  expanded && "rotate-180",
                )}
              />
            </div>
            {expanded && (
              <p className="text-sm leading-relaxed text-stone-500">
                {item.subtitle}
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default function GuiaDemoPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [copied, setCopied] = useState<string | null>(null);

  const categories = useMemo(() => {
    const seen = new globalThis.Map<string, string>();
    PLACES.forEach((p) => seen.set(p.category, p.categoryLabel));
    return [["all", "Todos"] as [string, string], ...seen.entries()];
  }, []);

  const places =
    activeCategory === "all"
      ? PLACES
      : PLACES.filter((p) => p.category === activeCategory);

  const copy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(field);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* clipboard indisponível — silencioso, igual ao produto */
    }
  };

  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto [scrollbar-width:none]">
        {/* ---- Header ---- */}
        <div className="shrink-0 bg-[#FAFAFA] px-4 pt-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-black/[0.07] bg-gradient-to-br from-brand to-brand-strong text-sm font-medium text-white shadow-sm">
                {PROPERTY.host.initial}
              </span>
              <span className="min-w-0 truncate text-sm font-semibold">
                {PROPERTY.host.name}
              </span>
            </div>
            <span className="grid size-10 shrink-0 place-items-center rounded-full">
              <MenuIcon className="size-4" strokeWidth={1.75} />
            </span>
          </div>

          <div className="mt-6">
            <p className="text-sm leading-none text-stone-500">
              {PROPERTY.greeting}
            </p>
            <h1 className="mt-0 text-2xl font-bold leading-tight">
              {PROPERTY.name}
            </h1>
          </div>
        </div>

        {/* ---- Conteúdo ---- */}
        <div className="relative z-10 -mt-1 flex flex-col gap-5 bg-[#FAFAFA] px-4 pb-0">
          {/* Busca */}
          <div className="flex w-full shrink-0 items-center gap-2.5 rounded-full border border-black/[0.08] bg-white px-5 py-4">
            <Search className="size-4 shrink-0 text-stone-400" />
            <span className="flex-1 text-sm text-stone-400">
              O que você procura?
            </span>
          </div>

          {/* Explore a região */}
          <section className="flex shrink-0 flex-col">
            <div className="mb-2">
              <SectionTitle>Explore a região</SectionTitle>
            </div>

            <div className="-mx-4 mb-2 flex gap-2 overflow-x-auto px-4 py-1 pb-2 [scrollbar-width:none]">
              {categories.map(([cat, label]) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "shrink-0 whitespace-nowrap rounded-full border bg-white px-4 py-2 text-xs transition-colors",
                    activeCategory === cat
                      ? "border-stone-900/40 font-semibold text-stone-900"
                      : "border-black/[0.12] font-medium text-stone-500 hover:border-black/25 hover:text-stone-900",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
              {places.map((place) => {
                const Icon = place.icon;
                return (
                  <div
                    key={place.name}
                    className="flex w-44 shrink-0 flex-col text-left"
                  >
                    <div className="grid aspect-square w-full place-items-center overflow-hidden rounded-xl bg-stone-100">
                      <Icon className="size-10 text-stone-300" />
                    </div>
                    <div className="flex flex-col gap-1 pt-2.5">
                      <p className="line-clamp-2 text-base font-bold leading-tight">
                        {place.name}
                      </p>
                      <p className="line-clamp-2 text-xs leading-snug text-stone-400">
                        {place.address}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="w-1 shrink-0" />
            </div>
          </section>

          {/* Card Check-in / Check-out */}
          <div
            className={cn(
              "flex w-full shrink-0 items-center gap-3.5 px-3 py-2 text-left",
              CARD,
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/guia/door.png"
              alt="Check-in"
              className="size-12 shrink-0 rounded-xl object-cover"
            />
            <span className="flex-1 text-sm font-semibold leading-snug">
              Como fazer check-in e check-out
            </span>
          </div>

          {/* Informações úteis */}
          <section className="shrink-0">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold">Informações úteis</h2>
            </div>

            <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
              {/* Endereço */}
              <div
                className={cn(
                  CARD,
                  "flex min-h-[100px] w-48 shrink-0 flex-col justify-center p-4",
                )}
              >
                <p className="text-xs font-medium text-stone-500">Endereço</p>
                <p className="mt-1 line-clamp-3 text-sm font-semibold leading-snug">
                  {PROPERTY.address}
                </p>
              </div>

              {/* Wi-Fi */}
              <div
                className={cn(
                  CARD,
                  "flex min-h-[100px] w-48 shrink-0 flex-col justify-center gap-2.5 p-4",
                )}
              >
                {[
                  { label: "Rede", value: WIFI.network, field: "rede" },
                  { label: "Senha", value: WIFI.password, field: "senha" },
                ].map(({ label, value, field }) => (
                  <div
                    key={field}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-stone-500">
                        {label}
                      </p>
                      <p className="truncate text-sm font-semibold">{value}</p>
                    </div>
                    <button
                      onClick={() => copy(value, field)}
                      aria-label={`Copiar ${label.toLowerCase()}`}
                      className="shrink-0 p-1 transition-opacity hover:opacity-70"
                    >
                      {copied === field ? (
                        <Check className="size-4 text-green-500" />
                      ) : (
                        <Copy className="size-4 text-stone-400" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Contato */}
              <div
                className={cn(
                  CARD,
                  "flex min-h-[100px] w-48 shrink-0 flex-col justify-center gap-2 p-4",
                )}
              >
                {CONTACTS.map((c) => (
                  <div key={c.name} className="min-w-0">
                    <p className="truncate text-[10px] text-stone-500">
                      {c.name}
                    </p>
                    <p className="text-sm font-semibold">{c.phone}</p>
                  </div>
                ))}
              </div>

              <div className="w-1 shrink-0" />
            </div>
          </section>

          {/* Sobre a casa */}
          <section className="flex shrink-0 flex-col gap-1 pb-4">
            <SectionTitle>Sobre a casa</SectionTitle>
            <RuleList items={HOUSE_RULES} />
          </section>

          {/* Fotos do imóvel */}
          <section className="flex shrink-0 flex-col">
            <div className="mb-2">
              <SectionTitle>Fotos do imóvel</SectionTitle>
            </div>
            <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
              {PHOTOS.map((photo) => (
                <div key={photo.name} className="w-40 shrink-0">
                  <div
                    className={cn(
                      "aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br",
                      photo.tint,
                    )}
                  />
                </div>
              ))}
              <div className="w-1 shrink-0" />
            </div>
          </section>

          {/* Regras do condomínio */}
          <section className="flex shrink-0 flex-col gap-1 pb-4">
            <SectionTitle>Regras do condomínio</SectionTitle>
            <RuleList items={CONDO_RULES} />
          </section>

          {/* Perguntas frequentes */}
          <section className="flex shrink-0 flex-col gap-1">
            <SectionTitle>Perguntas frequentes</SectionTitle>
            <RuleList
              items={FAQS.map((f) => ({
                title: f.question,
                subtitle: f.answer,
              }))}
            />
          </section>

          {/* Espaço para o bottom nav */}
          <div className="h-24 shrink-0" />
        </div>
      </div>

      {/* ---- Bottom nav ---- */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 px-4 pb-3 pt-2">
        <div className="flex items-center justify-around rounded-3xl border border-black/[0.07] bg-white px-2 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
          {TABS.map(({ id, label, icon: Icon }) => (
            <span
              key={id}
              aria-label={label}
              className="flex flex-col items-center rounded-2xl px-4 py-2"
            >
              <Icon
                className={cn(
                  "size-5",
                  id === "inicio" ? "text-stone-900" : "text-stone-400/60",
                )}
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
