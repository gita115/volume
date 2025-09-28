import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom color="secondary">
        About Volume Studio
      </Typography>
      <Typography variant="body1">
        Volume Studio is a top-tier recording studio specializing in songs, jingles, narration, and audio productions.
        With years of experience and professional equipment, we guarantee the best results for every project.
      </Typography>
    </Container>
  );
}