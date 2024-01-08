/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../../components/TwoSidedLayout';
import Star from '@mui/icons-material/Star';
import Box from '@mui/joy/Box';
import { Link as RouterLink } from 'react-router-dom';


export default function HeroLeft09() {
  return (
    <TwoSidedLayout>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Create, Sponsor or Enroll in a Course Today!
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Have suggestions? Let us know what features or improvements you would like to see.
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
        <Button size="lg" variant="outlined" color="neutral" disabled>
          Suggestions
        </Button>
        <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />} component={RouterLink} to="/courses">
          Courses
        </Button>
      </Box>
      <Box
        sx={(theme) => ({
          display: 'flex',
          columnGap: 4.5,
          rowGap: 1.5,
          textAlign: 'center',
          alignSelf: 'stretch',
          '& > *': {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            alignItems: 'center',
          },
          [theme.breakpoints.up(834)]: {
            textAlign: 'left',
            '& > *': {
              alignItems: 'initial',
            },
          },
        })}
      >
        <div>
          <Typography
            fontSize="xl4"
            fontWeight="lg"
            endDecorator={<Star fontSize="xl4" sx={{ color: 'warning.300' }} />}
          >
            4.9
          </Typography>
          <Typography textColor="text.secondary">
            On-chain reviews <b>coming soon</b>!
          </Typography>
        </div>
        <div>
          <Typography fontSize="xl4" fontWeight="lg">
            Web 3.0
          </Typography>
          <Typography textColor="text.secondary">
            Onboarding the next wave of Web3 users!
          </Typography>
        </div>
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
    </TwoSidedLayout>
  );
}