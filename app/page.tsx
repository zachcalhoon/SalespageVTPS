import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VTPS Training - Build a Profitable 360° VR Agency | Virtual Tour Business System",
  description:
    "Learn how to build a wildly profitable 360° VR agency with our proven Virtual Tour Photography System. Start earning $10,000+ per month with virtual tours, even with zero experience.",
}

export default function VTPSPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">VTPS Training</h1>
        <p className="text-xl text-center text-gray-600 mb-8">Build a Profitable 360° VR Agency</p>

        {/* Test image section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Testing Images</h2>

          {/* Placeholder images that should work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <img
              src="/virtual-tour-example.jpg"
              alt="Virtual Tour Example"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="/360-camera-setup.jpg"
              alt="360 Camera Setup"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Test some common broken image patterns */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Checking for broken images:</h3>

            {/* These might be broken - let's see */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border p-4 rounded">
                <p className="text-sm mb-2">Zach Calhoon Headshot:</p>
                <img
                  src="https://vtpstraining.blob.core.windows.net/images/zach-calhoon-headshot.jpg"
                  alt="Zach Calhoon"
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/professional-headshot.png"
                  }}
                />
              </div>

              <div className="border p-4 rounded">
                <p className="text-sm mb-2">Success Visual:</p>
                <img
                  src="/vtps-success-visual.png"
                  alt="VTPS Success"
                  className="w-full h-32 object-cover rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/success-visualization.jpg"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
