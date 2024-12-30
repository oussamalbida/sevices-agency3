'use client';

import Spline from '@splinetool/react-spline';
import { useState } from 'react';

export default function SplineViewer() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      )}
      <Spline
        onLoad={() => setIsLoading(false)}
        scene="https://prod.spline.design/mBtTH9oqXRHKFuR5/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}
