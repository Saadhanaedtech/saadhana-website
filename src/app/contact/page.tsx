import type { Metadata } from "next";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Saadhana Technology Solutions",
  description:
    "Get in touch with Saadhana Technology Solutions to discuss AI-powered talent solutions, recruitment, enterprise learning, and workforce transformation.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <ContactHero />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}