import { Container, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';

const demoWorks = [
  { title: 'Bar Mitzvah Song', image: '/assets/demo1.jpg', description: 'A special recording for a Bar Mitzvah.' },
  { title: 'Business Jingle', image: '/assets/demo2.jpg', description: 'Catchy jingle for a business.' },
  { title: 'Narration', image: '/assets/demo3.jpg', description: 'Professional narration for a podcast.' },
];

export default function Gallery() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom color="secondary">
        Gallery
      </Typography>
      <Grid container spacing={2}>
        {demoWorks.map((work, idx) => (
            <Card>
              <CardMedia component="img" image={work.image} alt={work.title} height="140" />
              <CardContent>
                <Typography variant="h6">{work.title}</Typography>
                <Typography variant="body2">{work.description}</Typography>
              </CardContent>
            </Card>
        ))}
      </Grid>
    </Container>
  );
}