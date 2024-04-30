import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CustomButton from './button';

interface Task {
  id: number;
  name: string;
  dueDate: string;
}

interface TodayTasksProps {
  tasks: Task[];
  onTaskClick: (taskId: number) => void; // Pass the task ID to the click handler
}

const TodayTasks: React.FC<TodayTasksProps> = ({ tasks, onTaskClick }) => {
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    const newId = taskList.length + 1; // Ensure this is a unique ID
    const newTask = { id: newId, name: newTaskName, dueDate: new Date().toISOString().split('T')[0] };
    setTaskList([...taskList, newTask]);
    setNewTaskName('');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>Visual даалгавар</Typography>
      
      {/* Task Input Form */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          label="Нэмэх..."
          variant="outlined"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          size="small"
          sx={{ flexGrow: 1, mr: 1 }}
        />
        <CustomButton color="primary" onClick={handleAddTask}>
          <AddIcon />
        </CustomButton>
      </Box>

      {/* List of Tasks */}
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {taskList.map((task) => (
          <ListItem 
            key={task.id}
            divider
            onClick={() => onTaskClick(task.id)} // Pass the task ID to the click handler
            sx={{ cursor: 'pointer' }}
          >
            <ListItemText primary={task.name} secondary={`Due: ${task.dueDate}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodayTasks;
