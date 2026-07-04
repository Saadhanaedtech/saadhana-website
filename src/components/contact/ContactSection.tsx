"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import { contactInfo } from "@/constants/contact";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-5 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {contactInfo.badge}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              {contactInfo.title}
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-muted-foreground">
              {contactInfo.subtitle}
            </p>

            {/* Contact Cards */}
            <div className="mt-12 space-y-6">
              {contactInfo.cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="flex items-center gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">
                        {card.title}
                      </h3>

                      <p className="mt-1 text-muted-foreground">
                        {card.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side */}
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}