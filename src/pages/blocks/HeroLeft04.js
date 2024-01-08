import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import TwoSidedLayout from '../../components/TwoSidedLayout';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { typographyClasses } from '@mui/joy/Typography';
import Container from '@mui/joy/Container';

export default function HeroLeft04() {
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
      <Chip size="lg" variant="outlined" color="neutral">
      ☮️"Be kind. Be relentless."🐜
      </Chip>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        This is the Peace Antz Mantra
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        This motto encompasses the cultural movement of Peace Antz. As students, we must have grit to keep moving forward and compassion to work together effectively💚
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          my: 2,
          flexWrap: 'wrap',
          '& > *': { flex: 'auto' },
        }}
      >
        <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />} component={RouterLink} to="/courses">
          Enroll
        </Button>
        <Link href="https://youtu.be/nJVqzi37H7g?si=FODHRVS9WcGIBPAU" target="_blank" underline="none">
        <Button
          size="lg"
          variant="outlined"
          color="neutral"
          startDecorator={<PlayCircleOutlineIcon />}
        >
          Watch Video
        </Button>
        </Link>
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