'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="w-full fixed top-0 z-50 bg-black/60 backdrop-blur-md border-b border-purple-900"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <TypeAnimation
          sequence={['Akshay Rachakonda', 1000]}
          wrapper="span"
          speed={15}
          repeat={Infinity}
          className="text-lg text-4xl text-purple-400"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-all duration-300 ${
                  pathname === link.path
                    ? 'bg-purple-700 text-white'
                    : 'text-gray-300 hover:bg-purple-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-purple-300 focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col gap-3 px-6 pb-6 bg-black border-t border-purple-800"
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)} // close menu on click
                  className={`block text-sm font-medium px-4 py-2 rounded-md transition-all duration-300 ${
                    pathname === link.path
                      ? 'bg-purple-700 text-white'
                      : 'text-gray-300 hover:bg-purple-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
