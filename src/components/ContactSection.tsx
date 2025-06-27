'use client'

import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ContactSection = () => {
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    fetch('https://formspree.io/f/xqabwell', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => {
        setShowModal(true)
        form.reset()

        // Auto-close modal + refresh page
        setTimeout(() => {
          setShowModal(false)
          window.location.reload()
        }, 3000)
      })
      .catch(() => {
        alert('Gagal mengirim pesan. Silakan coba lagi.')
      })
  }

  return (
    <section id="contact" className="bg-black text-white px-4 py-16 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT */}
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
            &quot;Let&apos;s collaborate on an exciting project! Feel free to reach out and let&apos;s make something amazing together.&quot;
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

        {/* RIGHT – Form */}
        <motion.form
          onSubmit={handleSubmit}
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
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="bg-transparent border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-transparent border rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              required
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

      {/* MODAL SUCCESS */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 text-center max-w-sm w-full shadow-xl">
            <h3 className="text-lg font-semibold text-green-600 mb-2">✅ Pesan berhasil dikirim!</h3>
            <p className="text-gray-700 text-sm mb-4">Kami akan segera menghubungi Anda kembali.</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ContactSection
