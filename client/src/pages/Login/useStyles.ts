import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: theme.shape.borderRadius,
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(4),
    minHeight: '100%',
  },
  welcome: {
    '&.MuiTypography-root': {
      fontSize: '2rem',
      fontWeight: 700,
    },
    paddingBottom: theme.spacing(3),
    color: theme.palette.secondary.main,
    textAlign: 'center',
  },
}));

export default useStyles;
