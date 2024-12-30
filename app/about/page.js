'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Image from 'next/image';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: '/team/creative-director.jpg',
      bio: 'With over 15 years of experience in creative design and brand strategy.'
    },
    {
      name: 'Michael Chen',
      role: 'Technical Lead',
      image: '/team/tech-lead.jpg',
      bio: 'Expert in cutting-edge web technologies and innovative solutions.'
    },
    {
      name: 'Emma Davis',
      role: 'Marketing Strategist',
      image: '/team/marketing-lead.jpg',
      bio: 'Specializes in digital marketing and growth strategies.'
    }
  ];

  const achievements = [
    {
      number: '10+',
      label: 'Years Experience',
      description: 'A decade of excellence in digital innovation'
    },
    {
      number: '200+',
      label: 'Projects Completed',
      description: 'Successful projects across various industries'
    },
    {
      number: '50+',
      label: 'Team Members',
      description: 'Talented professionals working together'
    },
    {
      number: '15+',
      label: 'Industry Awards',
      description: 'Recognition for outstanding work'
    }
  ];

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
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Crafting digital experiences that inspire and innovate
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle="Our Mission"
                title="Driving Digital Innovation"
                description="We believe in pushing the boundaries of what's possible in the digital realm. Our mission is to help businesses thrive in the digital age through innovative solutions and creative excellence."
              />
              <div className="mt-8 space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Since our inception, we've been at the forefront of digital transformation, helping businesses adapt and succeed in an ever-evolving digital landscape.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Our approach combines creativity with technical expertise, delivering solutions that not only look beautiful but also drive real business results.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm" />
              <Image
                src="/about/mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <SectionTitle
            subtitle="Our Achievements"
            title="Numbers That Define Us"
            description="A track record of success and growth that speaks for itself"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {achievement.number}
                </h3>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2">
                  {achievement.label}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            subtitle="Our Team"
            title="Meet the Experts"
            description="The talented individuals behind our success"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg">
                  <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {member.name}
                  </h3>
                  <p className="text-indigo-500 dark:text-indigo-400 mt-1">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
