"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Clock, Eye } from "lucide-react"
import Link from "next/link"
import { WebinarNav } from "@/components/webinar-nav"

export default function WebinarReplayPage() {
  return (
    <div className="min-h-screen bg-background">
      <WebinarNav currentPage="replay" />

      {/* Header */}
      <header className="py-6 px-4 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">VTPS Training Replay</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Available for limited time</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>12,847 views</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong p-8 rounded-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Play className="h-4 w-4" />
              REPLAY AVAILABLE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Missed the Live Training?</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Watch the complete recording of Zach Calhoon's exclusive training on building a wildly profitable virtual
              tour business.
            </p>
            <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
              <span>• 90 minutes of actionable content</span>
              <span>• $10k+ case studies revealed</span>
              <span>• No equipment required to start</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Section */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl overflow-hidden mb-8">
              <div className="aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/592348094?h=0&title=0&byline=0&portrait=0"
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
              <h2 className="text-3xl font-bold mb-6 gradient-text">Complete Training Replay</h2>
              <p className="text-lg leading-relaxed mb-6">
                This is the complete recording of our exclusive live training where Zach Calhoon revealed his proven
                framework for building a successful VR business. Over 2,000 entrepreneurs attended live, and now you can
                access the full replay.
              </p>

              {/* What's Covered */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">What's Covered in This Training:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-primary">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Niche Validation Strategy</h4>
                      <p className="text-sm text-muted-foreground">
                        How to identify profitable VR niches without spending money on research
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-accent">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Preselling Framework</h4>
                      <p className="text-sm text-muted-foreground">
                        The exact script to land your first $10k+ client before buying equipment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-secondary">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Scaling Systems</h4>
                      <p className="text-sm text-muted-foreground">
                        How to build automated systems that generate recurring revenue
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-primary">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Real Case Studies</h4>
                      <p className="text-sm text-muted-foreground">
                        Multiple examples of students making $10k-$20k+ monthly
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgency Section */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-3 text-center">⚠️ Limited Time Access</h3>
                <p className="text-center text-muted-foreground mb-4">
                  This replay will be taken down soon. Don't miss your chance to access this valuable training.
                </p>
                <div className="text-center">
                  <Link href="/">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold rounded-xl hover-lift animate-glow"
                    >
                      Get Full VTPS Training Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-xl font-semibold rounded-xl hover-lift"
                  >
                    Start Your VR Business Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground mt-3">
                  Join thousands of successful VR entrepreneurs who started with this training.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Training Highlights */}
            <div className="glass-card p-6 rounded-2xl mb-6">
              <h3 className="text-xl font-semibold mb-4">Training Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Validate Before You Invest</p>
                    <p className="text-xs text-muted-foreground">
                      Learn to test market demand without spending on equipment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-xs font-bold text-accent">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-sm">High-Ticket Preselling</p>
                    <p className="text-xs text-muted-foreground">The exact process to close $10k+ deals upfront</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-xs font-bold text-secondary">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Recurring Revenue Model</p>
                    <p className="text-xs text-muted-foreground">
                      Build monthly subscriptions for hosting and maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="glass-card p-6 rounded-2xl mb-6">
              <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
              <div className="space-y-4 text-sm">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Ron K. - Kansas City</p>
                  <p className="text-muted-foreground">"Made over $10,000 in a few months using these methods"</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="font-semibold">Mark M. - Fort Worth</p>
                  <p className="text-muted-foreground">"On pace to add $20,000 to my business with VR tours"</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-semibold">Mark R. - Michigan</p>
                  <p className="text-muted-foreground">"Closed a $10,500 deal 2 days after implementing the advice"</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="glass-strong p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Ready to Take Action?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                This training gives you the foundation, but our complete VTPS program provides everything you need to
                succeed.
              </p>
              <Link href="/">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl hover-lift mb-3">
                  Join VTPS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-2">Special Offer:</p>
                <p className="text-sm font-semibold text-accent">Save $1,000 with code START1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
