import type { Metadata } from "next";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About | Saadhana Technology Solutions",
  description:
    "Learn how Saadhana Technology Solutions is transforming Human Capital Management through AI-powered talent solutions, intelligent learning, and future-ready workforce development.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <AboutHero />

        <MissionSection />

        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}