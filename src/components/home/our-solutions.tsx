"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

import { solutions } from "@/lib/constants/home";

const icons = {
  institutions: GraduationCap,
  enterprises: Building2,
  recruitment: BriefcaseBusiness,
} as const;

type IconKey = keyof typeof icons;

export default function OurSolutions() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-700">
            Our Solutions
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            Tailored Solutions for Every Talent Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're an educational institution, an enterprise, or a
            professional seeking new opportunities, Saadhana delivers
            intelligent solutions that drive measurable outcomes.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {solutions.map((item, index) => {
           const Icon = icons[item.icon as IconKey];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-auto flex items-center gap-2 pt-10 font-semibold text-violet-700 transition-all group-hover:gap-3">
                  {item.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}