'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('login');

  const openModal = (mode) => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
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

            {/* Desktop Auth Buttons and Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  color: "#fff",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal('login')}
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
                onClick={() => openModal('signup')}
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  className="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                />
                <motion.span
                  className="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
                  style={{ top: "50%", translateY: "-50%" }}
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                />
                <motion.span
                  className="absolute h-0.5 w-6 bg-current transform transition-all duration-300"
                  style={{ bottom: 0 }}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-[#0B1120] shadow-lg z-50 md:hidden"
            >
              <div className="flex flex-col h-full p-6">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                          pathname === link.href
                            ? 'bg-purple-500/10 text-white'
                            : 'text-gray-300 hover:bg-purple-500/10 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Auth Buttons */}
                <div className="mt-6 space-y-2">
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openModal('login');
                    }}
                    className="w-full px-4 py-2 text-sm text-gray-300 hover:text-white border border-gray-700 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                  >
                    Login
                  </motion.button>
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openModal('signup');
                    }}
                    className="w-full px-4 py-2 text-sm text-white bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg hover:opacity-90 transition-all duration-300"
                  >
                    Sign Up
                  </motion.button>
                </div>

                {/* Mobile Theme Toggle */}
                <motion.div 
                  className="mt-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <ThemeToggle />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
        setMode={setModalMode}
      />
    </>
  );
};

export default Navbar;
