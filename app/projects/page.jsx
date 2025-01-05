'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedTitle from '../components/AnimatedTitle';
import ProjectFormModal from '../components/ProjectFormModal';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management and secure payment processing.',
    image: '/project1.webp',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    category: 'Web Development'
  },
  {
    title: 'Brand Identity Design',
    description: 'Complete brand identity design including logo, color palette, and brand guidelines.',
    image: '/project2.webp',
    tags: ['Branding', 'Logo Design', 'Identity'],
    category: 'Logo Design'
  },
  {
    title: 'Social Media Campaign',
    description: 'Successful social media campaign that increased engagement by 300% in 3 months.',
    image: '/project3.webp',
    tags: ['Marketing', 'Social Media', 'Content'],
    category: 'Digital Marketing'
  },
  {
    title: 'Corporate Video',
    description: 'Professional corporate video showcasing company culture and values.',
    image: '/project4.webp',
    tags: ['Video Editing', 'Animation', 'Production'],
    category: 'Video Editing'
  },
  {
    title: 'Tech Startup Website',
    description: 'Modern website design for a tech startup with interactive elements and animations.',
    image: '/project5.webp',
    tags: ['Web Design', 'Development', 'UI/UX'],
    category: 'Web Development'
  },
  {
    title: 'Product Launch Campaign',
    description: 'Integrated marketing campaign for a successful product launch.',
    image: '/project6.webp',
    tags: ['Marketing', 'Strategy', 'Branding'],
    category: 'Digital Marketing'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

export default function Projects() {
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle
          title="Our Projects"
          subtitle="Showcasing our best work and success stories"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              {/* Image container with gradient overlay */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-20 p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + tagIndex * 0.1 }}
                        className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* View Project Link */}
                  <motion.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.a>
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
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Our team is ready to help you create something amazing.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsProjectFormOpen(true)}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
          >
            Start a Project
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
