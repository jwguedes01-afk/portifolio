import { BarChart3, Code2, Truck } from "lucide-react";
import type { PillarId } from "../types";

export const PILLAR_ICONS: Record<PillarId, typeof Truck> = {
  logistica: Truck,
  dados: BarChart3,
  dev: Code2,
};

/**
 * Mapa estático de classes Tailwind por pilar.
 * Precisa ser estático (não interpolado) para o Tailwind JIT detectar as classes.
 */
export const pillarStyles: Record<
  PillarId,
  {
    badge: string;
    badgeSolid: string;
    icon: string;
    border: string;
    dot: string;
    ring: string;
  }
> = {
  logistica: {
    badge:
      "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
    badgeSolid: "bg-blue-600 text-white",
    icon: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-500/30",
    dot: "bg-blue-600",
    ring: "ring-blue-500/40",
  },
  dados: {
    badge:
      "bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300",
    badgeSolid: "bg-teal-600 text-white",
    icon: "text-teal-600 dark:text-teal-400",
    border: "border-teal-200 dark:border-teal-500/30",
    dot: "bg-teal-600",
    ring: "ring-teal-500/40",
  },
  dev: {
    badge:
      "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
    badgeSolid: "bg-violet-600 text-white",
    icon: "text-violet-600 dark:text-violet-400",
    border: "border-violet-200 dark:border-violet-500/30",
    dot: "bg-violet-600",
    ring: "ring-violet-500/40",
  },
};

export const pillarLabels: Record<PillarId, string> = {
  logistica: "Logística",
  dados: "Dados",
  dev: "Desenvolvimento",
};
