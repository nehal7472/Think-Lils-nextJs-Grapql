"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";
import { Lightbulb, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: <Lightbulb className="w-8 h-8 text-emerald-400" />,
    title: "Innovation First",
    desc: "We constantly explore new ideas to bring unique digital solutions.",
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-400" />,
    title: "Client-Centric",
    desc: "Your goals guide everything we create — collaboration is key.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-emerald-400" />,
    title: "Growth Driven",
    desc: "We design strategies that help brands scale faster and smarter.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", idx * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#1E293B] p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <div className="mb-4 flex justify-center">{val.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{val.title}</h3>
              <p className="text-gray-400">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
