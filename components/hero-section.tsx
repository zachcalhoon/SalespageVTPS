"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { VideoEmbed } from "@/components/video-embed"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="glass-strong rounded-full px-6 py-3">
            <span className="font-bold gradient-text">VTPS Training</span>
          </div>
          <Link href="/webinar">
            <Button variant="outline" className="glass-strong border-primary/30 hover:bg-primary/10 bg-transparent">
              Free Webinar Training
            </Button>
          </Link>
        </div>
      </nav>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <Badge className="glass-strong text-primary text-sm font-medium px-6 py-3 hover-lift animate-glow shadow-lg">
          🚀 The 360º and VR Revolution Is Here
        </Badge>

        <div className="glass-card rounded-3xl p-8 shadow-2xl hover-lift">
          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight text-foreground lg:text-5xl">
            The 360º and VR Revolution Is Here…Build a Wildly Profitable{" "}
            <span className="gradient-text text-glow">360º VR Agency</span> And Automatically Fill Your Calendar Every
            Month With Virtual Tour Sales…{" "}
            <span className="text-4xl md:text-6xl relative">
              <span className="relative z-10">Even If You Have Zero Experience</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-70 -z-10 transform -skew-x-12"></span>
            </span>
          </h1>
        </div>

        <div className="glass rounded-2xl p-6 max-w-4xl mx-auto hover-lift shadow-xl">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground text-pretty leading-snug">
            Provide A NEW Service Local Businesses Desperately Need
          </p>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          {/* Hero Content */}
          <div className="text-center space-y-8 mb-16">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-300% text-balance">
                  Virtual Tour Profit System
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance">
                The Complete Blueprint to Building a Six-Figure Virtual Tour Business
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Today
              </button>
              <button className="border border-border hover:bg-accent/10 text-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-5xl mx-auto">
            <VideoEmbed
              src="https://vtpssalesvideo.s3.us-west-2.amazonaws.com/VTPS+Information+VSL+-+Aug+25+2021.mp4"
              poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N1qjaB5tfYLiOBlaYLkHZdC9MgaEdg.png"
              title="Virtual Tour Profit System Training"
              description="Press Play To Learn More"
              enableStickyOnScroll={true}
              stickyPosition="top-right"
              showEnrollButton={true}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-12 pb-16">
          {["No Tech Skills Required", "Done-For-You Templates", "Recurring Revenue Model"].map((benefit, index) => (
            <div
              key={benefit}
              className="glass rounded-2xl px-6 py-4 hover-lift shadow-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <p className="text-muted-foreground mb-4">Or watch our free training first:</p>
          <Link href="/webinar">
            <Button
              variant="outline"
              size="lg"
              className="glass-strong border-accent/30 hover:bg-accent/10 text-accent bg-transparent"
            >
              Watch Free Webinar Training
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
