import { AppBar, Toolbar, Typography, IconButton, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const navLinks = [
  { label: 'בית', to: '/' },
  { label: 'גלריה', to: '/gallery' },
  { label: 'שירותים', to: '/services' },
  { label: 'מחירים', to: '/pricing' },
  { label: 'יצירת קשר', to: '/contact' },
  { label: 'עלינו', to: '/about' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="static" color="inherit" elevation={2}>
      <Toolbar sx={{ flexDirection: 'row-reverse' }}>
        <IconButton edge="end" color="secondary" aria-label="logo" sx={{ ml: 2 }}>
          <MusicNoteIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5" color="secondary" sx={{ flexGrow: 1 }}>
          אולפן ווליום
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navLinks.map((link) => (
            <Button key={link.to} component={Link} to={link.to} color="primary">{link.label}</Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="primary" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <List sx={{ minWidth: 180 }}>
            {navLinks.map((link) => (
              <ListItem key={link.to} disablePadding>
                <ListItemButton component={Link} to={link.to} onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}