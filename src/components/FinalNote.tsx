import React from 'react';
import { Heart, Star } from 'lucide-react';

const FinalNote: React.FC = () => {
  // Floating hearts logic
  const floatingHearts = Array.from({ length: 8 }).map((_, i) => {
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
        <span style={{fontSize: '2.5rem', filter: 'drop-shadow(0 0 8px #e11d48)', opacity: '50%'}} role="img" aria-label="3d-heart">💖</span>
      </div>
    );
  });

  return (
    <>
      {floatingHearts}
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
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative mb-8">
            <div className="flex items-center justify-center space-x-4">
              <Heart className="text-rose-400 w-8 h-8 animate-heartbeat" />
              <span className="text-4xl animate-bounce">💕</span>
              <Heart className="text-rose-400 w-8 h-8 animate-heartbeat" />
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 mb-8">
            <p className="text-2xl md:text-3xl font-dancing text-purple-700 leading-relaxed mb-6">
              Thankyou for coming into my life,<br />
              Thankyou for trusting me always,<br />
              Thankyou for listening me always,<br />
              Thankyou for being my unpaid therapist ,<br />
              Thankyou for making me smile even on the hardest days,<br />
              Thankyou for every effort you put ,<br />
              Thankyou for every risk you take for me,<br />
              Thankyou for every step you take for me,<br />
              Thankyou for everything my loveee
            </p>
            <div className="text-6xl mb-6">❣🫶✨</div>
            <p className="text-xl md:text-2xl font-dancing text-rose-600 mb-4">
              You are my greatest gift, my sweetest dream come true.
            </p>
            <div className="text-6xl mb-6">💖</div>
          </div>
          <div className="relative">
            <p className="text-3xl md:text-4xl font-pacifico text-rose-500 mb-4">
              Happy Birthday, My Beautiful Love! 💖
            </p>
            <div className="flex justify-center space-x-6 text-4xl">
              <span className="animate-bounce">🎈</span>
              <span className="animate-bounce-delayed">❤️</span>
              <span className="animate-bounce">🌟</span>
              <span className="animate-bounce-delayed">🎁</span>
              <span className="animate-bounce">💝</span>
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 animate-float">
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="absolute -top-2 -right-6 animate-float-delayed">
              <Heart className="w-5 h-5 text-pink-400" />
            </div>
            <div className="absolute -bottom-4 left-8 animate-float">
              <Star className="w-4 h-4 text-purple-400" />
            </div>
            <div className="absolute -bottom-6 -right-4 animate-float-delayed">
              <Heart className="w-6 h-6 text-rose-400" />
            </div>
          </div>
          <div className="mt-12">
            <p className="text-lg font-dancing text-purple-600">
              Made with endless love just for you ✨
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalNote;