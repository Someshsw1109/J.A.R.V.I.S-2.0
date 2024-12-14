import React from 'react';

export const HolographicDisplay = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative hologram-container ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
      <div className="relative bg-black/90 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
        {children}
      </div>
    </div>
  );
};