import { Container, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom color="secondary">
        Welcome to Volume Studio!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Professional recording studio for songs, jingles, narrations and more.
      </Typography>
      <Button variant="contained" color="primary" href="/contact">
        Contact Us
      </Button>
    </Container>
  );
}