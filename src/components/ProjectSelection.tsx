import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const tasks = ['Даалгавар', 'Даалгавар', 'Даалгавар', 'Даалгавар'];

const ProjectSelection = () => {
  return (
    <Paper sx={{ maxWidth: 600, margin: 'auto', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Visual даалгавар
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
      <Typography color="text.secondary" sx={{ mt: 4 }}>
        
      </Typography>
    </Paper>
  );
};

export default ProjectSelection;
