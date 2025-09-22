export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Social Media Campaign",
    category: "Marketing",
    description:
      "A targeted social campaign that increased engagement by 65% and boosted conversions by 30%.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Low brand awareness in target demographics",
      "Limited budget for paid ads",
      "Need for consistent content creation",
    ],
    solutions: [
      "Created a 3-month organic & paid content strategy",
      "Leveraged influencer collaborations for reach",
      "Implemented data-driven targeting & A/B testing",
    ],
    results: [
      "📈 65% increase in engagement",
      "🚀 30% boost in conversions",
      "🎯 20% growth in followers in 3 months",
    ],
    technologies: ["Canva", "Meta Ads", "Google Analytics", "Buffer"],
  },
  {
    id: 2,
    title: "Mobile App Design",
    category: "UI/UX",
    description:
      "Designed a clean and intuitive mobile app that reduced churn rate significantly and improved onboarding completion.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    challenges: [
      "Complicated onboarding experience",
      "Poor navigation & cluttered UI",
      "High user drop-off after first use",
    ],
    solutions: [
      "Redesigned the onboarding flow with progressive disclosure",
      "Applied modern design system with accessibility in mind",
      "Simplified navigation with clear visual hierarchy",
    ],
    results: [
      "✅ 50% decrease in churn rate",
      "⏱ 35% faster onboarding completion",
      "⭐️ 4.8 App Store rating from 3.9",
    ],
    technologies: ["Figma", "Adobe XD", "React Native", "UserTesting"],
  },
  {
    id: 3,
    title: "E-commerce Website Revamp",
    category: "Web Development",
    description:
      "A complete redesign and optimization of an e-commerce store that doubled revenue within 6 months.",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1005&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    challenges: [
      "Slow website performance",
      "Poor checkout experience",
      "Low mobile conversion rates",
    ],
    solutions: [
      "Migrated to Next.js for faster performance",
      "Redesigned checkout flow for minimal friction",
      "Implemented responsive design & PWA features",
    ],
    results: [
      "💰 2x increase in revenue",
      "⚡️ 40% faster page load speed",
      "📱 60% growth in mobile conversions",
    ],
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Vercel"],
  },
  {
    id: 4,
    title: "SEO Optimization Project",
    category: "SEO",
    description:
      "Implemented a tailored SEO strategy that boosted organic traffic and keyword rankings.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Poor keyword rankings",
      "Low domain authority",
      "High bounce rate from organic visitors",
    ],
    solutions: [
      "Performed full SEO audit and keyword research",
      "Optimized on-page content and meta data",
      "Built high-quality backlinks",
    ],
    results: [
      "🔍 120% increase in organic traffic",
      "📊 Top 3 ranking for 15 competitive keywords",
      "📈 25% decrease in bounce rate",
    ],
    technologies: ["Ahrefs", "Google Search Console", "Yoast SEO", "SEMrush"],
  },
  {
    id: 5,
    title: "Corporate Branding Package",
    category: "Branding",
    description:
      "Developed a full branding system for a corporate client, including logo, guidelines, and marketing assets.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Outdated brand identity",
      "Inconsistent use of brand assets",
      "Low recognition in target market",
    ],
    solutions: [
      "Created a new visual identity and logo",
      "Developed brand guidelines for consistent usage",
      "Designed business cards, brochures, and presentations",
    ],
    results: [
      "🎨 Fresh modern identity",
      "📘 100% consistency across platforms",
      "🏆 Improved recognition in industry events",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
  },
  {
    id: 6,
    title: "Data Analytics Dashboard",
    category: "Data Science",
    description:
      "Built an interactive dashboard that helped executives make real-time data-driven decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Scattered and siloed data sources",
      "Lack of real-time insights",
      "Manual reporting process",
    ],
    solutions: [
      "Integrated multiple APIs and databases",
      "Developed interactive charts and KPIs",
      "Automated weekly and monthly reports",
    ],
    results: [
      "📉 Reduced manual reporting time by 80%",
      "📊 Improved decision-making speed by 50%",
      "🔗 Unified company-wide data access",
    ],
    technologies: ["Tableau", "Power BI", "Python", "PostgreSQL"],
  },
];
