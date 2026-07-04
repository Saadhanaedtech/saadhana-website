"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import GradientText from "@/components/common/GradientText";
import { aboutCTA } from "@/constants/about";

export default function AboutCTA() {
  return (
    <section className="relative py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-[32px] border border-border bg-card px-8 py-20 shadow-xl md:px-16"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {aboutCTA.title.first}{" "}
              <GradientText>
                {aboutCTA.title.gradient}
              </GradientText>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
              {aboutCTA.description}
            </p>

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group mt-12 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl"
            >
              {aboutCTA.button}

              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}