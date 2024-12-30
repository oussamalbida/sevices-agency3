'use client';
import Spline from '@splinetool/react-spline';

const Scene3D = () => {
  return (
    <div className="absolute top-0 right-0 h-full" style={{ width: '45%' }}>
      <Spline 
        scene="https://prod.spline.design/cT1PUTD9E3dZLHYf/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(157, 78, 221, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-purple-400 opacity-50 pointer-events-none">
        Loading 3D Scene...
      </div>
    </div>
  );
};

export default Scene3D;
