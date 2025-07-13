'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface UniverseCardProps {
  title: string;
  description: string;
  route: string;
}

export default function UniverseCard({ title, description, route }: UniverseCardProps) {
  return (
    <Link href={route}>
      <motion.div
        className="bg-purple-900/20 border border-purple-600 rounded-xl p-6 text-white shadow-md hover:shadow-purple-500/50 transition duration-300 backdrop-blur-sm cursor-pointer"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-bold text-purple-300 mb-2">{title}</h2>
        <p className="text-sm text-gray-300">{description}</p>
      </motion.div>
    </Link>
  );
}
