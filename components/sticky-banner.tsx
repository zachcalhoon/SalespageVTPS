"use client"

export function StickyBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 shadow-2xl border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <p className="text-white font-semibold text-lg">The 360º and VR Revolution Is Here…</p>
              <p className="text-white/90 text-sm">Join 500+ students already enrolled</p>
            </div>
            <div className="md:hidden">
              <p className="text-white font-semibold">Start Your VR Business Today!</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden lg:block text-white text-sm">
              <p className="font-medium">Need Help?</p>
              <p>
                Email:{" "}
                <a href="mailto:support@cloudpano.com" className="underline hover:text-white/80">
                  support@cloudpano.com
                </a>
              </p>
              <p>
                Call:{" "}
                <a href="tel:281-410-8727" className="underline hover:text-white/80">
                  281-410-8727
                </a>
              </p>
            </div>

            <button
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() =>
                window.open("https://wnh.thrivecart.com/virtual-tour-profit-system/?coupon=START1000", "_blank")
              }
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
