import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Star from '@mui/icons-material/Star';
import TwoSidedLayout from '../../components/TwoSidedLayout';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { typographyClasses } from '@mui/joy/Typography';
import Container from '@mui/joy/Container';
import { Avatar } from '@mui/joy';

export default function HeroLeft08() {
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
        <Avatar src="https://opolis.co/wp-content/uploads/2021/04/transparent-512x512-1-300x300.png" size="lg"/>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Are you earning in Web 3.0?
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
      With <b>Opolis</b>, independent workers maintain freedom and flexibility, while replicating the safety and security of a traditional W2 job.
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
        <Link href="https://opolis.co/" target='_blank'>
        <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
          Learn More
        </Button>
        </Link>
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
            textAlign: 'center',
            '& > *': {
              alignItems: 'initial',
            },
          },
        })}
      >
        <div>
          <Typography fontSize="xl4" fontWeight="lg">
            Check our their Podcast!
          </Typography>
          <Typography textColor="text.secondary">
            Sit back and relax to one of their <Link href='https://opolis.co/resources/podcast/' target='_blank'>podcasts</Link> to learn more! If you are interested, you can also help the developer by clicking on this <Link href='https://Opolis.referralrock.com/l/1SHERAJRAGO24/' target='_blank'>referral link</Link> ❤️
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
      </Box>
      </Container>
  );
}