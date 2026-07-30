import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Quem somos — Koty",
  description:
    "Uma carta da equipe Koty: por que criamos uma plataforma de gestão de aluguel por temporada e o que acreditamos sobre hospitalidade.",
};

export default function QuemSomosPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="flex-1">
        <section className="bg-cream pb-24 pt-32 lg:pt-40">
          <div className="mx-auto max-w-2xl px-5 lg:px-8">
            <h1 className="text-4xl font-extrabold leading-[1.06] sm:text-5xl">
              Uma carta para quem hospeda
            </h1>

            <div className="mt-10 space-y-6 text-[17px] leading-[1.8] text-foreground/80">
              <p>Olá,</p>

              <p>
                A Koty nasceu de uma percepção simples: hospedar é uma das
                formas mais bonitas de empreender — e uma das mais cansativas
                de operar. Quem tem um imóvel no Airbnb ou no Booking sabe do
                que estamos falando. A senha do Wi-Fi soletrada pela décima vez
                no WhatsApp. A limpeza combinada por áudio às pressas entre um
                checkout e um check-in. A planilha de receitas que nunca fecha.
                O hóspede que pergunta, às onze da noite e em inglês, como
                funciona o ar-condicionado.
              </p>

              <p>
                Nada disso é hospitalidade. É burocracia disfarçada de rotina.
                E foi para acabar com ela que construímos a Koty.
              </p>

              <p>
                E não falamos de fora: hospedamos há mais de 5 anos. Vivemos na
                pele cada uma dessas dores — as madrugadas respondendo hóspede,
                a logística de limpeza, a conta que não fechava — e foi essa
                experiência que virou produto. Cada funcionalidade da Koty
                nasceu de um problema real que a gente mesmo enfrentou como
                anfitrião.
              </p>

              <p>
                Somos uma equipe brasileira de tecnologia apaixonada pelo
                mercado de aluguel por temporada. Construímos uma plataforma
                que reúne, num só lugar, tudo o que a operação de um imóvel
                exige: calendário sincronizado com Airbnb e Booking, respostas
                automáticas com inteligência artificial, mensagens no WhatsApp,
                checklists de limpeza com comprovação por foto, controle
                financeiro e o nosso queridinho — o Guia da Casa, um guia
                digital que o hóspede abre por QR code e que responde por você,
                no idioma dele, a qualquer hora.
              </p>

              <p>
                Atendemos desde o proprietário que cuida de um único imóvel até
                gestoras profissionais com dezenas de unidades. Em todos os
                casos, a nossa medida de sucesso é a mesma: quantas horas do
                seu dia a Koty devolveu para você.
              </p>

              <p>
                Acreditamos que tecnologia boa é a que desaparece. O hóspede
                não precisa saber que existe uma IA respondendo — ele só sente
                que foi bem atendido. A equipe de limpeza não precisa aprender
                um sistema complicado — ela recebe a tarefa no WhatsApp, com
                checklist e tudo. E você não precisa viver de plantão — a
                plataforma trabalha enquanto você vive.
              </p>

              <p>
                Ainda somos uma empresa jovem, e isso é proposital: cada
                cliente que chega hoje conversa com quem constrói o produto.
                Cada sugestão é lida. Cada crítica muda alguma coisa. Se você
                sentir falta de algo na plataforma, escreva pra gente — há uma
                boa chance de a sua ideia virar funcionalidade.
              </p>

              <p>
                Obrigado por hospedar. É por você que a gente trabalha.
              </p>

              <p className="pt-4">
                Com carinho,
                <br />
                <span className="font-semibold text-foreground">
                  Equipe Koty
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
