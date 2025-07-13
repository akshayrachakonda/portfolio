'use client';
import { motion } from 'framer-motion';

export default function AnimatedButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: '0 0 15px #8b5cf6' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="mt-8 px-8 py-3 bg-purple-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
    >
      Enter Universe
    </motion.button>
  );
}
