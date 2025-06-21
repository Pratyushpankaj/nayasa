
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const PersonalMessage: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const message = `Happy birthday to the most precious girl I know. This day is not just about celebrating your birth - it's about celebrating the love, light and laughter you bring into everyone's life.
  I am very much grateful to have you in my life . You are the missing piece I never knew I needed. You are the melody that fills my heart with joy the rhythm that makes me whole. You are the rhyme that makes my heart sing. You are the art that bring beauty to my world. That masterpiece of god that I am grateful for everyday.
  You are my first thought of the day and last khyaal of night. You are the reason I wake up with a smile on my face.
I am truly glad I found you , 
You are peace in my chaos,
Comfort in my silence,
and the one I want to stay with..... Always 💖
  `;

  useEffect(() => {
    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + message[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, message]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-dancing text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 mb-4">
            A Message From My Heart
          </h2>
          <div className="flex items-center justify-center">
            <Heart className="text-rose-400 w-6 h-6 animate-heartbeat mr-2" />
            <Heart className="text-pink-400 w-8 h-8 animate-heartbeat" />
            <Heart className="text-rose-400 w-6 h-6 animate-heartbeat ml-2" />
          </div>
        </div>

        <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/40">
          <div className="relative">
            <div className="text-lg md:text-xl leading-relaxed text-gray-700 font-poppins whitespace-pre-line">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-0.5 h-6 bg-rose-400 ml-1 animate-blink"></span>
              )}
            </div>
            
            {!isTyping && (
              <div className="mt-8 text-center animate-fade-in">
                <div className="flex justify-center space-x-4 text-3xl">
                  <span className="animate-bounce">🎈</span>
                  <span className="animate-bounce-delayed">🎉</span>
                  <span className="animate-bounce">❤️</span>
                  <span className="animate-bounce-delayed">🎂</span>
                  <span className="animate-bounce">🌹</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-purple-600 font-dancing text-2xl">
            With all my love and endless emotion 💖
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalMessage;