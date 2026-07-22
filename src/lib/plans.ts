export const ANNUAL_DISCOUNT = 0.2;

export type PlanId = "essencial" | "profissional";

export const PLANS: {
  id: PlanId;
  name: string;
  popular?: boolean;
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
