import React from 'react';

const End: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/30 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl p-8 md:p-12 max-w-xl mx-auto text-center" style={{background: 'rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', border: '1px solid rgba(255,255,255,0.25)'}}>
        <h2 className="text-3xl md:text-4xl font-dancing text-rose-600 mb-6">
          Once again many many happy returns of the day madaaaaaammmmm jiiiiiiiii
        </h2>
        <div className="mb-6">
          <img 
            src="/images/11.jpg"
            alt="Happy Birthday"
            className="rounded-2xl shadow-lg mx-auto max-w-full h-64 object-cover" style={{filter: 'grayscale(100%)'}}
          />
        </div>
        <p className="text-lg md:text-xl font-poppins text-purple-700 leading-relaxed">
          I love you for being you<br/>
          You are perfect just the way you are, and I love you for it.<br/>
          Being you is what makes you loveable.<br/>
          I adore your uniqueness and individuality and you know this very well<br/>
          You are a treasure, and I am lucky to have you.<br/>
          I loveeeee youuuuu theee mostesttttt <br />
          ~your smarty
        </p>
         <div className="flex justify-center space-x-6 text-4xl">
              <span className="animate-bounce">🎈</span>
              <span className="animate-bounce-delayed">❤️</span>
              <span className="animate-bounce">🌟</span>
              <span className="animate-bounce-delayed">🎁</span>
              <span className="animate-bounce">💝</span>
            </div>
      </div>
     
    </div>
  );
};

export default End;
