"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import GradientText from "@/components/common/GradientText";
import { contactHero } from "@/constants/contact";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
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
              {contactHero.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {contactHero.title.first}{" "}
            <GradientText>
              {contactHero.title.gradient}
            </GradientText>{" "}
            {contactHero.title.last}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-muted-foreground md:text-xl">
            {contactHero.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}