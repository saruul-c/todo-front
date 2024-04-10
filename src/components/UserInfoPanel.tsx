import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const UserInfoPanel = ({ user, categories, onSelectCategory }) => {
  return (
    <Paper elevation={2} sx={{ p: 2, width: '100%', maxWidth: 360 }}>
      <Typography variant="h6">{user.name}</Typography>
      <Typography variant="subtitle1">{user.email}</Typography>
      <List component="nav">
        {categories.map((category, index) => (
          <ListItem button key={index} onClick={() => onSelectCategory(category)}>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default UserInfoPanel;
