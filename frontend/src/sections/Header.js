"use client"
import React, { useState } from 'react'
import { Menu, X } from "lucide-react"

export default function Header() {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="border-b border-gray-200 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-blue-600">ShortLink</h1>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                            Features
                        </a>
                        <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                            Pricing
                        </a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                            About
                        </a>
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 py-4">
                        <nav className="flex flex-col space-y-4 px-4">
                            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                Features
                            </a>
                            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                Pricing
                            </a>
                            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                About
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
