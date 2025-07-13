'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* 🌌 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/universe4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌠 Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 ">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center mb-6 text-purple-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Akshay Universe 🌌
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-12 text-center max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Full Stack Developer • UI/UX • Student Mentor
        </motion.p>

        <Link href="/about">
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 20px #a855f7' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-3 rounded-md text-purple-300 border border-purple-600 hover:bg-purple-800/30 transition duration-300"
          >
            🚀 Enter Universe
          </motion.button>
        </Link>
      </div>
    </main>
  );
}
