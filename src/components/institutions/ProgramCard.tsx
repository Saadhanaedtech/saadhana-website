"use client";

import { motion } from "framer-motion";
import { Program } from "@/types/institutions";

interface ProgramCardProps {
  program: Program;
  delay?: number;
}

export default function ProgramCard({
  program,
  delay = 0,
}: ProgramCardProps) {
  const Icon = program.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-10
        shadow-sm
        transition-all
        duration-300
        hover:border-violet-200
        hover:shadow-xl
      "
    >
      <div
        className="
          mb-8
          inline-flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-violet-50
          text-violet-700
          transition-colors
          group-hover:bg-violet-100
        "
      >
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">
        {program.title}
      </h3>

      <p className="text-lg leading-8 text-slate-600">
        {program.description}
      </p>
    </motion.div>
  );
}