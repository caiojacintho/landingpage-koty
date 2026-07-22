"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

const SUBJECTS = ["Quero começar", "Suporte", "Parcerias", "Outro"];

const field =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand";

/**
 * TODO: ligar a um endpoint real (server action, Resend, CRM…).
 * Hoje o submit apenas exibe a mensagem de confirmação — nada é enviado.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-muted/50 p-8">
        <h2 className="text-xl font-bold">Mensagem registrada</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Este formulário ainda não está conectado a um destino — nenhuma
          mensagem foi enviada de verdade.
        </p>
        <Button
          variant="outline"
          size="md"
          className="mt-6 border-border"
          onClick={() => setSent(false)}
        >
          Voltar ao formulário
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-xl border border-border p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="text-sm font-medium">
            Nome
          </label>
          <input id="nome" name="nome" required className={field} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="assunto" className="text-sm font-medium">
          Assunto
        </label>
        <select id="assunto" name="assunto" className={field}>
          {SUBJECTS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="imoveis" className="text-sm font-medium">
          Quantos imóveis você administra?
        </label>
        <select id="imoveis" name="imoveis" className={field}>
          <option>1 imóvel</option>
          <option>2 a 5</option>
          <option>6 a 20</option>
          <option>Mais de 20</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="mensagem" className="text-sm font-medium">
          Mensagem
        </label>
        <textarea id="mensagem" name="mensagem" rows={5} className={field} />
      </div>

      <Button size="lg" className="mt-7 w-full sm:w-auto">
        Enviar mensagem
      </Button>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Formulário de demonstração: ainda não há envio configurado.
      </p>
    </form>
  );
}
