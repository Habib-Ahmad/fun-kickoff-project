import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['Roboto, Arial'].join(','),

    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#000',
      textAlign: 'center',
    },

    h2: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: '#000',
      textAlign: 'center',
    },

    subtitle1: {
      fontWeight: 600,
      fontSize: '0.875rem',
    },
  },

  palette: {
    primary: { main: '#f14140', contrastText: '#fff' },
    secondary: { main: '#000' },
  },

  shape: {
    borderRadius: 5,
  },

  spacing: 6,

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#f14140',
          boxShadow: 'none',
          width: 160,
          height: 56,
          fontSize: '.8rem',
          textTransform: 'uppercase',
          fontWeight: 500,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: '1px solid #00000026',
          height: 48,
        },
        notchedOutline: {
          display: 'none',
        },
        multiline: {
          height: 140,
          alignItems: 'flex-start',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#000',
          fontSize: 14,
          fontWeight: '600',
          textTransform: 'uppercase',
        },
      },
    },
  },
});
