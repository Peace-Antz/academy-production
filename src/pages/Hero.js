import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';

import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import IconButton from '@mui/joy/IconButton';

// Icons import
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

import framesxTheme from './theme';
import HeroLeft01 from './blocks/HeroLeft01';
import HeroLeft02 from './blocks/HeroLeft02';
import HeroLeft03 from './blocks/HeroLeft03';
import HeroLeft04 from './blocks/HeroLeft04';
import HeroLeft05 from './blocks/HeroLeft05';
import HeroLeft06 from './blocks/HeroLeft06';
import HeroLeft07 from './blocks/HeroLeft07';
import HeroLeft08 from './blocks/HeroLeft08';
import HeroLeft09 from './blocks/HeroLeft09';
import HeroLeft10 from './blocks/HeroLeft10';

export default function TeamExample() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          bgcolor: 'primary.main',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          '& > div': {
            scrollSnapAlign: 'start',
          },
        }}
      >
        <HeroLeft01 />
        <HeroLeft02 />
        <HeroLeft03 />
        <HeroLeft04 />
        <HeroLeft05 />
        <HeroLeft06 />
        <HeroLeft07 />
        <HeroLeft08 />
        <HeroLeft09 />
        {/* <HeroLeft10 /> */}
      </Box>
    </CssVarsProvider>
  );
}