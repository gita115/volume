import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#f8e1e8', py: 2, mt: 6, textAlign: 'center' }}>
      <Typography variant="body2" color="secondary">
        &copy; {new Date().getFullYear()} Volume Studio. All rights reserved.
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Designed with ❤️
      </Typography>
    </Box>
  );
}