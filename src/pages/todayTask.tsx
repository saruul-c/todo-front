import TodayTasks from '@/components/TodayTask'; 
import { createTask } from '@/lib/axios'; 
import React, { useState, useEffect } from 'react';
import { Task } from '@/types/types';


const TodayTaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3100/api/todos/getAllTasks');
        const tasksData = await response.json();
        setTasks(tasksData);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId: number) => {
    console.log("Task clicked:", taskId);
  };

  const handleAddTask = async (newTask: Task) => {
    try {
      const createdTask = await createTask(newTask);
      setTasks(prevTasks => [...prevTasks, createdTask]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div>
      <TodayTasks tasks={tasks} onTaskClick={handleTaskClick} />
    </div>
  );
};

export default TodayTaskPage;
