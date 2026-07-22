import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Guia da Casa — exemplo | Koty",
  description:
    "Veja como é o Guia da Casa que o seu hóspede acessa: Wi-Fi, check-in, regras, fotos e dicas do bairro em um só link.",
};

/**
 * O guia é uma experiência de celular. No desktop ele aparece dentro de uma
 * moldura centralizada — mesmo enquadramento do produto real.
 */
export default function GuiaDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[100dvh] items-center justify-center overflow-hidden bg-[#FAFAFA] text-neutral-900 md:bg-stone-100 md:p-5">
      <Link
        href="/guia-da-casa"
        aria-label="Voltar"
        className="absolute left-5 top-5 z-20 hidden size-10 items-center justify-center rounded-full bg-white text-stone-700 shadow-md ring-1 ring-black/10 transition-colors hover:bg-stone-50 md:flex"
      >
        <ArrowLeft className="size-5" />
      </Link>

      <span className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-stone-500 shadow-sm ring-1 ring-black/5 backdrop-blur md:block">
        Exemplo de Guia da Casa — os dados abaixo são fictícios
      </span>

      <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#FAFAFA] md:h-[calc(100dvh-2.5rem)] md:max-w-[390px] md:rounded-3xl md:shadow-2xl md:ring-1 md:ring-black/10">
        {children}
      </div>
    </div>
  );
}
