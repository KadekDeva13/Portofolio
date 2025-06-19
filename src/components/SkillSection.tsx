'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', icon: '/images/Javascript-ByKY3uHO.png' },
  { name: 'HTML', icon: '/images/html.png' },
  { name: 'PHP', icon: '/images/PHP-DPSFZ17M.svg' },
  { name: 'CSS', icon: '/images/CSS-BBmjro31.svg' },
  { name: 'React', icon: '/images/React-CBjhoM09.png' },
  { name: 'Flutter', icon: '/images/Flutter-Cp7V-osx.png' },
  { name: 'Tailwind', icon: '/images/Tailwind-DfCl9cvf.png' },
  { name: 'MySQL', icon: '/images/MySQL-BrrUAHM9.svg' },
  { name: 'GitHub', icon: '/images/Github-BvjW7zmf.png' },
  { name: 'Photoshop', icon: '/images/Photoshop-DuWvQGAi.png' },
  { name: 'Figma', icon: '/images/figma.png' },
  { name: 'Bootstrap', icon: '/images/bootstrap.png' },
]

const SkillsSection: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-bold mb-10"
      >
        Confidence with:
      </motion.h2>

      <motion.div
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-[#1a1a1a] border border-purple-700 rounded-xl p-4 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform"
          >
            <div className="w-[40px] h-[40px] relative">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-2 text-sm text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SkillsSection