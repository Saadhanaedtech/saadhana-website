"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import SolutionCard from "./SolutionCard";

import { enterpriseSolutions } from "@/constants/enterprises";

export default function SolutionsSection() {
  return (
    <section className="bg-[#F7F5FD] py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
            Solutions
          </div>

          <h2 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            End-to-End GCC Talent Enablement
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            From hiring to upskilling, we build globally competent teams that
            hit the ground running.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {enterpriseSolutions.map((item) => (
            <SolutionCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}