"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Users, TrendingUp, DollarSign, X } from "lucide-react"
import { WebinarNav } from "@/components/webinar-nav"
import { WebinarNotificationWidget } from "@/components/webinar-notification-widget"

export default function WebinarLandingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showStickyVideo, setShowStickyVideo] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)
  const registrationFormRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const videoRect = videoRef.current.getBoundingClientRect()
        const isVideoOutOfView = videoRect.bottom < 0
        setShowStickyVideo(isVideoOutOfView)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <WebinarNav currentPage="landing" />

      <WebinarNotificationWidget />

      {showStickyVideo && (
        <div className="fixed top-20 right-4 z-[99999] w-96 bg-background/95 backdrop-blur-sm rounded-xl shadow-2xl border border-border/50 overflow-hidden">
          <div className="relative">
            <button
              onClick={() => setShowStickyVideo(false)}
              className="absolute top-2 right-2 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4 text-white" />
            </button>
            <div className="aspect-video bg-black">
              <video loop playsInline controls className="w-full h-full object-cover" poster="/webinar-cover.png">
                <source
                  src="https://webinarregistrationvtp.s3.us-west-2.amazonaws.com/Webinar+Registration+new+July+29.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="p-4 bg-background">
              <p className="text-sm font-medium mb-3">Free VR Business Training</p>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                onClick={() => {
                  document.querySelector("iframe")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 w-full">
          {/* Headline on top */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Exclusive Free Training With Zach Calhoon:
            </h1>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold gradient-text text-balance">
              How To Start a Wildly Profitable Virtual Tour Business and Get High Ticket Clients To Come To You
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mt-4 text-muted-foreground">
              Without Hard Selling Or Buying a Large Camera System
            </p>
          </div>

          {/* Hero content with video left, form right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Video on the left */}
            <div className="relative" ref={videoRef}>
              <div className="text-center mb-4">
                <p className="text-lg font-semibold text-primary animate-pulse">Press Play ▶️</p>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <video loop playsInline controls className="w-full h-full object-cover" poster="/webinar-cover.png">
                  <source
                    src="https://webinarregistrationvtp.s3.us-west-2.amazonaws.com/Webinar+Registration+new+July+29.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Opt-in form on the right */}
            <div className="glass-card p-4 rounded-2xl" ref={registrationFormRef}>
              <div className="text-center mb-3">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Reserve Your FREE Seat Now!</h3>
                <p className="text-lg text-muted-foreground mb-3">
                  Join thousands of entrepreneurs who are building profitable VR businesses
                </p>
              </div>

              <div className="mb-3">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/gthJLMjLWx4nocGAyZbV"
                  className="w-full border-none rounded"
                  style={{ height: "650px" }}
                  id="inline-gthJLMjLWx4nocGAyZbV"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Virtual Tour Profit System Webinar"
                  data-height="750"
                  data-layout-iframe-id="inline-gthJLMjLWx4nocGAyZbV"
                  data-form-id="gthJLMjLWx4nocGAyZbV"
                  title="Virtual Tour Profit System Webinar"
                />
                <script src="https://link.msgsndr.com/js/form_embed.js" />
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  ✓ 100% Free Training
                  <br />✓ No Credit Card Required
                  <br />✓ Instant Access After Registration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              What You'll Learn In This FREE Training
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                How to presell your first VR customer (without a camera or portfolio) and a fast way to validate
                profitable niches.
              </h3>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                How to build a systemized business that runs without you, the secret to scaling.
              </h3>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <DollarSign className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                How to have high ticket clients come to you and pay you monthly recurring revenue. Featuring multiple
                $10,000+ Case studies.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Zach Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Hosted By Zach Calhoon</h2>
            <p className="text-lg leading-relaxed mb-8">
              Zach Calhoon is an entrepreneur out of Houston TX. He has started and scaled multiple businesses and
              notably is the Co-Founder of CloudPano. A virtual tour software platform built for the digital media
              entrepreneur to thrive.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              In this FREE training, he reveals a proven framework that shows anyone can be an VR entrepreneur. If you
              follow these steps, build the repeatable system and add these specific offers to your business model, you
              will create a scalable business asset (that you can sell one day).
            </p>
            <p className="text-lg leading-relaxed">
              The surprising niches revealed in this webinar, prove the market is plentiful and the opportunity to
              profit is everywhere for the action oriented entrepreneur. VR the technology has shifted and this new
              business opportunity has exploded. With the tech and the market aligned, all you need is the right
              strategy to unlock paying customers. With this webinar, you will find the secret to consistent leads and
              consistent sales.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <div className="mb-6">
                <p className="text-lg italic mb-4">
                  "Since working with Zach and his team I have made over $10,000 and my business has quadrupled."
                </p>
                <div className="flex items-center">
                  <img
                    src="/testimonials/ron-kroeger.png"
                    alt="Ron Kroeger"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">Ron Kroeger</p>
                    <p className="text-sm text-muted-foreground">Kansas City, KS</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Ron used these methods and made over $10,000 in a few short months.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift">
              <div className="mb-6">
                <p className="text-lg italic mb-4">
                  "This technology changes the game. My customers are very excited about it. And I know when my
                  customers are excited about it, I am going to make some more money."
                </p>
                <div className="flex items-center">
                  <img
                    src="/testimonials/mark-mckinney.png"
                    alt="Mark McKinney"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">Mark McKinney</p>
                    <p className="text-sm text-muted-foreground">Fort Worth TX</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Mark McKinney is on pace to add $20,000 to his business with VR Tours on CloudPano
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift">
              <div className="mb-6">
                <p className="text-lg italic mb-4">
                  "I ran with your idea and advice, 2 days later I closed a $10,500 deal with one client with potential
                  to add in 100 more virtual tours."
                </p>
                <div className="flex items-center">
                  <img
                    src="/testimonials/mark-rutherford.png"
                    alt="Mark Rutherford"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">Mark Rutherford</p>
                    <p className="text-sm text-muted-foreground">St. Joseph Michigan</p>
                    <p className="text-xs text-muted-foreground">Craze VR Virtual Tours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
              Get started NOW! And claim your seat to this FREE webinar training.
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Before we take down this page and shut down the webinar.
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-2xl font-bold rounded-xl hover-lift animate-glow"
              onClick={() => {
                registrationFormRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }}
            >
              Yes! Reserve My Seat Now!
            </Button>

            <p className="text-lg mt-6 text-muted-foreground">100% Free • Our Next Training Starts Today</p>
            <p className="text-base mt-2 text-muted-foreground">
              Learn why over 28,000 VR Users Are On CloudPano. Register Now!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
