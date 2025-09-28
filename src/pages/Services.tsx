import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const services = [
  "Bar/Bat Mitzvah Song Recording",
  "Business Jingle Creation",
  "Narration Recording",
  "Mixing and Mastering",
  "Group Recordings",
  "Mashup Creation",
];

export default function Services() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom color="secondary">
        Our Services
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