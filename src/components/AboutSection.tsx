'use client'

import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

const programmingSkills = [
  { name: 'C', icon: '/images/C-BLMgFXaH.png' },
  { name: 'Java', icon: '/images/java.png' },
  { name: 'Javascript', icon: '/images/Javascript-ByKY3uHO.png'},
  { name: 'PHP', icon: '/images/PHP-DPSFZ17M.svg' },
  { name: 'HTML', icon: '/images/html.png' },
  { name: 'CSS', icon: '/images/CSS-BBmjro31.svg' },
  { name: 'React', icon: '/images/React-CBjhoM09.png' },
  { name: 'Dart', icon: '/images/dart.png' },
  { name: 'Flutter', icon: '/images/Flutter-Cp7V-osx.png' },
  { name: 'Tailwind', icon: '/images/Tailwind-DfCl9cvf.png' },
  { name: 'Laravel', icon: '/images/laravel.png' },
  { name: 'MySQL', icon: '/images/MySQL-BrrUAHM9.png' },
  { name: 'GitHub', icon: '/images/Github-BvjW7zmf.png' },
]

const editingSkills = [
  { name: 'Figma', icon: '/images/figma.png' },
  { name: 'Adobe Photoshop', icon: '/images/Photoshop-DuWvQGAi.png' },
  { name: 'Capcut', icon: '/images/capcut.png' },
]

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* Foto Profil - Fade from Left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="rounded-xl overflow-hidden border-4 border-purple-500 shadow-lg w-[280px] h-[320px] relative">
            <Image
              src="/images/Foto.jpg"
              alt="Deva"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Biodata - Fade from Right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <p className="text-purple-400 text-sm">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Kadek Deva Juliana Prayoga
          </h2>
          <p className="text-sm text-purple-300 mb-2">
            Full Stack Web Developer, Editor
          </p>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            I&apos;m an Informatics Student majoring at Universitas Atma Jaya Yogyakarta who is dynamic, self-motivated, and strongly interested in <span className="text-purple-400 font-medium">Full Stack Development</span> and <span className="text-purple-400 font-medium">Graphic Designer</span>. I am dedicated to delivering positive contributions to every project and my primary focus is on web development.
          </p>

          {/* Icon Sosial */}
          <div className="flex justify-center lg:justify-start gap-4 mb-4 text-purple-400">
            <a href="https://www.instagram.com/devajp13/" target="_blank"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/in/kadek-deva-juliana-prayoga-4a904a323/" target="_blank"><FaLinkedin size={20} /></a>
            <a href="https://github.com/KadekDeva13" target="_blank"><FaGithub size={20} /></a>
          </div>

          {/* Button CV */}
          <a
            href="/CV_Kadek Deva Juliana Prayoga.pdf"
            target="_blank"
            className="inline-block mt-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-semibold transition"
          >
            Curriculum Vitae 📄
          </a>
        </motion.div>
      </div>

      {/* Grid Skills */}
      <div className="mt-16 max-w-6xl mx-auto">

        {/* Programming */}
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-purple-400 mb-3 mt-10"
        >
          For Programming 💻
        </motion.h3>

        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {programmingSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="border border-purple-700 rounded-xl py-3 px-2 text-center text-sm bg-[#111] flex flex-col items-center"
            >
              <div className="w-8 h-8 relative mb-1">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white text-xs">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Editing */}
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-purple-400 mb-3 mt-10"
        >
          For Editing 🎨
        </motion.h3>

        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {editingSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="border border-purple-700 rounded-xl py-3 px-2 text-center text-sm bg-[#111] flex flex-col items-center"
            >
              <div className="w-8 h-8 relative mb-1">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white text-xs">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
