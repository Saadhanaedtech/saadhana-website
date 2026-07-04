"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import GradientText from "@/components/common/GradientText";
import { recruitmentHero } from "@/constants/recruitment";

export default function RecruitmentHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[100px]" />
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
              {recruitmentHero.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {recruitmentHero.title.first}{" "}
            <GradientText>
              {recruitmentHero.title.gradient}
            </GradientText>{" "}
            {recruitmentHero.title.last}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
            {recruitmentHero.description}
          </p>

          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group mt-12 inline-flex items-center gap-3 rounded-xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-xl"
          >
            {recruitmentHero.cta}

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}