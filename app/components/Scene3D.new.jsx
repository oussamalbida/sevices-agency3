'use client';
import Spline from '@splinetool/react-spline';

export default function Scene3D() {
  return (
    <div className="absolute top-0 right-0 h-full flex items-center justify-end overflow-hidden" style={{ width: '45%' }}>
      <div className="w-full h-[800px] relative">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, rgba(157, 78, 221, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
        }}>
          <Spline 
            scene="https://prod.spline.design/LJSeMBTrLfBfi5ZO/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        
        {/* Fallback content while loading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-purple-400 opacity-50">Loading 3D Scene...</div>
        </div>
      </div>
    </div>
  );
}
