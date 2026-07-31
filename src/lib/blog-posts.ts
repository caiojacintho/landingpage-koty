/**
 * TODO: substituir pelos posts reais (CMS ou MDX).
 * Conteúdo fictício, compartilhado entre home, listagem e página do artigo.
 */

export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: PostBlock[];
};

export const POSTS: Post[] = [
  {
    slug: "automatizar-check-in-mensagens",
    category: "Automação",
    title: "Como automatizar o check-in e as mensagens do seu Airbnb",
    excerpt:
      "Um passo a passo para parar de enviar a mesma mensagem a cada reserva e receber hóspedes no automático.",
    date: "12 JUL 2026",
    readingTime: "6 min",
    content: [
      {
        type: "paragraph",
        text: "Se você administra um imóvel de temporada, provavelmente já percebeu: as mensagens que você envia para cada hóspede são quase sempre as mesmas. Confirmação de reserva, instruções de entrada, senha do Wi-Fi, horário de saída. Muda o nome, muda a data — o resto é copiar e colar.",
      },
      {
        type: "paragraph",
        text: "A boa notícia é que tudo que é repetitivo pode ser automatizado. Neste artigo, mostramos o passo a passo para montar uma régua de comunicação que funciona sozinha, da confirmação da reserva até o pedido de avaliação.",
      },
      { type: "heading", text: "1. Mapeie os momentos da estadia" },
      {
        type: "paragraph",
        text: "Toda hospedagem passa pelos mesmos marcos. Antes de escrever qualquer mensagem, liste os momentos em que o hóspede precisa ouvir de você:",
      },
      {
        type: "list",
        items: [
          "Na confirmação da reserva — boas-vindas e o que esperar.",
          "Alguns dias antes do check-in — instruções de chegada e endereço.",
          "No dia da entrada — senha da porta, Wi-Fi e regras essenciais.",
          "No meio da estadia — um toque rápido para saber se está tudo bem.",
          "Na véspera da saída — horário do check-out e o que fazer com chaves e lixo.",
          "Depois da saída — agradecimento e pedido de avaliação.",
        ],
      },
      { type: "heading", text: "2. Escreva uma vez, use sempre" },
      {
        type: "paragraph",
        text: "Para cada momento, escreva uma mensagem-modelo com espaços para as variáveis: nome do hóspede, datas, endereço. Escreva como você fala — mensagens automáticas não precisam soar robóticas. O hóspede percebe cuidado no conteúdo, não em quem apertou o botão de enviar.",
      },
      {
        type: "quote",
        text: "Automatizar não é despersonalizar. É garantir que nenhum hóspede fique sem resposta às 23h de uma sexta-feira.",
      },
      { type: "heading", text: "3. Tire as instruções da conversa" },
      {
        type: "paragraph",
        text: "Grande parte das perguntas — Wi-Fi, ar-condicionado, lixo, recomendações do bairro — não precisa de conversa nenhuma. Um Guia da Casa digital, com link enviado na mensagem de check-in, responde antes de o hóspede perguntar. É a diferença entre responder 7 perguntas por estadia e responder nenhuma.",
      },
      { type: "heading", text: "4. Deixe a régua rodar e meça" },
      {
        type: "paragraph",
        text: "Com os modelos prontos e os envios agendados a partir das datas da reserva, sua operação de comunicação roda sozinha. Acompanhe as perguntas que ainda chegam: cada uma delas é um candidato a entrar no Guia da Casa ou em uma mensagem automática. Em poucas semanas, o volume de conversas manuais cai drasticamente — e a nota das avaliações costuma subir junto.",
      },
    ],
  },
  {
    slug: "checklist-de-limpeza",
    category: "Operação",
    title: "Checklist de limpeza: o padrão dos super anfitriões",
    excerpt:
      "O roteiro cômodo por cômodo que as melhores operações seguem entre uma estadia e outra.",
    date: "05 JUL 2026",
    readingTime: "6 min",
    content: [
      {
        type: "paragraph",
        text: "Limpeza é o item mais citado nas avaliações negativas de imóveis de temporada — e também o mais fácil de padronizar. O segredo das operações que mantêm nota alta não é ter a melhor equipe, é ter o melhor roteiro.",
      },
      { type: "heading", text: "Por que um checklist cômodo a cômodo" },
      {
        type: "paragraph",
        text: "Quando a instrução é “deixar tudo limpo”, cada pessoa interpreta de um jeito. Quando a instrução é uma lista por cômodo, com itens objetivos e foto de evidência ao final, o padrão deixa de depender de quem executou. É isso que permite trocar de equipe sem o hóspede perceber diferença.",
      },
      { type: "heading", text: "O roteiro essencial" },
      {
        type: "list",
        items: [
          "Quarto: roupa de cama trocada, superfícies sem poeira, armários vazios e itens esquecidos verificados.",
          "Banheiro: rejuntes e box, amenities repostos, toalhas contadas e no lugar.",
          "Cozinha: geladeira vazia e limpa, louça guardada, lixo retirado, itens básicos repostos.",
          "Sala: controles funcionando, almofadas arrumadas, chão limpo inclusive embaixo dos móveis.",
          "Geral: janelas fechadas, luzes apagadas, ar-condicionado desligado, porta trancada com foto.",
        ],
      },
      { type: "heading", text: "Evidência encerra discussão" },
      {
        type: "paragraph",
        text: "A foto ao final de cada cômodo cumpre dois papéis: confirma que o item foi feito e protege todo mundo em caso de reclamação. Se o hóspede alegar que encontrou algo fora do lugar, você tem o registro de como o imóvel foi entregue — com data e hora.",
      },
      {
        type: "quote",
        text: "Padrão não é desconfiança da equipe. É o que permite que a operação cresça sem depender da memória de ninguém.",
      },
    ],
  },
  {
    slug: "precificacao-alta-temporada",
    category: "Precificação",
    title: "Como precificar suas diárias na alta temporada",
    excerpt:
      "Estratégias de preço para aumentar a receita sem derrubar a ocupação do seu imóvel.",
    date: "28 JUN 2026",
    readingTime: "7 min",
    content: [
      {
        type: "paragraph",
        text: "Alta temporada é quando a maior parte da receita do ano é decidida — e também quando mais dinheiro fica na mesa. Cobrar pouco lota o calendário cedo demais; cobrar demais deixa buracos nas melhores semanas. O equilíbrio vem de método, não de intuição.",
      },
      { type: "heading", text: "Comece pelo calendário, não pelo preço" },
      {
        type: "paragraph",
        text: "Antes de definir valores, marque no calendário os eventos que puxam demanda na sua região: feriados prolongados, festivais, férias escolares, virada do ano. Cada um desses períodos merece um preço próprio — tratar dezembro inteiro como uma coisa só é o erro mais comum.",
      },
      { type: "heading", text: "Ancore no mercado, ajuste pelo seu imóvel" },
      {
        type: "paragraph",
        text: "Pesquise anúncios comparáveis — mesma região, mesma capacidade, padrão parecido — e veja quanto cobram nas mesmas datas. Esse é o seu ponto de partida. A partir dele, ajuste para cima se você tem diferenciais visíveis (vista, piscina, avaliações melhores) e para baixo se está começando e precisa de avaliações.",
      },
      { type: "heading", text: "Regras que protegem a receita" },
      {
        type: "list",
        items: [
          "Estadia mínima maior nos picos: 3 a 5 noites no réveillon e feriadões evita buracos de 1 noite.",
          "Desconto decrescente: preço mais alto longe da data, ajustes graduais conforme ela se aproxima.",
          "Nunca zere o buraco: uma noite vazia entre duas reservas vale um desconto pontual, não uma promoção geral.",
        ],
      },
      { type: "heading", text: "Revise toda semana" },
      {
        type: "paragraph",
        text: "Preço de alta temporada não se define uma vez em outubro. Reserve 15 minutos por semana para comparar sua ocupação com a do mercado: calendário enchendo rápido demais é sinal de preço baixo; semanas importantes vazias a 30 dias da data pedem ajuste. Quem revisa com frequência captura a demanda no ponto certo.",
      },
    ],
  },
  {
    slug: "guia-da-casa",
    category: "Hóspedes",
    title: "Guia da Casa: menos perguntas, mais avaliações 5 estrelas",
    excerpt:
      "Como um guia digital reduz as dúvidas dos hóspedes e melhora a nota do seu anúncio.",
    date: "20 JUN 2026",
    readingTime: "4 min",
    content: [
      {
        type: "paragraph",
        text: "Wi-Fi, ar-condicionado, lixo, portaria, padaria boa perto. As perguntas dos hóspedes se repetem porque as necessidades se repetem. Um Guia da Casa digital coloca todas as respostas a um toque de distância — e muda a experiência dos dois lados da conversa.",
      },
      { type: "heading", text: "O que todo guia precisa ter" },
      {
        type: "list",
        items: [
          "Chegada: endereço com ponto de referência, instruções de entrada e senha da porta.",
          "Wi-Fi: nome da rede e senha, em destaque — é a primeira coisa que todo mundo procura.",
          "Equipamentos: como usar ar-condicionado, TV, chuveiro e o que mais tiver manual escondido.",
          "Regras: horário de silêncio, política de visitas, o que fazer com o lixo.",
          "Saída: horário do check-out e os 3 ou 4 gestos que você espera do hóspede.",
          "Bairro: suas recomendações reais de mercado, farmácia, restaurantes e transporte.",
        ],
      },
      { type: "heading", text: "Na ordem em que o hóspede procura" },
      {
        type: "paragraph",
        text: "A ordem importa: o guia deve seguir a linha do tempo da estadia. Nos primeiros minutos, o hóspede quer entrar e conectar no Wi-Fi. Depois quer entender a casa. Só então explora o bairro. Um guia organizado nessa sequência é usado; um PDF de 20 páginas é ignorado.",
      },
      {
        type: "quote",
        text: "Cada pergunta que o guia responde é uma notificação a menos para você e uma fricção a menos para o hóspede.",
      },
      {
        type: "paragraph",
        text: "O efeito aparece nas avaliações: hóspede que se vira sozinho avalia a estadia como “fácil” — e facilidade é exatamente o que as notas de comunicação e check-in medem.",
      },
    ],
  },
  {
    slug: "mensagens-whatsapp",
    category: "Automação",
    title: "Mensagens de WhatsApp que economizam horas toda semana",
    excerpt:
      "Os modelos de mensagem que os anfitriões mais usam para ganhar tempo na operação.",
    date: "14 JUN 2026",
    readingTime: "5 min",
    content: [
      {
        type: "paragraph",
        text: "Some o tempo que você gasta por semana digitando mensagens para hóspedes, equipe de limpeza e manutenção. Para a maioria dos anfitriões, dá algumas horas — quase todas gastas reescrevendo variações do mesmo texto. Modelos prontos devolvem esse tempo.",
      },
      { type: "heading", text: "Os 5 modelos que mais economizam tempo" },
      {
        type: "list",
        items: [
          "Boas-vindas pós-reserva: agradece, confirma as datas e adianta os próximos passos.",
          "Instruções de check-in: endereço, como entrar, senha — enviada 2 dias antes da chegada.",
          "Check-in do meio da estadia: uma linha perguntando se está tudo bem. Simples e poderosa.",
          "Instruções de check-out: horário, chaves, lixo — enviada na véspera da saída.",
          "Pós-estadia: agradecimento e pedido de avaliação, enviado algumas horas após a saída.",
        ],
      },
      { type: "heading", text: "Modelos também servem para a equipe" },
      {
        type: "paragraph",
        text: "A mesma lógica vale para dentro da operação: aviso de nova reserva para a equipe de limpeza, confirmação de faxina concluída, chamado de manutenção com foto. Quando a informação circula em formato padrão, menos coisa se perde na conversa.",
      },
      { type: "heading", text: "O passo seguinte é não enviar manualmente" },
      {
        type: "paragraph",
        text: "Modelos resolvem metade do problema; o gatilho resolve a outra metade. Mensagens amarradas às datas da reserva — enviadas automaticamente no momento certo — transformam a comunicação em algo que simplesmente acontece, com ou sem você olhando o celular.",
      },
    ],
  },
  {
    slug: "financeiro-sem-planilha",
    category: "Financeiro",
    title: "Saindo da planilha: o mínimo para saber seu lucro",
    excerpt:
      "Receita bruta não é lucro. O que separar para enxergar o resultado real de cada imóvel por período.",
    date: "07 JUN 2026",
    readingTime: "7 min",
    content: [
      {
        type: "paragraph",
        text: "Muita gente que aluga por temporada sabe quanto faturou no mês — e quase ninguém sabe quanto lucrou. A diferença entre os dois números é onde moram as decisões importantes: se vale manter um imóvel, se dá para reajustar o preço, se a operação sustenta crescer.",
      },
      { type: "heading", text: "As quatro caixas que você precisa separar" },
      {
        type: "list",
        items: [
          "Receita de hospedagem: o valor das diárias, líquido de taxas das plataformas.",
          "Custos por estadia: limpeza, enxoval, amenities — tudo que acontece porque houve reserva.",
          "Custos fixos: condomínio, luz, internet, IPTU — tudo que acontece mesmo sem reserva.",
          "Repasses e comissões: o que sai para o proprietário ou para quem administra.",
        ],
      },
      {
        type: "paragraph",
        text: "Com essas quatro caixas separadas por imóvel e por mês, o lucro deixa de ser uma sensação e vira um número: receita menos custos de estadia, menos fixos, menos repasses. Simples — desde que os lançamentos existam.",
      },
      { type: "heading", text: "Por que a planilha para de funcionar" },
      {
        type: "paragraph",
        text: "Com um imóvel, a planilha aguenta. Com três, os lançamentos atrasam; com cinco, o mês fecha sem bater. O problema não é a fórmula, é a digitação manual: cada reserva, cada faxina e cada repasse dependem de alguém lembrar de registrar.",
      },
      {
        type: "quote",
        text: "O melhor sistema financeiro é o que registra sozinho. O segundo melhor é o que você preenche em segundos, não em noites de domingo.",
      },
      {
        type: "paragraph",
        text: "Quando os lançamentos nascem junto com a reserva — e a faxina, o repasse e as taxas entram no lugar certo automaticamente — fechar o mês vira consulta, não mutirão. E aí dá para responder, imóvel por imóvel, a pergunta que importa: está valendo a pena?",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}
