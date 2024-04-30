import React from 'react';
import { Box, Typography, CircularProgress, Button } from '@mui/material';
import CustomButton2 from './button';
import Stack from '@mui/material/Stack';



interface TimerProps {
  secondsRemaining: number;
  isActive: boolean;
  isFocusTime: boolean;
  onStartStop: () => void;
  onReset: () => void;
}

const PomodoroTimer: React.FC<TimerProps> = ({
  secondsRemaining,
  isActive,
  isFocusTime,
  onStartStop,
  onReset
}) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {isFocusTime ? 'Төвлөрөх' : 'Завсарлах'} - {formatTime(secondsRemaining)}
      </Typography>
      <CircularProgress color='warning' variant="determinate" value={(secondsRemaining / (isFocusTime ? 30 * 60 : 10 * 60)) * 100} />
      
      <Stack direction="row" spacing={20}>
      <Button color="warning" onClick={onStartStop}  >
        {isActive ? 'Зогсох' : 'Эхлэх'}
      </Button>
      <Button color="warning" onClick={onReset} >
        Болих
      </Button>
      </Stack>

    </Box>
  );
};

export default PomodoroTimer;
