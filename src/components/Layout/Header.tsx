import React from 'react';
import { CircuitBoard, Cpu, Shield, Wifi } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-black/95 text-cyan-500 p-4 border-b border-cyan-500/30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CircuitBoard className="w-8 h-8 glow-effect" />
            <div>
              <h1 className="text-2xl font-bold tracking-wider">J.A.R.V.I.S</h1>
              <p className="text-xs text-cyan-500/70">Just A Rather Very Intelligent System</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <StatusIndicator icon={Shield} label="Security" />
            <StatusIndicator icon={Cpu} label="System" />
            <StatusIndicator icon={Wifi} label="Network" />
          </div>
        </div>
      </div>
    </header>
  );
};

const StatusIndicator = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-2">
    <Icon className="w-5 h-5 text-cyan-500/70" />
    <div className="flex flex-col">
      <span className="text-xs text-cyan-500/70">{label}</span>
      <div className="flex items-center gap-1">
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
        <span className="text-xs">Online</span>
      </div>
    </div>
  </div>
);