'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: 'Visit Us',
      description: '123 Innovation Street, Tech Valley, CA 94043',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Email Us',
      description: 'info@nova-agency.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-indigo-900/40 dark:via-purple-900/40 dark:to-pink-900/40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's discuss your next project and bring your ideas to life
          </p>
        </motion.div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative flex flex-col items-center p-8 bg-white dark:bg-gray-900 rounded-lg text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              subtitle="Contact Form"
              title="Send Us a Message"
              description="Fill out the form below and we'll get back to you as soon as possible."
            />
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="mt-12 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300"
                  placeholder="Subject"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300 resize-none"
                  placeholder="Your Message"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-indigo-900/40 dark:via-purple-900/40 dark:to-pink-900/40" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282621826614!2d-122.0838!3d37.4224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI1JzIwLjgiTiAxMjLCsDA1JzAxLjciVw!5e0!3m2!1sen!2sus!4v1635787567123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="relative z-10 filter grayscale"
        />
      </section>
    </main>
  );
};

export default ContactPage;
