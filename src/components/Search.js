import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

export default function Search() {
  return React.createElement(
    Stack,
    {
      spacing: 1.5,
      direction: 'row',
    },
    React.createElement(
      FormControl,
      { sx: { flex: 1 } },
      React.createElement(Input, {
        placeholder: 'Search',
        startDecorator: React.createElement('i', { 'data-feather': 'search' }),
        'aria-label': 'Search',
      })
    ),
    React.createElement(
      Box,
      { sx: { display: { xs: 'none', sm: 'block' } } },
      React.createElement(Button, {
        variant: 'outlined',
        color: 'neutral',
      }, 'Clear')
    ),
    React.createElement(
      Box,
      { sx: { display: { xs: 'none', sm: 'block' } } },
      React.createElement(Button, {
        variant: 'solid',
        color: 'primary',
      }, 'Search')
    )
  );
}
