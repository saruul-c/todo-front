import React, { useState, useEffect } from 'react';
import PomodoroTimer from "@/components/Timer";
import { Task } from '@/types/types';
import { getAllTasks } from '@/lib/axios/api';
import { Typography } from '@mui/material';

const PomodoroTimerContainer: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const focusDuration = 25 * 60;  // 25 minutes for focus

  const [secondsRemaining, setSecondsRemaining] = useState(focusDuration);
  const [isActive, setIsActive] = useState(false);
  const [isFocusTime] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getAllTasks();
        setTasks(fetchedTasks);
        if (fetchedTasks.length > 0) {
          setSelectedTaskId(fetchedTasks[0].id);  // Automatically select the first task
        }
      } catch (error) {
        console.error('Даалгавруудыг дуудаж чадсангүй:', error);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (!isActive && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsRemaining]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTaskId(parseInt(event.target.value, 10));
  };

  if (!tasks) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div>
      {tasks.length > 0 && (
        <select onChange={handleTaskChange} value={selectedTaskId || ''}>
          {tasks.map(task => (
            <option key={task.id} value={task.id}>
              {task.task_name}
            </option>
          ))}
        </select>
      )}
      {selectedTaskId && (
        <PomodoroTimer
          secondsRemaining={secondsRemaining}
          isActive={isActive}
          isFocusTime={isFocusTime}
          onStartStop={handleStartStop}
          taskId={selectedTaskId}
          tasks={tasks}
          updateTasks={setTasks}
        />
      )}
    </div>
  );
};

export default PomodoroTimerContainer;
