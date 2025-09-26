export default function CombinedVideoTestimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
        {/* Ron video testimonial */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
          <div className="mb-6">
            <h6 className="text-2xl font-bold text-gray-900 mb-2">Hear How Ron Made $10,000+</h6>
            <h6 className="text-xl font-bold text-blue-600 mb-4">With This Content...</h6>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              R
            </div>
            <h6 className="text-xl font-bold text-gray-900">Ron</h6>
            <p className="text-sm text-gray-600">VTPS Success Story</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video controls className="w-full h-full object-cover">
                <source src="https://rontestimonial.s3-us-west-2.amazonaws.com/ron+testimonail.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Watch Ron share his incredible success story and how he generated over $10,000 using the VTPS system and
            content strategies.
          </p>
        </div>

        {/* Bobby video testimonial */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center">
          <div className="mb-6">
            <h6 className="text-2xl font-bold text-gray-900 mb-2">Hear How Bobby Got His First 2 Clients Fast</h6>
            <h6 className="text-xl font-bold text-blue-600 mb-4">With VTPS</h6>
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              B
            </div>
            <h6 className="text-xl font-bold text-gray-900">Bobby</h6>
            <p className="text-sm text-gray-600">VTPS Success Story</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
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
          <p className="text-lg text-gray-700 leading-relaxed">
            Watch Bobby share how he quickly landed his first two clients using the VTPS system and strategies.
          </p>
        </div>
      </div>
    </div>
  )
}
