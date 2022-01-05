import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['Arial'].join(','),
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
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
});
