import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

interface Project {
    name: string;
     
  }

const ProjectDisplay = ({ project }) => {
  
    const tasks = ['Task 1', 'Task 2', 'Task 3']; // Replace with actual tasks

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>{project}</Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProjectDisplay;