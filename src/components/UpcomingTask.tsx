import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import MyCalendar from './MyCalendar';
import { getAllTasks } from '@/lib/axios/api';
import { Task } from '@/types/types';


const UpcomingTask: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getAllTasks();
        setTaskList(tasks);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
  }, []);


  return (
    <Box>
      <MyCalendar tasks={taskList} />
    </Box>
  );
};

export default UpcomingTask;
