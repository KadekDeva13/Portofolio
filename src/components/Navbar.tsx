'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black text-white py-4 px-6 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-lg tracking-wide">
          Portofolio<span className="text-purple-500"> Deva</span>
        </div>

        {/* Burger Button - Mobile only */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu - Desktop only */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-purple-400 font-medium transition">Home</Link>
          <Link href="/About" className="hover:text-purple-400 font-medium transition">About</Link>
          <Link href="/Contact" className="hover:text-purple-400 font-medium transition">Contact</Link>
        </div>
      </div>

      {/* Menu - Mobile dropdown */}
      {isOpen && (
        <div className="flex flex-col mt-4 md:hidden space-y-2 text-center">
          <Link href="/" className="py-2 border-b border-white/10 hover:bg-purple-900" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/About" className="py-2 border-b border-white/10 hover:bg-purple-900" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/Contact" className="py-2 hover:bg-purple-900" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
