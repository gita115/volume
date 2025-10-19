// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, Box } from '@mui/material';

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
//   const [errors, setErrors] = useState({ name: false, phone: false, email: false, message: false });

//   const phoneRegex = /^0\d{1,2}-?\d{7}$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const validate = (fields = form) => ({
//     name: !fields.name,
//     phone: !phoneRegex.test(fields.phone),
//     email: !emailRegex.test(fields.email),
//     message: !fields.message,
//   });

//   const isFormValid = () => {
//     const errs = validate();
//     return !errs.name && !errs.phone && !errs.email && !errs.message;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     const updatedForm = { ...form, [name]: value };
//     setForm(updatedForm);
//     setErrors(validate(updatedForm));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   const errs = validate();
//   setErrors(errs);
//   if (!errs.name && !errs.phone && !errs.email && !errs.message) {
//     try {
//       const response = await fetch('http://localhost:3001/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });
//       const data = await response.json();
//       if (data.success) {
//         alert('ההודעה נשלחה בהצלחה!');
//         setForm({ name: '', phone: '', email: '', message: '' });
//       } else {
//         alert('שליחה נכשלה, נסו שוב מאוחר יותר');
//         alert(JSON.stringify(form));
//       }
//     } catch {
//       alert('שליחה נכשלה, נסו שוב מאוחר יותר');
//               alert(JSON.stringify(form));

//     }
//   }
// };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom color="secondary">
//         יצירת קשר
//       </Typography>
//       <Box component="form" sx={{ mt: 2 }} onSubmit={handleSubmit} noValidate>
//         <TextField
//           label="שם"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           error={errors.name}
//           helperText={errors.name ? 'נא להזין שם' : ''}
//           fullWidth sx={{ mb: 2 }}
//           required
//         />
//         <TextField
//           label="טלפון"
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           error={errors.phone}
//           helperText={errors.phone ? 'מספר טלפון לא תקין' : ''}
//           fullWidth sx={{ mb: 2 }}
//           required
//         />
//         <TextField
//           label="אימייל"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           error={errors.email}
//           helperText={errors.email ? 'כתובת אימייל לא תקינה' : ''}
//           fullWidth sx={{ mb: 2 }}
//           required
//         />
//         <TextField
//           label="הודעה"
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           error={errors.message}
//           helperText={errors.message ? 'נא להזין הודעה' : ''}
//           fullWidth multiline rows={4} sx={{ mb: 2 }}
//           required
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           type="submit"
//           disabled={!isFormValid()}
//         >
//           שלח
//         </Button>
//       </Box>
//       <Typography variant="body2" sx={{ mt: 4 }}>
//         אימייל: 11585g@gmail.com<br />
//         טלפון: 052-1234567<br />
//         <a href="https://waze.com/ul?ll=32.0853,34.7818&navigate=yes" target="_blank" rel="noopener noreferrer">ניווט ב-Waze</a>
//       </Typography>
//     </Container>
//   );
// }







import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

type FormState = { name: string; phone: string; email: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, phone: false, email: false, message: false });
  const [loading, setLoading] = useState(false);

  const phoneRegex = /^0\d{1,2}-?\d{7}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (fields = form) => ({
    name: !fields.name,
    phone: !phoneRegex.test(fields.phone),
    email: !emailRegex.test(fields.email),
    message: !fields.message,
  });

  const isFormValid = () => {
    const v = validate();
    return !v.name && !v.phone && !v.email && !v.message;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    setErrors(validate(updated));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (!v.name && !v.phone && !v.email && !v.message) {
      setLoading(true);
      try {
        const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        const res = await fetch(`${apiBase}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (res.ok && data.success) {
          alert('ההודעה נשלחה בהצלחה!');
          setForm({ name: '', phone: '', email: '', message: '' });
        } else {
          console.error('Send failed', data);
          alert('שליחה נכשלה - נסי מאוחר יותר');
        }
      } catch (err) {
        console.error(err);
        alert('שגיאה ברשת - נסי שנית');
      } finally {
        setLoading(false);
      }
    } else {
      alert('נא למלא את כל השדות כראוי');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom color="secondary">יצירת קשר</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }} noValidate>
        <TextField label="שם" name="name" value={form.name} onChange={handleChange} error={errors.name} helperText={errors.name ? 'נא להזין שם' : ''} fullWidth sx={{ mb: 2 }} required />
        <TextField label="טלפון" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} helperText={errors.phone ? 'מספר טלפון לא תקין' : ''} fullWidth sx={{ mb: 2 }} required />
        <TextField label="אימייל" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} helperText={errors.email ? 'כתובת אימייל לא תקינה' : ''} fullWidth sx={{ mb: 2 }} required />
        <TextField label="הודעה" name="message" value={form.message} onChange={handleChange} error={errors.message} helperText={errors.message ? 'נא להזין הודעה' : ''} fullWidth multiline rows={4} sx={{ mb: 2 }} required />
        <Button variant="contained" color="primary" type="submit" disabled={!isFormValid() || loading}>
          {loading ? 'שולח...' : 'שלח'}
        </Button>
      </Box>
      <Typography variant="body2" sx={{ mt: 4 }}>
        אימייל: studio@volume.com<br />
        טלפון: 052-1234567<br />
        <a href="https://waze.com/ul?ll=32.0853,34.7818&navigate=yes" target="_blank" rel="noopener noreferrer">ניווט ב‑Waze</a>
      </Typography>
    </Container>
  );
}