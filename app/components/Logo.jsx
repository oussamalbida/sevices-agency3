'use client';
import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-icon"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6366f1' }} />
            <stop offset="50%" style={{ stopColor: '#a855f7' }} />
            <stop offset="100%" style={{ stopColor: '#ec4899' }} />
          </linearGradient>
        </defs>

        {/* Connected Circles Pattern */}
        <g className="logo-pattern">
          {/* Top Row */}
          <circle cx="50" cy="50" r="20" fill="#6366f1" />
          <circle cx="100" cy="50" r="20" fill="#a855f7" />
          <circle cx="150" cy="50" r="20" fill="#ec4899" />
          
          {/* Middle Row */}
          <circle cx="75" cy="100" r="20" fill="#a855f7" />
          <circle cx="125" cy="100" r="20" fill="#a855f7" />
          
          {/* Bottom Row */}
          <circle cx="50" cy="150" r="20" fill="#6366f1" />
          <circle cx="100" cy="150" r="20" fill="#a855f7" />
          <circle cx="150" cy="150" r="20" fill="#ec4899" />
          
          {/* Connecting Lines */}
          <path
            d="M70 50 L130 50 M75 70 L75 130 M125 70 L125 130 M70 150 L130 150"
            stroke="url(#logoGradient)"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>
      </svg>
      <div className="ml-2 flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          NOVA DIGITAL
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          services agency
        </span>
      </div>
    </div>
  );
};

export default Logo;
