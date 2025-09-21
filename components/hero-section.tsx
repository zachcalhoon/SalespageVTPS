import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <Badge className="bg-white/90 backdrop-blur-sm border border-blue-200 text-blue-800 text-sm font-medium px-6 py-3 hover-lift animate-glow shadow-lg">
          🚀 The 360º and VR Revolution Is Here
        </Badge>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-snug text-gray-900 lg:text-4xl">
            The 360º and VR Revolution Is Here…Build a Wildly Profitable{" "}
            <span className="text-glow bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              360º VR Agency
            </span>{" "}
            And Automatically Fill Your Calendar Every Month With Virtual Tour Sales…{" "}
            <span className="text-gray-700 text-4xl md:text-4xl">Even If You Have Zero Experience</span>
          </h1>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto hover-lift shadow-lg border border-gray-200">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-pretty leading-snug">
            Provide A NEW Service Local Businesses Desperately Need
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <p className="text-lg text-gray-800 font-medium">Press Play To Learn More </p>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 hover-lift shadow-xl border border-gray-200">
            <div className="relative aspect-video bg-black/50 rounded-2xl overflow-hidden shadow-2xl group">
              <video
                controls
                className="w-full h-full"
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N1qjaB5tfYLiOBlaYLkHZdC9MgaEdg.png"
              >
                <source
                  src="https://vtpssalesvideo.s3.us-west-2.amazonaws.com/VTPS+Information+VSL+-+Aug+25+2021.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none will-change-opacity">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Button
            size="lg"
            className="text-xl px-12 py-8 font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-2xl hover-lift animate-glow border-0"
          >
            Yes, I Want Access Now →
          </Button>
          <div className="glass rounded-full px-6 py-3">
            <p className="text-sm text-gray-900 font-medium">⚡ Limited Time: Save $500 Today</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-12 pb-16">
          {["No Tech Skills Required", "Done-For-You Templates", "Recurring Revenue Model"].map((benefit, index) => (
            <div
              key={benefit}
              className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 hover-lift shadow-lg border border-gray-200"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-900 font-medium">{benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
