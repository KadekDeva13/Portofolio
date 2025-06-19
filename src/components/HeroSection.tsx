// HeroSection.tsx with animation
'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-purple-500 mb-4"
      >
        <Image
          src="/images/avatar.jpeg"
          alt="Deva Avatar"
          width={128}
          height={128}
          className="object-cover"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-purple-400 text-sm"
      >
        &quot;Hi I&apos;m Deva&quot;
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight"
      >
        Full Stack Web Development and Tech Enthusiast
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-300 text-lg mb-6"
      >
        &quot;Welcome to my Portfolio website. Let&apos;s collaborate on a project together!&quot;
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link href="/About">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition">
            Get in touch 👋
          </button>
        </Link>
      </motion.div>
    </section>
  )
}

export default HeroSection
