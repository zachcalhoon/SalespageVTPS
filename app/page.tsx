import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { VideoTestimonials } from "@/components/video-testimonials"
import { VirtualTourExamples } from "@/components/virtual-tour-examples"
import { PricingSection } from "@/components/pricing-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function VTPSPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TestimonialsSection />
      <VideoTestimonials />
      <VirtualTourExamples />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
