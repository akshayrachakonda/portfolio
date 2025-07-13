'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  liveLink?: string;
  repoLink?: string;
}

export default function ProjectCard({
  title,
  description,
  stack,
  liveLink,
  repoLink,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-purple-800/20 border border-purple-500 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:shadow-purple-500/40 transition-all duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <h2 className="text-xl font-bold text-purple-300 mb-2">{title}</h2>
      <p className="text-gray-400 text-sm mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-purple-900/40 text-purple-300 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-purple-400">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt />
          </a>
        )}
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
      </div>
    </motion.div>
  );
}
