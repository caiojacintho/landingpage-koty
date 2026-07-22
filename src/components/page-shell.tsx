import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

/** Cabeçalho padrão das páginas internas (header sólido + hero de texto). */
export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader solid />
      <main className="flex-1">
        <section className="bg-cream pb-16 pt-32 lg:pb-20 lg:pt-40">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-background py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}
