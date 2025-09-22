"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Breadcrumb {
  label: string;
  href?: string; // if no href, it's the current page
}

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
}

export default function PageHeader({
  title,
  breadcrumbs = [],
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "w-full rounded-lg text-left  px-4",
        className
      )}
    >
      <div className="max-w-6xl mx-auto mb-24">
        {/* Title with motion */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-3xl font-bold text-emerald-400 mb-4"
        >
          {title}
        </motion.h1>

        {/* Breadcrumbs with staggered motion */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="flex items-center text-sm text-gray-400 space-x-2"
          >
            {breadcrumbs.map((crumb, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex items-center"
              >
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-emerald-400 font-semibold">
                    {crumb.label}
                  </span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-500" />
                )}
              </motion.div>
            ))}
          </motion.nav>
        )}
      </div>
    </div>
  );
}
