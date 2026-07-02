"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] bg-gradient-to-br from-violet-700 via-violet-800 to-slate-900 px-10 py-20 text-center text-white shadow-2xl lg:px-20"
        >
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold backdrop-blur">
            Let's Build Together
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-tight">
            Ready to Build Your Future Workforce?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">
            Whether you're an institution, enterprise, or professional,
            Saadhana is ready to help you unlock new opportunities through
            recruitment, learning, and workforce transformation.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-violet-800 transition hover:scale-105"
            >
              Book a Consultation
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}