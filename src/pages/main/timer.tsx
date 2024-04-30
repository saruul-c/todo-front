import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TimerProps {
  duration: number; // in seconds
}

const Timer: React.FC<TimerProps> = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const nextTime = prevTime > 0 ? prevTime - 1 : 0;
        return nextTime;
      });
    }, 1000);
  
    // Clear the interval on component unmount
    return () => {
      clearInterval(timer);
    };
  }, [duration]);
  

  const normaliseTimeLeft = (value: number) => (value * 100) / duration; // Normalize the time for the CircularProgress
  const progress = normaliseTimeLeft(timeLeft) > 100 ? 100 : normaliseTimeLeft(timeLeft); // Ensure progress doesn't exceed 100%

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={progress}
        size={150} // Increase CircularProgress size here
        thickness={4} // Adjust thickness if needed
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h5" component="div" color="textSecondary">
          {`${Math.floor(timeLeft / 60)}:${`0${timeLeft % 60}`.slice(-2)}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Timer;
