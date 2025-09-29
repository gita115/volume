import { useState } from 'react';
import { Container, Typography, Card, CardContent, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';

const testimonials = [
  { name: 'שירה כהן', review: 'חוויה מדהימה! צוות מקצועי ותוצאה מהממת.' },
  { name: 'יוסי לוי', review: 'הקלטנו שיר בר מצווה – כולם התרגשו!' },
  { name: 'אורית רביב', review: 'איכות סאונד מדהימה ויחס אישי.' },
];

export default function Testimonials() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const handleOpen = (review: any) => {
    setSelected(review);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Typography variant="h4" color="secondary" gutterBottom>המלצות לקוחות</Typography>
      {testimonials.map((review, idx) => (
        <Card key={idx} sx={{ my: 2, boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6">{review.name}</Typography>
            <Typography variant="body2">{review.review}</Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 1 }} onClick={() => handleOpen(review)}>קרא עוד</Button>
          </CardContent>
        </Card>
      ))}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selected?.name}</DialogTitle>
        <DialogContent>
          <Typography>{selected?.review}</Typography>
        </DialogContent>
      </Dialog>
    </Container>
  );
}