import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';



interface Task {
  id: number;
  name: string;
  dueDate: string;
}

const TodayTasks: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <Box component="main" sx={{ display: 'flex', flexDirection: 'column', width: '100%', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>Өнөөдөр</Typography>
      <List dense sx={{ width: '100%' }}>
        {tasks.map((task) => (
          <ListItem key={task.id} divider>
            <ListItemText primary={task.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodayTasks;
