'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
        }}
        whileInView={{
          y: [0, -8, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        transition={{ duration: 0.6 }}
        className="relative inline-block"
      >
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h1>
        <motion.div
          className="h-[2px] w-full bg-gradient-to-r from-purple-400 to-blue-500 mt-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          whileInView={{
            opacity: [0.5, 1, 0.5],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{
          y: [0, -4, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.15
          }
        }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default AnimatedTitle;
