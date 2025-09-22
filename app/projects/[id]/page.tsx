"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/lib/projects"; // ✅ use central data

export default function SingleProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === Number(params.id));
  if (!project) return notFound();

  return (
    <main className="bg-[#0A1019] text-white min-h-screen">
      {/* Hero Image */}
      <section className="relative h-[450px] w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center px-6 ">
          <div className="max-w-6xl mx-auto w-full ">
            {/* Page Header */}
            <PageHeader
              title="Projects"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: project.title },
              ]}
              className="mb-6  text-white pt-24 md:pt-0 sm:pt-0"
            />

            {/* Project Title */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              className="text-5xl font-extrabold text-white mb-2"
            >
              {project.title}
            </motion.h1>
            <p className="text-gray-300 text-lg">{project.category}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-16">
        {/* Overview */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.description}
          </p>
        </motion.div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#1E293B] p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Challenges</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#1E293B] p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Solutions</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {project.solutions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Results */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-10 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">Key Results</h3>
          <ul className="grid md:grid-cols-3 gap-4 text-gray-200">
            {project.results.map((r, i) => (
              <li
                key={i}
                className="bg-[#1E293B] p-4 rounded-xl text-center font-medium"
              >
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Technologies */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-[#1E293B] px-4 py-2 rounded-full text-sm text-gray-300 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
