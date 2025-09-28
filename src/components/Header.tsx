import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

export default function Header() {
  return (
    <AppBar position="static" color="inherit" elevation={2}>
      <Toolbar>
        <IconButton edge="start" color="secondary" aria-label="logo" sx={{ mr: 2 }}>
          <MusicNoteIcon fontSize="large" />
        </IconButton>
        <Typography variant="h5" component="div" color="secondary" sx={{ flexGrow: 1 }}>
          Volume Studio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}