import React, { useState, useRef, useEffect } from 'react';

const Gallery3D: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [momentum, setMomentum] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg', 
    '/images/8.jpg'

 

    
  ];


  useEffect(() => {
    if (!isDragging) {
      const animate = (currentTime: number) => {
        if (lastTimeRef.current) {
          const deltaTime = currentTime - lastTimeRef.current;
          const rotationSpeed = momentum !== 0 ? momentum : 0.008;
          setRotation(prev => prev + rotationSpeed * deltaTime);
          

          if (momentum !== 0) {
            setMomentum(prev => prev * 0.98);
            if (Math.abs(momentum) < 0.001) {
              setMomentum(0);
            }
          }
        }
        lastTimeRef.current = currentTime;
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, momentum]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setMomentum(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    const rotationDelta = diff * 0.3; // Reduced sensitivity for smoother control
    setRotation(prev => prev + rotationDelta);
    setMomentum(rotationDelta * 0.1); // Set momentum for smooth continuation
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setMomentum(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    const rotationDelta = diff * 0.3;
    setRotation(prev => prev + rotationDelta);
    setMomentum(rotationDelta * 0.1);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
      
        
        {/* 3D Gallery Container with enhanced perspective */}
        <div className="gallery-3d-scene">
          <div 
            ref={galleryRef}
            className="gallery-3d-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
              transform: `rotateX(-10deg) rotateY(${rotation}deg)`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            {images.map((image, index) => {
              const angle = (360 / images.length) * index;
              
              return (
                <div
                  key={index}
                  className="gallery-3d-item"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(350px)`
                  }}
                >
                  <div className="gallery-3d-frame">
                    <img
                      src={image}
                      alt={`Memory ${index + 1}`}
                      className="gallery-3d-image"
                      loading="lazy"
                    />
                    
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* 3D Floor/Base */}
          <div className="gallery-3d-floor"></div>
        </div>
      
      </div>
    </div>
  );
};

export default Gallery3D;