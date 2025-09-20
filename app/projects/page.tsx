import ProjectHighlights from "@/components/projects/ProjectHighlights";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import React from "react";

export default function ProjectsPage() {
  return (
    <main className="bg-[#0A1019] text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6">Our Projects</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          A showcase of our creative solutions, technical expertise, and
          impactful results. Each project represents our dedication to
          innovation and excellence.
        </p>
      </section>

      {/* Highlights */}
      <ProjectHighlights />

      {/* Grid */}
      <ProjectsGrid />
    </main>
  );
}
