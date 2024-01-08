import React from 'react';
import Typography from '@mui/joy/Typography';
import Star from '@mui/icons-material/Star';

export default function Rating() {
  return React.createElement(
    Typography,
    {
      fontWeight: 'md',
      startDecorator: React.createElement(
        React.Fragment,
        null,
        React.createElement(Star, { sx: { color: 'warning.300' } }),
        React.createElement(Star, { sx: { color: 'warning.300' } }),
        React.createElement(Star, { sx: { color: 'warning.300' } }),
        React.createElement(Star, { sx: { color: 'warning.300' } }),
        React.createElement(Star, { sx: { color: 'warning.300' } })
      ),
    },
    '4.9'
  );
}
