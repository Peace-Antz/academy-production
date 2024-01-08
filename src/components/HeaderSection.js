import React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { ConnectWallet } from "@thirdweb-dev/react";

export default function HeaderSection({createCourseCall}) {
  return React.createElement(
    Stack,
    {
      direction: {
        xs: 'column',
        sm: 'row',
      },
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      //width: '100%',
      spacing: 2,
    },
    React.createElement(
      'div',
      null,
      React.createElement(
        Typography,
        {
          level: 'h1',
          fontSize: {
            xs: 'xl2',
            md: 'xl4',
          },
        },
        'Courses'
      ),
      React.createElement(
        Typography,
        {
          level: 'body-md',
          color: 'neutral',
        },
        'Enroll in a course or Sponsor one to contribute to web3 education! Want to teach a course? Create one! (Please be patient while waiting for Courses to load)'
      )
    ),
    React.createElement(
      Stack,
      {
        direction: 'row',
        spacing: 1.5,
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        //width: '100%'
      },
      React.createElement(
        Button,
        {
          variant: 'outlined',
          color: 'neutral',
        },
        'My Courses'
      ),
      React.createElement(
        Button,
        {
          variant: 'solid',
          color: 'primary',
          startDecorator: <AutoAwesomeIcon />,
          onClick: createCourseCall,
        },
        'Create Course'
      ),
      React.createElement(
        ConnectWallet,
        {
          switchToActiveChain: 'true',
        },

      )
      
    )
  );
  
}
