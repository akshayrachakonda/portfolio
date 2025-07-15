'use client';
import { motion } from 'framer-motion';
// import Link from 'next/link';
import StarBackground from '@/components/StarBackground';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 text-center">
      <StarBackground />
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-8 mt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📄 Asteroid Archive: Resume
      </motion.h1>

      <motion.p
        className="text-lg text-gray-400 max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Download my latest resume orbiting through the tech space. It is loaded with experience, projects, and a galactic passion for frontend.
      </motion.p>

      <motion.a
        href="/assets/akshay-resume.pdf"
        download="Akshay-Rachakonda-Resume"
        target="_blank" // ← ensures mobile opens it
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, boxShadow: '0 0 20px #8b5cf6' }}
        className="bg-purple-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-purple-800"
      >
        🚀 Download Resume
    </motion.a>


      <motion.iframe
        src="/assets/akshay-resume.pdf"
        className="mt-16 max-w-4xl w-full aspect-video border-2 border-purple-700 rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        />

    </main>
  );
}