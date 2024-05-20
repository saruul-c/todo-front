import React from 'react';
import { useDrop } from 'react-dnd';
import { Box, Typography } from '@mui/material';
import { Task } from '@/types/types';
import TaskCard from './TaskCard';

interface DayColumnProps {
  day: string;
  tasks: Task[];
  onDrop: (task: Task, day: string) => void;
}

const DayColumn: React.FC<DayColumnProps> = ({ day, tasks, onDrop }) => {
  const [, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item: { task: Task }) => {
      onDrop(item.task, day);
    },
  }));

  return (
    <Box
      ref={drop}
      sx={{
        flex: 1,
        padding: 2,
        margin: 1,
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        minHeight: '200px',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>{day}</Typography>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Box>
  );
};

export default DayColumn;
