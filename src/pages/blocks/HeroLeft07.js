import * as React from 'react';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TwoSidedLayout from '../../components/TwoSidedLayout';
import { typographyClasses } from '@mui/joy/Typography';
import Container from '@mui/joy/Container';
import Box from '@mui/joy/Box'
import Link from '@mui/joy/Link';
import { Avatar } from '@mui/joy';

export default function HeroLeft07() {
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
        <Avatar src="https://app.poap.xyz/static/media/POAP.435d79bb81473ff8f5eccb4bbe2f43bc.svg" size="lg"/>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Use POAPs to take and verify attendance
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        POAPs (aka Proof of Attendance Protocol) is a great option for seeing who showed up to a class using web3 tools! We recommend manually dispersing them until we set up a more automated method.
      </Typography>
      <Card
        variant="outlined"
        color="neutral"
        orientation="horizontal"
        sx={{ gap: 2, my: 1, textAlign: 'left' }}
      >
        <AutoAwesomeIcon color="success" fontSize="xl3" />
        <div>
          <Typography fontSize="xl" fontWeight="lg" sx={{ mb: 1 }}>
            Create POAPs for your Course
          </Typography>
          <Typography level="body-sm">
            All you need is a picture, description <br />
            and some links to make your own today!
          </Typography>
        </div>
      </Card>
      <Link href= "https://accounts.drops.poap.xyz/" target="_blank">
      <Button size="lg">Create a POAP</Button>
      </Link>
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