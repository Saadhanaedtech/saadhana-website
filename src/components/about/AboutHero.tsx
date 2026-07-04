"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import GradientText from "@/components/common/GradientText";
import { aboutHero } from "@/constants/about";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute right-10 top-32 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute left-10 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {aboutHero.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {aboutHero.title.first}{" "}
            <GradientText>
              {aboutHero.title.gradient}
            </GradientText>{" "}
            {aboutHero.title.last}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-muted-foreground md:text-xl">
            {aboutHero.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}