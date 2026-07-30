"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { KotyLogo } from "@/components/koty-logo";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Plataforma", href: "/plataforma" },
  { label: "Guia da casa", href: "/guia-da-casa" },
  { label: "Preço", href: "/planos" },
  { label: "Quem somos", href: "/quem-somos" },
];

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(solid || window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-background/90 text-foreground backdrop-blur-md border-b border-border"
          : "bg-transparent text-white",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center gap-8 px-5 lg:px-8">
        <Link href="/" aria-label="Koty — início" className="shrink-0">
          <KotyLogo className="h-7 w-auto" onBrand={!scrolled} />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Button
            variant="outline"
            size="md"
            className={cn(
              "hidden sm:inline-flex",
              scrolled ? "border-border" : "border-white/70 text-white",
            )}
          >
            Acesse sua conta
          </Button>

          <Button size="md" className="hidden sm:inline-flex">
            Comece grátis
          </Button>

          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background text-foreground border-t border-border px-5 py-6">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button variant="outline" size="md" className="border-border">
              Acesse sua conta
            </Button>
            <Button size="md">Comece grátis</Button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
