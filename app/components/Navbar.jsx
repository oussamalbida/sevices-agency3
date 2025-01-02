'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
          ? 'bg-[#0B1120]/80 backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="relative"
                initial={{ rotate: 0 }}
                animate={{ 
                  rotate: [0, 5, -5, 5, 0],
                  scale: [1, 1.02, 0.98, 1.02, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-pink-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                <motion.div
                  whileHover={{ 
                    rotate: [0, -15, 15, -10, 10, -5, 5, 0],
                    transition: { duration: 0.8 }
                  }}
                >
                  <Image 
                    src="/logo.svg" 
                    alt="Nova Digital" 
                    width={40} 
                    height={40} 
                    className="object-contain relative z-10 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" 
                  />
                </motion.div>
              </motion.div>
              <div className="flex flex-col ml-3">
                <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  NOVA DIGITAL
                </span>
                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  services agency
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.label}
                className="relative"
                whileHover={{ y: -2 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15 
                }}
              >
                <Link
                  href={link.href}
                  className="relative group px-3 py-2"
                >
                  <span className={`text-sm font-medium transition-all duration-300 ease-out ${
                    pathname === link.href
                      ? 'text-white'
                      : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {link.label}
                  </span>
                  
                  {/* Gradient underline effect */}
                  <div className="absolute -bottom-0.5 left-0 right-0 h-[2px] overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 transition-all duration-300 ease-out ${
                      pathname === link.href 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`} 
                    style={{
                      backgroundSize: '200% 100%',
                      animation: 'gradientMove 2s linear infinite'
                    }}
                    />
                  </div>

                  {/* Subtle glow on hover */}
                  <div className={`absolute inset-0 rounded-lg bg-purple-400/0 transition-all duration-300 ease-out ${
                    pathname === link.href
                      ? 'bg-purple-400/5'
                      : 'group-hover:bg-purple-400/5'
                  }`} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                color: "#fff",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Login</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm text-white bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 hover:opacity-90 relative overflow-hidden"
            >
              <span className="relative z-10">Sign Up</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.2 }}
              />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-gray-300 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
