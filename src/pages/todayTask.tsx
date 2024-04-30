import React, { useState, useEffect } from 'react';
import TodayTasks from '@/components/TodayTask';

const TodayTaskPage: React.FC = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Simulated API call
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId: number) => {
    console.log("Task clicked:", taskId);
  };

  return (
    <div>
      <TodayTasks tasks={tasks} onTaskClick={handleTaskClick} />
    </div>
  );
};

export default TodayTaskPage;
