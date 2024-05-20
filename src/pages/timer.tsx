import React from 'react';
import Layout from "@/layout";
import "react-circular-progressbar/dist/styles.css";

import PomodoroTimerContainer from '@/components/PomodoroTimerCounter';

const SomePage: React.FC = () => {
  return (

      <PomodoroTimerContainer />
  );
};

export default SomePage;
