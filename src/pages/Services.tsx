import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const services = [
  "הקלטת שירים לבר/בת מצווה",
  "הפקת ג'ינגלים עסקיים",
  "הקלטת קריינות",
  "מיקס ומאסטרינג",
  "הקלטות קבוצתיות",
  "יצירת מחרוזות מוזיקליות",
];

export default function Services() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom color="secondary">
        השירותים שלנו
      </Typography>
      <List>
        {services.map((service, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={service} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}