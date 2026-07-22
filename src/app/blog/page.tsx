import type { Metadata } from "next";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ArrowRight } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Blog — Koty",
  description:
    "Conteúdo prático sobre aluguel por temporada: operação, hóspedes, precificação de mercado e automação.",
};

/**
 * TODO: substituir pelos posts reais (CMS ou MDX).
 * O conteúdo abaixo é fictício, só para desenhar a listagem.
 */
const POSTS = [
  {
    slug: "checklist-de-limpeza",
    category: "Operação",
    title: "Como padronizar a limpeza sem estar presente",
    excerpt:
      "Um checklist cômodo a cômodo, com foto de evidência, resolve 80% dos problemas de padrão entre uma estadia e outra.",
    readingTime: "6 min",
    featured: true,
  },
  {
    slug: "guia-da-casa",
    category: "Hóspedes",
    title: "O que todo Guia da Casa precisa ter",
    excerpt:
      "Wi-Fi, regras, instruções de entrada e dicas do bairro — na ordem em que o hóspede realmente procura.",
    readingTime: "4 min",
  },
  {
    slug: "mensagens-automaticas",
    category: "Automação",
    title: "As 7 perguntas que todo hóspede faz",
    excerpt:
      "Se você responde as mesmas coisas toda semana, esse é exatamente o trabalho que dá para automatizar.",
    readingTime: "5 min",
  },
  {
    slug: "financeiro-sem-planilha",
    category: "Financeiro",
    title: "Saindo da planilha: o mínimo para saber seu lucro",
    excerpt:
      "Receita bruta não é lucro. O que separar para enxergar o resultado real de cada imóvel por período.",
    readingTime: "7 min",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <PageShell
      eyebrow="Blog"
      title="Conteúdo prático para quem recebe hóspedes"
      description="Operação, automação, experiência do hóspede e finanças — escrito por quem administra imóveis de temporada no dia a dia."
    >
      <Section>
        {/* destaque */}
        <article className="group grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="overflow-hidden rounded-xl lg:col-span-7">
            <AspectRatio ratio={16 / 9}>
              <div className="size-full bg-neutral-100 transition-transform duration-500 group-hover:scale-[1.03] dark:bg-neutral-800" />
            </AspectRatio>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
              {featured.category} · {featured.readingTime} de leitura
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight">
              {featured.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <a
              href={`/blog/${featured.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Ler o artigo
              <ArrowRight className="size-4" />
            </a>
          </div>
        </article>

        {/* listagem */}
        <div className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article key={post.slug} className="group">
              <div className="overflow-hidden rounded-xl">
                <AspectRatio ratio={4 / 3}>
                  <div className="size-full bg-neutral-100 transition-transform duration-500 group-hover:scale-[1.04] dark:bg-neutral-800" />
                </AspectRatio>
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-brand">
                {post.category} · {post.readingTime}
              </p>
              <h3 className="mt-2 text-lg font-bold leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
