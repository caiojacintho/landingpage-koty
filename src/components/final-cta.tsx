"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section id="cadastro" className="bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-6 sm:flex-row lg:px-8">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-strong text-white">
          <ShieldCheck className="size-5" />
        </span>
        <p className="text-center text-sm font-medium sm:text-left">
          Cadastre seu imóvel grátis, sem fidelidade e sem taxa de adesão
        </p>
        <Button size="lg" className="sm:ml-auto">
          Cadastrar meu imóvel
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
