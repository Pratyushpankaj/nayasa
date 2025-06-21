import React from 'react';
import { Heart } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="floating-hearts-welcome"></div>
        <div className="floating-stars-welcome"></div>
        <div className="sparkles"></div>
      </div>

      {/* Content */}
      <div className="text-center z-10 px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 mb-4 animate-pulse-gentle line-height-normal">
            Start kiya jaye
          </h1>
          <div className="flex items-center justify-center mb-6">
            <Heart className="text-rose-400 w-8 h-8 animate-heartbeat mr-3" />
            <h2 className="text-4xl md:text-6xl font-pacifico text-rose-500">
              Madaaaaaammm jiiiiiiii
            </h2>
            <Heart className="text-rose-400 w-8 h-8 animate-heartbeat ml-3" />
          </div>
          
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-dancing text-purple-600 mb-2">
              Ijazat Hai?
            </p>
            
          </div>

          <button 
            onClick={onStart}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-rose-400 to-pink-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Click to Begin ✨</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-pink-300 animate-bounce">💕</div>
      <div className="absolute top-20 right-16 text-purple-300 animate-bounce-delayed">🌟</div>
      <div className="absolute bottom-20 left-20 text-rose-300 animate-bounce">💖</div>
      <div className="absolute bottom-16 right-12 text-pink-300 animate-bounce-delayed">✨</div>
      
    </div>
  );
};

export default WelcomeScreen;