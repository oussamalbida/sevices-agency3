import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const teamMembers = [
    {
      name: "John Carter",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800",
      skills: ["Strategy", "Innovation", "Leadership"],
      quote: "Innovation distinguishes between a leader and a follower.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Sarah Wilson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
      skills: ["Design", "Branding", "UX/UI"],
      quote: "Design is not just what it looks like, it's how it works.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800",
      skills: ["Architecture", "Development", "Innovation"],
      quote: "Code is poetry written in logic.",
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(selectedMember?.name === member.name ? null : member);
  };

  return (
    <section className="py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-white/30 dark:from-gray-900/30 dark:to-gray-800/30 backdrop-blur-xl">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern" />
        </div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={{ opacity: isHovered ? 0.3 : 0.1 }}
        transition={{ duration: 0.5 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Meet Our Team
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto">
            A collective of passionate innovators, creators, and problem solvers.
          </p>
        </motion.div>

        {/* Team Layout */}
        <div className="relative">
          {/* Rotating Background Circle */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onClick={() => handleMemberClick(member)}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative"
              >
                <div className={`relative group cursor-pointer transition-all duration-500 ${
                  selectedMember?.name === member.name ? 'scale-105 z-10' : ''
                }`}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-white/30 dark:bg-gray-900/30 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="relative w-48 h-48 mb-6 rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-indigo-500 font-medium mb-4 text-lg">{member.role}</p>
                      
                      <AnimatePresence>
                        {selectedMember?.name === member.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-center"
                          >
                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic text-lg">"{member.quote}"</p>
                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                              {member.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-400 font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex gap-4 mt-4">
                        {Object.entries(member.social).map(([platform, url]) => (
                          <motion.a
                            key={platform}
                            href={url}
                            className="text-gray-400 hover:text-indigo-500 transition-colors"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                          >
                            <span className="sr-only">{platform}</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
