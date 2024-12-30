'use client';
import { motion } from 'framer-motion';

const SectionTitle = ({ subtitle, title, highlight, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12 relative"
    >
      {/* Decorative Elements */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 rounded-full blur-lg" />
      
      {/* Subtitle with line decorations */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{subtitle}</span>
        <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </div>
      
      {/* Title */}
      <h2 className="text-4xl font-bold mb-4">
        {title}
        {highlight && (
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            {' '}{highlight}
          </span>
        )}
      </h2>
      
      {/* Description */}
      {description && (
        <p className="text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
