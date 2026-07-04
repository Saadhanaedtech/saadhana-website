"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import GradientText from "@/components/common/GradientText";
import { recruitmentProcess } from "@/constants/recruitment";

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            {recruitmentProcess.badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            From Screening to{" "}
            <GradientText>Selection</GradientText>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Powered by structured evaluation frameworks, intelligent
            automation and human expertise at every stage of recruitment.
          </p>
        </motion.div>

        {/* Process Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recruitmentProcess.steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <span className="text-4xl font-bold text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="text-lg font-medium leading-8 text-slate-100">
                {step}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-20 max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-500/5 px-8 py-10 text-center"
        >
          <h3 className="text-2xl font-semibold text-white">
            Smarter Hiring. Better Talent. Faster Decisions.
          </h3>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            By combining AI-powered assessments with structured human
            evaluation, we help organizations reduce hiring time,
            improve candidate quality, and create an exceptional
            recruitment experience.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}