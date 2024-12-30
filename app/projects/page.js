'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../components/SectionTitle';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: '/projects/ecommerce.jpg',
      description: 'A modern e-commerce platform with advanced features',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: '/projects/banking-app.jpg',
      description: 'Secure and intuitive mobile banking application',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Corporate Website',
      category: 'Web Development',
      image: '/projects/corporate-website.jpg',
      description: 'Modern corporate website with CMS integration',
      technologies: ['React', 'Tailwind CSS', 'Strapi'],
      gradient: 'from-pink-500 to-red-500'
    },
    {
      title: 'Marketing Campaign',
      category: 'Digital Marketing',
      image: '/projects/marketing.jpg',
      description: 'Successful digital marketing campaign',
      technologies: ['Social Media', 'SEO', 'Content Strategy'],
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Product Launch',
      category: 'Marketing',
      image: '/projects/product-launch.jpg',
      description: 'Product launch strategy and execution',
      technologies: ['Event Planning', 'PR', 'Social Media'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Corporate Video',
      category: 'Video Production',
      image: '/projects/corporate-video.jpg',
      description: 'High-quality corporate brand video',
      technologies: ['Video Production', 'Motion Graphics', '3D Animation'],
      gradient: 'from-blue-500 to-indigo-500'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Development', 'Digital Marketing', 'Video Production'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing our best work and creative solutions
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`} />
                <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl">
                  <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-200 text-sm">{project.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 text-gray-700 dark:text-gray-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              subtitle="Start Your Project"
              title="Have a Project in Mind?"
              description="Let's work together to create something amazing. Our team is ready to bring your vision to life."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Start a Project
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
