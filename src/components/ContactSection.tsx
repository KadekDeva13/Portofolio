'use client'

import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import React from 'react'
import { motion } from 'framer-motion'

const ContactSection = () => {
  return (
    <section id="contact" className="bg-black text-white px-4 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT – Info & Icons (Fade In from Left) */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 text-sm font-semibold mb-2">Contact me</p>
          <h2 className="text-4xl font-bold mb-4">
            Feel free to reach out for <span className="text-purple-500">collabs</span>
          </h2>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            &quot;Let&apos;s collaborate on an exciting project! Whether you have a creative idea or a challenging task, I&apos;m here to help. Feel free to reach out and let&apos;s make something amazing together.&quot;
          </p>

          <div className="flex gap-4 mt-4 text-white text-3xl">
            <a href="https://wa.me/6282147073742" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="mailto:kidzxgh44@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* RIGHT – Form (Fade In from Right) */}
        <motion.form
          className="space-y-4"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="bg-transparent border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-1">Your Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="bg-transparent border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition w-fit"
          >
            Send
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactSection
