import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import ThreePillars from "@/components/home/three-pillars";
import WhySaadhana from "@/components/home/why-saadhana";
import OurSolutions from "@/components/home/our-solutions";
import CTASection from "@/components/home/cta-section";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ThreePillars />
      <WhySaadhana />
      <OurSolutions />
      <CTASection />
      <Footer />
    </>
  );
}