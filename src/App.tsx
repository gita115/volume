import { useState } from 'react';
import { ThemeProvider, CssBaseline, IconButton, Box } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header />
      {/* כפתור מצב לילה/יום */}
      <Box sx={{ position: 'fixed', bottom: 20, left: 20, zIndex: 2000 }}>
        <IconButton
          color="secondary"
          onClick={() => setDarkMode(!darkMode)}
          sx={{ bgcolor: 'background.paper', borderRadius: '50%' }}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
export default App;