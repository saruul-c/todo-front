import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Typography, Button, Dialog, DialogContent, TextField, DialogTitle, DialogActions, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close'; 
import CustomButton from './button';
import { useNavigate } from 'react-router-dom'; 

interface Task {
  id: number;
  description: string;
  dueTime: string;
  isDuplicate: boolean;
}


// Define static tasks data
const staticTasksByDay = {
  'Даваа': [
    { id: 1, description: 'Task 1', dueTime: '9:00 AM', isDuplicate: false },
    { id: 2, description: 'Task 2', dueTime: '10:30 AM', isDuplicate: false },
    { id: 3, description: 'Task 3', dueTime: '2:00 PM', isDuplicate: false },
  ],
  'Мягмар':  [
    { id: 4, description: 'Task 4', dueTime: '11:00 AM', isDuplicate: false },
    { id: 5, description: 'Task 5', dueTime: '3:30 PM', isDuplicate: false },
  ],
  'Лхагва':  [],
  'Пүрэв':  [],
  'Баасан':  [],
  'Санчир': [],
  'Буд': [],
};

const DayContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[400]}`,
  minWidth: 240,
  marginBottom: theme.spacing(3),
}));

const DayHeader = styled(Typography)({
  fontWeight: 'medium',
  marginBottom: 2,
});

const TaskItemBox = styled(Box)<{ isDuplicate: boolean }>(({ theme, isDuplicate }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(1),
  marginTop: theme.spacing(1),
  backgroundColor: isDuplicate ? theme.palette.action.selected : 'white',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[300]}`,
}));

const TaskItem = ({ task }: { task: Task }) => {
  const navigate = useNavigate();
  const handleDoubleClick = () => {
    // Redirect to "/timer" route on double-click
    navigate('/timer');
  };

  return (
    <TaskItemBox isDuplicate={task.isDuplicate} onDoubleClick={handleDoubleClick}>
      <Typography variant="subtitle1">{task.description}</Typography>
      <Typography variant="caption" color="text.secondary">{task.dueTime}</Typography>
    </TaskItemBox>
  );
};

const AddTaskButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#000000',
  '&:hover': {
    backgroundColor: '#FB8C00',
  },
}));

const UpcomingTask = () => {
  // Use static tasks data
  const [tasks] = useState(staticTasksByDay);
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({ description: '', dueTime: '', isDuplicate: false });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddTask = () => {
    // Example of adding a task to Monday, adjust logic as needed
    const newId = Math.max(0, ...Object.values(tasks).flat().map(t => t.id)) + 1;
    const updatedTasks = {
      ...tasks,
      'Даваа': [...tasks['Даваа'], { ...newTask, id: newId }],
    };
    setTasks(updatedTasks);
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', p: 3 }}>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto' }}>
        {Object.entries(tasks).map(([day, dayTasks]) => (
          <DayContainer key={day}>
            <DayHeader variant="h6">{day}</DayHeader>
            {dayTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
           <CustomButton startIcon={<AddIcon />} onClick={handleOpen} variant="contained">
             
            </CustomButton>
          </DayContainer>
        ))}
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Нэр"
            fullWidth
            value={newTask.description}
            onChange={e => setNewTask({ ...newTask, description: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Хугацаа"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newTask.dueTime}
            onChange={e => setNewTask({ ...newTask, dueTime: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddTask} color="primary">Add</Button>
          <IconButton onClick={handleClose} color="secondary">
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UpcomingTask;
function setTasks(updatedTasks: { Даваа: { id: number; description: string; dueTime: string; isDuplicate: boolean; }[]; Мягмар: { id: number; description: string; dueTime: string; isDuplicate: boolean; }[]; Лхагва: { id: number; description: string; dueTime: string; isDuplicate: boolean; }[]; Пүрэв: { id: number; description: string; dueTime: string; isDuplicate: boolean; }[]; Баасан: { id: number; description: string; dueTime: string; isDuplicate: boolean; }[]; Санчир: { id: number; description: string; dueTime: string; isDuplicate: boolean; }[]; Буд: { id: number; description: string; dueTime: string; isDuplicate: boolean; }[]; }) {
  throw new Error('Function not implemented.');
}

