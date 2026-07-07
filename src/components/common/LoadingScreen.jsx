import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulates a smooth, realistic loading progression from 0 to 100
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Randomly increment the progress to make it feel like real loading
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 250); // Updates every 250ms

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#050505] text-white">
      
      {/* Logo Image Container - Clean, no borders */}
      <div className="w-24 h-24 mb-8 flex items-center justify-center overflow-hidden shrink-0">
        <img 
          src="/image/logo.png" 
          alt="Brand Logo" 
          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
        />
      </div>
      
      {/* Loading Bar Track */}
      <div className="w-64 h-1 bg-zinc-800 rounded-[5px] overflow-hidden relative">
        {/* Animated Fill - Grows smoothly from left to right */}
        <div 
          className="absolute top-0 left-0 h-full bg-yellow-500 transition-all duration-300 ease-out rounded-[5px]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Loading Text and Percentage */}
      <div className="mt-4 flex items-center justify-between w-64">
        <p className="text-xs text-zinc-500 uppercase tracking-widest">Loading System</p>
        <span className="text-xs text-yellow-500 font-mono">{Math.round(progress)}%</span>
      </div>
      
    </div>
  );
}