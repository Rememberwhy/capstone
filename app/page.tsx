import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
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
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialsSection />
      <QualificationQuiz />
      <LeadMagnetSection />
      <FaqPricingSection />
      <BookingSection />
      <CTASection />
    </main>
  );
}
