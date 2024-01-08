import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { StyledEngineProvider } from '@mui/joy/styles';
import { Polygon } from "@thirdweb-dev/chains";
import process from 'process';
import { Buffer } from 'buffer';

window.Buffer = Buffer;
window.process = process;

const activeChain = Polygon;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
