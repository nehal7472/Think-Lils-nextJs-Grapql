import { notFound } from "next/navigation";
import { workSteps } from "@/lib/workSteps";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const dynamicParams = true;

type WorkPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return workSteps.map((step) => ({
    slug: step.slug,
  }));
}

export default function DetailWorkPage({ params }: WorkPageProps) {
  const step = workSteps.find((s) => s.slug === params.slug);

  if (!step) {
    return notFound();
  }

  return (
    <main className="bg-[#0A1019] text-white min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Work Process
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{step.title}</h1>

        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-emerald-500/10 mb-6">
          <step.icon className="w-8 h-8 text-emerald-400" />
        </div>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed">
          {step.description}
        </p>

        {/* Extra Content (dummy for now) */}
        <div className="mt-10 space-y-4 text-gray-300">
          <p>
            At our agency, we follow this step to ensure your project moves
            forward with clarity and measurable results.
          </p>
          <p>
            Our team applies proven frameworks, in-depth market insights, and
            the latest tools to achieve success at this stage.
          </p>
        </div>
      </div>
    </main>
  );
}
