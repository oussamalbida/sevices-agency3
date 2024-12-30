'use client';
import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Scene3D() {
  return (
    <div className="absolute top-0 right-0 h-screen" style={{ width: '50%' }}>
      <div 
        className="relative w-full h-full flex items-center justify-end"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          className="relative w-[850px] h-[850px]" 
          style={{ 
            marginRight: '-50px', 
            marginLeft: '-350px',
            marginTop: '50px'
          }}
        >
          <Spline
            scene="https://prod.spline.design/b-1zn5XySZRu3mjk/scene.splinecode"
            style={{ 
              width: '100%', 
              height: '100%',
              transform: 'scale(1.15) rotateY(-12deg) rotateX(5deg)',
            }}
          />
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 55% center, rgba(157, 78, 221, 0.35) 0%, rgba(157, 78, 221, 0.25) 25%, rgba(0, 0, 0, 0) 65%)',
              filter: 'blur(35px)',
              transform: 'translateZ(0) scale(2.2)',
              mixBlendMode: 'screen',
              opacity: 0.95
            }}
          />
        </div>
      </div>
    </div>
  );
}
