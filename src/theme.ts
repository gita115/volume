import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: { main: '#ed6ea0' }, // ורוד
    secondary: { main: '#bfc2c7' }, // כסוף
    background: { default: '#f6f6f6', paper: '#fff0f6' },
    text: { primary: '#3c3c3c', secondary: '#857c8d' },
  },
  typography: {
    fontFamily: 'Heebo, Alef, Arial, sans-serif',
    h2: {
      fontWeight: 700,
      letterSpacing: '2px',
      textShadow: '2px 2px 6px #bfc2c7',
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