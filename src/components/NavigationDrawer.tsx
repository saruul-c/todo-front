import { Box, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

const DrawerComponent: FC = () => {
  return (
    <Drawer variant="permanent" open={true}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
        <Avatar />
        <Box sx={{ ml: 1 }}>
          <Typography variant="subtitle1">Саруулмаа</Typography>
          <Typography variant="caption">Saruulmaa1234@gmail.com</Typography>
        </Box>
      </Box>
      <List>
        <Link href="/todayTask" passHref>
          <ListItem button>
            <ListItemText primary="Өнөөдөр" />
          </ListItem>
        </Link>
        <Link href="/upcoming" passHref>
          <ListItem button>
            <ListItemText primary="Удахгүй болох" />
          </ListItem>
        </Link>

      </List>
    </Drawer>
  );
};

export default DrawerComponent;
