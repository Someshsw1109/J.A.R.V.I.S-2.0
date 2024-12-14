import React from 'react';
import { CheckCircle, Circle, Clock, AlertTriangle } from 'lucide-react';

const tasks = [
  { id: 1, title: "System Diagnostics", status: "completed", priority: "high" },
  { id: 2, title: "Security Protocols Update", status: "in-progress", priority: "high" },
  { id: 3, title: "Environmental Controls", status: "pending", priority: "medium" },
  { id: 4, title: "Network Analysis", status: "in-progress", priority: "high" },
  { id: 5, title: "Data Backup", status: "completed", priority: "medium" },
];

export const TaskList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-cyan-500">System Tasks</h3>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-cyan-500/70" />
          <span className="text-sm text-cyan-500/70">Real-time Updates</span>
        </div>
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

const TaskItem = ({ task }: { task: any }) => {
  const getStatusIcon = () => {
    switch (task.status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-cyan-500" />;
      case 'in-progress':
        return <Circle className="w-5 h-5 text-yellow-500" />;
      case 'pending':
        return <AlertTriangle className="w-5 h-5 text-cyan-500/50" />;
      default:
        return <Circle className="w-5 h-5 text-cyan-500/50" />;
    }
  };

  return (
    <div className="flex items-center gap-3 p-3 hover:bg-cyan-500/5 rounded-lg transition-colors border border-cyan-500/20">
      {getStatusIcon()}
      <div className="flex-1">
        <span className="text-cyan-500">{task.title}</span>
        <div className="flex items-center gap-2 mt-1">
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            task.priority === 'high' 
              ? 'bg-red-500/20 text-red-400'
              : 'bg-yellow-500/20 text-yellow-400'
          }`}>
            {task.priority}
          </span>
          <span className="text-xs text-cyan-500/50">{task.status}</span>
        </div>
      </div>
    </div>
  );
};