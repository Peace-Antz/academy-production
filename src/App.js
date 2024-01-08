import "./styles/Home.css";
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';

import useScript from './useScript';
import FirstSidebar from './components/FirstSidebar';
import Header from './components/Header';

// Import your pages
import Courses from './pages/Courses';
import Hero from './pages/Hero';
import Review from './pages/Review';
import Rank from './pages/Rank';
import Resources from './pages/Resources';
import Report from './pages/Report';
import feather from 'feather-icons';
import { Reviews } from "@mui/icons-material";

const useEnhancedEffect = typeof window !== 'undefined' ? useEffect : useEffect;

function App() {
  const status = useScript(`https://unpkg.com/feather-icons`);
  const [layout, setLayout] = React.useState(undefined);
  
  useEnhancedEffect(() => {
    if (typeof feather !== 'undefined') feather.replace();
  }, [status]);

  useEffect(() => {
    console.log('App.js has re-rendered!');
}, []);

  return (
    <CssVarsProvider disableTransitionOnChange>   
      <Router>
        <GlobalStyles styles={(theme) => ({'[data-feather], .feather': {
          color: `var(--Icon-color, ${theme.vars.palette.text.icon})`,
          margin: 'var(--Icon-margin)',
          fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize.xl})`,
          width: '1em',
          height: '1em',
        }})}/>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
          <Header />
          <FirstSidebar />
          <Routes>
            <Route path="/courses" element={<Courses />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/rank" element={<Rank />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/report" element={<Report />} />
            <Route path="/review" element={<Review />} />
            {/* Default route */}
            <Route path="/" element={<Hero />} />
          </Routes>
        </Box>
      </Router>
    </CssVarsProvider>
  );
}

export default App;
