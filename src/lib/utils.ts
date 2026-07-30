import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Trilho sem stroke + thumb redondo, compartilhado pelos sliders do site. */
export const RANGE_CLASS =
  "mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-muted outline-none [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-neutral-900 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neutral-900 dark:[&::-moz-range-thumb]:bg-neutral-400 dark:[&::-webkit-slider-thumb]:bg-neutral-400";

/** Preenche o trilho à esquerda do thumb com a cor da marca. */
export function rangeProgressStyle(value: number, min: number, max: number) {
  const pct = ((value - min) / (max - min)) * 100;
  return {
    backgroundImage: `linear-gradient(to right, var(--brand) ${pct}%, transparent ${pct}%)`,
  };
}
