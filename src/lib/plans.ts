export const ANNUAL_DISCOUNT = 0.2;

export const MAX_UNITS = 20;

/** Desconto progressivo por volume de imóveis. Ajuste os valores conforme a política comercial. */
export const VOLUME_TIERS: { min: number; discount: number }[] = [
  { min: 1, discount: 0 },
  { min: 2, discount: 0.1 },
  { min: 5, discount: 0.2 },
  { min: 10, discount: 0.3 },
  { min: 20, discount: 0.4 },
];

export function volumeDiscount(units: number) {
  let discount = 0;
  for (const tier of VOLUME_TIERS) {
    if (units >= tier.min) discount = tier.discount;
  }
  return discount;
}

export type PlanId = "essencial" | "profissional";

export const PLANS: {
  id: PlanId;
  name: string;
  popular?: boolean;
  comingSoon?: boolean;
  headline: string;
  description: string;
  monthly: number;
  features: string[];
}[] = [
  {
    id: "essencial",
    name: "Essencial",
    headline: "Pare de fazer tudo manualmente",
    description:
      "Automatize as tarefas do dia a dia, melhore a experiência do hóspede com o Guia da Casa e tenha o controle do seu negócio.",
    monthly: 49.9,
    features: [
      "Calendário sincronizado automaticamente via iCal",
      "Airbnb e Booking num calendário só",
      "Site de reservas diretas",
      "Guia da Casa digital para o hóspede",
      "Tarefas de vistoria (check-in, check-out e limpeza) enviadas à sua equipe por e-mail",
      "Modelos de mensagem prontos",
      "Central de documentos",
      "Acesso completo pelo celular",
      "Suporte por e-mail",
    ],
  },
  {
    id: "profissional",
    name: "Profissional",
    popular: true,
    comingSoon: true,
    headline: "Coloque toda a gestão no automático",
    description:
      "Pra super anfitriões que querem: atendimento, reservas e equipe rodando sozinhos — com mensagens automáticas no WhatsApp.",
    monthly: 169.9,
    features: [
      "Tudo do plano Essencial, e mais:",
      "Integração oficial com Airbnb e Booking: reservas, valores, hóspedes, contatos e datas de check-in/out importados automaticamente",
      "Mensagens automáticas no WhatsApp para hóspedes e equipe",
      "Guia da Casa completo: IA que responde os hóspedes, múltiplos idiomas, vídeos e formulário de check-in",
      "Sincronização com o Google Calendar",
      "Suporte prioritário via WhatsApp",
    ],
  },
];

export const GUIA_PLANS: {
  id: string;
  name: string;
  popular?: boolean;
  headline: string;
  description: string;
  monthly: number;
  features: string[];
}[] = [
  {
    id: "guia-basico",
    name: "Básico",
    headline: "Um guia digital profissional para o seu imóvel",
    description:
      "Regras da casa, Wi-Fi, instruções e dicas locais num guia digital que o hóspede acessa por QR code.",
    monthly: 19.9,
    features: [
      "Guia digital acessado por QR code",
      "Regras da casa, Wi-Fi e instruções dos equipamentos",
      "Dicas locais de restaurantes e passeios",
      "Personalização com fotos do seu imóvel",
      "Atualização a qualquer momento",
      "Suporte por e-mail",
    ],
  },
  {
    id: "guia-completo",
    name: "Completo",
    popular: true,
    headline: "O guia que responde pelo anfitrião",
    description:
      "Pra quem quer o hóspede bem atendido sem precisar responder mensagem: IA, idiomas e check-in online.",
    monthly: 39.9,
    features: [
      "Tudo do plano Básico, e mais:",
      "IA que responde as perguntas dos hóspedes 24h por dia",
      "Tradução automática para múltiplos idiomas",
      "Vídeos com instruções da casa",
      "Formulário de check-in online",
      "Suporte prioritário via WhatsApp",
    ],
  },
];

export const COMPARISON: {
  group: string;
  rows: { label: string; essencial: boolean; profissional: boolean }[];
}[] = [
  {
    group: "Reservas e canais",
    rows: [
      {
        label: "Calendário sincronizado automaticamente via iCal",
        essencial: true,
        profissional: true,
      },
      {
        label: "Airbnb e Booking num calendário só",
        essencial: true,
        profissional: true,
      },
      { label: "Site de reservas diretas", essencial: true, profissional: true },
      {
        label:
          "Integração oficial com Airbnb e Booking (reservas, valores, hóspedes, datas)",
        essencial: false,
        profissional: true,
      },
      {
        label: "Sincronização com o Google Calendar",
        essencial: false,
        profissional: true,
      },
    ],
  },
  {
    group: "Hóspedes e comunicação",
    rows: [
      {
        label: "Guia da Casa digital para o hóspede",
        essencial: true,
        profissional: true,
      },
      {
        label: "Modelos de mensagem prontos",
        essencial: true,
        profissional: true,
      },
      {
        label: "Mensagens automáticas no WhatsApp para hóspedes e equipe",
        essencial: false,
        profissional: true,
      },
      {
        label:
          "Guia da Casa completo: IA, múltiplos idiomas, vídeos e formulário de check-in",
        essencial: false,
        profissional: true,
      },
    ],
  },
  {
    group: "Operação",
    rows: [
      {
        label:
          "Tarefas de vistoria (check-in, check-out e limpeza) enviadas à equipe por e-mail",
        essencial: true,
        profissional: true,
      },
      { label: "Central de documentos", essencial: true, profissional: true },
      { label: "Acesso completo pelo celular", essencial: true, profissional: true },
    ],
  },
  {
    group: "Suporte",
    rows: [
      { label: "Suporte por e-mail", essencial: true, profissional: true },
      {
        label: "Suporte prioritário via WhatsApp",
        essencial: false,
        profissional: true,
      },
    ],
  },
];
