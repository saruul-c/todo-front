import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Avatar, Box } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Category } from '@/pages/index';

interface NavigationDrawerProps {
  onSelectCategory: (category: Category) => void; 
}

const drawerWidth = 240;

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ onSelectCategory }) => {
  const categories: Category[] = ['Өнөөдөр', 'Удахгүй болох'];

  const handleCategoryClick = (category: Category) => {
    onSelectCategory(category);
  };  

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
      anchor="left"
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
        <Avatar />
        <Box sx={{ ml: 1 }}>
          <Typography variant="subtitle1">Саруулмаа</Typography>
          <Typography variant="caption">Saruulmaa1234@gmail.com</Typography>
        </Box>
      </Box>
      <Divider />
      <List>
        {categories.map((text) => (
          <ListItem  button key={text} onClick={() => handleCategoryClick(text)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavigationDrawer;
