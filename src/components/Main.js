import React from 'react';
import Box from '@mui/joy/Box';

export default function Main({ children }) {
  return React.createElement(
    Box,
    {
      component: 'main',
      className: 'MainContent',
      sx: {
        flex: 1,
      },
    },
    children
  );
}
