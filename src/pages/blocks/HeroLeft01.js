/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../../components/TwoSidedLayout';
import { Link as RouterLink } from 'react-router-dom';


export default function HeroLeft01() {
  return (
    <TwoSidedLayout>
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        Free Education: The Future of Learning
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Peace Antz Academy
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
      Dive into our innovative world of grassroots, mentorship approach to education. This is a public-goods upskilling service open to all!
      </Typography>
      <Button 
        size="lg" 
        endDecorator={<ArrowForward fontSize="xl" />} 
        component={RouterLink}
        to="/courses"
      >
        Explore Courses
      </Button>
      <Typography>
      Going down the anthill?  <Link fontWeight="lg" href= "https://discord.gg/KmZXkn5AFM" target="_blank">Join the Colony!</Link>
      </Typography>

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