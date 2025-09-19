import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/header/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import StatsSection from "@/components/stats/StatsSection";
import WorkSection from "@/components/work/WorkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}
