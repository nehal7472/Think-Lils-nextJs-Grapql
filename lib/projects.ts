// lib/projects.ts
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
      "https://images.unsplash.com/photo-1607082349566-187342b4d16b?auto=format&fit=crop&w=1200&q=80",
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
  // add more projects here...
];
