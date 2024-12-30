import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const sliderRef = useRef(null);

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
      video: null,
      description: "Full-stack e-commerce solution with advanced features",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Corporate Brand Video",
      category: "Video Production",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop",
      video: null,
      description: "High-impact corporate identity video production",
      tags: ["Video Production", "Motion Graphics", "3D Animation"]
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      video: null,
      description: "Multi-channel marketing campaign with measurable results",
      tags: ["Social Media", "SEO", "Content Strategy"]
    },
    {
      title: "Mobile Banking Application",
      category: "App Development",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
      video: null,
      description: "Secure and intuitive mobile banking solution",
      tags: ["React Native", "Firebase", "Biometrics"]
    },
    {
      title: "Product Launch Video",
      category: "Video Production",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop",
      video: null,
      description: "Cinematic product showcase with stunning visuals",
      tags: ["Cinematography", "Post-Production", "Sound Design"]
    },
    {
      title: "SEO Optimization Project",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop",
      video: null,
      description: "Comprehensive SEO strategy with proven results",
      tags: ["Technical SEO", "Content Marketing", "Analytics"]
    }
  ];

  const categories = ['All', 'Web Development', 'Video Production', 'Marketing', 'App Development'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const scroll = (direction) => {
    const { current } = sliderRef;
    if (current) {
      const scrollAmount = 400; // Width of one card
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Showcasing Our Creative Excellence
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions and creative projects that demonstrate our expertise and commitment to excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Projects Slider */}
          <div 
            ref={sliderRef}
            className="overflow-x-auto hide-scrollbar relative"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <motion.div 
              className="flex gap-8 px-4"
              style={{ 
                width: 'fit-content',
                cursor: 'grab',
                touchAction: 'none'
              }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative w-[400px] flex-shrink-0"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white/30 dark:bg-gray-900/30 p-6 rounded-xl h-full border-t border-l border-gray-200/20 backdrop-blur-sm">
                    <div className="relative h-64 mb-6 rounded-lg overflow-hidden group">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                      {/* Video Overlay on Hover */}
                      {project.video && (
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <video
                            src={project.video}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        </div>
                      )}
                      {/* Content Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-gray-200 text-sm">{project.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
