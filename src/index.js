import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { StyledEngineProvider } from '@mui/joy/styles';
import { Polygon } from "@thirdweb-dev/chains"; //Also in CourseCard.js & HeaderSection.js (update both when adding more chains)
import process from 'process';
import { Buffer } from 'buffer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/material/CssBaseline';

window.Buffer = Buffer;
window.process = process;

const activeChain = Polygon; //Also in CourseCard.js & HeaderSection.js (update both when adding more chains)

const materialTheme = materialExtendTheme();

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            borderWidth: 1,
          }
        }
      }
    }
  },
  palette: {
    // Assuming you want to add a custom background color property
    bg: {
      main: '#f5f5f5', // Example background color
      light: '#ffffff', // Lighter shade
      dark: '#e0e0e0', // Darker shade
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <CssBaseline enableColorScheme />
        <App />
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
    </ThirdwebProvider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
