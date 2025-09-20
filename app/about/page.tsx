import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/about/CTASection";
import MissionSection from "@/components/about/MissionSection";
import TeamSection from "@/components/about/TeamSection";
import ValuesSection from "@/components/about/ValuesSection";
import React from "react";

export default function AboutPage() {
  return (
    <main className="bg-[#0A1019] text-white">
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </main>
  );
}
