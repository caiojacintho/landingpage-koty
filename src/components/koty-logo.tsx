import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Logo oficial da Koty (gradiente coral → amarelo).
 *
 * `onBrand` renderiza a versão em branco sólido, para uso sobre o laranja da
 * marca — o gradiente original não tem contraste suficiente nesse fundo.
 * `black` renderiza a versão em preto sólido.
 */
export function KotyLogo({
  className,
  onBrand = false,
  black = false,
}: {
  className?: string;
  onBrand?: boolean;
  black?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Koty"
      width={1049}
      height={375}
      priority
      className={cn(
        "h-7 w-auto",
        onBrand && "brightness-0 invert",
        black && "brightness-0",
        className,
      )}
    />
  );
}
