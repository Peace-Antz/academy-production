import React, { useState, useEffect } from 'react';
import { useColorScheme } from '@mui/joy/styles';
import { ListItem, ListItemButton } from '@mui/joy';

export default function ColorSchemeToggle({ onClick, sx, ...props }) {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ListItemButton {...props} sx={sx} disabled />;
  }

  return (
    <ListItem>
      <ListItemButton
        id="toggle-mode"
        onClick={(event) => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
          if (onClick) onClick(event);
        }}
        sx={[
          {
            '& > *:first-child': {
              display: mode === 'dark' ? 'none' : 'initial',
            },
            '& > *:last-child': {
              display: mode === 'light' ? 'none' : 'initial',
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <i data-feather="moon" />
        <i data-feather="sun" />
      </ListItemButton>
    </ListItem>
  );
}
