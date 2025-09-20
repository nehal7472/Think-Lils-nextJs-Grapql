"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

const steps = [
  {
    step: "01",
    title: "Discover",
    desc: "We understand your brand, goals, and audience before crafting strategies.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Creative and user-centric designs that align with your vision.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "Building scalable, fast, and modern digital solutions.",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "Seamless launch, testing, and ongoing support for growth.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Process
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", idx * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-[#1E293B] shadow-lg"
            >
              <span className="text-emerald-400 font-bold text-3xl">
                {step.step}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-400 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
