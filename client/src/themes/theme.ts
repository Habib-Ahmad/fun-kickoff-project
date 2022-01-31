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
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          paddingLeft: 20,
          paddingRight: 20,
        },
        colorPrimary: {
          backgroundColor: '#fff',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        containedSizeLarge: {
          backgroundColor: '#f14140',
          boxShadow: 'none',
          width: 160,
          height: 56,
          fontSize: '.8rem',
          textTransform: 'uppercase',
          fontWeight: 500,
        },
        sizeMedium: {
          boxShadow: 'none',
          width: 120,
          height: 40,
          fontSize: '.7rem',
          fontWeight: 600,
          '&:hover': {
            boxShadow: 'none',
          },
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
