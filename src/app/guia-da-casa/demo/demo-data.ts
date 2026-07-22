import type { LucideIcon } from "lucide-react";
import {
  Beer,
  Coffee,
  Croissant,
  Dumbbell,
  Landmark,
  Pill,
  ShoppingCart,
  TreePine,
  Utensils,
} from "lucide-react";

/**
 * Conteúdo fictício do Guia da Casa de demonstração.
 * Espelha os campos que o anfitrião preenche no produto real.
 */

export const PROPERTY = {
  name: "Apartamento Vila Madalena",
  greeting: "Seja bem-vindo ao",
  address: "Rua Harmonia, 482 — Vila Madalena, São Paulo",
  host: { name: "Marina Alves", initial: "M", phone: "(11) 98812-4470" },
  welcome:
    "Que bom ter você aqui! Deixei tudo pronto pra sua estadia. Qualquer dúvida, a resposta provavelmente está neste guia — e se não estiver, é só me chamar.",
};

export const WIFI = { network: "Harmonia_482", password: "casa2024vm" };

export const CONTACTS = [
  { name: "Marina (anfitriã)", phone: "(11) 98812-4470" },
  { name: "Portaria 24h", phone: "(11) 3081-2200" },
];

export type Place = {
  name: string;
  category: string;
  categoryLabel: string;
  address: string;
  note: string;
  icon: LucideIcon;
  tint: string;
};

export const PLACES: Place[] = [
  {
    name: "Padaria Santa Marta",
    category: "bakery",
    categoryLabel: "Padarias",
    address: "Rua Fidalga, 320",
    note: "Pão na chapa e café coado. Abre às 6h30.",
    icon: Croissant,
    tint: "bg-amber-50 text-amber-700",
  },
  {
    name: "Tan Tan Noodle Bar",
    category: "restaurant",
    categoryLabel: "Restaurantes",
    address: "Rua Fradique Coutinho, 1240",
    note: "Melhor lámen do bairro. Chegue cedo, enche rápido.",
    icon: Utensils,
    tint: "bg-rose-50 text-rose-700",
  },
  {
    name: "Coffee Lab",
    category: "coffee",
    categoryLabel: "Cafés",
    address: "Rua Fradique Coutinho, 1340",
    note: "Café de especialidade e boa mesa pra trabalhar.",
    icon: Coffee,
    tint: "bg-orange-50 text-orange-700",
  },
  {
    name: "Mercado Municipal Pinheiros",
    category: "market",
    categoryLabel: "Mercados",
    address: "Rua Pedro Cristi, 89",
    note: "Feira, hortifrúti e pastel de bacalhau.",
    icon: ShoppingCart,
    tint: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "Bar do Juarez",
    category: "bar",
    categoryLabel: "Bares",
    address: "Rua Girassol, 480",
    note: "Chope gelado e petisco. Fecha 1h.",
    icon: Beer,
    tint: "bg-yellow-50 text-yellow-700",
  },
  {
    name: "Beco do Batman",
    category: "attraction",
    categoryLabel: "Atrações",
    address: "Rua Gonçalo Afonso",
    note: "Grafites a 8 minutos a pé. Vá de manhã, tem menos gente.",
    icon: Landmark,
    tint: "bg-violet-50 text-violet-700",
  },
  {
    name: "Praça Por do Sol",
    category: "park",
    categoryLabel: "Parques",
    address: "Rua Desembargador Ferreira França",
    note: "O melhor fim de tarde de São Paulo. 12 min de carro.",
    icon: TreePine,
    tint: "bg-lime-50 text-lime-700",
  },
  {
    name: "Drogaria São Paulo",
    category: "pharmacy",
    categoryLabel: "Farmácias",
    address: "Rua Wisard, 305",
    note: "Aberta 24 horas.",
    icon: Pill,
    tint: "bg-sky-50 text-sky-700",
  },
  {
    name: "Smart Fit Vila Madalena",
    category: "gym",
    categoryLabel: "Academias",
    address: "Rua Aspicuelta, 12",
    note: "Day use por R$ 30. Leve documento com foto.",
    icon: Dumbbell,
    tint: "bg-slate-100 text-slate-700",
  },
];

export const CHECKIN = {
  steps: [
    {
      title: "A partir das 15h",
      detail:
        "Se precisar chegar antes, me avise no dia anterior — quase sempre dá pra liberar mais cedo.",
    },
    {
      title: "Entrada pela portaria",
      detail:
        "Diga que é hóspede do ap. 74, torre B. Seu nome já está na lista. Tenha um documento com foto em mãos.",
    },
    {
      title: "Fechadura digital",
      detail:
        "A senha do apartamento é 7482#. Digite e aguarde o clique. A senha muda a cada reserva.",
    },
    {
      title: "Check-out até 11h",
      detail:
        "Deixe as chaves sobre a bancada da cozinha e a porta encostada. Não precisa lavar louça nem tirar a roupa de cama.",
    },
  ],
};

export const HOUSE_RULES = [
  {
    title: "Ar-condicionado",
    subtitle:
      "O controle fica na gaveta da mesa de cabeceira. Aperte MODE até aparecer o floco de neve e ajuste a temperatura. Feche a janela antes de ligar — o disjuntor desarma se as duas coisas ficarem abertas por muito tempo.",
  },
  {
    title: "Silêncio a partir das 22h",
    subtitle:
      "O prédio é residencial e o síndico é rigoroso. Depois das 22h, evite som alto e conversas na varanda.",
  },
  {
    title: "Não é permitido festas ou eventos",
    subtitle:
      "Visitas são bem-vindas até 22h, no máximo 2 pessoas além dos hóspedes da reserva.",
  },
  {
    title: "Lixo e reciclagem",
    subtitle:
      "Lixeira comum na cozinha, reciclável na área de serviço. O descarte fica no hall do andar, à esquerda do elevador.",
  },
  {
    title: "Pets",
    subtitle:
      "Aceitamos pets de até 10 kg, com aviso prévio. Não suba no sofá nem na cama com o bichinho, por favor.",
  },
];

export const CONDO_RULES = [
  {
    title: "Piscina — 7h às 22h",
    subtitle:
      "Uso liberado para hóspedes. É obrigatório tomar ducha antes de entrar. Não é permitido levar copo de vidro.",
  },
  {
    title: "Academia — 24h",
    subtitle: "Acesso pela mesma senha do apartamento, no teclado da porta.",
  },
  {
    title: "Churrasqueira",
    subtitle:
      "Precisa de reserva na portaria com 24h de antecedência e tem taxa de R$ 80. Me avise que eu reservo pra você.",
  },
  {
    title: "Garagem",
    subtitle:
      "A vaga 74B é sua durante a estadia. Altura máxima do portão: 2,10 m.",
  },
];

export const FAQS = [
  {
    question: "Tem toalha e roupa de cama?",
    answer:
      "Sim, tudo limpo e para o número de hóspedes da reserva. Toalhas extras ficam no armário do corredor, prateleira de cima.",
  },
  {
    question: "Como funciona a máquina de lavar?",
    answer:
      "Fica na área de serviço. Programa 'Rápido 30min' resolve a maioria dos casos. O sabão está no armário embaixo do tanque — pode usar à vontade.",
  },
  {
    question: "Posso receber encomendas?",
    answer:
      "Pode. Enderece para 'Rua Harmonia, 482, ap. 74B' com o seu nome. A portaria recebe e guarda.",
  },
  {
    question: "Onde deixo as chaves no check-out?",
    answer:
      "Sobre a bancada da cozinha. Só puxe a porta ao sair, ela tranca sozinha.",
  },
  {
    question: "Tem espaço pra trabalhar?",
    answer:
      "Tem: escrivaninha no quarto com cadeira de escritório, tomada e luminária. A internet é fibra de 400 Mb.",
  },
];

export const PHOTOS = [
  { name: "Sala", tint: "from-amber-100 to-orange-200" },
  { name: "Cozinha", tint: "from-stone-100 to-stone-300" },
  { name: "Quarto", tint: "from-sky-100 to-indigo-200" },
  { name: "Banheiro", tint: "from-teal-50 to-emerald-200" },
  { name: "Varanda", tint: "from-lime-100 to-green-200" },
  { name: "Piscina", tint: "from-cyan-100 to-blue-200" },
];
