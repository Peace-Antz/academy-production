import React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Badge, { badgeClasses } from '@mui/joy/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import MenuList from '@mui/material/MenuList';
import IconButton from '@mui/joy/IconButton';
import Sheet from '@mui/joy/Sheet';
import { Popper } from '@mui/base/Popper';
import { createPopper } from '@popperjs/core';
import Box from '@mui/material/Box';
import { Fade } from '@mui/material';
import Popover from '@mui/material/Popover';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import '@fontsource/inter';
import Modal from '@mui/material/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Typography from '@mui/material/Typography';
import MuiLogo from './PeaceAntzLogo';
import { openSidebar, closeSidebar } from '../utils';
import ColorSchemeToggle from './ColorSchemeToggle';
import { Link, useLocation } from 'react-router-dom';
import PeaceAntzLogo from '../assets/images/peaceantz square small.png';
import feather from 'feather-icons';
import { TryRounded } from '@mui/icons-material';
import { ConnectWallet } from "@thirdweb-dev/react";
import { styled } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme?.palette?.primary?.main || 'defaultColor'};
  transition: ${theme?.transitions?.create(['background-color', 'transform'], {
    duration: theme?.transitions?.duration?.standard || 'defaultDuration',
  })};
  &:hover {
    background-color: ${theme?.palette?.secondary?.main || 'defaultColor'};
    transform: scale(1.3);
  }
  `}
`;



export default function FirstSidebar() {

  const location = useLocation();
  const [index, setIndex] = React.useState(0);
  const [layout, setLayout] = React.useState(undefined);

  const handleClick = () => {
    window.open('https://chat.openai.com/g/g-YZxdmcTkm-syllabus-builder', '_blank');
  };

  
  React.useEffect(() => {
    switch (location.pathname) {
      case '/hero':
        setIndex(0);
        break;
      case '/courses':
        setIndex(1);
        break;
      case '/rank':
        setIndex(2);
        break;
      case '/resources':
          setIndex(3);
          break;
      case '/report':
          setIndex(4);
          break;           
      case '/review':
        setIndex(5);
        break;
      default:
        setIndex(0); // Default to 0 if the pathname does not match any known routes
    }
    feather.replace();
  }, [location.pathname]); // Run effect when location.pathname changes

  return (
    <Sheet
      className="FirstSidebar"
      color="primary"
      invertedColors
      sx={{
        position: {
          xs: 'fixed',
          md: 'sticky',
        },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--FirstSidebar-width)',
        top: 0,
        p: 1.5,
        py: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={{
          ':root': {
            '--FirstSidebar-width': '68px',
          },
        }}
      />
      <IconButton
        variant="soft"
        color="neutral"
        onClick={() => closeSidebar()}
        sx={{ display: { md: 'none' }, mt: -2, borderRadius: '50%' }}
      >
        <i data-feather="arrow-left" />
      </IconButton>
      <Avatar src={PeaceAntzLogo}  />
      <List sx={{ '--ListItem-radius': '8px', '--List-gap': '12px' }}>
      <ListItem>
          <ListItemButton selected={index === 0} onClick={() => setIndex(0)} component={Link} to="/hero">
            <i data-feather="home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton selected={index === 1} onClick={() => setIndex(1)} component={Link} to="/courses">
            <i data-feather="layers" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton selected={index === 2} onClick={() => setIndex(2)} component={Link} to="/rank" >
            <i data-feather="bar-chart-2" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton selected={index === 3} onClick={() => setIndex(3)} component={Link} to="/resources">
            <i data-feather="check-square" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton selected={index === 4} onClick={() => setIndex(4)} component={Link} to="/report">
            <i data-feather="flag" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton selected={index === 5} onClick={() => setIndex(5)} component={Link} to="/review">
            <i data-feather="users" />
          </ListItemButton>
        </ListItem>
      </List>
      <List
        sx={{
          mt: 'auto',
          flexGrow: 0,
          '--ListItem-radius': '8px',
          '--List-gap': '8px',
        }}
      >
        <ColorSchemeToggle sx={{ display: {  md: 'inline-flex' } }} />
        {/* <ListItem>
          <ListItemButton>
            <i data-feather="life-buoy" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <i data-feather="settings" />
          </ListItemButton>
        </ListItem> */}
        <IconButton
          aria-controls={'composition-menu'}
          aria-haspopup="true"
          variant="soft"
          color="inherit"
          onClick={handleClick}
         >
          <StyledAvatar alt="AI Ant" src="https://github.com/Peace-Antz/academyv2/blob/d438d9694bbcb0cdfe0a3a6d9423f456229b3cb4/src/assets/images/aiant.png?raw=true" />
      </IconButton>
      </List>
      <IconButton
        aria-controls={'composition-menu'}
        aria-haspopup="true"
        variant="soft"
        color="inherit"
        onClick={() => {
          setLayout('center');
        }}
         >
        <Badge
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeInset="14%"
          color="success"
        >
          <StyledAvatar variant="soft" src="/static/images/avatar/3.jpg"
                  onClick={() => {
                    setLayout('center');
                  }}
          />
        </Badge>
      </IconButton>
    </Sheet>
  );
}