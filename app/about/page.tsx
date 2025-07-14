'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import StarBackground from '@/components/StarBackground';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      {/* ⭐ Starry sky behind all */}
      <StarBackground />

      {/* 👨‍🚀 About Content */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10 relative">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-48 h-48 rounded-full border-2 border-purple-500 overflow-hidden shadow-lg"
        >
          <img
            src="/profile.jpg"
            alt="Akshay"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-purple-400 mb-4">Akshay Rachakonda</h1>

          <TypeAnimation
            sequence={[
              'Full Stack Developer 🚀',
              2000,
              'UI/UX Enthusiast 🌌',
              2000,
              'Code Explorer at EventAura 🪐',
              2000,
              'Student Mentor ar Reliance Foundation',
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-lg text-gray-300"
          />
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 0.6 }}
  className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto relative z-10"
>
  {[
    'Java',
    'Next js',
    'React',
    'JavaScript',
    'TailwindCSS',
    'Express js',
    'Node js',
    'Framer Motion',
    'MongoDB',
    'Bootstrap',
    'Git Hub',
    'Figma'
  ].map((tech) => (
    <motion.div
      key={tech}
      whileHover={{ scale: 1.05 }}
      className="bg-purple-700/30 text-purple-300 border border-purple-500 rounded-lg px-4 py-2 text-center text-sm backdrop-blur-md shadow-md transition duration-300"
    >
      {tech}
    </motion.div>
  ))}
</motion.div>
    </main>
  );
}
