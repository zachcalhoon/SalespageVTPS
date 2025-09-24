// Assuming CombinedVideoTestimonials is a component that needs to be imported
// For the purpose of this merge, we'll assume it's a local component defined below.
// If it's a remote component, it would need to be imported.

// Placeholder for CombinedVideoTestimonials if it's not imported from elsewhere
// const CombinedVideoTestimonials = () => {
//   // This is a placeholder component. Replace with actual implementation or import.
//   return (
//     <div className="text-center text-gray-500">
//       {/* Placeholder for video testimonials */}
//       <p>Video Testimonials Section (Placeholder)</p>
//     </div>
//   )
// }

export default function IntroSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-8 mb-8 hover-lift shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Learn From 75,000+ CloudPano VR Entrepreneurs
          </h2>

          <div className="text-lg text-muted-foreground mb-8 space-y-4 max-w-3xl mx-auto">
            <p>Create a profitable 360°/VR Agency that scales.</p>
            <p>
              Then learn how to outsource the tasks of your entire business and step away while still pocketing the
              lion's share of the revenue.
            </p>
            <p>Get paid monthly recurring revenue for a job you did once and make a passive, residual income.</p>
            <p>Set your own schedule, be your own boss, and start earning FAST!</p>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 leading-snug">
            The Golden Age of Virtual Reality and 3D/360º Marketing Has Arrived
          </h3>
        </div>

        <div className="glass rounded-2xl p-6 mb-12 hover-lift shadow-xl">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29-dTtP0spxfxNBxxgaDMsxnFER4jsxiW.png"
            alt="VTPS - Virtual Tour Profit System"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="glass-card rounded-3xl p-8 mb-12 text-left max-w-3xl mx-auto space-y-6 hover-lift shadow-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            <div className="flex-shrink-0">
              <img
                src="/placeholder.svg?key=a09ea"
                alt="Zach Calhoon headshot"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg text-foreground">
                <strong>{"Hey there! \n\nZach Calhoon here..."}</strong>
              </p>
              <p className="mt-4 text-muted-foreground">
                You might know from history class that in the 1920s, radio went from novelty to global adoption. In the
                '50s, the same thing happened to television. And now in this era we are ushering in the widespread use
                of virtual reality and an untapped diamond mine of opportunity is coming with it.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Today, 360º media and VR is still new and exciting. And it doesn't matter who you are, or how
            technologically basic you may be. By following a few simple steps, you can make a killing by being among the
            few VR providers in your local market. A VR revolution is here, are you ready?
          </p>

          <div className="glass-strong rounded-2xl p-8 my-8 hover-lift shadow-xl">
            <h4 className="text-2xl font-bold text-foreground mb-4 text-center">
              Anyone Could Do This And Make Serious Money.
            </h4>
            <h5 className="text-xl font-semibold text-foreground mb-4 text-center">Even With Zero Experience.</h5>
            <p className="text-muted-foreground">
              You don't have to be "techy" whatsoever. I'm not. Some of our members have no business or tech experience.
              In fact, not being a tech person actually makes you better at this business because it makes you more
              approachable and focused on the practical stuff (getting results for your clients).
            </p>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 mb-12 hover-lift shadow-2xl">
          <h4 className="text-2xl font-bold text-foreground mb-8 text-center">
            ...and unlock $30K deals the next month
          </h4>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-foreground mb-4 text-center">Before VTPS:</h5>
              <div className="glass rounded-2xl p-4 shadow-lg hover-lift">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-OLGgeSxpMNEYuPApANrzn5LMXCdXS5.png"
                  alt="Email from Jordan Arbo asking about a $30K gym deal with 13 locations, seeking guidance on hosting fees and white label embedding"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-foreground mb-4 text-center">After VTPS:</h5>
              <div className="glass rounded-2xl p-4 shadow-lg hover-lift">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-U1weD2gfbA4GwxtPXTkhNtWiZwjVk3.png"
                  alt="Follow-up email from Jordan Arbo praising VTPS training as SO GOOD, thorough, easy to follow, and a literal life saver"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 mb-12 hover-lift shadow-2xl">
          <h4 className="text-2xl font-bold text-foreground mb-8">Meet the Virtual Tour Profit System (VTPS)</h4>
          <div className="glass rounded-2xl p-6 mb-8 hover-lift shadow-xl">
            <img
              src="/vtps-comprehensive-platform.png"
              alt="VTPS - Virtual Tour Profit System comprehensive business platform showing multiple devices with real estate listings, analytics dashboards, virtual tours, and cloud connectivity"
              className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="text-left space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-center">
              <strong className="text-2xl text-foreground">
                VTPS is a roadmap to your first $10,000 as a digital media service provider.
              </strong>
            </p>

            <p>
              You'll learn how to photograph a venue, room or real estate and get the exclusive access to VR software.
            </p>

            <p>But this isn't just some technical course.</p>

            <p>Equally important is learning how to find, attract, and close new business.</p>

            <p>
              Because if you've ever operated a startup before, you know it's not just about having the skills. It's
              about having the clients.
            </p>

            <p>
              That's why included with VTPS is all the resources you'll ever need – from cold approach emails to
              websites to lists of businesses to sell too.
            </p>

            <p>
              <strong className="text-foreground">You can literally cut and paste your way to success.</strong>
            </p>

            <div className="my-16">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl mb-4 transform transition-transform duration-200 group-hover:scale-105 shadow-lg will-change-transform glass-strong">
                    1
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">Close the Deal</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Use our proven scripts and templates to secure high-value virtual tour contracts
                  </p>
                </div>

                {/* Connector Arrow */}
                <div className="hidden md:block">
                  <svg className="w-12 h-8 text-primary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-accent-foreground font-bold text-2xl mb-4 transform transition-transform duration-200 group-hover:scale-105 shadow-lg will-change-transform glass-strong">
                    2
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">Capture in 360</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Use professional 360° cameras to capture stunning immersive content
                  </p>
                </div>

                {/* Connector Arrow */}
                <div className="hidden md:block">
                  <svg className="w-12 h-8 text-accent animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl mb-4 transform transition-transform duration-200 group-hover:scale-105 shadow-lg will-change-transform glass-strong">
                    3
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">Deliver & Profit</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Deliver virtual tours for high-ticket or recurring revenue streams
                  </p>
                </div>
              </div>
            </div>

            <h5 className="font-semibold text-foreground mt-8 mb-6 text-2xl">The Journey Inside VTPS</h5>

            <div className="glass rounded-2xl p-4 mb-8 hover-lift shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-8EjkfZrEg6uqr0tC2FewTJuyz8eXYy.png"
                alt="Facebook testimonial from Brian Knox praising VTPS training as pure gold with more actionable content than college degrees"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8 mb-12 hover-lift shadow-2xl">
          <div className="text-center mb-8">
            <h4 className="font-bold text-foreground mb-2 text-2xl">Built On Results</h4>
            <p className="text-xl text-muted-foreground">and</p>
            <h5 className="text-2xl font-semibold text-foreground">A Step by Step Framework</h5>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Stephen Farrel Video Testimonial */}
            <div className="space-y-6">
              <div className="text-center">
                <h6 className="text-xl font-bold text-foreground">Stephen Farrel - Baltimore Maryland</h6>
                <p className="text-lg text-muted-foreground">CEO of Clover Sky Media</p>
                <p className="text-lg font-semibold text-primary">"Closes 5 Clients in 5 Days With VTPS."</p>
              </div>
              <div className="glass rounded-2xl p-4 hover-lift shadow-xl">
                <div className="aspect-video bg-black/20 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://player.vimeo.com/video/658141220"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Stephen Farrel VTPS Testimonial"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Andy Crozier Video Testimonial */}
            <div className="space-y-6">
              <div className="text-center">
                <h6 className="text-xl font-bold text-foreground">Andy Crozier - United Kingdom</h6>
                <p className="text-lg text-muted-foreground">Owner of Insight Photography</p>
                <p className="text-lg font-semibold text-primary">"Got Started In 3 Weeks With VTPS"</p>
              </div>
              <div className="glass rounded-2xl p-4 hover-lift shadow-xl">
                <div className="aspect-video bg-black/20 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://player.vimeo.com/video/658141398?h=78079c62b7"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Andy Crozier VTPS Testimonial"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Businesses Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
          <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Local Businesses Are Desperate For A Way To Stand Out And Attract Fresh Eyeballs
          </h4>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>…And virtual reality tours are like a shortcut for these businesses to attract buyers.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex-shrink-0"></div>
                <p className="font-semibold text-gray-900">Universities</p>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0"></div>
                <p className="font-semibold text-gray-900">Restaurants</p>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                <p className="font-semibold text-gray-900">Event Spaces</p>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex-shrink-0"></div>
                <p className="font-semibold text-gray-900">Vacation Rentals</p>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex-shrink-0"></div>
                <p className="font-semibold text-gray-900">Boats & Breweries</p>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex-shrink-0"></div>
                <p className="font-semibold text-gray-900">And Much More...</p>
              </div>
            </div>

            <p className="text-lg font-semibold text-center text-gray-900">
              All sorts of businesses are happy to pay you $500 to $2,000 for half an afternoon of work.
            </p>

            <p>
              Because even though it's easy (and trust me, it really is easy) you're offering something not only
              valuable, but something NEW.
            </p>

            <p>A virtual tour is an immersive, sexy way to learn about a business that truly sets it apart.</p>

            <p className="font-semibold text-gray-900">
              Imagine being one of the very first businesses to advertise on TV in the 1940s.
            </p>

            <p>The technology is incredibly persuasive, and incredibly valuable.</p>

            <p>
              With a VR tour, prospects can scope out businesses with a level of convenience the competitors can't
              match.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">See A Virtual Tour In Action</h4>
            <p className="text-lg text-gray-600">
              Experience what your clients will receive - click and drag to explore this interactive 360° tour
            </p>
          </div>

          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe
              src="https://app.cloudpano.com/tours/7DpRqNlJ8MV"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="CloudPano Virtual Tour Example"
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">Interactive 360° Virtual Tour - Click and drag to explore</p>
          </div>
        </div>

        {/* Removed the "Another Virtual Tour Example" section completely */}

        <div className="mb-12">
          <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            I get it. Starting a whole new business is scary.
          </h4>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <p className="text-lg text-center">
            That's why I took every step of the business building process and just did it for you.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg">
            <h5 className="text-xl font-semibold text-gray-900 mb-6 text-center">That means…</h5>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <p className="font-medium">We'll give you a website.</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <p className="font-medium">We'll give you a live portfolio to show off.</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <p className="font-medium">
                  We give you all the content, emails, brochures, scripts, proposals, pitch decks and marketing stuff
                  you'd ever need.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-gray-900">
              There is no guesswork or independent thought required; no skill to learn. You just follow the recipe.
            </p>
          </div>
        </div>

        {/* Success Testimonials */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h5 className="text-2xl font-bold text-gray-900 mb-4">Real Results From Real Students</h5>
            <p className="text-lg text-gray-600">Students achieving real results with VTPS</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Caleb's $40,000+ Project */}
              <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
                  <h5 className="text-2xl font-bold text-center">Caleb Lands A $40,000+ Project Using CloudPano</h5>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                      C
                    </div>
                    <div>
                      <h6 className="text-xl font-bold text-gray-900">Caleb</h6>
                      <p className="text-sm text-gray-600">VTPS Success Story</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <img
                      src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-iQ0k2EQM6A78NbprphdnH1U0fqLIrC.png"
                      alt="Text message showing Caleb's two major deals: $17,964 for one project with $250/month hosting and $20,064 for another with $250/month hosting"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900 mb-2">Two Major Deals Closed:</p>
                    <div className="space-y-2">
                      <p className="text-green-600 font-bold">$17,964 + $250/month recurring</p>
                      <p className="text-green-600 font-bold">$20,064 + $250/month recurring</p>
                      <div className="border-t border-gray-200 pt-2 mt-4">
                        <p className="text-2xl font-bold text-gray-900">Total: $38,028+</p>
                        <p className="text-sm text-gray-600">Plus $500/month recurring revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jordan's $18,000 Project */}
              <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
                  <h5 className="text-2xl font-bold text-center">Jordan Lands A $18,000 Project Using CloudPano</h5>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                      J
                    </div>
                    <div>
                      <h6 className="text-xl font-bold text-gray-900">Jordan Powers</h6>
                      <p className="text-sm text-gray-600">360° Tour Professional</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <img
                      src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-tbNt94HRxFyiFcjl2bNwVkMl4uyqiq.png"
                      alt="Mobile phone screenshot showing Jordan Powers' text conversation mentioning an $18k project"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900 mb-2">Single Project Closed:</p>
                    <p className="text-3xl font-bold text-blue-600 mb-4">$18,000</p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Business:</strong> tours.mnvirtualtours.net
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Professional virtual tour services generating substantial revenue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Combined Results */}
            <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
              <h6 className="text-3xl font-bold text-gray-900 mb-2">Combined Results: $56,028+</h6>
              <p className="text-lg text-gray-600">Plus $500/month in recurring revenue</p>
            </div>
          </div>
        </div>

        {/* FREEDOM section moved here */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-8">Not Just Money. FREEDOM.</h4>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">You'll get a unique feeling when you start your VTPS journey.</p>

                <p className="text-lg">
                  Because you won't have to report to me or anyone else. You're the boss. This is a new path where:
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-left max-w-2xl mx-auto">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="font-medium">You can take as much time off as you want.</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="font-medium">You can work as much or as little as you want.</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="font-medium">You can work anywhere.</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="font-medium">You can not work at all (and still make money, lots of it).</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="font-medium">
                        You can help people who honestly and sincerely show you gratitude for a job well done
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="font-medium">You can have FUN at work again.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg">
                    And beyond that, there's the selfish stuff, too. A nicer car. A bigger house. More vacations. Better
                    retirement. Peace of mind. Fancy clothes. Fancy restaurants. Fancy everything.
                  </p>

                  <p className="text-lg font-semibold text-gray-900">All things in life become easier.</p>

                  <p className="text-lg font-semibold text-gray-900">Happier.</p>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200 max-w-2xl mx-auto">
                    <p className="text-lg font-medium text-gray-900">
                      And the best part is that there's a whole module in VTPS about how to build a team to take over so
                      you can have more time for yourself and your family.
                    </p>
                    <p className="text-lg font-semibold text-green-700 mt-4">Set it and forget it.</p>
                  </div>

                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-900">So you don't work for a company.</p>
                    <p className="text-2xl font-bold text-blue-600 mt-2">You own a company.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-pqGYo77QxtRmC9kkvfwDpGGHhA0Xl9.png"
                  alt="Smiling woman in checkered shirt holding Google Cardboard VR viewer outdoors, representing the freedom and enjoyment of working in VR technology"
                  className="w-80 h-80 object-cover rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* More Success Stories */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h5 className="text-2xl font-bold text-gray-900 mb-4">Proof we get wildly successful results fast.</h5>
            <p className="text-lg text-gray-600">Students achieving real results with VTPS</p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mark Rutherford $10,500 testimonial */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="mb-4">
                <h6 className="text-xl font-bold text-gray-900 mb-2">
                  Read How Mark Sold His First $10,500 Virtual Tour Deal
                </h6>
                <h6 className="text-lg font-bold text-blue-600 mb-3">To The Mayor Of His Town (Really!)</h6>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  MR
                </div>
                <h6 className="text-lg font-bold text-gray-900">Mark Rutherford</h6>
                <p className="text-xs text-gray-600">Owner, CrazeVR Virtual Tours</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-2cw4iKorGKjblCJhwKc8roPMQvjBSf.png"
                  alt="Email from Mark Rutherford celebrating his $10,500 virtual tour deal after getting advice from Zach, with potential for 100 more tours"
                  className="w-full rounded-lg"
                />
              </div>
              <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                "Here is a success story I had a virtual talk with you on an idea because I needed some advice and to
                brainstorm prices. I ran with the idea and advice 2 days later I closed a 10,500 deal with one client
                with potential to add in 100 more virtual tours."
              </blockquote>
            </div>

            {/* Ron video testimonial */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="mb-4">
                <h6 className="text-xl font-bold text-gray-900 mb-2">Hear How Ron Made $10,000+</h6>
                <h6 className="text-lg font-bold text-blue-600 mb-3">With This Content...</h6>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  R
                </div>
                <h6 className="text-lg font-bold text-gray-900">Ron</h6>
                <p className="text-xs text-gray-600">VTPS Success Story</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <video controls className="w-full h-full object-cover">
                    <source
                      src="https://rontestimonial.s3-us-west-2.amazonaws.com/ron+testimonail.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Watch Ron share his incredible success story and how he generated over $10,000 using the VTPS system and
                content strategies.
              </p>
            </div>

            {/* Bobby video testimonial */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="mb-4">
                <h6 className="text-xl font-bold text-gray-900 mb-2">Hear How Bobby Got His First 2 Clients Fast</h6>
                <h6 className="text-lg font-bold text-blue-600 mb-3">With VTPS</h6>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  B
                </div>
                <h6 className="text-lg font-bold text-gray-900">Bobby</h6>
                <p className="text-xs text-gray-600">VTPS Success Story</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <video controls className="w-full h-full object-cover">
                    <source
                      src="https://testimonialbobby.s3-us-west-2.amazonaws.com/bobby+testimonial.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Watch Bobby share how he quickly landed his first two clients using the VTPS system and strategies.
              </p>
            </div>

            {/* Tony "Making Bank" testimonial */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="mb-4">
                <h6 className="text-xl font-bold text-gray-900 mb-2">Read How Tony Is "Making Bank"</h6>
                <h6 className="text-lg font-bold text-green-600 mb-3">Straight Out Of The Box</h6>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  TM
                </div>
                <h6 className="text-lg font-bold text-gray-900">Tony Martin</h6>
                <p className="text-xs text-gray-600">VTPS Success Story</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-DaZwhVedJJH331JUEz3yXvXxDBkDiX.png"
                  alt="Email from Tony Martin showing his rapid success - $600 contract within days plus multiple prospects in pipeline"
                  className="w-full rounded-lg"
                />
              </div>
              <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                "Within days of watching your YouTube videos, I had a new Insta360 One X, built a tour of my own house,
                and landed a hotel/function center contract for $600. One week further in, and I have secured an
                engineering company, and am in negotiations with an RV/Caravan manufacturer, and an interior design
                firm."
              </blockquote>
            </div>

            {/* David testimonial */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="mb-4">
                <h6 className="text-xl font-bold text-gray-900 mb-2">Listen To David And His Experience</h6>
                <h6 className="text-lg font-bold text-blue-600 mb-3">Using The Tools In VTPS</h6>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  D
                </div>
                <h6 className="text-lg font-bold text-gray-900">David</h6>
                <p className="text-xs text-gray-600">VTPS Success Story</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://player.vimeo.com/video/658140520?h=5ae48f8fc0"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="David's VTPS Experience Testimonial"
                  ></iframe>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Watch David share his experience using the tools and strategies provided in the VTPS system.
              </p>
            </div>

            {/* Jean Paul Testimonial */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  JP
                </div>
                <h6 className="text-lg font-bold text-gray-900">Jean Paul Kamaiopili</h6>
                <p className="text-xs text-gray-600">VTPS Student</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-erGiaf3a2UXLzhEygWruRYrqjteMpM.png"
                  alt="Email from Jean Paul celebrating landing a $530 deal with $30 monthly subscription and additional land survey work"
                  className="w-full rounded-lg"
                />
              </div>
              <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                "Will do Zach! Your adding a lot of value to me with your step by step set up. I just landed a $530 deal
                with a $30 subscription fee every month for 6 months! Also landed a land survey from the tiny home
                community. I'll most def get your course now."
              </blockquote>
            </div>

            {/* Aiden Kaczka Testimonial */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  AK
                </div>
                <h6 className="text-lg font-bold text-gray-900">Aiden Kaczka</h6>
                <p className="text-xs text-gray-600">Training Attendee</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-bZD4xrhdibNNMfzJ69MTqdc5G6RRPS.png"
                  alt="Facebook post from Aiden Kaczka praising Zach Calhoon's content and live FB ad training as extremely valuable"
                  className="w-full rounded-lg"
                />
              </div>
              <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                "If you haven't started watching Zach Calhoons content, you're making a mistake. I attended his live FB
                ad training and it was the most useful thing I've watched in a while. Definitely tune in next time if he
                holds another."
              </blockquote>
            </div>

            {/* Taha Lababedi Testimonial */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  TL
                </div>
                <h6 className="text-lg font-bold text-gray-900">Taha Lababedi</h6>
                <p className="text-xs text-gray-600">Rising Star Member</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-9NB5yPzgQk9ExZ4oBbtOjVMN5zxphS.png"
                  alt="Facebook post from Taha Lababedi thanking the VTPS group for helping him land $2000 worth of clients just two days after getting his camera"
                  className="w-full rounded-lg"
                />
              </div>
              <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                "Really thankful to be in this group, i had clients worth of $2000 and i got the camera two days ago.
                Thank you so much for all the members of this group, and especially to Zach Calhoon for the helpful
                videos that he always made for us."
              </blockquote>
            </div>

            {/* Rick Brazil Testimonial */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  RB
                </div>
                <h6 className="text-lg font-bold text-gray-900">Rick Brazil</h6>
                <p className="text-xs text-gray-600">CloudPano User</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-n0oDLkQksJhwLjemkXkFTLOiQLE1pw.png"
                  alt="Facebook comment from Rick Brazil praising CloudPano and thanking Zach and Clayton"
                  className="w-full rounded-lg"
                />
              </div>
              <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                "I just wanna say Cloudpano rocks! Thanks Zach & Clayton!"
              </blockquote>
            </div>

            {/* Arlando Fitzgerald Testimonial */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  AF
                </div>
                <h6 className="text-lg font-bold text-gray-900">Arlando Fitzgerald</h6>
                <p className="text-xs text-gray-600">New VR Entrepreneur</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-lz16zHNpPMyDnyNJOTVjPSupK9g5up.png"
                  alt="Facebook post from Arlando Fitzgerald showing cash earnings from his first paying customer, a dispensary shoot that took 7 minutes and earned $250+"
                  className="w-full rounded-lg"
                />
              </div>
              <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                "First paying customer, shot a Dispensary. Took 2 shots. I was in/out in about 7 min. $250+ some weekend
                party favors. I love my new job. Putting in my two weeks notice on Monday."
              </blockquote>
            </div>

            {/* Otavio Marques Testimonial */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  OM
                </div>
                <h6 className="text-lg font-bold text-gray-900">Otavio Marques</h6>
                <p className="text-xs text-gray-600">VTPS Follower</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-fpIZQPSLC0KktHUZ3BK32PjClfQFq3.png"
                  alt="Email from Otavio Marques thanking Zach and saying following his content has been a life changer"
                  className="w-full rounded-lg"
                />
              </div>
              <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                "Thanks, Zach! Following your content has been a life changer for me."
              </blockquote>
            </div>
          </div>
        </div>

        {/* CloudPano User Love Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h5 className="text-3xl font-bold text-gray-900 mb-4 leading-[2.5rem]">
              Read How CloudPano Users Love The Software...
            </h5>
            <p className="text-lg text-gray-600">See what real users are saying about CloudPano</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Aspect 360 Multimedia Love */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <img
                src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-K9Ve6DOSwXsSdv4oahvZvwF2EV8DtS.png"
                alt="Facebook post from Aspect 360 Multimedia saying 'Cloudpano I love you' with Zach Calhoon responding"
                className="w-full rounded-lg"
              />
            </div>

            {/* User Comments and Mobile Success */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <img
                src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-Zn5KwpFojtl57prFCWBYjktBCUVB64.png"
                alt="Facebook comments praising CloudPano's mobile compatibility and ease of use"
                className="w-full rounded-lg"
              />
            </div>

            {/* Caleb Bailey Success Story */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <img
                src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-g596bomokQJ0JfOU6rlI82UNpOnm1V.png"
                alt="Caleb Bailey sharing his success with dentist office shoot and upcoming wedding venue projects"
                className="w-full rounded-lg"
              />
            </div>

            {/* Sue Arnoldus Thank You Email */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <img
                src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-6NjkVfTUWJMpmF82Rifd4kTXDHRKZW.png"
                alt="Email from Sue Arnoldus praising CloudPano system and customer service"
                className="w-full rounded-lg"
              />
            </div>

            {/* Craig Spradlin Architectural Success */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <img
                src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-ZNTGbAZ8o7ck4EWguWmEZFPKL7SLZ3.png"
                alt="Craig Spradlin praising CloudPano for architectural documentation and virtual tours"
                className="w-full rounded-lg"
              />
            </div>

            {/* Customer Service Praise */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <img
                src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-XH8uJpMAalxYroA0CQ0VLCewqpC9wx.png"
                alt="Facebook comments praising CloudPano's responsive customer service"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Arlando Fitzgerald Testimonial */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              AF
            </div>
            <h6 className="text-xl font-bold text-gray-900">Arlando Fitzgerald</h6>
            <p className="text-sm text-gray-600">New VR Entrepreneur</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <img
              src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-lz16zHNpPMyDnyNJOTVjPSupK9g5up.png"
              alt="Facebook post from Arlando Fitzgerald showing cash earnings from his first paying customer, a dispensary shoot that took 7 minutes and earned $250+"
              className="w-full rounded-lg"
            />
          </div>
          <blockquote className="text-lg text-gray-700 italic leading-relaxed">
            "First paying customer, shot a Dispensary. Took 2 shots. I was in/out in about 7 min. $250+ some weekend
            party favors. I love my new job. Putting in my two weeks notice on Monday."
          </blockquote>
        </div>

        {/* Otavio Marques Testimonial */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              OM
            </div>
            <h6 className="text-xl font-bold text-gray-900">Otavio Marques</h6>
            <p className="text-sm text-gray-600">VTPS Follower</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <img
              src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-fpIZQPSLC0KktHUZ3BK32PjClfQFq3.png"
              alt="Email from Otavio Marques thanking Zach and saying following his content has been a life changer"
              className="w-full rounded-lg"
            />
          </div>
          <blockquote className="text-lg text-gray-700 italic leading-relaxed">
            "Thanks, Zach! Following your content has been a life changer for me."
          </blockquote>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-[2.5rem]">
              See What You Can Create with CloudPano Pro+
            </h4>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the professional quality virtual tours you'll be creating for your high-paying clients. These
              tours were created with the same CloudPano Pro+ platform included in your 360º Profit System.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
              <div className="text-center mb-8">
                <h5 className="text-2xl font-bold text-gray-900 mb-4">🚢 Luxury Yacht Tour - Interactive Demo</h5>
                <h6 className="text-xl font-semibold text-blue-600 mb-6">Explore a Luxury Yacht in 360º</h6>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  This stunning yacht tour showcases multiple decks, luxury amenities, and breathtaking ocean views.
                  Click and drag to navigate through different areas of the vessel.
                </p>
              </div>

              {/* CHANGE: Changed from aspect-[21/9] to fixed height of 700px for yacht tour embed */}
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8" style={{ height: "700px" }}>
                <iframe
                  src="https://app.cloudpano.com/tours/UgR3P-ICE-RI"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="Luxury Yacht Virtual Tour"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h6 className="text-lg font-semibold text-gray-900 mb-4">Tour Features:</h6>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="text-gray-700">Multiple deck levels to explore</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="text-gray-700">High-resolution 360º photography</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="text-gray-700">Interactive hotspots and navigation</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="text-gray-700">Mobile-responsive design</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h6 className="text-lg font-semibold text-gray-900 mb-4">Perfect for:</h6>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <p className="text-gray-700">Marina brokers, yacht charters, luxury boat sales</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <p className="text-gray-700 font-semibold">$3,000-$8,000 per project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* $10k/month profit section with business model diagram */}
        <div className="mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The VTPS Program: Your Copy and Paste Guide to a Successful Virtual Tour Business Locally
              </h4>
              <p className="text-xl text-gray-600">Everything you need to build a profitable virtual tour business:</p>
            </div>

            <div className="space-y-16">
              {/* Top - Image */}
              <div className="flex justify-center">
                <div className="relative max-w-2xl">
                  <div className="glass-card rounded-3xl p-8 shadow-2xl hover-lift">
                    <img
                      src="/professional-virtual-tour-business-setup-with-vr-e.jpg"
                      alt="VTPS Program - Virtual Tour Business Setup"
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                      Complete System
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom - Program Items in 2-column grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Training & Courses */}
                <div className="flex items-start space-x-4 group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      40+ hours of sales training and courses
                    </h5>
                    <p className="text-gray-600">Zero fuzziness or question about how to proceed and profit.</p>
                  </div>
                </div>

                {/* List Building */}
                <div className="flex items-start space-x-4 group hover:bg-green-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      Step-by-step guidance on building a list of 2,000 businesses
                    </h5>
                    <p className="text-gray-600">Likeminded businesses ready to prospect.</p>
                  </div>
                </div>

                {/* White Label Tours */}
                <div className="flex items-start space-x-4 group hover:bg-purple-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      19 virtual tours to white label
                    </h5>
                    <p className="text-gray-600">Pre-sell your audience and help them visualize your offer.</p>
                  </div>
                </div>

                {/* Cold Call Recordings */}
                <div className="flex items-start space-x-4 group hover:bg-orange-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      Live cold call recordings
                    </h5>
                    <p className="text-gray-600">Learn exactly what to say to prospect and close business.</p>
                  </div>
                </div>

                {/* Outreach Tools */}
                <div className="flex items-start space-x-4 group hover:bg-teal-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.894A1 1 0 0018 16V3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                      Outreach tools
                    </h5>
                    <p className="text-gray-600">Better reach your audience and automate prospecting.</p>
                  </div>
                </div>

                {/* Outsourcing Techniques */}
                <div className="flex items-start space-x-4 group hover:bg-yellow-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                      "How to Outsource" techniques and tricks
                    </h5>
                    <p className="text-gray-600">Hire the best talent at the best prices.</p>
                  </div>
                </div>

                {/* Niche List */}
                <div className="flex items-start space-x-4 group hover:bg-indigo-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.5 10a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM10 7a3 3 0 100 6 3 3 0 000-6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      Niche list of 70+ industries
                    </h5>
                    <p className="text-gray-600">Proven hot buyers for VR tours.</p>
                  </div>
                </div>

                {/* Email Campaigns */}
                <div className="flex items-start space-x-4 group hover:bg-pink-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                      Pre-written email campaigns
                    </h5>
                    <p className="text-gray-600">Shoot off to get fast business.</p>
                  </div>
                </div>

                {/* Pricing Proposals */}
                <div className="flex items-start space-x-4 group hover:bg-blue-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      Pricing proposals
                    </h5>
                    <p className="text-gray-600">Look professional and seal the deal.</p>
                  </div>
                </div>

                {/* Marketing Materials */}
                <div className="flex items-start space-x-4 group hover:bg-green-50 p-4 rounded-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1h-5v2a1 1 0 01-1.707.707L7.586 14H4a1 1 0 01-1-1V4zm4 10.414l.293.293A1 1 0 008 15v-2h8V5H4v8h3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      Complete marketing materials
                    </h5>
                    <p className="text-gray-600">Brochures, flyers, and presentation templates.</p>
                  </div>
                </div>

                {/* Bonus Item */}
                <div className="flex items-start space-x-4 group hover:bg-purple-50 p-4 rounded-xl transition-all duration-300 md:col-span-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      BONUS: Access to private Facebook group
                    </h5>
                    <p className="text-gray-600">
                      Connect with other successful virtual tour business owners and get ongoing support.
                    </p>
                    <div className="mt-3">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snip%202025-09-24%2011.30.23.png-6za7aKLWRr1iWATL5Lgdoug5jrqcyB.jpeg"
                        alt="Private Facebook group with 8.0K members showing member profile pictures"
                        className="w-full max-w-sm rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program Value Breakdown Section */}
          <div className="mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-[2rem]">
                  Complete Program Value Breakdown
                </h4>
                <p className="text-lg text-gray-600">
                  See exactly what you get when you join the Virtual Tour Profit System
                </p>
              </div>

              {/* Strategy Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
                <div className="text-center mb-8">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">🎯 Strategy & Business Framework</h5>
                  <p className="text-lg text-gray-700">Complete roadmap to building your profitable VR business</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="font-medium text-gray-900">Step-by-step business setup guide</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="font-medium text-gray-900">Proven pricing strategies</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="font-medium text-gray-900">Client acquisition system</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="font-medium text-gray-900">Market positioning tactics</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="font-medium text-gray-900">Scaling and outsourcing methods</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <p className="font-medium text-gray-900">Recurring revenue models</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Section */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg mb-8">
                <div className="text-center mb-8">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">📚 Comprehensive Training System</h5>
                  <p className="text-lg text-gray-700">40+ hours of in-depth training and resources</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      40+
                    </div>
                    <h6 className="font-bold text-gray-900 mb-2">Hours of Training</h6>
                    <p className="text-gray-600 text-sm">Complete video course library</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      19
                    </div>
                    <h6 className="font-bold text-gray-900 mb-2">White Label Tours</h6>
                    <p className="text-gray-600 text-sm">Ready-to-use portfolio examples</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      70+
                    </div>
                    <h6 className="font-bold text-gray-900 mb-2">Target Industries</h6>
                    <p className="text-gray-600 text-sm">Proven hot buyer niches</p>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg mb-8">
                <div className="text-center mb-8">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">📈 Expected Results & Outcomes</h5>
                  <p className="text-lg text-gray-700">What our successful students typically achieve</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h6 className="text-xl font-bold text-purple-600 mb-2">First 30 Days</h6>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Complete system setup</li>
                        <li>• First virtual tour created</li>
                        <li>• Initial prospect outreach</li>
                        <li>• Portfolio development</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h6 className="text-xl font-bold text-purple-600 mb-2">60-90 Days</h6>
                      <ul className="space-y-2 text-gray-700">
                        <li>• First paying clients secured</li>
                        <li>• $2,000-$5,000+ monthly revenue</li>
                        <li>• Established local presence</li>
                        <li>• Referral system activated</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h6 className="text-xl font-bold text-purple-600 mb-2">6+ Months</h6>
                      <ul className="space-y-2 text-gray-700">
                        <li>• $10,000+ monthly revenue</li>
                        <li>• Team building & outsourcing</li>
                        <li>• Multiple revenue streams</li>
                        <li>• Business automation</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h6 className="text-xl font-bold text-purple-600 mb-2">Long-term Success</h6>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Six-figure annual income</li>
                        <li>• Passive revenue streams</li>
                        <li>• Location independence</li>
                        <li>• Financial freedom</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Guarantee */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg border-2 border-orange-200">
                <div className="text-center">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">🛡️ 90-Day Success Guarantee</h5>
                  <p className="text-lg text-gray-700 mb-6">
                    We're so confident in the VTPS system that we guarantee you'll land your first paying client within
                    90 days, or we'll refund every penny.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">First client within 90 days guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">100% money-back guarantee</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Complete system setup included</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Personal support throughout</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Read How Content Inside VTPS Is Changing Lives Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 leading-[2.5rem]">
                Read How Content Inside VTPS Is Changing Lives
              </h2>

              <div className="space-y-12">
                {/* Bobby's Testimonial */}
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                  <img
                    src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-1HHlZSjpdSqeyHt8e4PCiUBY603oQP.png"
                    alt="Bobby's testimonial about VTPS content"
                    className="w-full rounded-xl shadow-md"
                  />
                </div>

                {/* Sports Club Success Testimonial */}
                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                  <img
                    src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-7ZgEAfJBVD09IRYSujogS08ZdfqNJu.png"
                    alt="VTPS student success with sports club deal"
                    className="w-full rounded-xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* High-Ticket Enterprise Section - Secret #1 */}
        <div className="mt-32 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-lg font-semibold mb-8">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Secret #1 Revealed
              </div>
              <p className="text-lg md:text-xl text-blue-600 font-semibold mb-4 uppercase tracking-wide">
                The 360º and VR Revolution Is Here…
              </p>
              <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                Target Enterprise Clients and
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {" "}
                  Price Based On Value
                </span>
              </h3>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto text-pretty">
                Why charging $10,000 is better than $100 - and how custom virtual tours create massive value for large
                enterprise clients
              </p>
            </div>

            {/* Virtual Tour Demo */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">Experience The Technology</h4>
                <p className="text-lg text-gray-600">Take a virtual tour to see the power of 360° environments</p>
              </div>

              <div className="glass-card rounded-3xl p-4 md:p-6 shadow-2xl hover-lift mb-12 max-w-7xl mx-auto">
                <iframe
                  src="https://app.cloudpano.com/tours/p01itLQTYzpS"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-2xl shadow-lg"
                  title="Virtual Tour Demo"
                ></iframe>
              </div>
            </div>

            {/* Key Insights */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">The High-Ticket Framework</h4>
                <p className="text-lg text-gray-600">How to unlock enterprise clients and scale your business</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                      </svg>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900 mb-3">Focus on Utility Value</h5>
                    <p className="text-gray-600">
                      When choosing a niche, the most important metric is utility value. If your client can insert a
                      virtual tour and their customer value is 10x your price, it's a no-brainer ROI decision.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-indigo-500 text-white rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900 mb-3">Leverage 12-Month Value</h5>
                    <p className="text-gray-600">
                      When selling marketing services, always leverage the 12-month value of a customer. This increases
                      the value discussion and gets your prospect to think long-term.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-cyan-500 text-white rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900 mb-3">Client Ownership Matters</h5>
                    <p className="text-gray-600">
                      Does your client own the product or services they're trying to market? Clients who care deeply
                      about their products at a fundamental level will pay premium prices.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900 mb-3">Virtual Selling Environments</h5>
                    <p className="text-gray-600">
                      Post-COVID, sales teams need virtual selling solutions. Set up 360° selling environments where
                      prospects can have video conversations inside virtual spaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile App Demo */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">Professional Tools, Simple Creation</h4>
                <p className="text-lg text-gray-600">Create sophisticated virtual tours in minutes with CloudPano</p>
              </div>

              <div className="flex justify-center mb-12">
                <div className="glass-card rounded-3xl p-8 shadow-2xl hover-lift">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bcYorsqlBfpBvNHbHhDXdBRIq2r0KX.png"
                    alt="CloudPano Mobile App Interface"
                    className="max-w-sm h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Organization Structure */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">Build Your Organization</h4>
                <p className="text-lg text-gray-600">
                  With $3,000 to $10,000 offerings, you can hire and build an organization that scales
                </p>
              </div>

              <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl hover-lift mb-12">
                {/* Modern Organization Chart */}
                <div className="max-w-4xl mx-auto">
                  <div className="flex flex-col items-center space-y-8">
                    {/* CEO Level */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-2xl shadow-lg">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <h5 className="font-bold text-lg">CEO</h5>
                        <p className="text-sm opacity-90">You - Strategic Leadership</p>
                      </div>
                    </div>

                    {/* Connection Lines */}
                    <div className="w-px h-8 bg-gray-300"></div>

                    {/* Management Level */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
                      <div className="bg-white border-2 border-gray-200 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="text-center">
                          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <h6 className="font-semibold text-gray-900">Admin</h6>
                          <p className="text-xs text-gray-600">Operations & Support</p>
                        </div>
                      </div>

                      <div className="bg-white border-2 border-gray-200 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="text-center">
                          <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <h6 className="font-semibold text-gray-900">Photographer</h6>
                          <p className="text-xs text-gray-600">Content Creation</p>
                        </div>
                      </div>

                      <div className="bg-white border-2 border-gray-200 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="text-center">
                          <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </div>
                          <h6 className="font-semibold text-gray-900">Sales Rep</h6>
                          <p className="text-xs text-gray-600">Client Acquisition</p>
                        </div>
                      </div>
                    </div>

                    {/* Connection Lines */}
                    <div className="w-px h-8 bg-gray-300"></div>

                    {/* Contractors Level */}
                    <div className="bg-white border-2 border-gray-200 px-6 py-4 rounded-xl shadow-md">
                      <div className="text-center">
                        <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                        </div>
                        <h6 className="font-semibold text-gray-900">Contractors</h6>
                        <p className="text-xs text-gray-600">Flexible Support Team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Analysis */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">The Numbers Don't Lie</h4>
                <p className="text-lg text-gray-600">ROI analysis showing why high-ticket pricing works</p>
              </div>

              <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl hover-lift mb-12">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-7PVz0.png"
                  alt="High-Ticket Pricing ROI Analysis"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">Case 1</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">$400 Revenue</div>
                  <div className="text-red-600 font-bold">-37.50% ROI</div>
                  <p className="text-sm text-gray-600 mt-2">Low pricing = negative returns</p>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">Case 2</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">$1,500 Revenue</div>
                  <div className="text-yellow-600 font-bold">138.10% ROI</div>
                  <p className="text-sm text-gray-600 mt-2">Better pricing = positive returns</p>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-green-600 mb-2">Case 3</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">$8,500 Revenue</div>
                  <div className="text-green-600 font-bold">441.40% ROI</div>
                  <p className="text-sm text-gray-600 mt-2">High-ticket = massive returns</p>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Key Takeaways</h4>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        Target enterprise clients with high transaction values and lifetime value
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">Create virtual selling environments for post-COVID sales teams</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        Build a scalable organization with high-ticket pricing that supports team growth
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        Focus on utility value and 12-month customer lifetime value in pricing discussions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Ticket Revenue Model Section */}
        <div className="mt-32 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full font-semibold text-lg mb-6 animate-bounce">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                Secret #2 Revealed
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                The Power of Selling
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Subscriptions
                </span>
              </h3>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto text-pretty">
                Why recurring revenue is more profitable, more fun, and the key to building a scalable virtual tour
                empire
              </p>
            </div>

            {/* Old Way vs New Way Comparison */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">The Mathematical Proof</h4>
                <p className="text-lg text-gray-600">Same customers, 4x the revenue. Here's how:</p>
              </div>

              <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl hover-lift mb-12">
                <img
                  src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-30UZCJ3IJ2VD9Az9ovoZBaI4x3xcEN.png"
                  alt="Old Way vs New Way Subscription Comparison"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h5 className="text-2xl font-bold text-red-700 mb-2">Old Way: One-Time Fees</h5>
                    <p className="text-red-600">100 customers × $1,100 = $110,000</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Setup Fee:</span>
                      <span className="font-bold text-red-600">$1,100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monthly Subscription:</span>
                      <span className="font-bold text-red-600">$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">3-Year Value:</span>
                      <span className="font-bold text-red-600">$1,100</span>
                    </div>
                    <hr className="border-red-300" />
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold text-gray-900">Total (100 customers):</span>
                      <span className="font-bold text-2xl text-red-600">$110,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h5 className="text-2xl font-bold text-green-700 mb-2">New Way: Subscriptions</h5>
                    <p className="text-green-600">100 customers × $4,240 = $424,000</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Setup Fee:</span>
                      <span className="font-bold text-green-600">$750</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monthly Subscription:</span>
                      <span className="font-bold text-green-600">$97</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">3-Year Value:</span>
                      <span className="font-bold text-green-600">$4,242</span>
                    </div>
                    <hr className="border-green-300" />
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold text-gray-900">Total (100 customers):</span>
                      <span className="font-bold text-2xl text-green-600">$424,000</span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      4x More Revenue!
                    </span>
                  </div>
                </div>
              </div>

              {/* Growth Charts */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="glass-card rounded-2xl p-6 shadow-lg hover-lift">
                  <h5 className="text-xl font-bold text-gray-900 mb-4 text-center">Old Way: Flat Growth</h5>
                  <img
                    src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-Wk8GlavgBYVa9yRX6TTVx22bNDzrSK.png"
                    alt="Old Way No Subscriptions Flat Growth Chart"
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-600 text-center mt-4">Linear growth with diminishing returns</p>
                </div>

                <div className="glass-card rounded-2xl p-6 shadow-lg hover-lift">
                  <h5 className="text-xl font-bold text-gray-900 mb-4 text-center">New Way: Exponential Growth</h5>
                  <img
                    src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-5JF4JunBmrctcXqWIZRJq2qUEFCIIP.png"
                    alt="New Way With Subscriptions Exponential Growth Chart"
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-600 text-center mt-4">Compound growth that accelerates over time</p>
                </div>
              </div>
            </div>

            {/* Target Customer Types */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">Who to Target for Subscriptions</h4>
                <p className="text-lg text-gray-600">
                  The fastest way to sell subscriptions is to target customers who already charge them
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="group hover:bg-blue-50 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm0 2v8h12V6H4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3 text-center">Commercial Real Estate</h5>
                  <p className="text-gray-600 text-center mb-4">
                    Properties are valued by NOI/Cap Rate. Increase NOI = Increase property value. Mathematical ROI
                    calculations make closing easier.
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      High-Value Target
                    </span>
                  </div>
                </div>

                <div className="group hover:bg-green-50 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3 text-center">Auto/Boat/RV Dealers</h5>
                  <p className="text-gray-600 text-center mb-4">
                    Inventory needs to move fast. 360° tours are already proven in this space. Show examples and watch
                    sales come quickly.
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Quick Wins
                    </span>
                  </div>
                </div>

                <div className="group hover:bg-purple-50 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3 text-center">Subscription Businesses</h5>
                  <p className="text-gray-600 text-center mb-4">
                    Fitness studios, gyms, and other subscription-based businesses understand recurring value and will
                    pay for services that bring more subscribers.
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Perfect Match
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-lg text-gray-600 italic">
                  "We provide over 2,400+ niches to target in the VTPS program"
                </p>
              </div>
            </div>

            {/* Real Life Example */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">Real Life Success Story</h4>
                <p className="text-lg text-gray-600">Jordan Powers and his community college example</p>
              </div>

              <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl hover-lift">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <img
                      src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-KXke9LW3mQtpVBsXOz4ZYpJegiGopq.png"
                      alt="Jordan Powers Community College Success Story"
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <h5 className="text-2xl font-bold text-gray-900">30 Customers = $525,000 Revenue</h5>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Setup Fee:</span>
                        <span className="font-bold text-2xl text-green-600">$8,500</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-700">Monthly Subscription:</span>
                        <span className="font-bold text-2xl text-blue-600">$250</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                        <span className="text-gray-900 font-semibold">3-Year Customer Value:</span>
                        <span className="font-bold text-3xl text-emerald-600">$17,500</span>
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
                      <p className="text-lg text-gray-700 mb-2">Total Revenue Potential:</p>
                      <p className="text-4xl font-bold text-indigo-600">$525,000</p>
                      <p className="text-sm text-gray-600 mt-2">From just 30 customers over 3 years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Software Features That Justify Recurring Fees */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h4 className="text-3xl font-bold text-gray-900 mb-4">Software Features That Justify Recurring Fees</h4>
                <p className="text-lg text-gray-600">Attach ongoing value to your subscription model</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card rounded-2xl p-8 shadow-lg hover-lift">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900">Lead Generation</h5>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Continuously capture leads through your virtual tours and deliver them to your clients. This ongoing
                    value justifies monthly fees.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <img
                      src="https://hebbkx1anhila5yf.blob.core.windows.net/design-mode-images/image%281%29-W16SYeUhphxdigkiMXBJlfOTD2KywG.png"
                      alt="Lead Generation Form Example"
                      className="w-full h-auto rounded-lg shadow-sm"
                    />
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-8 shadow-lg hover-lift">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-2.21-.896-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 12a5.984 5.984 0 01-.172-1.172 1 1 0 010-1.657z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h5 className="text-xl font-bold text-gray-900">CloudPano Live</h5>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Interactive live virtual tours with real-time communication. Perfect for remote sales and customer
                    engagement.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image%281%29-ZLbG237igNBORo9EdmXMPaoYaEeprz.png"
                      alt="CloudPano Live Virtual Tour Interface"
                      className="w-full h-auto rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-6 py-3 rounded-full font-semibold">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Pro Tip: Lead with "hosting and maintenance" when selling recurring fees
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl hover-lift">
                <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ready to Build Your Subscription Empire?
                </h4>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
                  Transform your one-time sales into recurring revenue streams that compound over time. The math doesn't
                  lie - subscriptions are 4x more profitable.
                </p>
                <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <span>Discover the Complete System</span>
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Removed the placeholder CombinedVideoTestimonials component entirely */}
      </div>
    </section>
  )
}

export { IntroSection }
