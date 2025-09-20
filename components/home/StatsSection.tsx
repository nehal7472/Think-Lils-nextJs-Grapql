"use client";

import { JSX, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Monitor, TrendingUp, Award } from "lucide-react";
import { fadeIn } from "@/framerMotion/variants";

type StatProps = {
  id: number;
  icon: JSX.Element;
  value: number;
  label: string;
};

const stats: StatProps[] = [
  {
    id: 1,
    icon: <Monitor className="w-8 h-8 text-emerald-400" />,
    value: 2,
    label: "Years of Experience",
  },
  {
    id: 2,
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    value: 12,
    label: "Projects Completed",
  },
  {
    id: 3,
    icon: <Award className="w-8 h-8 text-emerald-400" />,
    value: 6,
    label: "Client Satisfactions",
  },
];

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2s
    const stepTime = 16; // ~60fps
    const increment = target / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      // ease-out effect
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative bg-[#0A1019] py-20 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-white relative z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            variants={fadeIn("up", i * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 shadow-lg hover:shadow-emerald-400/30 transition-all text-center group"
          >
            {/* Icon container */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 mb-6 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>

            {/* Counter */}
            <h3 className="text-5xl font-extrabold text-white tracking-tight">
              <Counter target={stat.value} />+
            </h3>

            {/* Label */}
            <p className="mt-3 text-lg text-gray-300 font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
