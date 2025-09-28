import { Container, Typography, TextField, Button, Box } from '@mui/material';

export default function Contact() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom color="secondary">
        Contact Us
      </Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField label="Name" fullWidth sx={{ mb: 2 }} />
        <TextField label="Phone" fullWidth sx={{ mb: 2 }} />
        <TextField label="Email" fullWidth sx={{ mb: 2 }} />
        <TextField label="Message" fullWidth multiline rows={4} sx={{ mb: 2 }} />
        <Button variant="contained" color="primary">Send</Button>
      </Box>
      <Typography variant="body2" sx={{ mt: 4 }}>
        Email: studio@volume.com<br />
        Phone: 052-1234567<br />
        <a href="https://waze.com/ul?ll=32.0853,34.7818&navigate=yes" target="_blank" rel="noopener noreferrer">Navigate with Waze</a>
      </Typography>
    </Container>
  );
}