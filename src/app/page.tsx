"use client";

import { useState } from "react";

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="text-center">
        <div
          className={`
            bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20
            transition-all duration-500 ease-in-out
            ${isHovered ? 'scale-105 shadow-3xl bg-white/20' : 'scale-100'}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Hello
          </h1>
          <div className="h-1 w-24 bg-white/50 mx-auto mb-6 rounded-full"></div>
          <p className="text-2xl md:text-3xl text-white/90 font-light mb-8">
            World
          </p>
          <div className="flex items-center justify-center space-x-2 text-white/70">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium tracking-wide">
              Welcome to your beautiful Hello World page
            </span>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  );
}