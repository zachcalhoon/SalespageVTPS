"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users } from "lucide-react"
import Link from "next/link"
import { WebinarNav } from "@/components/webinar-nav"

export default function WebinarWatchPage() {
  return (
    <div className="min-h-screen bg-background">
      <WebinarNav currentPage="watch" />

      {/* Header */}
      <header className="py-6 px-4 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">VTPS Live Training</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Live Now</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>847 watching</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Main Video Section - Now full width */}
          <div>
            <div className="glass-card rounded-2xl overflow-hidden mb-8">
              <div className="aspect-video md:aspect-[16/10] lg:aspect-[16/9] xl:aspect-[21/10] min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                <iframe
                  src="https://player.vimeo.com/video/592348094?h=0&autoplay=1&title=0&byline=0&portrait=0"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Video Description */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                How To Start a Wildly Profitable Virtual Tour Business
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Welcome to this exclusive training with Zach Calhoon! In this comprehensive session, you'll discover the
                exact framework that has helped thousands of entrepreneurs build successful VR businesses without
                needing expensive equipment or prior experience.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Validate & Presell</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn to validate niches and presell without equipment
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Scale Systems</h3>
                  <p className="text-sm text-muted-foreground">Build automated systems that run without you</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-secondary">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">High-Ticket Sales</h3>
                  <p className="text-sm text-muted-foreground">Attract clients who pay premium prices monthly</p>
                </div>
              </div>

              <div className="text-center">
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-xl font-semibold rounded-xl hover-lift"
                  >
                    Get Started with VTPS Training
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground mt-3">
                  Ready to build your VR business? Join our comprehensive training program.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Key Takeaways */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>How to validate profitable VR niches without spending money</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>The exact script to presell your first $10k+ client</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Building systems that generate recurring revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Case studies of $20k+ monthly VR businesses</span>
                </li>
              </ul>
            </div>

            {/* CTA Card */}
            <div className="glass-strong p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Ready to Start Your VR Business?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Join our comprehensive VTPS training program and get everything you need to build a profitable virtual
                tour business.
              </p>
              <Link href="/">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl hover-lift">
                  Enroll in VTPS Training
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <p className="text-xs text-center text-muted-foreground mt-3">Limited time offer - Save $1,000 today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
