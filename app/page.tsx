import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <CTASection />
    </main>
  );
}