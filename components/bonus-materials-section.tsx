export function BonusMaterialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🎁{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Bonus Materials
            </span>{" "}
            Included
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get exclusive access to proven website templates, presentation materials, and marketing assets that our top
            students use to close high-value deals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Professional Website Template */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h60Uc6DGPHulJGdGmY9RJ8O44dWNBN.png"
                alt="Professional Virtual Tour Website Template"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Professional Website Template</h3>
            <p className="text-slate-300 mb-4">
              Get our proven "3D Virtual Tours For Houston Texas" website template that converts visitors into paying
              clients. This professional design includes:
            </p>
            <ul className="text-slate-300 space-y-2">
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                Contact information layout that builds trust
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                Compelling hero section with clear call-to-action
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                Professional service descriptions and VR showcase
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                Mobile-responsive design that works on all devices
              </li>
            </ul>
          </div>

          {/* Complete Presentation Deck */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2Gm6gDU6W5oNiDz5yEDM9TPXRSqrEA.png"
                alt="Complete Virtual Tour Presentation Deck"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Complete Presentation Deck (10 Slides)</h3>
            <p className="text-slate-300 mb-4">
              Our proven presentation slides that close deals and educate prospects about virtual tour value. Includes:
            </p>
            <ul className="text-slate-300 space-y-2">
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                Professional introduction and welcome slides
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                "What is a $60 Virtual Tour" value explanation
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                Immersive VR experience demonstrations
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                Quality standards and technical specifications
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                Branded slides with professional presenter info
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-400/30 rounded-full px-6 py-3">
            <span className="text-emerald-400 font-semibold">Combined Value: $2,500+ • Yours FREE with enrollment</span>
          </div>
        </div>
      </div>
    </section>
  )
}
