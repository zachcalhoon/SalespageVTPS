import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "VTPS 3.0 is Here | Virtual Tour Profit System",
  description:
    "The most powerful virtual tour business system ever created. VTPS 3.0 brings revolutionary features to help you build a wildly profitable 360° VR agency.",
  openGraph: {
    title: "VTPS 3.0 is Here - The Future of Virtual Tour Business",
    description:
      "Revolutionary new features and capabilities. Watch the announcement video and discover what's possible with VTPS 3.0.",
    images: [
      {
        url: "/vtps-3-announcement.jpg",
        width: 1200,
        height: 630,
        alt: "VTPS 3.0 Announcement",
      },
    ],
  },
}

export default function VTPS3Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-center">
        <p className="text-sm font-medium text-white flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4" />
          <span className="text-balance">
            New: VTPS 3.0 is now available. The future of virtual tour business is here.
          </span>
        </p>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            <Sparkles className="h-4 w-4" />
            Announcing VTPS 3.0
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
            The complete platform to build your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              virtual tour empire
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-12 max-w-3xl text-balance text-lg text-gray-400 md:text-xl lg:text-2xl">
            VTPS 3.0 brings revolutionary tools and systems to help you build, scale, and automate your 360° VR agency.
            Watch the announcement to see what's possible.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-14 bg-white px-8 text-base font-semibold text-black hover:bg-gray-100"
            >
              <Link href="/">
                Join VTPS Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 border-gray-700 bg-transparent px-8 text-base font-semibold text-white hover:bg-gray-900 hover:text-white"
            >
              <Link href="/webinar">
                Watch Free Training
                <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Video Section */}
          <div className="relative mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl">
              {/* Video Embed */}
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/alCtTi3DIto?si=Ui-Y4jjDE-cFs6RE"
                  title="VTPS 3.0 Announcement Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl">What's new in VTPS 3.0</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Advanced Automation",
                description: "Automate your entire lead generation and follow-up process",
              },
              {
                title: "AI-Powered Tools",
                description: "Leverage AI to create stunning virtual tours faster than ever",
              },
              {
                title: "Enhanced CRM",
                description: "Manage clients and projects with our powerful new CRM system",
              },
              {
                title: "Premium Software Bundle",
                description: "Access $9,473/year worth of professional software tools",
              },
              {
                title: "Proven Sales System",
                description: "Close high-ticket deals with our battle-tested sales framework",
              },
              {
                title: "Ongoing Support",
                description: "Get expert guidance and community support every step of the way",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-colors hover:border-gray-700"
              >
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 text-center md:p-12 lg:p-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Ready to get started?</h2>
          <p className="mb-8 text-balance text-lg text-gray-400 md:text-xl">
            Join thousands of successful virtual tour professionals building profitable businesses with VTPS 3.0
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-14 bg-gradient-to-r from-blue-600 to-cyan-500 px-8 text-base font-semibold text-white hover:from-blue-700 hover:to-cyan-600"
            >
              <Link href="/">
                Enroll in VTPS Training
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 border-gray-700 bg-transparent px-8 text-base font-semibold text-white hover:bg-gray-900 hover:text-white"
            >
              <Link href="/webinar">
                Watch Free Webinar
                <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-16" />
    </main>
  )
}
