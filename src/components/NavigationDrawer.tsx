import { FC, useState } from 'react';
import { Box, Avatar, Typography, List, ListItem, ListItemText, Drawer, Menu, MenuItem, IconButton } from '@mui/material';
import Link from 'next/link';
import profileImage from '../image/profile.jpg';
import { useRouter } from 'next/router';

const DrawerComponent: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');  // Remove user info from local storage
    router.push('/login');  // Redirect to login page
  };

  return (
    <Drawer variant="permanent" open={true}>
      <Box sx={{ p: 4, display: 'flex', alignItems: 'center' }}>
        <Avatar src={profileImage.src} sx={{ width: 60, height: 60 }} onClick={handleMenu} />
        <Box sx={{ ml: 1 }}>
          <Typography variant="subtitle1" onClick={handleMenu} sx={{ cursor: 'pointer' }}>Цэцэгжаргал</Typography>
          <Typography variant="caption" onClick={handleMenu} sx={{ cursor: 'pointer' }}>Tsetsegjatgal@gmail.com</Typography>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleLogout}>Гарах</MenuItem>
        </Menu>
      </Box>
      <List>
        <Link href="/todayTask" passHref>
          <ListItem button component="a">
            <ListItemText primary="Даалгавар" />
          </ListItem>
        </Link>
        <Link href="/upcoming" passHref>
          <ListItem button component="a">
            <ListItemText primary="Өдрөөр төвлөрөх" />
          </ListItem>
        </Link>
        <Link href="/timer" passHref>
          <ListItem button component="a">
            <ListItemText primary="Цаг" />
          </ListItem>
        </Link>
        <Link href="/dashboard" passHref>
          <ListItem button component="a">
            <ListItemText primary="Хэмжээс харах" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
