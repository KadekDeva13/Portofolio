'use client'

import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md">
            {/* Logo */}
            <div className="font-bold text-lg tracking-wide">
                Portofolio<span className="text-purple-500"> Deva</span>
            </div>

            {/* Menu Items */}
            <div className="space-x-6 hidden md:flex">
                <Link href="/" className="hover:text-purple-400 font-medium transition">
                    Home
                </Link>

                <Link href="/About" className="hover:text-purple-400 font-medium transition">
                    About
                </Link>
                <Link href="/Contact" className="hover:text-purple-400 font-medium transition">
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
