import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPost, POSTS, type PostBlock } from "@/lib/blog-posts";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artigo — Koty" };
  return {
    title: `${post.title} — Blog Koty`,
    description: post.excerpt,
  };
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mt-12 text-2xl font-extrabold leading-snug tracking-tight">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed">
              <span
                className="mt-[0.65rem] size-1.5 shrink-0 rounded-full bg-brand"
                aria-hidden
              />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-10 border-l-2 border-brand pl-6 text-xl font-semibold leading-relaxed">
          {block.text}
        </blockquote>
      );
    default:
      return (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SiteHeader solid />
      <main className="flex-1">
        {/* hero do artigo */}
        <section className="bg-background pb-12 pt-32 lg:pb-16 lg:pt-40">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                {post.category}
              </p>
              <h1 className="mt-5 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <p className="mt-6 text-sm font-medium text-muted-foreground">
                {post.date} · {post.readingTime} de leitura
              </p>
            </div>
          </div>
        </section>

        {/* corpo */}
        <section className="bg-background py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <article className="-mt-6">
                {post.content.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </article>

            </div>
          </div>
        </section>

        {/* mais artigos */}
        <section className="border-t border-border bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Continue lendo
              </h2>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
              >
                Ver todos
                <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <article key={p.slug} className="group">
                  <a href={`/blog/${p.slug}`} className="block">
                    <div className="overflow-hidden rounded-xl">
                      <AspectRatio ratio={4 / 3}>
                        <div className="size-full bg-neutral-100 transition-transform duration-500 group-hover:scale-[1.04] dark:bg-neutral-800" />
                      </AspectRatio>
                    </div>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-brand">
                      {p.category} · {p.readingTime}
                    </p>
                    <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-brand">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
