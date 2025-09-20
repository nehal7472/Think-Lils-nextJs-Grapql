import CTASection from "@/components/about/CTASection";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesHero from "@/components/services/ServicesHero";
import TestimonialsSection from "@/components/services/TestimonialsSection";
import React from "react";

export default function ServicesPage() {
  return (
    <main className="bg-[#0A1019] text-white">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
