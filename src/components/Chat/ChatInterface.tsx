import React, { useState } from 'react';
import { Send, Mic, Circle } from 'lucide-react';

export const ChatInterface = () => {
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-cyan-500">AI Interface</h2>
        <div className="flex items-center gap-2">
          <Circle className="w-2 h-2 fill-cyan-500 animate-pulse" />
          <span className="text-sm text-cyan-500/70">Active Connection</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-4">
        <Message
          type="assistant"
          content="Greetings! I am JARVIS, your advanced AI assistant. I'm here to help you with any task or inquiry you may have. How may I assist you today?"
        />
      </div>

      <div className="mt-4 border-t border-cyan-500/30 pt-4">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-black/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-cyan-500 focus:outline-none focus:border-cyan-500 placeholder-cyan-500/50"
            placeholder="Type your message..."
          />
          <button className="p-3 rounded-lg bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 transition-colors">
            <Mic className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-lg bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20 transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Message = ({ type, content }: { type: 'user' | 'assistant'; content: string }) => (
  <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div className={`
      max-w-[80%] rounded-lg p-4
      ${type === 'user' 
        ? 'bg-cyan-500/20 text-cyan-500' 
        : 'bg-cyan-500/10 text-cyan-500/90'
      }
    `}>
      <p>{content}</p>
    </div>
  </div>
);