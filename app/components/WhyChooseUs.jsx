'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useAnimation } from 'framer-motion';

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

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

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), springConfig);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      rotateX: -45,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 70,
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1]
      }
    }),
    hover: {
      scale: 1.05,
      y: -15,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const statVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      rotate: -180
    },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        delay: i * 0.15,
        duration: 0.8
      }
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="py-20 relative overflow-hidden bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm"
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white/30 dark:from-gray-900/30 dark:to-gray-800/30 backdrop-blur-xl"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
            y: [0, -100, 0]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl opacity-30"
        ></motion.div>
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.8, 1],
            x: [0, -100, 0],
            y: [0, 100, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full filter blur-3xl opacity-30"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 50,
            damping: 8,
            duration: 1 
          }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.2
            }}
            className="text-sm font-bold tracking-wider text-indigo-500 uppercase mb-4 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 8,
              delay: 0.4
            }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Elevate Your Digital Presence with{' '}
            <motion.span 
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                transition: {
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300
                }
              }}
            >
              Our Expertise
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 8,
              delay: 0.6
            }}
            className="text-gray-600 dark:text-gray-300 text-lg"
          >
            We combine creativity, technical expertise, and strategic thinking to deliver exceptional results that help your business grow.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-30"
                whileHover={{ 
                  opacity: 1,
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <motion.div 
                className="relative bg-white/30 dark:bg-gray-900/30 p-6 rounded-xl border-t border-l border-gray-200/20 backdrop-blur-sm"
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-6"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }
                  }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
                  whileHover={{ 
                    x: 10,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 10
                    }
                  }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div 
                className="relative mb-2"
                whileHover={{
                  y: -10,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
              >
                <motion.span 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ 
                    scale: 1,
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: index * 0.1
                    }
                  }}
                >
                  {stat.value}
                </motion.span>
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-pink-500"
                  animate={{ 
                    scale: [1, 2, 1],
                    opacity: [1, 0.5, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                ></motion.div>
              </motion.div>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
