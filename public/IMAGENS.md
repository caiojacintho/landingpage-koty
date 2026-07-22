# Imagens da landing

Coloque os arquivos abaixo nesta pasta. Enquanto não existirem, as áreas
renderizam um gradiente/mockup da marca — nada quebra o layout.

| Arquivo                  | Onde aparece                        | Proporção sugerida       |
| ------------------------ | ----------------------------------- | ------------------------ |
| `hero.jpg`               | Metade direita do hero              | 3:4 vertical, ~1400×1900 |
| `cards/app.jpg`          | Card "App completo"                 | 4:3.4                    |
| `cards/precificacao.jpg` | Card "Precificação inteligente"     | 4:3.4                    |
| `cards/hospedes.jpg`     | Card "Hóspedes bem atendidos"       | 4:3.4                    |
| `cards/limpeza.jpg`      | Card "Limpeza e manutenção"         | 4:3.4                    |
| `app-anfitriao.png`      | Tela dentro do celular (bloco 1)    | 9:19.5, ~500×1080        |
| `app-gestora.png`        | Tela dentro do celular (bloco 2)    | 9:19.5, ~500×1080        |
| `planos/essencial.png`   | Arte do plano Essencial             | 1.586:1 (cartão)         |
| `planos/completo.png`    | Arte do plano Completo              | 1.586:1                  |
| `planos/gestoras.png`    | Arte do plano Para gestoras         | 1.586:1                  |
| `cta/simples.jpg`        | Tile final "Simples"                | 3:3.4 vertical           |
| `cta/conectado.jpg`      | Tile final "Conectado"              | 3:3.4                    |
| `cta/completo.jpg`       | Tile final "Completo"               | 3:3.4                    |

Sem os `app-*.png`, o celular mostra uma UI fictícia da Koty montada em CSS
(ver [`phone-mockup.tsx`](../src/components/phone-mockup.tsx)) — dá para usar
em produção se você não tiver screenshots do app ainda.

## Cores

Tudo sai de 5 variáveis no topo de `src/app/globals.css`, bloco `── Marca ──`:
`--brand`, `--brand-strong`, `--brand-soft`, `--cream`, `--peach`.
