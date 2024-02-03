import { extendTheme } from '@mui/joy/styles';
import { inputClasses } from '@mui/joy/Input';

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        bg: {
          main: '#f5f5f5', // Example background color
          light: '#ffffff', // Lighter shade
          dark: '#e0e0e0', // Darker shade
        },
        primary: {
          50: '#F2F7FF',
          100: '#DCEBFE',
          200: '#BDDAFE',
          300: '#91C3FC',
          400: '#60A5FA',
          500: '#3479E8',
          600: '#2362EA',
          700: '#1D4FD7',
          800: '#1D3FAE',
          900: '#1E3B8A',
          solidBg: 'var(--joy-palette-primary-600)',
          solidHoverBg: 'var(--joy-palette-primary-500)',
          solidActiveBg: 'var(--joy-palette-primary-400)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#1D223F',
          100: '#0A318C',
          200: '#1347CC',
          300: '#1055EA',
          400: '#357AEA',
          500: '#2E88F6',
          600: '#50A1FF',
          700: '#7AB7FF',
          800: '#DCEBFE',
          900: '#F0F6FF',
          solidBg: 'var(--joy-palette-primary-700)',
          solidColor: 'var(--joy-palette-common-black)',
          solidHoverBg: 'var(--joy-palette-primary-600)',
          solidActiveBg: 'var(--joy-palette-primary-400)',
        },
        background: {
          body: 'var(--joy-palette-common-black)',
          surface: 'var(--joy-palette-neutral-900)',
        },
      },
    },
  },
  fontFamily: {
    display: "'Inter', var(--joy-fontFamily-fallback)",
    body: "'Inter', var(--joy-fontFamily-fallback)",
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: function({ ownerState, theme }) {
          var _a;
          return (Object.assign({}, (ownerState.variant === 'outlined' && {
            ['&:not(.' + inputClasses.focused + '):hover::before']: {
              boxShadow: 'inset 0 0 0 2px ' + (((_a = theme.vars.palette) === null || _a === void 0 ? void 0 : _a[ownerState.color]) || '').outlinedBorder,
            },
          })));
        },
        input: {
          caretColor: 'var(--Input-focusedHighlight)',
        },
      },
    },
  },
});
