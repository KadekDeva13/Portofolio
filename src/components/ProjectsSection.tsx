'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Atma School Website',
    image: '/images/atmaschool.png',
    description:
      'Dynamic and responsive web platform designed to support the digitalization of school operations while focusing on ease of use for students and administrators.',
    link: 'https://github.com/KadekDeva13/Atma-School.git',
  },
  {
    name: 'Unifit Mobile App',
    image: '/images/unifit.png',
    description:
      'A sleek and easy-to-use mobile app designed to simplify the Gym Class booking experience.',
    link: 'https://github.com/KevinArdiprana46/6_B_Gym.git',
  },
  {
    name: 'ReuseMart',
    image: '/images/reusemart.png',
    description:
      'A versatile second-hand goods buying and selling application for users to browse and buy products with a pleasant UI.',
    link: 'https://github.com/KadekDeva13/Reusemart_frontend.git',
  },
  {
    name: 'Portofolio Website',
    image: '/images/Portofolio.png',
    description:
      'My own portfolio website, showcasing projects, skills, and designs as a frontend developer.',
    link: 'https://github.com/KadekDeva13/Portofolio.git',
  },
  {
    name: 'Game Whack-A-Mole',
    image: '/images/Whack-A-Mole.png',
    description:
      'A fun game where you have to click on the moles as fast as you can to score points.',
    link: 'https://github.com/KadekDeva13/Whack-A-Mole.git',
  },
  {
    name: 'Game Tic Tac Toe',
    image: '/images/TicTacToe.png',
    description:
      'A classic game of Tic Tac Toe, where two players take turns marking Xs and Os on a 3x3 grid.',
    link: 'https://github.com/KadekDeva13/Tic-Tac-Toe.git',
  }
]

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-2"
      >
        My Projects 🔥
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 mb-10"
      >
        Here are some of the impactful projects I&apos;ve successfully completed!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md border border-purple-700 hover:scale-[1.02] transition-transform"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={800}
              height={400}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  )
}

export default ProjectsSection
