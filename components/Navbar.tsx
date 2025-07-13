'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

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

  return (
    <motion.nav
      className="w-full fixed top-0 z-50 bg-black/60 backdrop-blur-md border-b border-purple-900"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* <h1 className="text-4xl font-bold text-purple-400 mb-4">Akshay Rachakonda</h1> */}
        <TypeAnimation
            sequence={[
              'Akshay Rachakonda',
              1000
            ]}
            wrapper="span"
            speed={15}
            repeat={Infinity}
            className="text-lg text-4xl text-purple-400"
          />
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
      </div>
    </motion.nav>
  );
}
