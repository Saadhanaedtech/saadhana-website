"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";
import GradientText from "@/components/common/GradientText";

export default function EnterpriseCTA() {
  return (
    <section className="bg-[#F7F5FD] py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto
            max-w-5xl
            rounded-[40px]
            border
            border-slate-200
            bg-white
            px-10
            py-20
            text-center
            shadow-sm
          "
        >
          {/* Badge */}

          <div className="mb-8 inline-flex rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#F97316]">
            For Enterprises
          </div>

          {/* Heading */}

          <h2 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Build a{" "}
            <GradientText>
              World-Class GCC Team
            </GradientText>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Let us help you create a talent engine that powers your Global
            Capability Center with precision, scale, and long-term success.
          </p>

          {/* CTA */}

          <button
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#2D1457]
              px-9
              py-4
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#3B1B72]
            "
          >
            Schedule a Consultation

            <ArrowRight size={20} />
          </button>
        </motion.div>
      </Container>
    </section>
  );
}