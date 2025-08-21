import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-4">ShortLink</h5>
              <p className="text-gray-600">
                The fastest and most reliable URL shortener for modern businesses.
              </p>
            </div>
            <div>
              <h6 className="font-semibold text-gray-900 mb-4">Product</h6>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-gray-900 mb-4">Company</h6>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-gray-900 mb-4">Legal</h6>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors duration-200">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-5 pt-5 text-center text-gray-600">
            <p>&copy; 2024 ShortLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
