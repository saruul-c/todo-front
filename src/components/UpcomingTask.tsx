import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Typography, Button, IconButton } from '@mui/material'; 
import AddIcon from '@mui/icons-material/Add';

interface Task {
  id: number;
  description: string;
  dueTime: string;
  isDuplicate: boolean;
}

const tasksByDay = {
  'Monday': [
    { id: 1, description: 'Task 1', dueTime: '9 AM', isDuplicate: false }, // Add isDuplicate property for duplication
    { id: 2, description: 'Task 2', dueTime: '11 AM', isDuplicate: true },
  ],
  'Tuesday': [
    { id: 3, description: 'Task 3', dueTime: '10 AM', isDuplicate: false },
    { id: 4, description: 'Task 4', dueTime: '1 PM', isDuplicate: false },
  ],
  'Wednesday':  [],
  'Thursday':  [],
  'Friday':  [],
  'Saturday': [],
  'Sunday': [],

};

const DayContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[300]}`,
  maxWidth: 185,
  marginBottom: theme.spacing(2),
}));

const DayHeader = styled(Typography)({
  fontWeight: 'medium',
  marginBottom: 2,
});

const TaskItemBox = ({ theme, isDuplicate }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  backgroundColor: isDuplicate ? theme.palette.action.selected : 'white',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[300]}`,
});

const AddTaskButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#FFA726', // Use a custom color if not in theme
  '&:hover': {
    backgroundColor: '#FB8C00', // Darker shade for hover state
  },
}));

const TaskItem = ({ task }: { task: Task }) => {
  const theme = useTheme();
  return (
    <Box
    sx={{
      ...TaskItemBox({ theme, isDuplicate: task.isDuplicate }),
    }}
  >
      <Typography variant="subtitle1">{task.description}</Typography>
      <Typography variant="caption" color="text.secondary">
        {task.dueTime}
      </Typography>
    </Box>
  );
};


// This is your component using the styled components defined above
function MyComponent() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', p: 3 }}>
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto' }}>
        {Object.entries(tasksByDay).map(([day, dayTasks]) => (
          <DayContainer key={day}>
            <DayHeader variant="h6">{day}</DayHeader>
            {dayTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
            <AddTaskButton
              startIcon={<AddIcon />}
              variant="contained"
              size="small"
            >
              Add Task
            </AddTaskButton>
          </DayContainer>
        ))}
      </Box>
    </Box>
  );
}

export default MyComponent;