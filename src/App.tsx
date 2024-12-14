import React from 'react';
import { Header } from './components/Layout/Header';
import { HolographicDisplay } from './components/UI/HolographicDisplay';
import { ChatInterface } from './components/Chat/ChatInterface';
import { TaskList } from './components/Dashboard/TaskList';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <HolographicDisplay>
              <ChatInterface />
            </HolographicDisplay>
          </div>
          <div>
            <HolographicDisplay>
              <TaskList />
            </HolographicDisplay>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;