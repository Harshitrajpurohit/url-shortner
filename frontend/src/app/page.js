"use client"

import Header from "@/sections/Header"
import Hero from "@/sections/Hero"
import Features from "@/sections/Features"
import Footer from "@/sections/Footer"

export default function Home() {


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <Hero/>

      {/* Features Section */}
      <Features/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}