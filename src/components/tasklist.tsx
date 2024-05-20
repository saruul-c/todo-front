import React, { useState, useEffect } from 'react';
import { getAllTasks } from '@/lib/axios/api';

// Define an interface for the task object
interface Task {
  id: number;
  task_name: string;
  completion_status: number;
  time_spent: number;
  created_at: string;
}

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]); // Initialize tasks as an empty array
  
    useEffect(() => {
      fetchTasks();
    }, []);
  
    const fetchTasks = async () => {
      try {
        const response = await getAllTasks();
        setTasks(response);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };
  
    return (
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks && tasks.map(task => (
            <li key={task.id}>
              <strong>Task Name:</strong> {task.task_name}, 
              <strong> Completion Status:</strong> {task.completion_status === 0 ? 'Incomplete' : 'Complete'}, 
              <strong> Time Spent:</strong> {task.time_spent}, 
              <strong> Created At:</strong> {task.created_at}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default TaskList;
