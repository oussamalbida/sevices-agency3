'use client';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    let trailTimeout;
    let lastTrailTime = 0;
    const trailDelay = 50; // Delay between trail dots in milliseconds

    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const currentTime = Date.now();
      if (currentTime - lastTrailTime > trailDelay) {
        setTrail(prevTrail => [
          ...prevTrail.slice(-15),
          { x: e.clientX, y: e.clientY, id: currentTime }
        ]);
        lastTrailTime = currentTime;
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || 
          e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const cleanupTrail = () => {
      setTrail(prevTrail => prevTrail.slice(1));
    };

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    trailTimeout = setInterval(cleanupTrail, 50);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      clearInterval(trailTimeout);
    };
  }, []);

  return (
    <>
      {trail.map(({ x, y, id }) => (
        <div
          key={id}
          className="cursor-trail"
          style={{
            left: `${x}px`,
            top: `${y}px`,
          }}
        />
      ))}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
