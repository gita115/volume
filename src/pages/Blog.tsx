import { Container, Typography, Card, CardContent } from '@mui/material';

const posts = [
  { title: 'הקלטה חדשה באולפן!', content: 'השבוע הפקנו שיר מרגש לבר מצווה.' },
  { title: 'מבצעי חגים', content: 'הנחות מיוחדות על הקלטות ג\'ינגל.' },
];

export default function Blog() {
  return (
    <Container>
      <Typography variant="h4" color="secondary" gutterBottom>בלוג ועדכונים</Typography>
      {posts.map((post, idx) => (
        <Card key={idx} sx={{ my: 2, boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2">{post.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}