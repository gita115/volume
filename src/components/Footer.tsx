import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#bfc2c7', py: 2, mt: 6, textAlign: 'center', color: '#fff' }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} אולפן ווליום. כל הזכויות שמורות.
      </Typography>
      <Typography variant="caption">
        פיתוח ועיצוב: ג. שקד
      </Typography>
    </Box>
  );
}