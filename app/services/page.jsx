'use client';
import { motion } from 'framer-motion';
import { FaVideo, FaCode, FaPalette, FaBullhorn, FaComments, FaHashtag } from 'react-icons/fa';
import AnimatedTitle from '../components/AnimatedTitle';
import ProjectFormModal from '../components/ProjectFormModal';
import { useState } from 'react';

const services = [
  {
    icon: FaVideo,
    title: 'Video Editing',
    description: 'Professional video editing services including color grading, transitions, effects, and sound design. Transform your raw footage into compelling visual stories.',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    icon: FaCode,
    title: 'Web Development',
    description: 'Custom website development using the latest technologies. We create responsive, fast, and user-friendly websites that help your business grow online.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FaPalette,
    title: 'Logo Design',
    description: "Creative logo design that captures your brand's essence. We deliver unique, memorable, and versatile logos that make your brand stand out.",
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: FaBullhorn,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to boost your online presence. SEO, content marketing, and paid advertising campaigns that drive results.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: FaComments,
    title: 'Free Consulting',
    description: 'Expert advice to help you make informed decisions about your digital presence. We guide you through the best strategies for your business.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: FaHashtag,
    title: 'Social Media Management',
    description: 'Comprehensive social media management to build and engage your audience. Content creation, scheduling, and analytics to grow your brand.',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Services() {
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle
          title="Our Services"
          subtitle="Empowering your digital success with comprehensive solutions"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r bg-opacity-50 rounded-xl blur-xl transition-all duration-300 group-hover:opacity-100 opacity-0">
                <div className={`h-full w-full bg-gradient-to-r ${service.gradient}`} />
              </div>
              
              <div className="relative p-8 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-white/10 h-full transform transition-all duration-300 group-hover:translate-y-[-5px]">
                <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${service.gradient}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="mt-4 text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                
                <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                <motion.div
                  className="mt-4 inline-flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Transform your digital presence with our professional services. Contact us today for a free consultation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsProjectFormOpen(true)}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us Now
          </motion.button>
        </motion.div>
      </div>

      {/* Project Form Modal */}
      <ProjectFormModal 
        isOpen={isProjectFormOpen} 
        onClose={() => setIsProjectFormOpen(false)} 
      />
    </div>
  );
}