"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA when user scrolls past the hero section (approximately one viewport height)
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight

      // Show the button when scrolled past 80% of viewport height
      setIsVisible(scrollPosition > viewportHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <Button
        size="lg"
        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold px-8 py-4 shadow-2xl hover-lift animate-glow border-0 text-lg"
        onClick={() => window.open("https://wnh.thrivecart.com/virtual-tour-profit-system/?coupon=START1000", "_blank")}
      >
        Enroll Now - Save $1,000 →
      </Button>
    </div>
  )
}
