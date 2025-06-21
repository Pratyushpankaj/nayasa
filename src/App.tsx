import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Gallery3D from './components/Gallery3D';
import PersonalMessage from './components/PersonalMessage';
import SurpriseGiftBox from './components/SurpriseGiftBox';
import FinalNote from './components/FinalNote';
import End from './components/End';
import MusicPlayer from './components/MusicPlayer';
import './styles/animations.css';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const sections = [
    { component: <Gallery3D />, name: 'gallery' },
    { component: <PersonalMessage />, name: 'message' },
    { component: <SurpriseGiftBox />, name: 'surprise' },
    { component: <FinalNote />, name: 'final' },
    { component: <End />, name: 'end' }
   
  ];

  const handleStart = () => {
    setIsStarted(true);
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  if (!isStarted) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-hearts"></div>
        <div className="floating-stars"></div>
      </div>

      {/* Music Player */}
      <MusicPlayer />

      {/* Navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
          <button 
            onClick={prevSection}
            disabled={currentSection === 0}
            className="text-rose-400 hover:text-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>
          <div className="flex space-x-2">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSection ? 'bg-rose-400' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={nextSection}
            disabled={currentSection === sections.length - 1}
            className="text-rose-400 hover:text-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Section Content */}
      <div className="section-transition">
        {sections[currentSection].component}
      </div>
    </div>
  );
}

export default App;