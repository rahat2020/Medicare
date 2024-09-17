import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <div className="bg-blue-500 text-white px-4 py-2">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-lg">
Medicare


        </Link>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/"  className="hover:bg-blue-700 p-2><a">Home</Link>
          {/* Additional Links and dropdowns */}
        </div>
      </div>
      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <Link href="/register" className="hover:bg-blue-700 p-2">Register</Link>
        <Link href="/login" className="hover:bg-blue-700 p-2">Login</Link>
      </div>
    </div>
  </div>
  )
}

export default Topbar;