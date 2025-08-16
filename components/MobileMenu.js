import React from 'react'
import { useState } from 'react'

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bg-white border-b border-gray-200 p-6">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Features
              </a>
              <a
                href="#results"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Results
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Pricing
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold w-full">
                Get Free Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileMenu
