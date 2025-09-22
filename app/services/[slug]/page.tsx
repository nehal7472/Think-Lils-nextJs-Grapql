"use client";

import { useParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";
import Link from "next/link";

// Static service data (later replace with API)
const services = {
  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "We create powerful digital marketing strategies that boost visibility, generate leads, and drive sales. From SEO to paid ads, we help your brand thrive online.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Campaigns",
      "Paid Advertising (Google & Meta Ads)",
    ],
  },
  "web-development": {
    title: "Web Development",
    description:
      "We build fast, scalable, and secure websites tailored to your business. Using the latest technologies, we ensure your site is future-ready.",
    features: [
      "Responsive Web Apps",
      "Next.js / React Development",
      "API Integrations",
      "CMS Solutions",
      "Performance Optimization",
    ],
  },
  "brand-strategy": {
    title: "Brand Strategy",
    description:
      "A strong brand sets you apart. We design strategies that align with your values, attract the right audience, and build loyalty.",
    features: [
      "Brand Identity Design",
      "Messaging Framework",
      "Market Positioning",
      "Logo & Visual Guidelines",
      "Brand Voice & Storytelling",
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description:
      "User-focused designs that are beautiful and intuitive. We craft digital experiences that customers love.",
    features: [
      "Wireframing & Prototyping",
      "Mobile-first Design",
      "Usability Testing",
      "Accessibility Standards",
      "Interactive Prototypes",
    ],
  },
  "ecommerce-solutions": {
    title: "E-commerce Solutions",
    description:
      "We deliver online stores that are fast, secure, and conversion-focused. Empower your business with e-commerce.",
    features: [
      "Custom E-commerce Platforms",
      "Shopify / WooCommerce / Headless",
      "Payment Integration",
      "Inventory Management",
      "Sales Optimization",
    ],
  },
  consulting: {
    title: "Consulting",
    description:
      "Transform your business with expert guidance. Our consultants provide tailored digital strategies and practical solutions.",
    features: [
      "Digital Strategy Consulting",
      "Process Optimization",
      "Tech Stack Recommendations",
      "Market Research",
      "Growth Roadmaps",
    ],
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        <h2>Service not found.</h2>
      </main>
    );
  }

  return (
    <main className="bg-[#0A1019] text-white">
      <div className="pt-24">
        <PageHeader
          title={service.title}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </div>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="text-4xl font-bold mb-6"
        >
          {service.title}
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          className="text-lg text-gray-300 mb-10"
        >
          {service.description}
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-6"
        >
          {service.features.map((feature, i) => (
            <div
              key={i}
              className="bg-[#1E293B] p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                {feature}
              </h3>
              <p className="text-gray-400">
                Detailed explanation about {feature} and how it benefits your
                business.
              </p>
            </div>
          ))}
        </motion.div>

        <div className="pt-24 text-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition"
          >
            Get Started with {service.title}
          </Link>
        </div>
      </section>
    </main>
  );
}
