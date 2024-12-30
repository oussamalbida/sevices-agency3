import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { number: '745+', label: 'Global Brands' },
    { number: '506+', label: 'Happy Clients' },
    { number: '821+', label: 'Winning Award' },
    { number: '329+', label: 'Projects Completed' },
  ];

  return (
    <section className="py-20 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white/30 dark:from-gray-900/30 dark:to-gray-800/30 backdrop-blur-xl">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 text-center hover-lift"
            >
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
