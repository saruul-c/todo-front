import TodayTasks from '@/components/TodayTask'; 
import { createTask } from '@/lib/axios/api'; 
import React, { useState, useEffect } from 'react';
import { Task } from '@/types/types';
import TaskList from '@/components/tasklist';


const TodayTaskPage: React.FC = () => {

  return (
    <div>
      <TodayTasks/>
      <TaskList/>
    </div>
  );
};

export default TodayTaskPage;
