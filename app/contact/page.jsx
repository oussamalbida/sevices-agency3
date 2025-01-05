'use client';
import React, { useState, useRef } from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ContactPage = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // You'll need to replace this with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // You'll need to replace this with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // You'll need to replace this with your EmailJS public key
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle 
          title="Contact Us" 
          subtitle="Let's discuss your next big project"
        />

        <div className="max-w-4xl mx-auto mt-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Contact Form */}
            <motion.div
              variants={fadeIn}
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Send us a message
              </h3>
              <motion.form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={fadeIn}>
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="Your name"
                  />
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors h-32"
                    placeholder="Your message"
                  ></textarea>
                </motion.div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {error}
                  </motion.div>
                )}

                {success && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 text-sm mt-2"
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
                
                <motion.button
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={fadeIn}
              className="space-y-8"
            >
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Get in touch
                </h3>
                <motion.div 
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={fadeIn} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">Phone</h4>
                      <p className="text-gray-400">+212 659 417 658</p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeIn} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">Email</h4>
                      <p className="text-gray-400">oussamalbida90@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeIn} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">Location</h4>
                      <p className="text-gray-400">Bani Mellal, Morocco</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
