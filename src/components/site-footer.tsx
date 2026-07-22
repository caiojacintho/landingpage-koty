import Link from "next/link";

import { KotyLogo } from "@/components/koty-logo";

const COLUMNS = [
  {
    title: "Gestão",
    links: [
      { label: "Gestão", href: "/" },
      { label: "Guia da Casa", href: "/guia-da-casa" },
    ],
  },
  {
    title: "Para você",
    links: [
      { label: "Proprietário", href: "/proprietario" },
      { label: "Gestora", href: "/gestora" },
      { label: "Planos", href: "/planos" },
    ],
  },
  {
    title: "Koty",
    links: [
      { label: "Sobre nós", href: "/sobre" },
      { label: "Blog", href: "/blog" },
      { label: "Carreiras", href: "/carreiras" },
      { label: "Contato", href: "/contato" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <KotyLogo className="h-7 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Gestão completa de aluguel por temporada. Mais ocupação, mais
              receita e menos trabalho para o anfitrião.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="text-sm font-bold">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Koty. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
