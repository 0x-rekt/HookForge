import { HeroSection } from "@/components/landing/Hero";
import { FeaturesSection } from "@/components/landing/Features";
import { IntegrationsSection } from "@/components/landing/Integrations";
import { CtaSection } from "@/components/landing/Cta";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0F0C] text-[#F5F7F5] font-sans selection:bg-[#D4FF3D]/20 selection:text-[#F5F7F5]">
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <IntegrationsSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
