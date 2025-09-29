import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, phone: false, email: false, message: false });

  const phoneRegex = /^0\d{1,2}-?\d{7}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (fields = form) => ({
    name: !fields.name,
    phone: !phoneRegex.test(fields.phone),
    email: !emailRegex.test(fields.email),
    message: !fields.message,
  });

  const isFormValid = () => {
    const errs = validate();
    return !errs.name && !errs.phone && !errs.email && !errs.message;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);
    setErrors(validate(updatedForm));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (!errs.name && !errs.phone && !errs.email && !errs.message) {
      alert('ההודעה נשלחה בהצלחה!');
      setForm({ name: '', phone: '', email: '', message: '' });
      setErrors(validate({ name: '', phone: '', email: '', message: '' }));
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom color="secondary">
        יצירת קשר
      </Typography>
      <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit} noValidate>
        <TextField
          label="שם"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          helperText={errors.name ? 'נא להזין שם' : ''}
          fullWidth sx={{ mb: 2 }}
          required
        />
        <TextField
          label="טלפון"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          helperText={errors.phone ? 'מספר טלפון לא תקין' : ''}
          fullWidth sx={{ mb: 2 }}
          required
        />
        <TextField
          label="אימייל"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          helperText={errors.email ? 'כתובת אימייל לא תקינה' : ''}
          fullWidth sx={{ mb: 2 }}
          required
        />
        <TextField
          label="הודעה"
          name="message"
          value={form.message}
          onChange={handleChange}
          error={errors.message}
          helperText={errors.message ? 'נא להזין הודעה' : ''}
          fullWidth multiline rows={4} sx={{ mb: 2 }}
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!isFormValid()}
        >
          שלח
        </Button>
      </Box>
      <Typography variant="body2" sx={{ mt: 4 }}>
        אימייל: studio@volume.com<br />
        טלפון: 052-1234567<br />
        <a href="https://waze.com/ul?ll=32.0853,34.7818&navigate=yes" target="_blank" rel="noopener noreferrer">ניווט ב-Waze</a>
      </Typography>
    </Container>
  );
}