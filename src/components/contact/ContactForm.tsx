"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { contactForm } from "@/constants/contact";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      /**
       * Phase 2
       *
       * await fetch("/api/contact", {
       *   method: "POST",
       *   headers: {
       *      "Content-Type":"application/json"
       *   },
       *   body: JSON.stringify(formData)
       * });
       */

      await new Promise((resolve) => setTimeout(resolve, 1200));

      alert("Message sent successfully.");

      setFormData({
        fullName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Unable to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-border bg-card p-8 shadow-xl md:p-10"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
              className="h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-primary"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              required
              className="h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Institution / Company
          </label>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme University or Acme Corp."
            className="h-12 w-full rounded-xl border border-border bg-background px-4 outline-none transition focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            How can we help?
          </label>

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your goals, scale, and timelines..."
            required
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
          />
        </div>

        <motion.button
          whileHover={{
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.98,
          }}
          disabled={isSubmitting}
          type="submit"
          className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-primary text-base font-semibold text-primary-foreground transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send size={18} />

          {isSubmitting ? "Sending..." : contactForm.button}
        </motion.button>

        <p className="text-sm text-muted-foreground">
          {contactForm.disclaimer}
        </p>
      </form>
    </motion.div>
  );
}