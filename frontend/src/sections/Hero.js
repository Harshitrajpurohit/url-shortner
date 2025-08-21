"use client"
import React, { useState } from 'react'
import Link from "next/link"

export default function Hero() {
      const [mainUrl, setMainUrl] = useState("")
      const [shortUrl, setShortUrl] = useState("")
      const [isLoading, setIsLoading] = useState(false)
    
      const handleClick = async () => {
        try {
          if (mainUrl.trim() === "") {
            return alert("Enter URL.")
          }
    
          setIsLoading(true)
          const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: mainUrl }),
          })
    
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`)
          }
    
          const data = await res.json()
          setShortUrl(data.short_key)
        } catch (error) {
          console.error("Fetch error:", error)
          alert("Error while fetching data. Check console for details.")
        } finally {
          setIsLoading(false)
        }
      }
    
      const copyToClipboard = () => {
        navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${shortUrl}`)
        alert("URL copied to clipboard!")
      }
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shorten Your URLs
            <span className="text-blue-600 block mt-2">Instantly</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Transform long, complex URLs into short, shareable links. Track clicks, analyze performance, and boost your online presence.
          </p>

          {/* URL Shortener Form */}
          <div className="max-w-3xl mx-auto mb-12">
            <section className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="url"
                  placeholder="Enter your long URL here..."
                  value={mainUrl}
                  onChange={(e) => setMainUrl(e.target.value)}
                  className="flex-1 text-lg py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-300 transition-all"
                />
                <button
                  onClick={handleClick}
                  disabled={isLoading}
                  className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-200"
                >
                  {isLoading ? "Shortening..." : "Shorten URL"}
                </button>
              </div>

              {shortUrl && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Your shortened URL:</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Link
                      href={`http://localhost:3000/${shortUrl}`}
                      className="text-blue-600 font-medium hover:underline break-all"
                      target="_blank"
                    >
                      http://localhost:3000/{shortUrl}
                    </Link>
                    <button
                      onClick={copyToClipboard}
                      className="ml-auto px-4 py-2 bg-transparent border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-gray-600">
            {[
              { text: "SSL Secured" },
              { text: "99.9% Uptime" },
              { text: "GDPR Compliant" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
