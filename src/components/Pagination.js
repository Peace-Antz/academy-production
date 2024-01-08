import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { iconButtonClasses } from '@mui/joy/IconButton';

export default function Pagination() {
  return React.createElement(
    'div',
    null,
    React.createElement(Box, {
      className: 'Pagination-mobile',
      sx: {
        display: { xs: 'flex', md: 'none' },
        alignItems: 'center',
      },
    },
    React.createElement(IconButton, {
      'aria-label': 'previous page',
      variant: 'outlined',
      color: 'neutral',
      size: 'sm',
    },
    React.createElement('i', { 'data-feather': 'arrow-left' })),
    React.createElement(Typography, { level: 'body-sm', mx: 'auto' }, 'Page 1 of 10'),
    React.createElement(IconButton, {
      'aria-label': 'next page',
      variant: 'outlined',
      color: 'neutral',
      size: 'sm',
    },
    React.createElement('i', { 'data-feather': 'arrow-right' }))
    ),
    React.createElement(Box, {
      className: 'Pagination-laptopUp',
      sx: {
        pt: 0.5,
        gap: 1,
        [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
        display: {
          xs: 'none',
          md: 'flex',
        },
      },
    },
    React.createElement(Button, {
      size: 'sm',
      variant: 'plain',
      color: 'neutral',
      startDecorator: React.createElement('i', { 'data-feather': 'arrow-left' }),
    }, 'Previous'),
    React.createElement(Box, { sx: { flex: 1 } }),
    ['1', '2', '3', '…', '8', '9', '10'].map((page) => (
      React.createElement(IconButton, {
        key: page,
        size: 'sm',
        variant: Number(page) ? 'outlined' : 'plain',
        color: 'neutral',
      }, page)
    )),
    React.createElement(Box, { sx: { flex: 1 } }),
    React.createElement(Button, {
      size: 'sm',
      variant: 'plain',
      color: 'neutral',
      endDecorator: React.createElement('i', { 'data-feather': 'arrow-right' }),
    }, 'Next')
    )
  );
}
