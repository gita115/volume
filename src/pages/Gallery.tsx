import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardMedia, CardContent, Dialog, DialogContent, IconButton, Fade } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CloseIcon from '@mui/icons-material/Close';

const demoWorks = [
  { title: 'שיר בר מצווה', image: '/mike.jpg', description: 'הקלטה מיוחדת לבר מצווה.', audio: '/assets/demo-audio.mp3' },
  { title: 'ג\'ינגל עסקי', image: '/mixer.jpg', description: 'ג\'ינגל קליט לעסק.', video: '/assets/demo-video.mp4' },
  { title: 'הקלטת קריינות', image: '/music.jpg', description: 'קריינות מקצועית לפודקאסט.' },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const handleOpen = (work: any) => {
    setSelected(work);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Typography variant="h4" gutterBottom color="secondary">
        גלריה
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
        {demoWorks.map((work, idx) => (
          <Fade in={true} timeout={700 + idx * 300} key={idx}>
            <Card sx={{
              width: 300,
              position: 'relative',
              boxShadow: 5,
              border: '2px solid #bfc2c7',
              background: 'rgba(255,255,255,0.96)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.07) rotate(-2deg)',
                boxShadow: 12,
                borderColor: '#ed6ea0',
              },
            }}>
              <CardMedia component="img" image={work.image} alt={work.title} height="180" />
              <IconButton
                color="secondary"
                sx={{ position: 'absolute', top: 10, right: 10, bgcolor: 'rgba(255,255,255,0.7)' }}
                onClick={() => handleOpen(work)}
              >
                <ZoomInIcon />
              </IconButton>
              <CardContent>
                <Typography variant="h6">{work.title}</Typography>
                <Typography variant="body2">{work.description}</Typography>
              </CardContent>
            </Card>
          </Fade>
        ))}
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', top: 8, left: 8, zIndex: 1 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          {selected?.image && (
            <img src={selected.image} alt={selected.title} style={{ width: '100%', borderRadius: 12 }} />
          )}
          {selected?.audio && (
            <Box sx={{ mt: 2 }}>
              <audio controls src={selected.audio} style={{ width: '100%' }} />
            </Box>
          )}
          {selected?.video && (
            <Box sx={{ mt: 2 }}>
              <video controls src={selected.video} style={{ width: '100%' }} />
            </Box>
          )}
          <Typography variant="h6" sx={{ mt: 2 }}>{selected?.title}</Typography>
          <Typography variant="body2">{selected?.description}</Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
}