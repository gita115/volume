import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Box sx={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      textAlign: 'center',
      background: 'linear-gradient(120deg, rgba(244,94,166,0.95) 0%, rgba(192,202,209,0.95) 60%)',
      color: '#fff',
      overflow: 'hidden',
      py: 8,
    }}>
      <Box component="div" sx={{ position: 'absolute', top: 20, left: 50, opacity: 0.8 }}>
        <svg width="80" height="80" viewBox="0 0 100 100">
          <polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35" fill="#fff" opacity="0.12" />
        </svg>
      </Box>

      <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 980 }}>
        <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: 32, md: 48 }, mb: 2 }}>
          אולפן ווליום — חוויית הקלטה יוצאת דופן
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, opacity: 0.95 }}>
          הקלטות שירים, קריינות, ג'ינגלים וממשק מקצועי — מעצב/ת הצליל שלך.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button component={Link} to="/contact" variant="contained" color="primary">הזמינו הקלטה</Button>
          <Button component={Link} to="/gallery" variant="outlined" color="secondary">האזינו לעבודות</Button>
        </Box>
      </Box>
    </Box>
  );
}