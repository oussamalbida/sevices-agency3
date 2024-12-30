import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Delivery",
      description: "We prioritize rapid delivery without compromising on quality. Our streamlined processes ensure quick turnaround times."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Guaranteed Quality",
      description: "Our commitment to excellence ensures that every project meets the highest standards of quality and innovation."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Team",
      description: "Our diverse team of experts brings years of experience and innovative solutions to every project."
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "100+", label: "Active Projects" },
    { value: "10+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white/30 dark:from-gray-900/30 dark:to-gray-800/30 backdrop-blur-xl"></div>
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-purple-500 rotate-45 animate-float-square"></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border-2 border-cyan-500 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 border-2 border-pink-500 rotate-45 animate-float-triangle"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 slide-in-left">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold tracking-wider text-indigo-500 uppercase mb-4 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Elevate Your Digital Presence with{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Expertise
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-300 text-lg"
          >
            We combine creativity, technical expertise, and strategic thinking to deliver exceptional results that help your business grow.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 stagger-children">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white/30 dark:bg-gray-900/30 p-6 rounded-xl border-t border-l border-gray-200/20 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grid-animate">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-2">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-500 animate-ping"></div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
