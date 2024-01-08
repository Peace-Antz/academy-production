import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';

export default function PeaceAntzLogo({ sx, ...props }) {
  return React.createElement(
    AspectRatio,
    {
      ratio: '1',
      variant: 'plain',
      ...props,
      sx: [
        {
          width: 36,
          borderRadius: 'sm',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ],
    },
    React.createElement(
      'div',
      null,
      React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 1920 1080',
        fill: 'none',
      }, React.createElement('g', null, 
        React.createElement('path', {
          className: "st0",
        d: 'M780,633.2c0-62.4,0-124.8,0-187.2c120,0,240,0,360,0c0,62.4,0,124.8,0,187.2C1020,633.2,900,633.2,780,633.2z M857.19,598.4c35.15,0,63.67-28.44,63.7-63.54c0.03-35.15-28.5-63.67-63.7-63.66c-35.16,0.01-63.68,28.45-63.72,63.53 C793.44,569.86,822,598.4,857.19,598.4z M1007.37,544.7c-0.18,0.33-0.26,0.51-0.37,0.66c-2.69,3.72-4.67,7.81-6.32,12.06 c-2.73,7.03-4.14,14.27-2.99,21.82c1.43,9.4,6.66,15.64,15.9,18.25c5.92,1.67,11.94,1.62,17.95,0.54 c5.19-0.93,9.99-2.85,14.22-6.03c4.78-3.58,7.71-8.34,8.87-14.19c0.49-2.45-0.31-4.49-2.37-5.82c-1.35-0.88-2.88-1.6-4.43-2.03 c-4.94-1.37-9.98-1.81-15.09-1.2c-2.24,0.27-4.4,0.86-6.29,2.15c-1.61,1.09-2.28,2.56-1.99,4.53c0.41,2.7,1.86,4.71,3.94,6.34 c-2.82,0.53-5.26-0.26-7.09-2.49c-0.8-0.98-1.47-2.09-2.05-3.22c-1.18-2.33-1.86-4.85-2.18-7.43c-1.46-11.89,0.41-23.23,5.73-33.98 c0.56-1.14,0.58-1.14,1.82-0.79c3.43,0.97,6.43,2.81,9.37,4.74c0.72,0.47,1.05,1.21,1.07,2.05c0.02,0.71-0.01,1.44-0.13,2.14 c-0.24,1.46-0.58,2.9-0.82,4.35c-0.35,2.06,0.19,2.88,2.22,3.34c1.87,0.42,3.75,0.79,5.64,1.16c0.29,0.06,0.6,0.01,0.76,0.01 c0.82-4.58,1.63-9.16,2.43-13.74c0.1-0.57,0.07-1.18,0.16-1.78c0.51-3.42,2.19-5.47,5.58-6.35c2.34-0.61,4.76-0.68,7.12,0.02 c3.24,0.96,4.69,3.87,4.59,7.21c-0.12,3.97-0.32,7.94-0.38,11.92c-0.02,1.41-0.26,2.8,0.32,4.16c0.66,1.53,1.73,2.46,3.31,2.96 c1.93,0.61,3.94,0.92,5.94,1.09c2.45,0.21,4.99-0.21,7.28-1.19c3.47-1.47,5.24-4.24,5.5-7.88c0.22-3.14,0.16-6.3,0.1-9.44 c-0.02-1.07,0.23-2.11,0.61-3.14c0.88-2.38,2.66-3.89,5.17-4.37c1.9-0.36,3.85-0.23,5.73,0.41c1.87,0.65,3.01,2.1,3.23,4.07 c0.19,1.64,0.16,3.3,0.16,4.95c0,4.72,0.12,9.44-0.09,14.16c-0.03,0.78,0.31,1.48,1.02,1.86c2.18,1.15,4.53,1.85,6.82,2.91 c0.39,0.18,0.76,0.46,1.15,0.66c1.23,0.64,1.97,1.66,2.11,3.06c0.14,1.43-0.35,2.71-1.19,3.76c-1.56,1.95-3.52,3.42-5.67,4.61 c-4.45,2.45-9.29,3.78-14.26,4.26c-1.55,0.15-3.12,0.04-4.65-0.23c-1.35-0.23-2.74-0.61-3.98-1.24c-2.03-1.03-3.55-2.63-4.25-4.88 c-0.58-1.87-0.74-3.83-0.84-5.77c-0.07-1.42-0.19-2.84-0.29-4.25c-0.07-1.01-0.27-1.96-0.74-2.88c-0.88-1.73-2.11-2.89-3.9-3.34 c-4.72-1.17-9.49-1.91-14.28-2.46c-0.99-0.11-1.92-0.38-2.86-0.68c-0.3-0.1-0.56-0.3-0.82-0.48c-0.12-0.08-0.21-0.2-0.32-0.29 c-0.05-0.05-0.11-0.08-0.16-0.12c-0.1-0.08-0.21-0.14-0.31-0.22c-0.07-0.05-0.13-0.1-0.2-0.15c-0.08-0.06-0.16-0.12-0.24-0.17 c-0.02-0.02-0.05-0.03-0.07-0.05c-0.11-0.08-0.21-0.17-0.32-0.25c-0.07-0.05-0.15-0.1-0.22-0.15c-0.09-0.06-0.17-0.13-0.26-0.19 c-0.06-0.04-0.12-0.08-0.18-0.12c-0.08-0.06-0.15-0.12-0.23-0.17c-0.08-0.06-0.15-0.11-0.23-0.17c-0.06-0.04-0.11-0.08-0.17-0.12 c-0.11-0.07-0.21-0.15-0.32-0.22c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04 c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.03-0.03-0.05-0.04',
        fill: '#007FFF',
      }))
    )
  ));
}