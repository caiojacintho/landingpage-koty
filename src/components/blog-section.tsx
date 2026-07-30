"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Post = {
  title: string;
  category: string;
  excerpt: string;
  href: string;
  /** classes do fundo da "capa" enquanto não há imagens reais */
  cover: string;
  dark?: boolean;
};

const POSTS: Post[] = [
  {
    title: "Automação",
    category: "Automação",
    excerpt: "Como automatizar o check-in e parar de enviar a mesma mensagem a cada reserva.",
    href: "/blog",
    cover: "bg-muted",
  },
  {
    title: "Operação",
    category: "Operação",
    excerpt: "Checklist de limpeza: o padrão que os super anfitriões seguem entre estadias.",
    href: "/blog",
    cover: "bg-muted",
  },
  {
    title: "Receita",
    category: "Receita",
    excerpt: "Como precificar suas diárias na alta temporada sem perder ocupação.",
    href: "/blog",
    cover: "bg-muted",
  },
  {
    title: "Hospitalidade",
    category: "Hospitalidade",
    excerpt: "Guia da Casa: menos perguntas no WhatsApp, mais avaliações 5 estrelas.",
    href: "/blog",
    cover: "bg-muted",
  },
  {
    title: "Comunicação",
    category: "Comunicação",
    excerpt: "Mensagens de WhatsApp que economizam horas do anfitrião toda semana.",
    href: "/blog",
    cover: "bg-muted",
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function BlogSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const step = card ? card.clientWidth + 24 : 360;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-background pb-28 lg:pb-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          {...reveal}
          className="grid gap-8 lg:grid-cols-12 lg:items-start"
        >
          <div className="lg:col-span-6">
            <h2 className="max-w-md text-3xl font-extrabold leading-[1.15] sm:text-4xl">
              Conteúdo para você hospedar cada vez melhor
            </h2>
            <Button size="md" className="mt-6" asChild>
              <a href="/blog">
                Visitar o blog
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">
            Dicas práticas de automação, limpeza, precificação e hospitalidade —
            escritas por quem hospeda há mais de 5 anos.
          </p>
        </motion.div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Artigos anteriores"
            className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Próximos artigos"
            className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>

        <motion.div
          {...reveal}
          ref={trackRef}
          className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {POSTS.map((post) => (
            <article
              key={post.excerpt}
              className="w-[75vw] max-w-xs shrink-0 snap-start sm:w-80"
            >
              <a href={post.href} className="group block">
                <div
                  className={cn(
                    "relative aspect-[3/4] overflow-hidden rounded-xl",
                    post.cover,
                  )}
                >
                  <span
                    className={cn(
                      "absolute bottom-5 left-5 text-lg font-bold",
                      post.dark ? "text-white" : "text-foreground",
                    )}
                  >
                    {post.category}
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:underline">
                  Ler artigo
                  <ArrowRight className="size-3.5" />
                </span>
              </a>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
