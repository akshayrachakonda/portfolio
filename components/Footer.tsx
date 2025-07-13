'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 border-t border-purple-800 mt-12">
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/akshayrachakonda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/akshay-rachakonda/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Akshay Rachakonda. All rights reserved.
      </p>
    </footer>
  );
}
