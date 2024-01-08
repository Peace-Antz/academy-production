import * as React from 'react';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../../components/TwoSidedLayout';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { typographyClasses } from '@mui/joy/Typography';
import Container from '@mui/joy/Container';

export default function HeroLeft03() {
  return (
    <Container
      sx={(theme) => ({
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        //flexDirection: reversed ? 'column-reverse' : 'column',
        alignItems: 'center',
        py: 10,
        gap: 4,
        [theme.breakpoints.up('834')]: {
          flexDirection: 'row',
          gap: 6,
        },
        [theme.breakpoints.up('1199')]: {
          gap: 12,
        },
      })}
    >
    <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          maxWidth: '100%',
          width: '100%',
          textAlign: 'center',
          flexShrink: 999,
          [theme.breakpoints.up('834')]: {
            minWidth: 420,
            alignItems: 'center',
            textAlign: 'center',
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: 'balance',
          },
        })}
      >
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        Want to Create your very own Course?
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Anyone can make a Course!
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        All you need is a Syllabus, planned start time and a few pictures. Check out the Resources page to see a step-by-step guide!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          my: 2,
          '& > *': { flex: 'auto' },
        }}
      >
        <Link href="https://www.bing.com/chat" target="_blank" underline="none">
          <Button size="lg" variant="outlined" color="neutral">
            Try ChatGPT
          </Button>
        </Link>
        <Button 
          size="lg" 
          component={RouterLink}
          to="/resources"
          endDecorator={<ArrowForward fontSize="xl" />}>
          See Guide
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          textAlign: 'left',
          '& > *': {
            flexShrink: 0,
          },
        }}
      >
        <AvatarGroup size="lg">
        <Avatar src="https://github.com/Peace-Antz/academyv2/blob/d438d9694bbcb0cdfe0a3a6d9423f456229b3cb4/src/assets/images/aiant.png?raw=true" alt="ai" />
        </AvatarGroup>
        <Typography textColor="text.secondary">
          Use your favorite <b>AI</b> <br />
          as a teacher's assistant.
        </Typography>
      </Box>

      <Typography
        level="body-xs"
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        ☮️"Be kind. Be relentless."🐜
      </Typography>
    </Box>
    </Container>
  );
}