import React from 'react'

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage and track your shortened URLs effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
                title: "Custom Links",
                description: "Create branded short links with custom domains and memorable aliases.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Lightning Fast",
                description: "Instant URL shortening with global CDN for maximum speed and reliability.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover■■
                hover:shadow-lg transition-shadow duration-200">
                <section className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </section>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
