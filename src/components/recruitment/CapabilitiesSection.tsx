"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import GradientText from "@/components/common/GradientText";
import { recruitmentCapabilities } from "@/constants/recruitment";

export default function CapabilitiesSection() {
  return (
    <section className="py-24">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {recruitmentCapabilities.badge}
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
             <GradientText>Intelligent</GradientText>{" "}
             {recruitmentCapabilities.title.replace("Intelligent ", "")}
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {recruitmentCapabilities.description}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {recruitmentCapabilities.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="leading-8 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}