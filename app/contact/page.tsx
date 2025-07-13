'use client';

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import StarBackground from '@/components/StarBackground';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xjkobyqv"); // Your Formspree ID

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      <StarBackground />

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-6 mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📡 Satellite Uplink: Contact Me
      </motion.h1>

      {state.succeeded ? (
        <motion.div
          className="text-center mt-16 text-green-400 text-xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Signal sent successfully! I’ll get back to you from the other side of the galaxy.
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-xl space-y-5 bg-purple-800/10 border border-purple-600 p-8 rounded-xl shadow-xl backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <label className="block text-sm text-purple-400 mb-1">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 bg-black border border-purple-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label className="block text-sm text-purple-400 mb-1">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-black border border-purple-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label className="block text-sm text-purple-400 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 bg-black border border-purple-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <motion.button
            type="submit"
            disabled={state.submitting}
            whileHover={{ scale: 1.05 }}
            className="w-full bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white py-3 rounded-md font-semibold"
          >
            🚀 Send Message
          </motion.button>
        </motion.form>
      )}
    </main>
  );
}
