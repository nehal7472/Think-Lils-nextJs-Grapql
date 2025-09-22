import { Search, Crosshair, BarChart3, LucideIcon } from "lucide-react";

export type WorkStep = {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const workSteps: WorkStep[] = [
  {
    id: 1,
    slug: "research",
    title: "Research",
    description:
      "Gather insights into consumer behavior, industry trends, and competitors through in-depth research to guide smarter business decisions.",
    icon: Search,
  },
  {
    id: 2,
    slug: "target-analysis",
    title: "Target & Analysis",
    description:
      "Define your audience, analyze data, and optimize strategies to reach the right people with maximum efficiency.",
    icon: Crosshair,
  },
  {
    id: 3,
    slug: "get-results",
    title: "Get Results",
    description:
      "Turn insights into measurable growth with data-driven strategies designed to achieve long-lasting impact.",
    icon: BarChart3,
  },
];
