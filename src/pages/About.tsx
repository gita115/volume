import { Container, Typography, Box } from '@mui/material';

export default function About() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom color="secondary">
        על אולפן ווליום
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1">
          אולפן ווליום הוקם מתוך אהבה אמיתית למוזיקה, הקלטה ויצירתיות.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          אנו מלווים כל לקוח במסע אישי, ומבטיחים תוצאה מקצועית, מרגשת ומותאמת אישית לצרכיו.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          הצוות שלנו כולל מוזיקאים, טכנאים ויוצרים – כולם כאן בשבילך!
        </Typography>
      </Box>
      {/* אפשר להוסיף תמונה או אייקון */}
      <img src="/assets/studio.jpg" alt="אולפן" style={{ width: 300, borderRadius: 16 }} />
    </Container>
  );
}