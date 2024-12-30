'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/5 dark:bg-[#0B1120]/40 backdrop-blur-sm shadow-lg dark:shadow-purple-500/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative w-12 h-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src="/logo.svg" 
                alt="Nova Digital" 
                width={48} 
                height={48} 
                className="object-contain" 
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span 
                className="text-xl font-bold text-gray-900 dark:text-white"
                whileHover={{ scale: 1.02 }}
              >
                NOVA DIGITAL
              </motion.span>
              <span className="text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                services agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative group"
              >
                <motion.span
                  className={`text-sm font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? 'text-purple-500 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 group-hover:text-purple-500 dark:group-hover:text-purple-400'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Auth Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg transition-all duration-300 hover:opacity-90"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="md:hidden bg-white/10 dark:bg-[#0B1120]/95 backdrop-blur-lg rounded-b-2xl shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ x: 10 }}
                  className="block"
                >
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
                      pathname === link.href
                        ? 'text-purple-500 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 px-3 space-y-2">
                <motion.button
                  whileHover={{ x: 10 }}
                  className="w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20"
                >
                  Login
                </motion.button>
                <motion.button
                  whileHover={{ 
                    x: 10,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
                  }}
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg transition-all duration-300 hover:opacity-90"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
