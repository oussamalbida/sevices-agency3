import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Transform your digital presence with our cutting-edge web development solutions. We create responsive, fast, and user-friendly websites.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-violet-500 to-purple-500",
      features: [
        "Custom Website Development",
        "Responsive Design",
        "E-commerce Solutions",
        "Performance Optimization"
      ]
    },
    {
      title: "Video Production",
      description: "Create stunning visual content that captivates your audience. Our video production team brings your stories to life.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Commercial Production",
        "Motion Graphics",
        "3D Animation",
        "Video Editing"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing strategies that drive results and grow your business.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-orange-500 to-yellow-500",
      features: [
        "Social Media Marketing",
        "SEO Optimization",
        "Content Strategy",
        "Analytics & Reporting"
      ]
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

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white/30 dark:from-gray-900/30 dark:to-gray-800/30 backdrop-blur-xl"></div>
      
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 border-2 border-purple-500 rotate-45 animate-float-square"></div>
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 border-2 border-cyan-500 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 border-2 border-pink-500 rotate-45 animate-float-triangle"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-bold tracking-wider text-indigo-500 uppercase mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Ideas into{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We offer comprehensive digital solutions tailored to your unique needs and goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="glass-effect rounded-2xl p-8 h-full relative flex flex-col">
                  <div className="mb-6">
                    <span className="inline-block p-3 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{service.description}</p>
                  <div className="flex items-center text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <span className="mr-2">Learn More</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
