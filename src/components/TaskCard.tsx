import React from 'react';
import { useDrag } from 'react-dnd';
import { Box, Typography } from '@mui/material';
import { Task } from '@/types/types';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      sx={{
        padding: 2,
        margin: 1,
        backgroundColor: isDragging ? '#f0f0f0' : '#ffffff',
        border: '1px solid #ddd',
        cursor: 'move',
      }}
    >
      <Typography variant="body1">{task.task_name}</Typography>
      <Typography variant="caption">Зарцуулсан цаг: {task.time_spent} minutes</Typography>
    </Box>
  );
};

export default TaskCard;
