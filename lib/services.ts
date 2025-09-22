// lib/services.ts
import {
  Search,
  Share2,
  BarChart3,
  Cpu,
  Globe,
  Code,
  Palette,
  ShoppingCart,
  Users,
  Lightbulb,
} from "lucide-react";

import { LucideIcon } from "lucide-react"; // 👈 import type separately

export type Service = {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon; // 👈 type is correct now
};

export const services: Service[] = [
  {
    id: 1,
    title: "Search Engine Optimization",
    slug: "seo",
    description:
      "Improve your website ranking and visibility on search engines with our tailored SEO strategies.",
    icon: Search,
  },
  {
    id: 2,
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    description:
      "Engage your audience and grow your brand presence on leading social media platforms.",
    icon: Share2,
  },
  {
    id: 3,
    title: "Online Marketing Strategy",
    slug: "online-marketing-strategy",
    description:
      "Comprehensive digital strategies that align with your business goals for maximum ROI.",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Digital Product Development",
    slug: "digital-product-development",
    description:
      "From idea to launch, we build scalable digital products tailored to your business needs.",
    icon: Cpu,
  },
  {
    id: 5,
    title: "Web Development",
    slug: "web-development",
    description:
      "Custom, scalable websites built with modern frameworks for performance and security.",
    icon: Code,
  },
  {
    id: 6,
    title: "Brand Strategy",
    slug: "brand-strategy",
    description:
      "Crafting memorable brand identities that connect with your audience and stand out.",
    icon: Palette,
  },
  {
    id: 7,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "User-friendly, modern designs that deliver seamless digital experiences.",
    icon: Globe,
  },
  {
    id: 8,
    title: "E-commerce Solutions",
    slug: "ecommerce-solutions",
    description:
      "High-performing online stores optimized for conversions and customer experience.",
    icon: ShoppingCart,
  },
  {
    id: 9,
    title: "Consulting",
    slug: "consulting",
    description:
      "Expert advice and insights to accelerate your digital growth and strategy execution.",
    icon: Users,
  },
  {
    id: 10,
    title: "Innovation & Research",
    slug: "innovation-research",
    description:
      "Cutting-edge research and innovation services to future-proof your digital presence.",
    icon: Lightbulb,
  },
];
