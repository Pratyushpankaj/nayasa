import React, { useState } from 'react';
import { Gift, Heart, Star } from 'lucide-react';

const SurpriseGiftBox: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  const handleGiftClick = () => {
    setIsOpened(true);
    setTimeout(() => {
      setShowSurprise(true);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Multiple 3D Hearts floating animation */}
      {Array.from({ length: 8 }).map((_, i) => {
        // Randomize horizontal position, delay, and duration for each heart
        const left = Math.random() * 80 + 10; // 10% to 90%
        const delay = Math.random() * 3; // 0s to 3s
        const duration = 4 + Math.random() * 2; // 4s to 6s
        return (
          <div
            key={i}
            className="fixed z-40 pointer-events-none animate-heart-float"
            style={{
              left: `${left}%`,
              bottom: 0,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            <span style={{fontSize: '2.5rem', filter: 'drop-shadow(0 0 8px #e11d48)', opacity: '50%'}}  role="img" aria-label="3d-heart">💖</span>
          </div>
        );
      })}
      <style>{`
        @keyframes heart-float {
          0% {
            transform: translateY(0) scale(1) rotate(-10deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1.2) rotate(10deg);
            opacity: 0;
          }
        }
        .animate-heart-float {
          animation-name: heart-float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
      <div className="text-center">
        
        {!isOpened ? (
          <div className="relative">
            <p className="text-lg text-purple-600 mb-8 font-poppins size-2x1 ">
              Click the box
            </p>
            <button
              onClick={handleGiftClick}
              className="group relative transform hover:scale-110 transition-all duration-300"
            >
              <div className="relative">
                <Gift 
                  className="w-32 h-32 text-rose-400 animate-bounce-gentle mx-auto" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
            </button>
            {/* Floating decorations */}
            <div className="absolute top-0 left-1/4 animate-float">
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="absolute top-10 right-1/4 animate-float-delayed">
              <Heart className="w-5 h-5 text-pink-400" />
            </div>
            <div className="absolute bottom-10 left-1/3 animate-float">
              <Star className="w-4 h-4 text-purple-400" />
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Opening animation */}
            <div className={`transition-all duration-800 ${isOpened ? 'scale-150 opacity-0' : ''}`}>
              <Gift className="w-32 h-32 text-rose-400 mx-auto" />
            </div>
            {/* Surprise content */}
            {showSurprise && (
              <div className="animate-surprise-reveal">
                <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/40 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🎉🎂🎉</div>
                    <h3 className="text-3xl md:text-4xl font-dancing text-rose-600 mb-4">
                      happy birthday, my love!
                    </h3>
                    <p className="text-lg text-purple-700 mb-6 font-poppins">
                    
                    
                    </p>
                    {/* Replace with actual surprise image */}
                    <div className="mb-6">
                      <img 
                        src="/images/10.jpg"
                        alt="my dear"
                        className="rounded-2xl shadow-lg mx-auto max-w-full h-64 object-cover"
                      />
                    </div>
                    <p className="text-xl font-dancing text-rose-500">
                      Just you, me, and our love under the stars 💕
                    </p>
                    <div className="flex justify-center space-x-4 mt-6 text-2xl">
                      <span className="animate-bounce">🌹</span>
                      <span className="animate-bounce-delayed">💖</span>
                      <span className="animate-bounce">🥂</span>
                      <span className="animate-bounce-delayed">🌟</span>
                    </div>
                  </div>
                </div>
                {/* Celebration effects */}
                <div className="celebration-particles"></div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SurpriseGiftBox;
