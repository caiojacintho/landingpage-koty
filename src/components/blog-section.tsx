"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { motion } from "motion/react";


type Post = {
  title: string;
  date: string;
  excerpt: string;
  href: string;
};

const POSTS: Post[] = [
  {
    title: "Como automatizar o check-in e as mensagens do seu Airbnb",
    date: "12 JUL 2026",
    excerpt:
      "Um passo a passo para parar de enviar a mesma mensagem a cada reserva e receber hóspedes no automático.",
    href: "/blog",
  },
  {
    title: "Checklist de limpeza: o padrão dos super anfitriões",
    date: "05 JUL 2026",
    excerpt:
      "O roteiro cômodo por cômodo que as melhores operações seguem entre uma estadia e outra.",
    href: "/blog",
  },
  {
    title: "Como precificar suas diárias na alta temporada",
    date: "28 JUN 2026",
    excerpt:
      "Estratégias de preço para aumentar a receita sem derrubar a ocupação do seu imóvel.",
    href: "/blog",
  },
  {
    title: "Guia da Casa: menos perguntas, mais avaliações 5 estrelas",
    date: "20 JUN 2026",
    excerpt:
      "Como um guia digital reduz as dúvidas dos hóspedes e melhora a nota do seu anúncio.",
    href: "/blog",
  },
  {
    title: "Mensagens de WhatsApp que economizam horas toda semana",
    date: "14 JUN 2026",
    excerpt:
      "Os modelos de mensagem que os anfitriões mais usam para ganhar tempo na operação.",
    href: "/blog",
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
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Blog
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              Conteúdo para você
              <br />
              hospedar cada vez melhor
            </h2>
            <a
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Visitar o blog
              <ArrowRight className="size-4" />
            </a>
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
      </div>

      {/* trilho full-bleed: os cards correm até as bordas da página */}
      <motion.div
        {...reveal}
        ref={trackRef}
        className="mt-8 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.25rem,calc((100%_-_80rem)_/_2_+_1.25rem))] pb-2 [scroll-padding-inline:max(1.25rem,calc((100%_-_80rem)_/_2_+_1.25rem))] lg:px-[max(2rem,calc((100%_-_80rem)_/_2_+_2rem))] lg:[scroll-padding-inline:max(2rem,calc((100%_-_80rem)_/_2_+_2rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {POSTS.map((post) => (
          <article
            key={post.title}
            className="w-[80vw] max-w-sm shrink-0 snap-start rounded-2xl border border-border bg-card transition-colors hover:border-foreground/20 sm:w-96"
          >
            <a href={post.href} className="group block p-6 sm:p-7">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <FileText className="size-4" strokeWidth={1.75} />
                Artigo
              </span>

              <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight group-hover:text-brand sm:text-2xl">
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </a>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
