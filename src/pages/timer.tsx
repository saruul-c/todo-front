import React from 'react';
import Layout from "@/layout";
import PomodoroTimerContainer from '@/components/PomodoroTimerCounter';

const SomePage: React.FC = () => {
  return (
    <Layout>
      <PomodoroTimerContainer />
    </Layout>
  );
};

export default SomePage;
