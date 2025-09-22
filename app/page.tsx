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

export default function VTPSPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <TestimonialsSection />
      <VideoTestimonials />
      <VirtualTourExamples />
      <OfferSection />
      <ProgramBreakdown />
      <BonusMaterialsSection />
      <FinalCTASection />
      <Footer />
      <StickyBanner />
    </main>
  )
}
