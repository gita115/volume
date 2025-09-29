import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box sx={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #ed6ea0 0%, #bfc2c7 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* כוכבים דינמיים ברקע */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <svg width="60" height="60" style={{ position: 'absolute', top: '10%', left: '5%' }}>
          <polygon points="30,0 36,18 60,18 42,30 48,60 30,45 12,60 18,30 0,18 24,18" fill="#fff" opacity="0.7"/>
        </svg>
        <svg width="40" height="40" style={{ position: 'absolute', bottom: '10%', right: '10%' }}>
          <polygon points="20,0 25,15 40,15 28,24 32,40 20,30 8,40 12,24 0,15 15,15" fill="#ed6ea0" opacity="0.5"/>
        </svg>
        <svg width="30" height="30" style={{ position: 'absolute', top: '40%', right: '20%' }}>
          <polygon points="15,0 18,9 30,9 21,15 24,30 15,22 6,30 9,15 0,9 12,9" fill="#bfc2c7" opacity="0.7"/>
        </svg>
      </Box>
      <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff' }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: '2px', textShadow: '2px 2px 6px #bfc2c7' }}>
          ברוכים הבאים לאולפן ווליום!
        </Typography>
        <Typography variant="h5" gutterBottom>
          חוויית הקלטה חדשנית ומרגשת לשירים, קריינות וג'ינגלים.
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/contact" sx={{ mt: 3 }}>
          צרו קשר עכשיו
        </Button>
      </Box>
    </Box>
  );
}