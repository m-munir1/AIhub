import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import { Home, Work, AttachMoney, Logout, Menu, ChevronLeft } from '@mui/icons-material';

export default function Dashboard() {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState('Home');

  const handleLogout = () => {
    router.push('/'); // Redirect to login page on logout
  };

  const renderContent = () => {
    switch (selectedContent) {
      case 'Home':
        return <Typography variant="h4">Welcome to Home</Typography>;
      case 'Projects':
        return <Typography variant="h4">Projects Section</Typography>;
      case 'Pricing':
        return <Typography variant="h4">Pricing Section</Typography>;
      default:
        return <Typography variant="h4">Dashboard Content Here</Typography>;
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? 240 : 60,
          flexShrink: 0,
          '& .MuiDrawer-paper': { 
            width: open ? 240 : 60, 
            transition: 'width 0.3s ease',
            boxSizing: 'border-box',
            overflowX: 'hidden',
          },
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: open ? 'space-between' : 'center' }}>
          {open && <Typography variant="h6">Dashboard</Typography>}
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ChevronLeft /> : <Menu />}
          </IconButton>
        </Toolbar>
        <List>
          <ListItem button onClick={() => setSelectedContent('Home')}>
            <ListItemIcon><Home sx={{ color: '#B51B8D' }} /></ListItemIcon>
            {open && <ListItemText primary="Home" />}
          </ListItem>
          <ListItem button onClick={() => setSelectedContent('Projects')}>
            <ListItemIcon><Work sx={{ color: '#B51B8D' }} /></ListItemIcon>
            {open && <ListItemText primary="Projects" />}
          </ListItem>
          <ListItem button onClick={() => setSelectedContent('Pricing')}>
            <ListItemIcon><AttachMoney sx={{ color: '#B51B8D' }} /></ListItemIcon>
            {open && <ListItemText primary="Pricing" />}
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon><Logout sx={{ color: '#B51B8D' }} /></ListItemIcon>
            {open && <ListItemText primary="Logout" />}
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {renderContent()}
      </Box>
    </Box>
  );
}
