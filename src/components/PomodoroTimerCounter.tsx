import React, { useState, useEffect } from 'react';
import PomodoroTimer from "@/components/Timer";

const PomodoroTimerContainer: React.FC = () => {
  const focusDuration = 30 * 60;  // 30 minutes
  const restDuration = 10 * 60;   // 10 minutes
  const [secondsRemaining, setSecondsRemaining] = useState(focusDuration);
  const [isActive, setIsActive] = useState(false);
  const [isFocusTime, setIsFocusTime] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isActive && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (secondsRemaining === 0) {
      setIsFocusTime(!isFocusTime);
      setSecondsRemaining(isFocusTime ? restDuration : focusDuration);
      console.log("Session completed!");
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsRemaining, isFocusTime]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setSecondsRemaining(isFocusTime ? focusDuration : restDuration);
  };

  return (
    <div>
      <PomodoroTimer
        secondsRemaining={secondsRemaining}
        isActive={isActive}
        isFocusTime={isFocusTime}
        onStartStop={handleStartStop}
        onReset={handleReset}
      />
    </div>
  );
};

export default PomodoroTimerContainer;
