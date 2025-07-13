'use client';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  company: string;
  role: string;
  tech: string;
  date: string;
}

export default function ExperienceCard({
  company,
  role,
  tech,
  date,
}: ExperienceCardProps) {
  return (
    <motion.div
      className="bg-purple-800/20 border border-purple-500 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:shadow-purple-500/40 transition-all duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="text-lg text-purple-300 font-semibold">{company}</h3>
      <p className="text-sm text-gray-400">{role}</p>
      <p className="text-xs text-purple-400 mt-1">{tech}</p>
      <p className="text-xs text-gray-500 mt-2">{date}</p>
    </motion.div>
  );
}
