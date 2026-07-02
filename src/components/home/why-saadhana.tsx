"use client";

import { motion } from "framer-motion";
import { whySaadhana } from "@/lib/constants/home";
import { BrainCircuit, Globe2, GraduationCap, Users } from "lucide-react";

const icons = {
  ai: BrainCircuit,
  experts: Users,
  global: Globe2,
  learning: GraduationCap,
};

export default function WhySaadhana() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-700">
            Why Choose Saadhana
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Helping People Grow.
            <br />
            Helping Businesses Win.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine technology, human expertise, and continuous learning
            to create intelligent talent solutions that deliver measurable
            business outcomes.
          </p>

          <div className="mt-12 space-y-5">
            {whySaadhana.map((item) => {
              const Icon = icons[item.icon];

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="rounded-xl bg-violet-100 p-3">
                    <Icon className="h-6 w-6 text-violet-700" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative flex h-[520px] w-[520px] items-center justify-center rounded-full bg-gradient-to-br from-violet-100 via-white to-emerald-100">

            <div className="absolute h-96 w-96 rounded-full border border-violet-200" />

            <div className="absolute h-72 w-72 rounded-full border border-emerald-200" />

            <div className="rounded-3xl bg-white p-10 shadow-2xl">
              <BrainCircuit className="mx-auto h-16 w-16 text-violet-700" />

              <h3 className="mt-6 text-center text-2xl font-bold text-slate-900">
                Intelligent Talent
              </h3>

              <p className="mt-4 max-w-xs text-center text-slate-600">
                AI-powered recruitment, workforce consulting,
                learning and career transformation.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}