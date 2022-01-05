import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  authHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accAside: {
    '&.MuiTypography-root': {
      fontWeight: 600,
    },
  },
  accBtn: {
    '&.MuiButton-root': {
      color: theme.palette.primary.main,
      textTransform: 'capitalize',
      textDecoration: 'underline',
      justifyContent: 'flex-start',
      fontSize: '1rem',
    },
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
  },
}));

export default useStyles;
