import { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, Snackbar, Alert } from '@mui/material';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TimerProps, Task } from '@/types/types';
import backend, { updateTaskTime } from '@/lib/axios/api';

const PomodoroTimer: React.FC<TimerProps> = ({
  tasks,
  updateTasks,
  taskId,
  secondsRemaining: initialSecondsRemaining,
  isActive: initialIsActive,
  isFocusTime,
  onStartStop,
}) => {
  const [totalTime, setTotalTime] = useState(0);
  const [startTime, setStartTime] = useState(initialSecondsRemaining);
  const [secondsRemaining, setSecondsRemaining] = useState(initialSecondsRemaining);
  const [isActive, setIsActive] = useState(initialIsActive);
  const [error, setError] = useState('');

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
  };

  const handleStartStop = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setStartTime(secondsRemaining);
    } else {
      const timeSpent = startTime - secondsRemaining;
      setTotalTime(prevTime => prevTime + timeSpent);
      saveTimeToDatabase(taskId, timeSpent);
    }
    onStartStop();
  };

  const saveTimeToDatabase = async (taskId: number, timeSpent: number, attempt = 1) => {
    try {
      const user = localStorage.getItem('user');
      const authToken = user ? JSON.parse(user).accessToken : null;

      if (!authToken) {
        throw new Error('Баталгаажуулалт амжилтгүй боллоо.');
      }

      const response = await backend.post(`/todos/updateTime/${taskId}`,
        { timeToAdd: timeSpent },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
        }
      );

      updateTasks(tasks.map(task => task.id === taskId ? { ...task, time_spent: task.time_spent + timeSpent } : task));
    } catch (error) {
      if (attempt < 3) {
        saveTimeToDatabase(taskId, timeSpent, attempt + 1);
      } else {
        // setError('Цаг хадгалахад алдаа гарлаа. Дахин оролдоно уу.');
        console.log(error);
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsRemaining]);

  const totalDuration = isFocusTime ? 30 * 60 * 60 : 5 * 60 * 60;
  const percentage = 100 * (1 - secondsRemaining / totalDuration);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {isFocusTime ? 'Төвлөрөх цаг' : 'Break Time'}
      </Typography>
      <Box sx={{ position: 'relative', display: 'inline-flex', width: 200, height: 200 }}>
        <CircularProgressbar
          value={percentage}
          text={formatTime(secondsRemaining)}
          styles={buildStyles({
            pathColor: "orange",
            textColor: 'orange',
            trailColor: '#d6d6d0',
            backgroundColor: '#3e98c7',
          })}
        />
      </Box>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="outlined" onClick={handleStartStop} color="warning">
          {isActive ? 'Зогсох' : 'Эхлэх'}
        </Button>
      </Stack>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Төвлөрлийн цаг: {formatTime(totalTime)}
      </Typography>
      {error && (
        <Snackbar open={true} autoHideDuration={6000} onClose={() => setError('')}>
          <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
};

export default PomodoroTimer;