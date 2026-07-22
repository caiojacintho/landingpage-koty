import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans-var",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koty — Gestão completa do seu Airbnb",
  description:
    "Calendário unificado, respostas automáticas, checklists de limpeza e controle financeiro em um só lugar. Menos trabalho na sua propriedade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
