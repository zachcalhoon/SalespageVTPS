"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Play, Users, TrendingUp, DollarSign } from "lucide-react"
import { WebinarNav } from "@/components/webinar-nav"

export default function WebinarLandingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <WebinarNav currentPage="landing" />

      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source
              src="https://webinarregistrationvtp.s3.us-west-2.amazonaws.com/Webinar+Registration+new+July+29.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="glass-hero rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Exclusive Free Training With Zach Calhoon:
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 gradient-text">
              How To Start a Wildly Profitable Virtual Tour Business and Get High Ticket Clients To Come To You
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Without Hard Selling Or Buying a Large Camera System
            </p>

            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-xl font-semibold rounded-xl hover-lift animate-glow"
                >
                  <Play className="mr-2 h-6 w-6" />
                  Yes! Reserve My Seat Now!
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <div className="p-4">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/lO1sk3If9Q1m60lpPUQw"
                    style={{ width: "100%", height: "432px", border: "none", borderRadius: "3px" }}
                    id="inline-lO1sk3If9Q1m60lpPUQw"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="VTPS webinar yeah "
                    data-height="432"
                    data-layout-iframe-id="inline-lO1sk3If9Q1m60lpPUQw"
                    data-form-id="lO1sk3If9Q1m60lpPUQw"
                    title="VTPS webinar yeah "
                  />
                  <script src="https://link.msgsndr.com/js/form_embed.js" />
                </div>
              </DialogContent>
            </Dialog>

            <p className="text-lg mt-4 text-gray-300">100% Free • Our Next Training Starts Today</p>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              EXCLUSIVE FREE TRAINING WITH ZACH CALHOON
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

          <div className="text-center">
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-xl font-semibold rounded-xl hover-lift"
                >
                  Yes! Reserve My Seat Now!
                </Button>
              </DialogTrigger>
            </Dialog>
            <p className="text-lg mt-4 text-muted-foreground">100% Free • Our Next Training Starts Today</p>
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

            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-2xl font-bold rounded-xl hover-lift animate-glow"
                >
                  Yes! Reserve My Seat Now!
                </Button>
              </DialogTrigger>
            </Dialog>

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
