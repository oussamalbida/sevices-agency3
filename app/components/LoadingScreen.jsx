'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1120] overflow-hidden"
    >
      {/* Animated Waves */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        >
          <svg
            className="absolute w-full h-full opacity-30"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.3 }} />
                <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <path
              fill="url(#wave-gradient-1)"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          <svg
            className="absolute w-full h-full opacity-20"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ transform: 'translateY(20px)' }}
          >
            <defs>
              <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 0.3 }} />
                <stop offset="50%" style={{ stopColor: '#6366f1', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <path
              fill="url(#wave-gradient-2)"
              d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,122.7C672,117,768,171,864,197.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Logo container */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative w-40 h-40">
          {/* Rotation container */}
          <motion.div
            className="w-full h-full"
            animate={{ 
              rotate: 360
            }}
            transition={{
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            style={{
              transformOrigin: "center center"
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="w-full h-full"
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))',
                  'drop-shadow(0 0 40px rgba(139, 92, 246, 0.5))',
                  'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Logo className="w-full h-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
