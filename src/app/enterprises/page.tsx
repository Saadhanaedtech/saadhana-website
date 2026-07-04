import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import EnterpriseHero from "@/components/enterprises/EnterpriseHero";
import SolutionsSection from "@/components/enterprises/SolutionsSection";
import EnterpriseCTA from "@/components/enterprises/EnterpriseCTA";

export default function EnterprisesPage() {
  return (
    <>
      <Navbar />

      <EnterpriseHero />

      <SolutionsSection />

      <EnterpriseCTA />

      <Footer />
    </>
  );
}