import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import ConversionPanel from "@/components/ConversionPanel";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadershipSection from "@/components/LeadershipSection";
import BookingSection from "@/components/BookingSection";
import QualificationQuiz from "@/components/QualificationQuiz";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FaqPricingSection from "@/components/FaqPricingSection";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Branding, Websites, and Digital Growth",
  description:
    "Discover Capstone's agency approach to branding, web design, development, and digital growth for modern businesses.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: siteConfig.locations,
    serviceType: [
      "Brand Identity",
      "Web Design",
      "Web Development",
      "Digital Strategy",
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Hero />
      <ProofStrip />
      <ServicesPreview />
      <PortfolioPreview />
      <section className="border-t border-[color:var(--color-line)] py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-6">
          <ConversionPanel
            eyebrow="Clear next step"
            title="If the work feels right, move into a real conversation before the momentum fades."
            description="Most visitors do not need more pages. They need clarity on whether the right move is branding, redesign, development, or a broader engagement. A short call or a project brief usually gets there faster."
            primaryLabel="Book a Discovery Call"
            secondaryLabel="Send Project Details"
            bullets={[
              "Get a recommendation on the best starting point.",
              "Avoid over-scoping when the issue is narrower.",
              "Move from browsing into a real proposal path faster.",
            ]}
          />
        </div>
      </section>
      <TestimonialsSection />
      <BookingSection />
      <QualificationQuiz />
      <LeadMagnetSection />
      <LeadershipSection />
      <FaqPricingSection />
      <CTASection />
    </main>
  );
}
