'use client';
import React from 'react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Cards */}
        <div className="bg-[#0B1120]/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800/50">
          <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
          <p className="text-gray-300">
            Custom web applications built with the latest technologies and best practices.
          </p>
        </div>

        <div className="bg-[#0B1120]/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800/50">
          <h3 className="text-xl font-semibold text-white mb-4">UI/UX Design</h3>
          <p className="text-gray-300">
            Beautiful and intuitive user interfaces designed for optimal user experience.
          </p>
        </div>

        <div className="bg-[#0B1120]/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800/50">
          <h3 className="text-xl font-semibold text-white mb-4">Mobile Apps</h3>
          <p className="text-gray-300">
            Native and cross-platform mobile applications for iOS and Android.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;