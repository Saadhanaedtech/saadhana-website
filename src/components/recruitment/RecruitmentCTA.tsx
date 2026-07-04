"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import GradientText from "@/components/common/GradientText";
import { recruitmentCTA } from "@/constants/recruitment";

export default function RecruitmentCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-3xl border border-border bg-card px-10 py-20 text-center shadow-lg"
        >
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            {recruitmentCTA.title.first}{" "}
            <GradientText>
              {recruitmentCTA.title.gradient}
            </GradientText>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            {recruitmentCTA.description}
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group mt-12 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-xl"
          >
            {recruitmentCTA.button}

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