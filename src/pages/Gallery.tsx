import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const demoWorks = [
  { title: 'Bar Mitzvah Song', image: '/assets/mike.jpg', description: 'A special recording for a Bar Mitzvah.', audio: '/assets/bar-mitzvah.mp3' },
  { title: 'Business Jingle', image: '/assets/music.jpg', description: 'Catchy jingle for a business.', video: '/assets/jingle.mp4' },
  { title: 'Narration', image: '/assets/mixer.jpg', description: 'Professional narration for a podcast.' },
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
                {work.audio && (
                  <audio controls src={work.audio} style={{ width: '100%', marginTop: '8px' }} />
                )}
                {work.video && (
                  <video controls src={work.video} style={{ width: '100%', marginTop: '8px' }} />
                )}
              </CardContent>
            </Card>
        ))}
      </Grid>
    </Container>
  );
}