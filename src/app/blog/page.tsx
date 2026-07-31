import type { Metadata } from "next";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ArrowRight } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Koty",
  description:
    "Conteúdo prático sobre aluguel por temporada: operação, hóspedes, precificação de mercado e automação.",
};

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
          <a
            href={`/blog/${featured.slug}`}
            className="overflow-hidden rounded-xl lg:col-span-7"
          >
            <AspectRatio ratio={16 / 9}>
              <div className="size-full bg-neutral-100 transition-transform duration-500 group-hover:scale-[1.03] dark:bg-neutral-800" />
            </AspectRatio>
          </a>
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
              {featured.category} · {featured.readingTime} de leitura
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight">
              <a
                href={`/blog/${featured.slug}`}
                className="hover:text-brand"
              >
                {featured.title}
              </a>
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
              <a href={`/blog/${post.slug}`} className="block">
                <div className="overflow-hidden rounded-xl">
                  <AspectRatio ratio={4 / 3}>
                    <div className="size-full bg-neutral-100 transition-transform duration-500 group-hover:scale-[1.04] dark:bg-neutral-800" />
                  </AspectRatio>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-brand">
                  {post.category} · {post.readingTime}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </a>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
