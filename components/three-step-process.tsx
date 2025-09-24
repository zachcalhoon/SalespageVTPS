"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Eye, RefreshCw } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ThreeStepProcess() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps in sequence
            setTimeout(() => setVisibleSteps([1]), 200)
            setTimeout(() => setVisibleSteps([1, 2]), 600)
            setTimeout(() => setVisibleSteps([1, 2, 3]), 1000)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: 1,
      title: "Validate Our Offers",
      description:
        "We research and validate high-demand niches to ensure every virtual tour service we create has proven market demand and profitability.",
      icon: CheckCircle,
      color: "from-primary to-primary/80",
    },
    {
      number: 2,
      title: "Sell High-Ticket Virtual Tours",
      description:
        "We position virtual tours as premium services, commanding $3,000-$8,000+ per project by focusing on value and transformation for clients.",
      icon: Eye,
      color: "from-accent to-accent/80",
    },
    {
      number: 3,
      title: "Sell Subscriptions on the Back-End",
      description:
        "We create recurring revenue streams by offering hosting, maintenance, and updates based on specific niches, needs, and client priorities.",
      icon: RefreshCw,
      color: "from-secondary to-secondary/80",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <Badge className="glass-strong mb-4 text-primary">Our Process</Badge>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 text-balance gradient-text text-glow"
            style={{ lineHeight: "1.2" }}
          >
            Our Three-Step Success System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            This proven methodology has generated millions in revenue for our students. Here's exactly how we build
            profitable VR businesses.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary opacity-30 -translate-y-1/2" />
          <div
            className={`hidden lg:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary -translate-y-1/2 transition-all duration-2000 ease-out ${
              visibleSteps.length === 3
                ? "w-full"
                : visibleSteps.length === 2
                  ? "w-2/3"
                  : visibleSteps.length === 1
                    ? "w-1/3"
                    : "w-0"
            }`}
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isVisible = visibleSteps.includes(step.number)

              return (
                <div
                  key={step.number}
                  className={`transform transition-all duration-700 ease-out ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <Card className="glass-card hover-lift h-full relative group">
                    <CardContent className="p-8 text-center space-y-6">
                      {/* Step number with gradient background */}
                      <div className="relative mx-auto w-20 h-20 mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full animate-glow`} />
                        <div className="relative w-full h-full bg-background/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {step.number}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>

                      {/* Animated progress indicator */}
                      <div className="w-full bg-muted/30 rounded-full h-1 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000 ease-out ${
                            isVisible ? "w-full" : "w-0"
                          }`}
                          style={{ transitionDelay: `${index * 200 + 500}ms` }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">Ready to implement this exact system in your business?</p>
          <div className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">System proven with 1,500+ students</span>
          </div>
        </div>
      </div>
    </section>
  )
}
