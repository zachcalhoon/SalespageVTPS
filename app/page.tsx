import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { VideoTestimonials } from "@/components/video-testimonials"
import { VirtualTourExamples } from "@/components/virtual-tour-examples"
import { OfferSection } from "@/components/offer-section"
import { ProgramBreakdown } from "@/components/program-breakdown"
import { BonusMaterialsSection } from "@/components/bonus-materials-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { StickyBanner } from "@/components/sticky-banner"
import { NotificationWidget } from "@/components/notification-widget"

export const metadata: Metadata = {
  title: "VTPS Training - Build a Profitable 360° VR Agency | Virtual Tour Business System",
  description:
    "Learn how to build a wildly profitable 360° VR agency with our proven Virtual Tour Photography System. Start earning $10,000+ per month with virtual tours, even with zero experience. Get automated lead generation, high-ticket sales training, and subscription revenue models.",
  openGraph: {
    title: "Build a Profitable 360° VR Agency - VTPS Training System",
    description:
      "The complete system to build a wildly profitable 360° VR agency. Learn high-ticket sales, subscription models, and automated lead generation for virtual tours.",
    images: [
      {
        url: "/vtps-success-visual.png",
        width: 1200,
        height: 630,
        alt: "VTPS Training - Virtual Tour Business Success System",
      },
    ],
  },
  alternates: {
    canonical: "https://vtps-training.com",
  },
}

export default function VTPSPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "VTPS Training - Virtual Tour Photography System",
            description:
              "Complete training system to build a profitable 360° VR agency business with automated lead generation and high-ticket sales.",
            provider: {
              "@type": "Organization",
              name: "VTPS Training",
              url: "https://vtps-training.com",
            },
            courseMode: "online",
            educationalLevel: "beginner",
            teaches: [
              "360° Virtual Tour Photography",
              "VR Business Development",
              "High-Ticket Sales Strategies",
              "Subscription Business Models",
              "Automated Lead Generation",
              "Virtual Tour Software Mastery",
            ],
            offers: {
              "@type": "Offer",
              category: "Business Training",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      <HeroSection />
      <IntroSection />
      <TestimonialsSection />
      <VideoTestimonials />
      <VirtualTourExamples />
      <ProgramBreakdown />
      <OfferSection />
      <BonusMaterialsSection />
      <FinalCTASection />
      <Footer />
      <StickyBanner />
      <NotificationWidget />
    </main>
  )
}
