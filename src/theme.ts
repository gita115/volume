import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: { main: '#f45ea6' }, // ורוד בוהק
    secondary: { main: '#c0cad1' }, // כסוף/מטאלי
    background: { default: '#faf7fb', paper: '#fff' },
    text: { primary: '#1b1220' },
  },
  typography: {
    fontFamily: 'Heebo, Alef, Inter, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 12, padding: '10px 18px' },
      },
    },
  },
});

export const darkTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    primary: { main: '#ed6ea0' },
    secondary: { main: '#bfc2c7' },
    background: { default: '#232323', paper: '#373545' },
    text: { primary: '#f4e9f6', secondary: '#c0c0c0' },
  },
  typography: {
    fontFamily: 'Heebo, Alef, Arial, sans-serif',
    h2: {
      fontWeight: 700,
      letterSpacing: '2px',
      textShadow: '2px 2px 8px #ed6ea0',
    },
  },
});