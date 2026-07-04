import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import RecruitmentHero from "@/components/recruitment/RecruitmentHero";
import CapabilitiesSection from "@/components/recruitment/CapabilitiesSection";
import ProcessSection from "@/components/recruitment/ProcessSection";
import RecruitmentCTA from "@/components/recruitment/RecruitmentCTA";

export const metadata = {
  title: "Recruitment | Saadhana",
  description:
    "AI-powered recruitment solutions that help organizations hire better talent faster through intelligent assessments and structured evaluation.",
};

export default function RecruitmentPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <RecruitmentHero />

        <CapabilitiesSection />

        <ProcessSection />

        <RecruitmentCTA />
      </main>

      <Footer />
    </>
  );
}