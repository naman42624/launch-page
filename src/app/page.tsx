'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import './countdown.css';

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Set loaded state after a small delay to allow for initial animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  // Countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isAnimating && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (isAnimating && countdown === 0) {
      // Redirect when countdown reaches zero
      window.location.href = 'https://www.holidaysbybells.com';
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isAnimating, countdown]);

  const handleDeploy = () => {
    setIsAnimating(true);
    setCountdown(10);
  };

  return (
    <>
      {/* Full Screen Countdown Overlay */}
      {isAnimating && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/95 via-black/90 to-amber-900/95 backdrop-blur-md z-50 flex items-center justify-center flex-col transition-all duration-500">
          {/* Background Airplane Silhouettes */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-[10%] left-0 w-20 h-20 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/file.svg')" }}></div>
            <div className="absolute top-[30%] right-0 w-16 h-16 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/file.svg')" }}></div>
            <div className="absolute bottom-[20%] left-[20%] w-12 h-12 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/file.svg')" }}></div>
            <div className="absolute top-[60%] right-[30%] w-14 h-14 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('/file.svg')" }}></div>
          </div>
          
          {/* Logo */}
          <div className="absolute top-10 w-48">
            <Image src="/logo.png" alt="Holidays By Bells Logo" width={200} height={50} priority className="opacity-70" />
          </div>
          
          {/* Countdown Number */}
          <div className="relative">
            <div key={countdown} className="text-[15rem] md:text-[20rem] font-bold text-yellow-400 transition-all duration-300 count-animation">
              {countdown}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-[20rem] md:w-[25rem] h-[20rem] md:h-[25rem]" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="rgba(250, 204, 21, 0.15)" 
                  strokeWidth="5"
                />
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="rgba(250, 204, 21, 0.7)" 
                  strokeWidth="5"
                  strokeDasharray="282.7"
                  strokeDashoffset={282.7 * countdown / 10}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                  className="transition-all duration-1000 ease-linear"
                />
              </svg>
            </div>
          </div>
          
          {/* Status Text */}
          <p className="text-2xl md:text-3xl text-white/80 mt-8 animate-pulse">
            {countdown > 5 ? "Preparing for takeoff..." : "Launching soon..."}
          </p>
          
          {/* Progress Bar */}
          <div className="w-72 md:w-96 h-2 bg-white/30 rounded-full mt-8 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-amber-500 h-full transition-all duration-1000 ease-linear" 
              style={{ width: `${(10 - countdown) * 10}%` }}
            ></div>
          </div>
          
          {/* Tagline */}
          <p className="text-yellow-100/70 mt-12 text-lg">Unlock the World with Bells</p>
        </div>
      )}
      
      <div className={`min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 relative overflow-hidden transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated Background Clouds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
        <div className="cloud cloud-5"></div>
        <div className="cloud cloud-6"></div>
      </div>
      
      {/* Background Airplanes */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        <div className="bg-airplane bg-airplane-1"></div>
        <div className="bg-airplane bg-airplane-2"></div>
        <div className="bg-airplane bg-airplane-3"></div>
      </div>
      
      {/* World Map Background */}
      <div className="absolute opacity-30 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[350px] bg-contain bg-center bg-no-repeat">
          <Image src="/world-map.svg" alt="World Map" width={700} height={350} className="opacity-70" />
        </div>
      </div>

      {/* Animated Airplane */}
      <div className={`airplane ${isAnimating ? 'airplane-fly' : ''}`}>
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <Image src="/file.svg" alt="Airplane" width={80} height={80} className="transform -rotate-12 filter drop-shadow-lg" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 max-w-lg w-full transform transition-all duration-700 hover:shadow-blue-400/30 hover:shadow-xl">
          {/* Logo Element */}
          <div className="mb-8 flex justify-center">
            <div className="relative px-6 py-4 rounded-xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg">
              <div className="w-auto h-auto flex items-center justify-center">
                <Image src="/logo.png" alt="Holidays By Bells Logo" width={280} height={70} priority className="drop-shadow-lg" />
              </div>
              <div className="absolute inset-0 w-full h-full rounded-xl animate-pulse opacity-20 bg-yellow-300/10"></div>
            </div>
          </div>
          
          {/* Welcome Text */}
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
            Welcome To Our Official Website Launch
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent my-6 mx-auto"></div>
          <p className="text-blue-50 text-xl md:text-2xl mb-8 animate-fade-in-delay opacity-90 font-light">
            <span className="font-semibold text-yellow-100">Unlock the World with Bells</span>
          </p>
          
          {/* Travel Icons */}
          <div className="flex justify-center space-x-6 mb-8 animate-bounce-icons">
            <span className="text-3xl animate-spin-slow">🌍</span>
            <span className="text-3xl animate-pulse">🏖️</span>
            <span className="text-3xl animate-bounce">🎒</span>
            <span className="text-3xl animate-pulse">🏔️</span>
            <span className="text-3xl animate-spin-slow">✈️</span>
          </div>

          {/* Deploy Button */}
          <button
            onClick={handleDeploy}
            disabled={isAnimating}
            className={`
              w-full py-5 px-10 text-xl font-bold rounded-full transition-all duration-300 transform
              ${isAnimating 
                ? 'bg-green-500 text-white scale-95 cursor-not-allowed' 
                : 'bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white hover:scale-105 hover:shadow-lg active:scale-95'
              }
              shadow-xl border-2 border-yellow-200/30 relative overflow-hidden group
            `}
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 to-amber-400 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            {/* Button Content */}
            <div className="relative z-10 flex items-center justify-center">
              {isAnimating ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Preparing for takeoff...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <span className="mr-2">Deploy</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              )}
            </div>
          </button>

          {/* Animation Status */}
          {isAnimating && (
            <div className="mt-6 text-center">
              <p className="text-yellow-100 text-lg font-medium animate-pulse">
                🚀 Launching your adventure portal...
              </p>
            </div>
          )}
          
          {/* Footer Text */}
          <p className="text-blue-100/80 text-sm mt-8">
            Unlock the World with Bells - Your gateway to incredible travel experiences
          </p>
        </div>
        
        {/* Attribution */}
        <div className="absolute bottom-4 text-blue-100/60 text-xs">
          © {new Date().getFullYear()} Holidays By Bells. All rights reserved.
        </div>
      </div>
    </div>
    </>
  );
}
