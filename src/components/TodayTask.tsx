import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography, List, ListItem, ListItemText, TextField, Button, IconButton } from '@mui/material';
import { getAllTasks } from '@/lib/axios/api';

interface Task {
  id: number;
  task_name: string;
  time_spent: number;
}

const TodayTasks: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedTime, setEditedTime] = useState<number | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getAllTasks();
        setTaskList(tasks);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
        setTaskList([]); // Ensure taskList is always an array
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now(),
      task_name: newTaskName,
      time_spent: 0,
    };
    setTaskList((prevTasks) => [...prevTasks, newTask]);
    setNewTaskName('');
    toast.success('Даалгавар амжилттай нэмэгдлээ!');
  };

  const handleDeleteTask = (taskId: number) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    toast.success('Даалгавар амжилттай устлаа!');
  };

  const handleUpdateTask = (taskId: number) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, task_name: editedName, time_spent: editedTime ?? task.time_spent } : task
    );
    setTaskList(updatedTasks);
    setEditTaskId(null);
    toast.success('Даалгавар амжилттай шинэчлэгдлээ!');
  };

  const handleEditTask = (taskId: number, taskName: string, timeSpent: number) => {
    setEditTaskId(taskId);
    setEditedName(taskName);
    setEditedTime(timeSpent);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', p: 3 }}>
      <Typography variant="h4">Даалгавар нэмэх</Typography>
      <TextField
        label="Даалгаврын нэр"
        variant="outlined"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        size="small"
        sx={{ mb: 2 }}
      />
      <Button onClick={handleAddTask} color="warning">
        Нэмэх
      </Button>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {taskList && taskList.length > 0 ? (
          taskList.map((task) => (
            <ListItem key={task.id} divider sx={{ cursor: 'pointer' }}>
              {editTaskId === task.id ? (
                <>
                  <TextField
                    label="Даалгаврын нэр"
                    variant="outlined"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    size="small"
                    sx={{ mb: 2, width: '60%' }}
                  />
                  <TextField
                    label="Зарцуулсан цаг"
                    variant="outlined"
                    value={editedTime ?? ''}
                    onChange={(e) => setEditedTime(parseInt(e.target.value))}
                    size="small"
                    sx={{ mb: 2, width: '30%' }}
                  />
                  <Button onClick={() => handleUpdateTask(task.id)} color="warning">
                    Хадгалах
                  </Button>
                </>
              ) : (
                <>
                  <ListItemText primary={task.task_name} secondary={`Цаг: ${task.time_spent}`} />
                  <IconButton edge="end" onClick={() => handleEditTask(task.id, task.task_name, task.time_spent)}>
                    Засах
                  </IconButton>
                  <IconButton edge="end" onClick={() => handleDeleteTask(task.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              )}
            </ListItem>
          ))
        ) : (
          <Typography>No tasks found</Typography>
        )}
      </List>
    </Box>
  );
};

export default TodayTasks;
