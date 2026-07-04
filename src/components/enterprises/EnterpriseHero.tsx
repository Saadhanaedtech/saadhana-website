"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";

import Container from "@/components/common/Container";
import GradientText from "@/components/common/GradientText";

export default function EnterpriseHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5FD] pt-36 pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          {/* Badge */}

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#F97316]">
            <Building2 size={16} />
            FOR ENTERPRISES
          </div>

          {/* Heading */}

          <h1 className="max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl">
            GCC Readiness{" "}
            <GradientText>
              Solutions
            </GradientText>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-600">
            As Global Capability Centers expand across India and beyond, the
            need for globally competent, communication-ready talent is
            critical. We deliver exactly that.
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
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#3A1D70]
            "
          >
            Scale Your GCC

            <ArrowRight size={20} />
          </button>
        </motion.div>
      </Container>
    </section>
  );
}