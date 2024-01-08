import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Star from '@mui/icons-material/Star';
import TwoSidedLayout from '../../components/TwoSidedLayout';
import { typographyClasses } from '@mui/joy/Typography';
import Container from '@mui/joy/Container';

export default function HeroLeft06() {
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
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Review your Teacher if you take their course
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        This allows the best teachers to be highlighted and prevents bad teachers from causing too much damage.
      </Typography>
      <Typography
        fontSize="xl"
        fontWeight="md"
        endDecorator={
          <React.Fragment>
            <Star sx={{ color: 'warning.300' }} />
            <Star sx={{ color: 'warning.300' }} />
            <Star sx={{ color: 'warning.300' }} />
            <Star sx={{ color: 'warning.300' }} />
            <Star sx={{ color: 'warning.300' }} />
          </React.Fragment>
        }
        sx={{ mt: 3 }}
      >
        5.0
      </Typography>
      <Button size="lg" color="info" variant= "contained" disabled>Reviews Coming Soon</Button>

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