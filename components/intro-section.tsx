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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-MAx0rZoRVtZC3k9MamCiDBa4kemlxt.png"
            alt="VTPS - Virtual Tour Profit System"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="glass-card rounded-3xl p-8 mb-12 text-left max-w-3xl mx-auto space-y-6 hover-lift shadow-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            <div className="flex-shrink-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-rnVcubjpNcgCjJw640G2eoWcN0k85k.png"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-A8mO3etyb7rMzVtbn6NH4KNfp25nZO.png"
                  alt="Email from Jordan Arbo asking about a $30K gym deal with 13 locations, seeking guidance on hosting fees and white label embedding"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-foreground mb-4 text-center">After VTPS:</h5>
              <div className="glass rounded-2xl p-4 shadow-lg hover-lift">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-uUkvHfVEe6qT2izXnkf4IPBXFJkeDg.png"
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2021%2C%202025%2C%2001_32_41%20PM-sJtYtVMfACR9lX9EtKcBAZyTv2bIXc.png"
              alt="VTPS - Virtual Tour Profit System with dramatic fiery text effect over business environment showing training materials and virtual tour content"
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-qzCH16IcB32ICBLzOtMK9PthYIALqT.png"
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-7t4O2XlyBMIlp4NOV4gFNW9FZoQrev.png"
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
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-50bhEvawBruqIkYyjOvrvMs1DRJgq0.png"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-gSksRON5EZCDmehc23PmXqKp4VAnjv.png"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-vMV5OMtdwucpmc972pRDZY0oh85e8Z.png"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-M5WuxCjB6Kvy4LPmE9GfuAZormVWRP.png"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-8zkpAqxELYdC7GHaLNGqq3qrLL1p11.png"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-hhFCScAR6HinWoz3B7WiM8zDecBJDm.png"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-Zx02UoMPyJxCtpJ6I3rdWp0pfnabWy.png"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-7MxB2v31DFL2HqPM8Q6fikwQ26gSI1.png"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-pIELMpVN25bVj4wSAk8gngVBkYv6qC.png"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-f4WqqDfcHp2wPLIcomH5b1EHsSemT1.png"
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

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Aspect 360 Multimedia Love */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-HIMc1BsEYWiU6MrHWyDaoRYzZmLP0g.png"
                alt="Facebook post from Aspect 360 Multimedia saying 'Cloudpano I love you' with Zach Calhoon responding"
                className="w-full rounded-lg"
              />
            </div>

            {/* User Comments and Mobile Success */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-vc5FJcZtxl6FbYBsou1rsI0iYADzv6.png"
                alt="Facebook comments praising CloudPano's mobile compatibility and ease of use"
                className="w-full rounded-lg"
              />
            </div>

            {/* Caleb Bailey Success Story */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-tkIoDyr2Bnmaiy0oBSHNk8Ns9mAITO.png"
                alt="Caleb Bailey sharing his success with dentist office shoot and upcoming wedding venue projects"
                className="w-full rounded-lg"
              />
            </div>

            {/* Sue Arnoldus Thank You Email */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-mBBPHjyzENFXbOiVxw27JC2nE5cfQ7.png"
                alt="Email from Sue Arnoldus praising CloudPano system and customer service"
                className="w-full rounded-lg"
              />
            </div>

            {/* Craig Spradlin Architectural Success */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-yxM0RQlWL8XvHX2iL94mNBwfalH1BC.png"
                alt="Craig Spradlin praising CloudPano for architectural documentation and virtual tours"
                className="w-full rounded-lg"
              />
            </div>

            {/* Customer Service Praise */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-29NFV76S27aODnyKlA3g9UHgSkWr0p.png"
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-pIELMpVN25bVj4wSAk8gngVBkYv6qC.png"
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-f4WqqDfcHp2wPLIcomH5b1EHsSemT1.png"
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

              {/* CHANGE: Increased yacht tour embed width from aspect-video to aspect-[21/9] for wider display */}
              <div className="aspect-[21/9] bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8">
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
      </div>

      {/* $10k/month profit section with business model diagram */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h4 className="text-4xl font-bold text-gray-900 mb-6 leading-[2rem]">
            A simple path to $10,000 / month in pure profit
            <br />
            in your bank account
          </h4>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              If you work in photography, media, digital marketing, technology, or any type of local service, you can
              launch into VTPS as a no-brainer business model that plugs into your business.
            </p>
            <p>
              And if you just want to launch VR Tours as its own standalone offer – that's fine too! That's what some of
              my most successful students are doing.
            </p>
            <p>
              Either way it's possible to start from zero and start making a six-figure income in what I think is the
              easiest way on the planet.
            </p>
            <p>
              If you simply ask the right people in the right way (which we'll teach you) people will raise their hand,
              chase you down, and throw money at you for this service.
            </p>
            <p className="font-semibold text-gray-900">
              I've seen it over and over from providers all across the country and it's only picking up steam.
            </p>
          </div>
        </div>
      </div>

      {/* Everything You Need to Succeed */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
          <h5 className="text-2xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h5>
          <h6 className="text-xl font-bold text-blue-600 mb-4">The Virtual Tour Profit System</h6>
          <p className="text-lg text-gray-700">
            This comprehensive system removes all guesswork and gives you a proven roadmap to building a profitable VR
            business.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%221%2C%202025%2C%2001_32_41%20PM-sJtYtVMfACR9lX9EtKcBAZyTv2bIXc.png"
          alt="VTPS Success Visual"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="mt-12">
        <div className="max-w-4xl mx-auto">
          {/* David's Testimonial - Moved to just above the "Read How Content Inside VTPS Is Changing Lives" section */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center mb-16">
            <div className="mb-6">
              <h6 className="text-2xl font-bold text-gray-900 mb-2">Listen To David And His Experience</h6>
              <h6 className="text-xl font-bold text-blue-600 mb-4">Using The Tools In VTPS</h6>
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                D
              </div>
              <h6 className="text-xl font-bold text-gray-900">David</h6>
              <p className="text-sm text-gray-600">VTPS Success Story</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
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
            <p className="text-lg text-gray-700 leading-relaxed">
              Watch David share his experience using the tools and strategies provided in the VTPS system.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="text-center mb-12">
          <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let me and my team take you by the hand and show you EXACTLY how to win at this.
          </h4>
          <p className="text-xl text-gray-600">You'll get:</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Training & Courses */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">40+ hours of sales training and courses</h5>
                <p className="text-gray-600 text-sm">Zero fuzziness or question about how to proceed and profit.</p>
              </div>
            </div>

            {/* List Building */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">
                  Step-by-step guidance on building a list of 2,000 businesses
                </h5>
                <p className="text-gray-600 text-sm">Likeminded businesses ready to prospect.</p>
              </div>
            </div>

            {/* White Label Tours */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">19 virtual tours to white label</h5>
                <p className="text-gray-600 text-sm">Pre-sell your audience and help them visualize your offer.</p>
              </div>
            </div>

            {/* Cold Call Recordings */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Live cold call recordings</h5>
                <p className="text-gray-600 text-sm">Learn exactly what to say to prospect and close business.</p>
              </div>
            </div>

            {/* Outreach Tools */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Outreach tools</h5>
                <p className="text-gray-600 text-sm">Better reach your audience and automate prospecting.</p>
              </div>
            </div>

            {/* Outsourcing Techniques */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">"How to Outsource" techniques and tricks</h5>
                <p className="text-gray-600 text-sm">Hire the best talent at the best prices.</p>
              </div>
            </div>

            {/* Niche List */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Niche list of 70+ industries</h5>
                <p className="text-gray-600 text-sm">Proven hot buyers for VR tours.</p>
              </div>
            </div>

            {/* Email Campaigns */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Pre-written email campaigns</h5>
                <p className="text-gray-600 text-sm">Shoot off to get fast business.</p>
              </div>
            </div>

            {/* Pricing Proposals */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Pricing proposals</h5>
                <p className="text-gray-600 text-sm">Look professional and seal the deal.</p>
              </div>
            </div>

            {/* Marketing Materials */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Complete marketing materials</h5>
                <p className="text-gray-600 text-sm">
                  Brochures, tri-folds, pitch decks, stock images, and exactly how to use them.
                </p>
              </div>
            </div>

            {/* CloudPano License */}

            {/* Bonus Interviews */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Bonus Interviews</h5>
                <p className="text-gray-600 text-sm">Exclusive interviews with successful VTPS providers.</p>
              </div>
            </div>

            {/* Advertising Tutorials */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Online advertising tutorials</h5>
                <p className="text-gray-600 text-sm">Best practices for Facebook and Google ads that get clients.</p>
              </div>
            </div>

            {/* Camera Tutorials */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">360º camera tutorials and pro tips</h5>
                <p className="text-gray-600 text-sm">Master the technical side with ease.</p>
              </div>
            </div>

            {/* Photo Editing */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Photoshop and Lightroom tutorials</h5>
                <p className="text-gray-600 text-sm">
                  Add extra polish and professionalism to your work, plus a list of professional editors.
                </p>
              </div>
            </div>

            {/* Q&A Calls */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Recorded Q&A calls with successful providers</h5>
                <p className="text-gray-600 text-sm">
                  Learn from hyper-successful industry leaders who took the exact same steps.
                </p>
              </div>
            </div>

            {/* Lead Generation Systems */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Lead generation systems and website templates</h5>
                <p className="text-gray-600 text-sm">
                  Upload and show off in 3 clicks - just swap out your name and info.
                </p>
              </div>
            </div>

            {/* Upselling Scripts */}
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Salesmanship techniques and scripts</h5>
                <p className="text-gray-600 text-sm">Upsell clients to larger revenue subscriptions.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
              <h5 className="text-2xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h5>
              <h6 className="text-xl font-bold text-blue-600 mb-4">The Virtual Tour Profit System</h6>
              <p className="text-lg text-gray-700">
                This comprehensive system removes all guesswork and gives you a proven roadmap to building a profitable
                VR business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Value Breakdown Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-[2rem]">
            Complete Program Value Breakdown
          </h4>
          <p className="text-lg text-gray-600">See exactly what you get when you join the Virtual Tour Profit System</p>
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
              We're so confident in the VTPS system that we guarantee you'll land your first paying client within 90
              days, or we'll refund every penny.
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

      <div className="mt-16">{/* Removed the placeholder CombinedVideoTestimonials component entirely */}</div>

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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9HoCt2LkPImWfKOHb1yN8XwGHDNecv.png"
                alt="Bobby's testimonial about VTPS content"
                className="w-full rounded-xl shadow-md"
              />
            </div>

            {/* Sports Club Success Testimonial */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sB96R4f2A5sb3oYjxqnxjViME6KXX4.png"
                alt="VTPS student success with sports club deal"
                className="w-full rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export { IntroSection }
