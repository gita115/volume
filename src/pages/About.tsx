import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom color="secondary">
        על אולפן ווליום
      </Typography>
      <Typography variant="body1">
        אולפן ווליום הוא אולפן הקלטות מקצועי המתמחה בשירים, ג'ינגלים, קריינות והפקות קול.
        עם ניסיון רב וציוד מתקדם, אנו מבטיחים תוצאה מושלמת לכל פרויקט מוזיקלי.
      </Typography>
    </Container>
  );
}