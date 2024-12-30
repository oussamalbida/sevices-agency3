'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: [
      { label: 'Digital Strategy', href: '/services#strategy' },
      { label: 'Web Development', href: '/services#web' },
      { label: 'Brand Identity', href: '/services#brand' },
    ],
    contact: [
      { label: 'info@novaagency.com', href: 'mailto:info@novaagency.com' },
      { label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    ],
    social: [
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'Instagram', href: 'https://instagram.com' },
    ]
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] via-[#e66ac0] to-[#9d4edd] animate-gradient-x" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-pink-500 mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-purple-500 mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-bold text-white">
                NOVA AGENCY
              </Link>
            </motion.div>
          </div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerSections.services.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              {footerSections.contact.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <ul className="space-y-2">
              {footerSections.social.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/80">
            {currentYear} NOVA AGENCY. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
