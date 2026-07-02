"use client";

import { motion } from "framer-motion";
import { pillars } from "@/lib/constants/home";

export default function ThreePillars() {
  return (
    <section
      id="pillars"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
            Intelligent Talent Ecosystem
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            Three Pillars of Intelligent Talent Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A modern framework connecting professionals, businesses, and
            learning into one intelligent ecosystem.
          </p>
        </motion.div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-3xl shadow-lg">
                {pillar.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {pillar.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {pillar.description}
              </p>

              <ul className="mt-8 space-y-3">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <div className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}