"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import GradientText from "@/components/common/GradientText";
import { missionSection } from "@/constants/about";

export default function MissionSection() {
  return (
    <section className="relative py-24">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {missionSection.badge}
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            <GradientText>{missionSection.title.first}</GradientText>{" "}
            {missionSection.title.last}
            </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {missionSection.cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-semibold tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="leading-8 text-muted-foreground">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}